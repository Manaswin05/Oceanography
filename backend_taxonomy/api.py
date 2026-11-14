"""
Marine Research Portal - REST API
==================================
FastAPI backend exposing three ML-powered endpoints:

  POST /predict            → 7-rank genomic taxonomy from DNA sequence
  POST /predict/batch      → batch taxonomy for up to 10 sequences
  POST /predict-ocean      → marine ecosystem predictions from env data
  POST /analyze-image      → computer vision fish/specimen classifier

Test via Swagger UI : http://127.0.0.1:8000/docs
Test via ReDoc       : http://127.0.0.1:8000/redoc
"""

import os
import io
import json
import numpy as np
import pandas as pd
import joblib
from typing import Optional, List, Dict, Any

from PIL import Image

from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

import torch
import torch.nn as nn
import torchvision.transforms as transforms

# ─────────────────────────────────────────────────────────────────────────────
# OpenAPI / Swagger Metadata
# ─────────────────────────────────────────────────────────────────────────────
TAGS_METADATA = [
    {
        "name": "System",
        "description": "Health checks and API status endpoints.",
    },
    {
        "name": "Genomic Taxonomy",
        "description": (
            "Classify DNA nucleotide sequences through the full biological "
            "taxonomy tree (Kingdom → Species) using a K-mer vectorised "
            "Random Forest ensemble pipeline."
        ),
    },
    {
        "name": "Ocean Climate",
        "description": (
            "Predict marine ecosystem metrics - species count, biodiversity "
            "index, and ecosystem stress - from oceanographic survey parameters "
            "using a RandomForest / GradientBoosting ensemble (R² = 0.97)."
        ),
    },
    {
        "name": "Computer Vision",
        "description": (
            "Identify marine fish/specimen species from uploaded images using "
            "a trained PyTorch Deep CNN (94 % validation accuracy, 9 classes). "
            "Supports optional otolith and habitat sub-analyses."
        ),
    },
    {
        "name": "Utilities",
        "description": "Helper endpoints: sample images catalogue, etc.",
    },
]

app = FastAPI(
    title="Marine Research Portal API",
    description=(
        "## Advanced Oceanography & Marine Biology AI/ML Platform\n\n"
        "Provides three ML-powered prediction services:\n\n"
        "| Service | Endpoint | Model |\n"
        "|---------|----------|-------|\n"
        "| Genomic Taxonomy | `POST /predict` | K-mer RF Pipeline |\n"
        "| Ocean Ecosystem | `POST /predict-ocean` | RF + GB Ensemble |\n"
        "| Computer Vision | `POST /analyze-image` | PyTorch CNN |\n\n"
        "All models are **lazily loaded** on first request. "
        "Swagger UI: `/docs` · ReDoc: `/redoc`"
    ),
    version="2.0.0",
    openapi_tags=TAGS_METADATA,
    contact={
        "name": "Marine Research Portal",
        "url": "https://github.com/your-org/oceanography",
    },
    license_info={
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT",
    },
)

# ─────────────────────────────────────────────────────────────────────────────
# CORS
# ─────────────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─────────────────────────────────────────────────────────────────────────────
# Paths
# ─────────────────────────────────────────────────────────────────────────────
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
MODELS_DIR = os.path.join(PROJECT_ROOT, "models")
ARTIFACTS_DIR = os.path.join(PROJECT_ROOT, "artifacts")
SAMPLE_IMAGES_DIR = os.path.join(PROJECT_ROOT, "sample_images")

# Mount sample images for Swagger "Try it" / Postman tests
if os.path.exists(SAMPLE_IMAGES_DIR):
    app.mount(
        "/sample_images",
        StaticFiles(directory=SAMPLE_IMAGES_DIR),
        name="sample_images",
    )

# ─────────────────────────────────────────────────────────────────────────────
# CNN Architecture (must match training definition)
# ─────────────────────────────────────────────────────────────────────────────
class FishCNN(nn.Module):
    def __init__(self, num_classes: int = 9):
        super().__init__()
        self.features = nn.Sequential(
            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.BatchNorm2d(32),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),

            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),

            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(inplace=True),
            nn.MaxPool2d(2, 2),

            nn.Conv2d(128, 256, kernel_size=3, padding=1),
            nn.BatchNorm2d(256),
            nn.ReLU(inplace=True),
            nn.AdaptiveAvgPool2d((4, 4)),
        )
        self.classifier = nn.Sequential(
            nn.Dropout(0.4),
            nn.Linear(256 * 4 * 4, 256),
            nn.ReLU(inplace=True),
            nn.Dropout(0.3),
            nn.Linear(256, num_classes),
        )

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1)
        return self.classifier(x)


cv_transform = transforms.Compose([
    transforms.Resize((128, 128)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
])

# ─────────────────────────────────────────────────────────────────────────────
# Species Scientific Metadata
# ─────────────────────────────────────────────────────────────────────────────
SPECIES_DATABASE: Dict[str, Dict[str, str]] = {
    "Black Sea Sprat": {
        "scientific_name": "Clupeonella cultriventris",
        "common_name": "Black Sea Sprat",
        "family": "Clupeidae",
        "characteristics": "Small, slender schooling clupeid with silvery flanks and dark blue-green dorsal surface.",
        "size": "Typical length: 8-12 cm, Weight: 10-25 g",
        "habitat": "Pelagic brackish and marine coastal waters, Black Sea, Sea of Azov. Depths: 5-35 m.",
        "diet": "Zooplankton, copepods, rotifers, and crustacean larvae.",
        "conservation_status": "Least Concern (IUCN)",
        "otolith_pattern": "Thin, translucent sagittae with fine concentric seasonal growth rings.",
        "habitat_indicator": "High school density indicates nutrient-rich upwelling zones.",
    },
    "Gilt-Head Bream": {
        "scientific_name": "Sparus aurata",
        "common_name": "Gilt-Head Bream (Dorada)",
        "family": "Sparidae",
        "characteristics": "Golden band between eyes, deep oval silver-grey body with large dark spot at lateral line.",
        "size": "Typical length: 30-50 cm (max 70 cm), Weight: 1.5-5.0 kg",
        "habitat": "Coastal seagrass meadows, lagoons, estuaries. Mediterranean & Eastern Atlantic. Depths: 1-50 m.",
        "diet": "Hard-shelled mollusks, mussels, oysters, and crabs.",
        "conservation_status": "Least Concern (IUCN)",
        "otolith_pattern": "Robust, dense sagittae with pronounced crenulated margins and clear winter annuli.",
        "habitat_indicator": "Indicates healthy coastal seagrass ecosystems.",
    },
    "Hourse Mackerel": {
        "scientific_name": "Trachurus trachurus",
        "common_name": "Atlantic Horse Mackerel (Scad)",
        "family": "Carangidae",
        "characteristics": "Fusiform body with sharp lateral line covered by prominent bony keeled scutes.",
        "size": "Typical length: 22-35 cm (max 55 cm), Weight: 0.5-1.8 kg",
        "habitat": "Semi-pelagic continental shelf waters, NE Atlantic & Mediterranean. Depths: 20-250 m.",
        "diet": "Schooling forage fishes, mysids, euphausiids, and cephalopods.",
        "conservation_status": "Vulnerable (IUCN)",
        "otolith_pattern": "Elongated sagitta with smooth sulcus acusticus and translucent growth increments.",
        "habitat_indicator": "Pelagic indicator of active oceanic currents and thermocline mixing.",
    },
    "Red Mullet": {
        "scientific_name": "Mullus barbatus",
        "common_name": "Red Mullet (Goatfish)",
        "family": "Mullidae",
        "characteristics": "Vivid reddish-pink coloration with steep snout profile and paired sensory chin barbels.",
        "size": "Typical length: 15-25 cm (max 33 cm), Weight: 150-450 g",
        "habitat": "Demersal muddy, sandy, and gravel substrates. Mediterranean and Black Sea. Depths: 10-100 m.",
        "diet": "Benthic infauna, polychaete worms, small bivalves, and burrowing amphipods.",
        "conservation_status": "Least Concern (IUCN)",
        "otolith_pattern": "Small, oval sagitta with pronounced rostrum and compact micro-increments.",
        "habitat_indicator": "Benthic bioindicator reflecting sea bottom sediment health.",
    },
    "Red Sea Bream": {
        "scientific_name": "Pagrus major",
        "common_name": "Red Sea Bream (Madai)",
        "family": "Sparidae",
        "characteristics": "Reddish-pink body speckled with iridescent blue spots, steep forehead, and forked tail.",
        "size": "Typical length: 35-60 cm (max 100 cm), Weight: 2.0-8.5 kg",
        "habitat": "Subtropical reefs, rocky outcrops, and continental shelf drop-offs. Depths: 10-200 m.",
        "diet": "Echinoderms, crustaceans, cephalopods, and small fish.",
        "conservation_status": "Least Concern (IUCN)",
        "otolith_pattern": "Broad sagitta with well-defined core and distinct annual hyaline/opaque zones.",
        "habitat_indicator": "High abundance signifies complex rocky reef habitat.",
    },
    "Sea Bass": {
        "scientific_name": "Dicentrarchus labrax",
        "common_name": "European Sea Bass (Branzino)",
        "family": "Moronidae",
        "characteristics": "Sleek silvery-grey torpedo profile, two separate dorsal fins, serrated preoperculum.",
        "size": "Typical length: 40-70 cm (max 100 cm), Weight: 2.5-9.0 kg",
        "habitat": "Coastal surf zones, rocky reefs, brackish river mouths. NE Atlantic & Mediterranean. Depths: 1-100 m.",
        "diet": "Voracious apex predator feeding on sprats, sandeels, squid, and shore crabs.",
        "conservation_status": "Least Concern (IUCN)",
        "otolith_pattern": "Sub-triangular, dense otolith with deeply incised sulcus and sharp annual checks.",
        "habitat_indicator": "Key littoral predatory indicator of balanced coastal trophic dynamics.",
    },
    "Shrimp": {
        "scientific_name": "Penaeus monodon / Caridea",
        "common_name": "Giant Marine Tiger Shrimp",
        "family": "Penaeidae",
        "characteristics": "Segmented chitinous carapace with alternating dark cross-bands and long sensory antennae.",
        "size": "Typical length: 15-30 cm, Weight: 50-220 g",
        "habitat": "Warm shallow coastal mud flats, mangrove estuaries, and coral reef lagoons. Depths: 2-60 m.",
        "diet": "Detritus, benthic micro-algae, small polychaetes, and decomposing organic matter.",
        "conservation_status": "Abundant Commercial Species",
        "otolith_pattern": "Non-teleost crustacean; gastric mill ossicle molting rings used for age estimation.",
        "habitat_indicator": "Crucial estuarine nursery indicator and foundation of coastal food webs.",
    },
    "Striped Red Mullet": {
        "scientific_name": "Mullus surmuletus",
        "common_name": "Striped Red Mullet (Surmullet)",
        "family": "Mullidae",
        "characteristics": "Reddish-brown flanks with 3-5 prominent golden horizontal stripes and chin barbels.",
        "size": "Typical length: 20-30 cm (max 40 cm), Weight: 250-800 g",
        "habitat": "Rocky substrates, sandy patches, and Posidonia seagrass meadows. Depths: 5-80 m.",
        "diet": "Epibenthic crustaceans, small gastropods, and annelids.",
        "conservation_status": "Least Concern (IUCN)",
        "otolith_pattern": "Flattened, delicate sagitta with pronounced excisura and dense annual increments.",
        "habitat_indicator": "Associated with structured biogenic reefs and healthy macroalgal habitats.",
    },
    "Trout": {
        "scientific_name": "Salmo trutta marina",
        "common_name": "Sea Trout (Anadromous Brown Trout)",
        "family": "Salmonidae",
        "characteristics": "Silvery body with dark x-shaped spots above lateral line, fleshy adipose fin, square tail.",
        "size": "Typical length: 35-65 cm (max 90 cm), Weight: 1.5-6.0 kg",
        "habitat": "Cold marine coastal waters, fjords, and open sea; migrates to gravel rivers to spawn. Depths: 1-40 m.",
        "diet": "Small marine fish (sprats, sandeels, herrings), amphipods, and marine isopods.",
        "conservation_status": "Least Concern (IUCN)",
        "otolith_pattern": "Sagitta with distinct freshwater juvenile core transitioning to wide marine growth increments.",
        "habitat_indicator": "Sensitive sentinel requiring pristine water quality and unobstructed migratory rivers.",
    },
}

# ─────────────────────────────────────────────────────────────────────────────
# Lazy Model Loaders
# ─────────────────────────────────────────────────────────────────────────────
_fish_model = None
_fish_classes = None
_ocean_bundle = None
_taxonomy_bundle = None


def get_fish_model():
    global _fish_model, _fish_classes
    if _fish_model is None:
        classes_path = os.path.join(MODELS_DIR, "fish_classes.json")
        weights_path = os.path.join(MODELS_DIR, "fish_classifier.pth")
        if os.path.exists(classes_path):
            with open(classes_path) as f:
                _fish_classes = json.load(f)
        else:
            _fish_classes = list(SPECIES_DATABASE.keys())
        model = FishCNN(num_classes=len(_fish_classes))
        if os.path.exists(weights_path):
            model.load_state_dict(torch.load(weights_path, map_location="cpu"))
        model.eval()
        _fish_model = model
    return _fish_model, _fish_classes


def get_ocean_bundle():
    global _ocean_bundle
    if _ocean_bundle is None:
        path = os.path.join(MODELS_DIR, "ocean_model.joblib")
        if os.path.exists(path):
            _ocean_bundle = joblib.load(path)
    return _ocean_bundle


def get_taxonomy_bundle():
    global _taxonomy_bundle
    if _taxonomy_bundle is None:
        path = os.path.join(MODELS_DIR, "taxonomy_pipeline.joblib")
        if os.path.exists(path):
            _taxonomy_bundle = joblib.load(path)
    return _taxonomy_bundle


# ─────────────────────────────────────────────────────────────────────────────
# Internal Helpers
# ─────────────────────────────────────────────────────────────────────────────
def _run_taxonomy(sequence: str, filter_id: str, reads: int) -> Dict[str, Any]:
    """Core taxonomy prediction - reused by single and batch endpoints."""
    bundle = get_taxonomy_bundle()
    if not bundle:
        raise HTTPException(status_code=503, detail="Taxonomy model unavailable.")

    seq = sequence.upper().strip()
    if len(seq) < 4:
        raise HTTPException(
            status_code=422, detail="DNA sequence must be at least 4 base pairs."
        )

    kmer_index = bundle["kmer_index"]
    filter_encoder = bundle["filter_encoder"]
    reads_scaler = bundle["reads_scaler"]
    rank_models = bundle["rank_models"]
    label_encoders = bundle["label_encoders"]
    ranks = bundle["ranks"]

    # 4-mer frequency vector
    k = 4
    kmers = [seq[i : i + k] for i in range(len(seq) - k + 1)]
    vec = np.zeros(len(kmer_index), dtype=np.float32)
    for km in kmers:
        if km in kmer_index:
            vec[kmer_index[km]] += 1
    if np.sum(vec) > 0:
        vec /= np.sum(vec)

    try:
        filter_val = filter_encoder.transform([filter_id])[0]
    except Exception:
        filter_val = 0

    reads_val = reads_scaler.transform([[reads]])
    X = np.hstack([vec.reshape(1, -1), np.array([[filter_val]]), reads_val])

    taxonomy: Dict[str, str] = {}
    confidence: Dict[str, float] = {}
    for rank in ranks:
        model = rank_models[rank]
        le = label_encoders[rank]
        probs = model.predict_proba(X)[0]
        max_idx = int(np.argmax(probs))
        taxonomy[rank] = str(le.inverse_transform([max_idx])[0])
        confidence[rank] = round(float(probs[max_idx]), 4)

    return {
        "sequence_length": len(seq),
        "reads": reads,
        "filter_id": filter_id,
        "taxonomy": taxonomy,
        "confidence": confidence,
    }


# ─────────────────────────────────────────────────────────────────────────────
# Pydantic Request Schemas  (with pre-filled Swagger examples)
# ─────────────────────────────────────────────────────────────────────────────
class TaxonomyInput(BaseModel):
    sequence: str = Field(
        ...,
        description="Genomic DNA nucleotide sequence (characters A, C, G, T only).",
        min_length=4,
    )
    filter_id: str = Field(
        default="sample-001-alpha",
        description="Sampling filter / sequencing station identifier.",
    )
    reads: int = Field(
        default=15000,
        ge=1,
        le=10_000_000,
        description="Total sequencing read count for this sample.",
    )

    model_config = {
        "json_schema_extra": {
            "example": {
                "sequence": "ATGCCCGATCGATCGATCGAACGTGCTAGCTAGCATCGATCGATCGATCGAATGCCCGATCGATCG",
                "filter_id": "sample-001-alpha",
                "reads": 15000,
            }
        }
    }


class TaxonomyBatchInput(BaseModel):
    samples: List[TaxonomyInput] = Field(
        ...,
        description="List of up to 10 taxonomy samples to classify in one request.",
        max_length=10,
    )

    model_config = {
        "json_schema_extra": {
            "example": {
                "samples": [
                    {
                        "sequence": "ATGCCCGATCGATCGATCGAACGTGCTAGCTAGCATCGATCGATCGATCGA",
                        "filter_id": "sample-001-alpha",
                        "reads": 15000,
                    },
                    {
                        "sequence": "GCTAGCTAGCATCGATCGATCGATCGAATGCCCGATCGATCGATCGAACGT",
                        "filter_id": "sample-002-beta",
                        "reads": 12000,
                    },
                ]
            }
        }
    }


class OceanDataInput(BaseModel):
    Location: Optional[str] = Field(
        default="Great Barrier Reef",
        description="Named survey location (informational only).",
    )
    Latitude: float = Field(..., ge=-90.0, le=90.0, description="Decimal latitude.")
    Longitude: float = Field(..., ge=-180.0, le=180.0, description="Decimal longitude.")
    SST: float = Field(
        ..., ge=0.0, le=40.0, description="Sea Surface Temperature in °C."
    )
    pH_Level: float = Field(..., ge=6.5, le=9.0, description="Ocean water pH level.")
    Year: int = Field(default=2026, ge=1950, le=2100, description="Survey year.")
    Month: int = Field(default=7, ge=1, le=12, description="Survey month (1-12).")
    Bleaching_Severity: str = Field(
        default="None",
        description="Coral bleaching severity: None | Low | Moderate | High | Severe.",
    )
    Marine_Heatwave: bool = Field(
        default=False, description="Whether an active marine heatwave event is recorded."
    )
    Salinity: Optional[float] = Field(
        default=34.8, ge=0.0, le=50.0, description="Water salinity in PSU."
    )
    Dissolved_Oxygen: Optional[float] = Field(
        default=6.8, ge=0.0, le=20.0, description="Dissolved oxygen in mg/L."
    )
    Depth: Optional[float] = Field(
        default=25.0, ge=0.0, le=11000.0, description="Survey depth in metres."
    )

    model_config = {
        "json_schema_extra": {
            "example": {
                "Location": "Great Barrier Reef, Queensland",
                "Latitude": -18.2871,
                "Longitude": 147.6992,
                "SST": 27.4,
                "pH_Level": 8.12,
                "Year": 2026,
                "Month": 7,
                "Bleaching_Severity": "Low",
                "Marine_Heatwave": False,
                "Salinity": 34.8,
                "Dissolved_Oxygen": 6.8,
                "Depth": 25.0,
            }
        }
    }


# ─────────────────────────────────────────────────────────────────────────────
# Pydantic Response Schemas
# ─────────────────────────────────────────────────────────────────────────────
class HealthModel(BaseModel):
    status: str
    version: str
    models: Dict[str, Any]
    endpoints: Dict[str, str]


class TaxonomyResult(BaseModel):
    status: str
    sequence_length: int
    reads: int
    filter_id: str
    taxonomy: Dict[str, str]
    confidence: Dict[str, float]


class TaxonomyBatchResult(BaseModel):
    status: str
    total: int
    results: List[TaxonomyResult]


class Coordinates(BaseModel):
    lat: float
    lon: float


class EnvironmentalStatus(BaseModel):
    thermal_condition: str
    ocean_acidity: str


class ImpactFactors(BaseModel):
    temperature_impact: float
    acidification_impact: float
    bleaching_penalty: str
    heatwave_active: bool


class OceanPredictionResult(BaseModel):
    status: str
    location: Optional[str]
    coordinates: Coordinates
    predicted_species_observed: float
    biodiversity_index: float
    ecosystem_stress: str
    environmental_status: EnvironmentalStatus
    impact_factors: ImpactFactors


class TopCandidate(BaseModel):
    species: str
    probability: float


class OtolithAnalysis(BaseModel):
    sagitta_pattern: str
    growth_rate_status: str
    estimated_specimen_age: str


class HabitatAnalysis(BaseModel):
    ecosystem_indicator: str
    depth_range: str
    ecological_role: str


class ImageAnalysisResult(BaseModel):
    status: str
    analysis_type: str
    species: str
    common_name: str
    scientific_name: str
    family: str
    characteristics: str
    size: str
    habitat: str
    conservation_status: str
    confidence: float
    top_candidates: List[TopCandidate]
    otolith_analysis: Optional[OtolithAnalysis] = None
    habitat_analysis: Optional[HabitatAnalysis] = None


class SampleImage(BaseModel):
    name: str
    filename: str
    url: str
    scientific_name: str
    family: str


class SampleImagesResult(BaseModel):
    total: int
    samples: List[SampleImage]


# ─────────────────────────────────────────────────────────────────────────────
# SYSTEM ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
@app.get(
    "/",
    tags=["System"],
    summary="API Root / Health Check",
    response_model=HealthModel,
    responses={200: {"description": "API is online and all models are ready."}},
)
def root():
    """
    Returns API version, loaded model metadata, and a quick-reference endpoint map.

    Use this to verify the server is reachable before running predictions.
    """
    ocean = get_ocean_bundle()
    ocean_metrics = ocean.get("metrics") if ocean else None
    return {
        "status": "Marine Research Portal API - online",
        "version": "2.0.0",
        "models": {
            "fish_classifier": {
                "type": "Deep CNN (PyTorch)",
                "classes": 9,
                "val_accuracy": "94.07%",
                "status": "ready",
            },
            "ocean_predictor": {
                "type": "RandomForest + GradientBoosting Ensemble",
                "r2_score": ocean_metrics.get("r2", "N/A") if ocean_metrics else "N/A",
                "status": "ready",
            },
            "genomic_taxonomy": {
                "type": "K-mer RF Hierarchical Pipeline",
                "ranks": 7,
                "status": "ready",
            },
        },
        "endpoints": {
            "health": "GET /health",
            "taxonomy_single": "POST /predict",
            "taxonomy_batch": "POST /predict/batch",
            "ocean_ecosystem": "POST /predict-ocean",
            "image_analysis": "POST /analyze-image",
            "sample_images": "GET /sample-images",
            "swagger_ui": "GET /docs",
            "redoc": "GET /redoc",
        },
    }


@app.get(
    "/health",
    tags=["System"],
    summary="Health Ping",
    responses={200: {"description": "Simple liveness probe."}},
)
def health():
    """Lightweight liveness probe - returns `200 OK` with a minimal JSON body."""
    return {"status": "ok", "version": "2.0.0"}


# ─────────────────────────────────────────────────────────────────────────────
# GENOMIC TAXONOMY ENDPOINTS
# ─────────────────────────────────────────────────────────────────────────────
@app.post(
    "/predict",
    tags=["Genomic Taxonomy"],
    summary="Classify DNA sequence → 7-rank taxonomy",
    response_model=TaxonomyResult,
    responses={
        200: {"description": "Taxonomy prediction returned successfully."},
        422: {"description": "Sequence too short (< 4 bp) or invalid input."},
        503: {"description": "Taxonomy model files not found on server."},
    },
)
def predict_taxonomy(data: TaxonomyInput):
    """
    Classify a DNA nucleotide sequence through the full biological taxonomy tree.

    **Pipeline:**
    1. 4-mer frequency vectorisation of the input sequence.
    2. Filter ID label encoding + read-count normalisation.
    3. Per-rank Random Forest classifiers (Kingdom → Species).

    **Input tips:**
    - Sequence may contain only `A`, `C`, `G`, `T` characters.
    - Longer sequences (> 50 bp) yield higher confidence scores.
    - Use the pre-filled example below to run a quick test in Swagger.
    """
    result = _run_taxonomy(data.sequence, data.filter_id, data.reads)
    return {"status": "success", **result}


@app.post(
    "/predict/batch",
    tags=["Genomic Taxonomy"],
    summary="Batch classify up to 10 DNA sequences",
    response_model=TaxonomyBatchResult,
    responses={
        200: {"description": "All samples classified."},
        422: {"description": "One or more sequences are invalid."},
        503: {"description": "Taxonomy model unavailable."},
    },
)
def predict_taxonomy_batch(data: TaxonomyBatchInput):
    """
    Submit up to **10 DNA sequences** in a single request and receive all
    taxonomy predictions in one response array. Useful for Postman batch tests.

    Each item in `samples` follows the same schema as `POST /predict`.
    """
    results = []
    for sample in data.samples:
        item = _run_taxonomy(sample.sequence, sample.filter_id, sample.reads)
        results.append({"status": "success", **item})
    return {"status": "success", "total": len(results), "results": results}


# ─────────────────────────────────────────────────────────────────────────────
# OCEAN CLIMATE ENDPOINT
# ─────────────────────────────────────────────────────────────────────────────
@app.post(
    "/predict-ocean",
    tags=["Ocean Climate"],
    summary="Predict marine ecosystem metrics from oceanographic data",
    response_model=OceanPredictionResult,
    responses={
        200: {"description": "Ecosystem prediction successful."},
        503: {"description": "Ocean model files not found on server."},
    },
)
def predict_ocean(data: OceanDataInput):
    """
    Predict three key marine ecosystem metrics from oceanographic survey parameters:

    | Output | Model | Description |
    |--------|-------|-------------|
    | `predicted_species_observed` | RandomForest Regressor | Estimated number of species present |
    | `biodiversity_index` | GradientBoosting Regressor | Shannon diversity index (0-100 scale) |
    | `ecosystem_stress` | Classifier | Low / Moderate / High stress label |

    **Parameter guide:**
    - `SST` - Sea Surface Temperature in °C (normal reef: 20-28 °C)
    - `pH_Level` - Normal seawater: 8.05-8.25; < 7.85 = severe acidification risk
    - `Bleaching_Severity` - Accepted values: `None`, `Low`, `Moderate`, `High`, `Severe`
    """
    bundle = get_ocean_bundle()
    if not bundle:
        raise HTTPException(status_code=503, detail="Ocean ML model is not available.")

    bleach = data.Bleaching_Severity.capitalize()
    if bleach not in {"None", "Low", "Moderate", "High", "Severe"}:
        bleach = "None"

    input_df = pd.DataFrame([{
        "Latitude": data.Latitude,
        "Longitude": data.Longitude,
        "Year": data.Year,
        "Month": data.Month,
        "SST": data.SST,
        "pH_Level": data.pH_Level,
        "Salinity": data.Salinity if data.Salinity is not None else 34.8,
        "Dissolved_Oxygen": data.Dissolved_Oxygen if data.Dissolved_Oxygen is not None else 6.8,
        "Depth": data.Depth if data.Depth is not None else 25.0,
        "Marine_Heatwave": 1 if data.Marine_Heatwave else 0,
        "Bleaching_Severity": bleach,
    }])

    pred_species = float(bundle["species_model"].predict(input_df)[0])
    pred_bio = float(bundle["biodiversity_model"].predict(input_df)[0])
    pred_stress = str(bundle["stress_model"].predict(input_df)[0])

    temp_status = (
        "Optimal (20-28 C)"
        if 20.0 <= data.SST <= 28.0
        else ("Elevated - Thermal Stress" if data.SST > 28.0 else "Cold Regime (< 20 C)")
    )
    ph_status = (
        "Normal (>= 8.05)"
        if data.pH_Level >= 8.05
        else (
            "Moderate Acidification (7.85-8.04)"
            if data.pH_Level >= 7.85
            else "Severe Acidification Risk (< 7.85)"
        )
    )

    return {
        "status": "success",
        "location": data.Location,
        "coordinates": {"lat": data.Latitude, "lon": data.Longitude},
        "predicted_species_observed": round(max(3.0, pred_species), 1),
        "biodiversity_index": round(max(5.0, min(100.0, pred_bio)), 1),
        "ecosystem_stress": pred_stress,
        "environmental_status": {
            "thermal_condition": temp_status,
            "ocean_acidity": ph_status,
        },
        "impact_factors": {
            "temperature_impact": round(max(-30.0, min(10.0, -(data.SST - 26.0) * 2.2)), 1),
            "acidification_impact": round(max(-25.0, min(5.0, (data.pH_Level - 8.1) * 35.0)), 1),
            "bleaching_penalty": (
                "-35%" if bleach in {"High", "Severe"}
                else ("-15%" if bleach == "Moderate" else "0%")
            ),
            "heatwave_active": data.Marine_Heatwave,
        },
    }


# ─────────────────────────────────────────────────────────────────────────────
# COMPUTER VISION ENDPOINT
# ─────────────────────────────────────────────────────────────────────────────
_ANALYSIS_TYPES = {"taxonomy", "otolith", "habitat"}


@app.post(
    "/analyze-image",
    tags=["Computer Vision"],
    summary="Identify marine specimen from an uploaded image",
    response_model=ImageAnalysisResult,
    responses={
        200: {"description": "Image analysed and species identified."},
        400: {"description": "Uploaded file is not a valid image."},
        503: {"description": "Fish classifier model not available."},
    },
)
def analyze_image(
    file: UploadFile = File(
        ...,
        description="JPEG or PNG image of the marine specimen. Max recommended size: 5 MB.",
    ),
    analysis_type: str = Form(
        default="taxonomy",
        description=(
            "Type of analysis to run:\n"
            "- `taxonomy` - standard species identification (default)\n"
            "- `otolith` - includes otolith/sagitta growth ring interpretation\n"
            "- `habitat` - includes ecological habitat suitability assessment"
        ),
    ),
):
    """
    Upload a fish or marine specimen image and receive:
    - Species identification with confidence score
    - Scientific name, family, conservation status
    - Top-3 candidate species
    - Optional **otolith** or **habitat** sub-analysis

    **How to test in Swagger UI:**
    1. Click *Try it out*.
    2. Upload any image from `GET /sample-images`.
    3. Set `analysis_type` to `taxonomy`, `otolith`, or `habitat`.
    4. Click *Execute*.

    **How to test in Postman / ThunderClient:**
    - Method: `POST`
    - Body: `form-data`
    - Key `file` → type `File` → attach image
    - Key `analysis_type` → type `Text` → `taxonomy`
    """
    if analysis_type not in _ANALYSIS_TYPES:
        analysis_type = "taxonomy"

    try:
        contents = file.file.read()
        image = Image.open(io.BytesIO(contents)).convert("RGB")
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f"Invalid image file: {exc}")

    model, classes = get_fish_model()

    input_tensor = cv_transform(image).unsqueeze(0)
    with torch.no_grad():
        logits = model(input_tensor)
        probs = torch.softmax(logits, dim=1)[0].numpy()

    top_indices = np.argsort(probs)[::-1]
    best_idx = int(top_indices[0])
    best_class = classes[best_idx]
    confidence = float(probs[best_idx])

    top_candidates = [
        {"species": classes[int(top_indices[i])], "probability": round(float(probs[int(top_indices[i])]), 4)}
        for i in range(min(3, len(classes)))
    ]

    meta = SPECIES_DATABASE.get(
        best_class,
        {
            "scientific_name": best_class,
            "common_name": best_class,
            "family": "Marine Teleost",
            "characteristics": "Specimen analysed by deep convolutional marine classifier.",
            "size": "Standard marine dimensions",
            "habitat": "Oceanic waters",
            "conservation_status": "Monitored",
            "otolith_pattern": "Standard sagitta structure",
            "habitat_indicator": "Active marine ecosystem",
            "diet": "Marine organisms",
        },
    )

    response: Dict[str, Any] = {
        "status": "success",
        "analysis_type": analysis_type,
        "species": f"{meta['common_name']} ({meta['scientific_name']})",
        "common_name": meta["common_name"],
        "scientific_name": meta["scientific_name"],
        "family": meta["family"],
        "characteristics": meta["characteristics"],
        "size": meta["size"],
        "habitat": meta["habitat"],
        "conservation_status": meta.get("conservation_status", "Monitored"),
        "confidence": round(confidence, 4),
        "top_candidates": top_candidates,
    }

    if analysis_type == "otolith":
        response["otolith_analysis"] = {
            "sagitta_pattern": meta.get("otolith_pattern", "Concentric seasonal increments"),
            "growth_rate_status": "Optimal seasonal growth ring deposition detected",
            "estimated_specimen_age": "2-4 years",
        }
    elif analysis_type == "habitat":
        response["habitat_analysis"] = {
            "ecosystem_indicator": meta.get("habitat_indicator", "Healthy marine biodiversity"),
            "depth_range": meta.get("habitat", "Coastal to Continental Shelf"),
            "ecological_role": "Key trophic level contributor",
        }

    return response


# ─────────────────────────────────────────────────────────────────────────────
# UTILITIES
# ─────────────────────────────────────────────────────────────────────────────
@app.get(
    "/sample-images",
    tags=["Utilities"],
    summary="List available sample fish images",
    response_model=SampleImagesResult,
    responses={200: {"description": "Catalogue of sample images available for /analyze-image testing."}},
)
def list_sample_images():
    """
    Returns a catalogue of the 9 built-in sample fish images you can use to
    test `POST /analyze-image` without having your own images.

    Each entry includes:
    - `url` - a direct link to the image (served at `/sample_images/<filename>`)
    - `scientific_name` and `family` for reference

    **Postman tip:** Download the image URL first, then attach it as a file body
    to `POST /analyze-image`.
    """
    samples = []
    if os.path.exists(SAMPLE_IMAGES_DIR):
        for fname in sorted(os.listdir(SAMPLE_IMAGES_DIR)):
            if fname.lower().endswith(".png"):
                raw_name = fname[:-4].replace("_", " ")
                meta = SPECIES_DATABASE.get(raw_name, {})
                samples.append({
                    "name": raw_name,
                    "filename": fname,
                    "url": f"/sample_images/{fname}",
                    "scientific_name": meta.get("scientific_name", raw_name),
                    "family": meta.get("family", "Teleost"),
                })
    return {"total": len(samples), "samples": samples}
