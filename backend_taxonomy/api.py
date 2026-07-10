from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from typing import Optional
import numpy as np
import joblib

app = FastAPI(title="Marine Research Portal API")

# CORS configuration - allow frontend access
origins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "http://127.0.0.1:8000",
    "http://localhost:8000",
    "*"  # Allow all origins for development
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ------------------------
# Globals (lazy loaded)
# ------------------------
model = None
kmer_index = None
le_filter = None
scaler_reads = None
label_encoders = None

taxonomy_columns = [
    "Kingdom", "Phylum", "Class",
    "Order", "Family", "Genus", "Species"
]

k = 4


class TaxonomyInput(BaseModel):
    sequence: str
    filter_id: str
    reads: int


class OceanDataInput(BaseModel):
    Location: str
    Latitude: float
    Longitude: float
    SST: float = None  # SST (°C)
    pH_Level: float = None
    Year: int
    Month: int
    Bleaching_Severity: str
    Marine_Heatwave: bool


class ImageAnalysisResponse(BaseModel):
    species: str
    family: str
    characteristics: str
    size: str
    habitat: str
    confidence: float


def load_artifacts():
    global model, kmer_index, le_filter, scaler_reads, label_encoders

    if model is None:
        # ⛔ TensorFlow import ONLY here
        from tensorflow.keras.models import load_model

        model = load_model("taxonomy_model.h5")
        kmer_index = joblib.load("artifacts/kmer_index.pkl")
        le_filter = joblib.load("artifacts/filter_encoder.pkl")
        scaler_reads = joblib.load("artifacts/reads_scaler.pkl")
        label_encoders = joblib.load("artifacts/label_encoders.pkl")


def kmer_count(sequence, k):
    return [sequence[i:i+k] for i in range(len(sequence) - k + 1)]


def vectorize_kmers(sequence, k):
    vec = np.zeros(len(kmer_index), dtype=np.float32)
    for kmer in kmer_count(sequence, k):
        if kmer in kmer_index:
            vec[kmer_index[kmer]] += 1
    return vec


@app.post("/predict")
def predict(data: TaxonomyInput):
    load_artifacts()

    X_seq = vectorize_kmers(data.sequence.upper(), k).reshape(1, -1)
    X_filter = np.array([[le_filter.transform([data.filter_id])[0]]])
    X_reads = scaler_reads.transform([[data.reads]])

    X = np.hstack([X_seq, X_filter, X_reads])

    preds = model.predict(X)

    taxonomy = {}
    confidence = {}

    for i, level in enumerate(taxonomy_columns):
        idx = int(np.argmax(preds[i][0]))
        taxonomy[level] = label_encoders[level].inverse_transform([idx])[0]
        confidence[level] = float(np.max(preds[i][0]))

    return {"taxonomy": taxonomy, "confidence": confidence}


@app.get("/")
def health():
    return {
        "status": "Marine Research Portal API running",
        "version": "1.0.0",
        "endpoints": {
            "taxonomy": "/predict",
            "ocean_data": "/predict-ocean",
            "image_analysis": "/analyze-image"
        }
    }


@app.post("/predict-ocean")
def predict_ocean_data(data: OceanDataInput):
    """
    Predict species observed based on ocean environmental data.
    This is a placeholder implementation - replace with actual model.
    """
    try:
        # Mock prediction logic - replace with actual ML model
        # For now, return a simulated prediction based on input factors
        
        base_species = 50.0
        
        # Adjust based on temperature
        if data.SST:
            if data.SST > 30:
                base_species -= 10
            elif data.SST < 20:
                base_species -= 5
        
        # Adjust based on pH
        if data.pH_Level:
            if data.pH_Level < 7.8:
                base_species -= 8
            elif data.pH_Level > 8.2:
                base_species += 5
        
        # Adjust based on bleaching
        if data.Bleaching_Severity.lower() == "severe":
            base_species -= 15
        elif data.Bleaching_Severity.lower() == "high":
            base_species -= 10
        elif data.Bleaching_Severity.lower() == "moderate":
            base_species -= 5
        
        # Adjust based on heatwave
        if data.Marine_Heatwave:
            base_species -= 8
        
        predicted_species = max(5.0, base_species)  # Ensure minimum value
        
        return {
            "predicted_species_observed": round(predicted_species, 2),
            "location": data.Location,
            "status": "success"
        }
    except Exception as e:
        return {"error": str(e), "status": "failed"}


@app.post("/analyze-image")
async def analyze_image(
    file: UploadFile = File(...),
    analysis_type: str = "taxonomy"
):
    """
    Analyze uploaded marine specimen images.
    This is a placeholder - replace with actual image analysis model.
    """
    try:
        # Mock image analysis - replace with actual computer vision model
        # Different responses based on analysis type
        
        if analysis_type == "taxonomy":
            return {
                "species": "Thunnus albacares (Yellowfin Tuna)",
                "family": "Scombridae",
                "characteristics": "Yellow finlets, elongated dorsal and anal fins, metallic dark blue back",
                "size": "Estimated 1.2m length, 25kg weight",
                "habitat": "Tropical and subtropical oceans worldwide",
                "confidence": 0.92
            }
        elif analysis_type == "otolith":
            return {
                "species": "Gadus morhua (Atlantic Cod)",
                "family": "Gadidae",
                "characteristics": "Age: 4 years, Growth pattern: consistent seasonal growth",
                "size": "Estimated 70cm length, 4.5kg weight",
                "habitat": "Cold waters of North Atlantic Ocean",
                "confidence": 0.87
            }
        elif analysis_type == "habitat":
            return {
                "species": "Coral Reef Ecosystem",
                "family": "N/A",
                "characteristics": "Diverse coral species with high biodiversity index",
                "size": "Reef area: approx. 250m², Depth: 5-15m",
                "habitat": "Tropical coral reef, water temperature 26°C, good health indicators",
                "confidence": 0.78
            }
        else:
            return {
                "species": "Unknown",
                "family": "Unknown",
                "characteristics": "Unable to analyze",
                "size": "N/A",
                "habitat": "N/A",
                "confidence": 0.0
            }
            
    except Exception as e:
        return {"error": str(e), "status": "failed"}

