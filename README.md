# 🌊 Marine Research Portal — API Architecture (v2.0)
### High-Performance REST API for Oceanography, Marine Biology & AI/ML Inference

[![FastAPI](https://img.shields.io/badge/FastAPI-0.103-009688.svg?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI%203.0-85EA2D.svg?logo=swagger&logoColor=black)](http://127.0.0.1:8000/docs)
[![Postman](https://img.shields.io/badge/Postman-Collection%20v2.1-FF6C37.svg?logo=postman&logoColor=white)](postman_collection.json)
[![PyTorch](https://img.shields.io/badge/PyTorch-2.1-EE4C2C.svg?logo=pytorch&logoColor=white)](https://pytorch.org)
[![Scikit-Learn](https://img.shields.io/badge/scikit--learn-1.3-F7931E.svg?logo=scikit-learn&logoColor=white)](https://scikit-learn.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📌 Overview

The **Marine Research Portal API** is a standalone, production-ready REST API built with **FastAPI**. It provides instant inference across three specialized AI/ML models without any frontend dependencies:

1. **🐟 Computer Vision Classifier (`POST /analyze-image`)**: Deep 4-Block CNN (PyTorch) trained on 6,200+ marine specimen images across 9 seafood/fish classes (**94.07% validation accuracy**).
2. **🌡️ Ocean Climate & Biodiversity Regressors (`POST /predict-ocean`)**: Scikit-Learn ensemble pipeline (**R² = 0.9745**) predicting expected species counts, Shannon biodiversity index, and ecosystem stress from temperature, pH, salinity, and bleaching metrics.
3. **🧬 Genomic Taxonomy Predictor (`POST /predict` & `POST /predict/batch`)**: K-mer nucleotide vectorizer (4-mers) and hierarchical ensemble predicting biological taxonomy across all 7 taxonomic ranks (*Kingdom ➔ Phylum ➔ Class ➔ Order ➔ Family ➔ Genus ➔ Species*).

---

## ⚡ Quickstart: Launch the API

### 1. Install Dependencies
```bash
pip install -r backend_taxonomy/requirements.txt
```

### 2. Run the FastAPI Server
From the project root:
```bash
cd backend_taxonomy
uvicorn api:app --reload --host 127.0.0.1 --port 8000
```
Or with Python module syntax:
```bash
python -m uvicorn backend_taxonomy.api:app --reload --port 8000
```

The API will be available at:
- 📖 **Interactive Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- 📑 **ReDoc Documentation**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)
- 🟢 **API Root / Health Check**: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

---

## 🧪 Testing with Postman, ThunderClient & Swagger

### Option A: Swagger UI (Zero Setup — Browser Based)
1. Open [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) in any browser.
2. Every endpoint has pre-filled JSON schemas and examples.
3. Click **Try it out** ➔ **Execute** to run test predictions immediately.

### Option B: Postman (Pre-Built Collection Included)
A complete Postman Collection is provided in the repository root: `postman_collection.json`.
1. Open **Postman**.
2. Click **Import** (top left).
3. Select or drag-and-drop `postman_collection.json`.
4. The collection is configured with the `base_url` variable (`http://127.0.0.1:8000`) and ready-to-run requests for all endpoints.

### Option C: ThunderClient / VS Code REST Client (`api_tests.http`)
An executable HTTP request file is included at `api_tests.http`:
1. In VS Code, install either the **Thunder Client** or **REST Client** extension.
2. Open `api_tests.http`.
3. Click **Send Request** above any endpoint.

---

## 📡 API Reference & Endpoints

### 1. System Endpoints

#### `GET /` — API Root & Model Status
Returns the server status, active model descriptions, and available endpoint routes.
```bash
curl http://127.0.0.1:8000/
```
**Response (200 OK):**
```json
{
  "status": "Marine Research Portal API - online",
  "version": "2.0.0",
  "models": {
    "fish_classifier": {
      "type": "Deep CNN (PyTorch)",
      "classes": 9,
      "val_accuracy": "94.07%",
      "status": "ready"
    },
    "ocean_predictor": {
      "type": "RandomForest + GradientBoosting Ensemble",
      "r2_score": 0.9745,
      "status": "ready"
    },
    "genomic_taxonomy": {
      "type": "K-mer RF Hierarchical Pipeline",
      "ranks": 7,
      "status": "ready"
    }
  },
  "endpoints": { ... }
}
```

#### `GET /health` — Lightweight Liveness Probe
```bash
curl http://127.0.0.1:8000/health
```
**Response (200 OK):**
```json
{
  "status": "ok",
  "version": "2.0.0"
}
```

---

### 2. Genomic Taxonomy Endpoints

#### `POST /predict` — Classify Single DNA Sequence
Classifies a nucleotide sequence through the full biological lineage (*Kingdom ➔ Species*).

```bash
curl -X POST "http://127.0.0.1:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "sequence": "ATGCCCGATCGATCGATCGAACGTGCTAGCTAGCATCGATCGATCGATCGAATGCCCGATCGATCGATCGAACGT",
    "filter_id": "sample-001-alpha",
    "reads": 15000
  }'
```

**Response (200 OK):**
```json
{
  "status": "success",
  "sequence_length": 76,
  "reads": 15000,
  "filter_id": "sample-001-alpha",
  "taxonomy": {
    "Kingdom": "Animalia",
    "Phylum": "Chordata",
    "Class": "Actinopterygii",
    "Order": "Scombriformes",
    "Family": "Scombridae",
    "Genus": "Thunnus",
    "Species": "Thunnus albacares"
  },
  "confidence": {
    "Kingdom": 1.0,
    "Phylum": 1.0,
    "Class": 1.0,
    "Order": 1.0,
    "Family": 1.0,
    "Genus": 1.0,
    "Species": 1.0
  }
}
```

#### `POST /predict/batch` — Batch Classify Up to 10 Sequences
```bash
curl -X POST "http://127.0.0.1:8000/predict/batch" \
  -H "Content-Type: application/json" \
  -d '{
    "samples": [
      {
        "sequence": "ATGCCCGATCGATCGATCGAACGTGCTAGCTAGCATCG",
        "filter_id": "sample-001-alpha",
        "reads": 15000
      },
      {
        "sequence": "GCTAGCTAGCATCGATCGATCGATCGAATGCCC",
        "filter_id": "sample-002-beta",
        "reads": 12000
      }
    ]
  }'
```

---

### 3. Ocean Climate & Ecosystem Prediction

#### `POST /predict-ocean` — Predict Ecosystem Health from Env Parameters
Predicts expected species observed, biodiversity index, and ecosystem stress category.

```bash
curl -X POST "http://127.0.0.1:8000/predict-ocean" \
  -H "Content-Type: application/json" \
  -d '{
    "Location": "Great Barrier Reef, Queensland",
    "Latitude": -18.2871,
    "Longitude": 147.6992,
    "SST": 27.4,
    "pH_Level": 8.12,
    "Year": 2026,
    "Month": 7,
    "Bleaching_Severity": "Low",
    "Marine_Heatwave": false,
    "Salinity": 34.8,
    "Dissolved_Oxygen": 6.8,
    "Depth": 25.0
  }'
```

**Response (200 OK):**
```json
{
  "status": "success",
  "location": "Great Barrier Reef, Queensland",
  "coordinates": {
    "lat": -18.2871,
    "lon": 147.6992
  },
  "predicted_species_observed": 31.9,
  "biodiversity_index": 71.1,
  "ecosystem_stress": "Moderate",
  "environmental_status": {
    "thermal_condition": "Optimal (20-28 C)",
    "ocean_acidity": "Normal (>= 8.05)"
  },
  "impact_factors": {
    "temperature_impact": -3.1,
    "acidification_impact": 0.7,
    "bleaching_penalty": "0%",
    "heatwave_active": false
  }
}
```

---

### 4. Computer Vision Specimen Classifier

#### `POST /analyze-image` — Classify Specimen Image (multipart/form-data)
Identifies fish species from uploaded PNG/JPEG images.

```bash
curl -X POST "http://127.0.0.1:8000/analyze-image" \
  -F "file=@sample_images/Red_Mullet.png" \
  -F "analysis_type=taxonomy"
```

**Optional Analysis Types:**
- `taxonomy` (default): Species, scientific name, traits, conservation status, top-3 candidates.
- `otolith`: Includes sagitta growth increments and specimen age estimation.
- `habitat`: Includes ecosystem depth range and ecological trophic role.

**Response (200 OK):**
```json
{
  "status": "success",
  "analysis_type": "taxonomy",
  "species": "Red Mullet (Goatfish) (Mullus barbatus)",
  "common_name": "Red Mullet (Goatfish)",
  "scientific_name": "Mullus barbatus",
  "family": "Mullidae",
  "characteristics": "Vivid reddish-pink coloration with steep snout profile and paired sensory chin barbels.",
  "size": "Typical length: 15-25 cm (max 33 cm), Weight: 150-450 g",
  "habitat": "Demersal muddy, sandy, and gravel substrates. Mediterranean and Black Sea. Depths: 10-100 m.",
  "conservation_status": "Least Concern (IUCN)",
  "confidence": 0.9901,
  "top_candidates": [
    { "species": "Red Mullet", "probability": 0.9901 },
    { "species": "Shrimp", "probability": 0.0076 },
    { "species": "Striped Red Mullet", "probability": 0.0018 }
  ]
}
```

#### `GET /sample-images` — List Built-in Test Images
Returns the catalogue of 9 built-in sample fish images that can be used to test `/analyze-image`.
```bash
curl http://127.0.0.1:8000/sample-images
```

---

## 📂 Project Architecture

```
Oceanography/
├── backend_taxonomy/               # FastAPI standalone backend
│   ├── api.py                      # Production API endpoints, Pydantic schemas & inference
│   └── requirements.txt            # Python dependencies
├── postman_collection.json         # Postman collection (importable, v2.1)
├── api_tests.http                  # ThunderClient / VS Code REST Client test suite
├── models/                         # Trained ML models
│   ├── fish_classifier.pth         # PyTorch CNN weights (94.07% validation accuracy)
│   ├── fish_classes.json           # 9 species class mapping
│   ├── ocean_model.joblib          # RandomForest + GradientBoosting ensembles (R² = 0.9745)
│   ├── taxonomy_pipeline.joblib    # 7-rank genomic taxonomy pipeline
│   └── taxonomy_model.pth          # PyTorch Multi-head Neural Network
├── sample_images/                  # 9 sample fish images for instant testing
├── README.md                       # Documentation
└── LICENSE                         # MIT License
```

---

## 📄 License
This project is licensed under the **MIT License**.
