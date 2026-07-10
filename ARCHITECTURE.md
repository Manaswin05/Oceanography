# 🏗️ System Architecture

## High-Level Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                         USER BROWSER                            │
│                     http://127.0.0.1:5500                       │
└────────────────────────┬───────────────────────────────────────┘
                         │
                         │ HTTP/HTTPS
                         │
┌────────────────────────▼───────────────────────────────────────┐
│                    FRONTEND LAYER                               │
│                 (Static HTML/CSS/JS)                            │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  index.html  │  │ taxonomy.html│  │   oc.html    │        │
│  │  Main Portal │  │ DNA Analysis │  │  Ocean Data  │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐                           │
│  │otolithogra.. │  │  stream.html │                           │
│  │Image Analysis│  │   Datasets   │                           │
│  └──────────────┘  └──────────────┘                           │
│                                                                  │
└────────────────────────┬───────────────────────────────────────┘
                         │
                         │ REST API (JSON)
                         │ Fetch API calls
                         │
┌────────────────────────▼───────────────────────────────────────┐
│                    BACKEND LAYER                                │
│                  FastAPI Application                            │
│                  http://127.0.0.1:8000                         │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │                    API Endpoints                         │  │
│  │                                                           │  │
│  │  GET  /              → Health Check                      │  │
│  │  POST /predict       → Taxonomy Classification           │  │
│  │  POST /predict-ocean → Ocean Data Prediction            │  │
│  │  POST /analyze-image → Image Analysis                   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │               Middleware & Services                      │  │
│  │                                                           │  │
│  │  • CORS Handler (Cross-Origin Resource Sharing)         │  │
│  │  • Request Validation (Pydantic Models)                 │  │
│  │  • Error Handling                                        │  │
│  │  • File Upload Handler (multipart/form-data)           │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                  │
└────────────────────────┬───────────────────────────────────────┘
                         │
                         │
┌────────────────────────▼───────────────────────────────────────┐
│                   ML MODELS & DATA                              │
├────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐                   │
│  │ Taxonomy Model   │  │  Ocean Model     │                   │
│  │                  │  │  (Placeholder)   │                   │
│  │ TensorFlow/Keras │  │                  │                   │
│  │ taxonomy_model.h5│  │  Rule-based      │                   │
│  └──────────────────┘  └──────────────────┘                   │
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐                   │
│  │ Image Model      │  │  Artifacts       │                   │
│  │ (Placeholder)    │  │                  │                   │
│  │                  │  │ • kmer_index.pkl │                   │
│  │ CV Model         │  │ • encoders.pkl   │                   │
│  │                  │  │ • scalers.pkl    │                   │
│  └──────────────────┘  └──────────────────┘                   │
│                                                                  │
└────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagrams

### 1. Taxonomical Analysis Flow

```
┌─────────┐
│  User   │
└────┬────┘
     │
     │ 1. Opens taxonomy.html
     ▼
┌──────────────────┐
│  taxonomy.html   │
│                  │
│  User enters:    │
│  • DNA Sequence  │
│  • Filter ID     │
│  • Reads count   │
└────┬─────────────┘
     │
     │ 2. Submit form
     │    fetch('http://127.0.0.1:8000/predict')
     ▼
┌──────────────────┐
│  Backend API     │
│  POST /predict   │
│                  │
│  1. Load model   │◄────┐
│  2. Vectorize    │     │
│  3. Transform    │     │ artifacts/
│  4. Predict      │     │ - kmer_index.pkl
│  5. Decode       │     │ - filter_encoder.pkl
└────┬─────────────┘     │ - reads_scaler.pkl
     │                   │ - label_encoders.pkl
     │                   └─────┘
     │ 3. Return JSON
     │    { taxonomy: {...}, confidence: {...} }
     ▼
┌──────────────────┐
│  taxonomy.html   │
│                  │
│  Display:        │
│  • Kingdom       │
│  • Phylum        │
│  • Class         │
│  • Order         │
│  • Family        │
│  • Genus         │
│  • Species       │
│  + Confidence %  │
└──────────────────┘
```

### 2. Ocean Data Flow

```
┌─────────┐
│  User   │
└────┬────┘
     │
     │ 1. Opens oc.html
     ▼
┌──────────────────┐
│    oc.html       │
│                  │
│  User enters:    │
│  • Location      │
│  • Coordinates   │
│  • Temperature   │
│  • pH Level      │
│  • Bleaching     │
│  • Heatwave      │
└────┬─────────────┘
     │
     │ 2. Submit form
     │    fetch('http://127.0.0.1:8000/predict-ocean')
     ▼
┌──────────────────┐
│  Backend API     │
│ POST /predict-   │
│      ocean       │
│                  │
│ Process:         │
│ 1. Validate      │
│ 2. Calculate     │
│ 3. Adjust base   │
│ 4. Return pred   │
└────┬─────────────┘
     │
     │ 3. Return JSON
     │    { predicted_species_observed: 42.5 }
     ▼
┌──────────────────┐
│    oc.html       │
│                  │
│  Show alert:     │
│  "Predicted      │
│   Species: 42.5" │
└──────────────────┘
```

### 3. Image Analysis Flow

```
┌─────────┐
│  User   │
└────┬────┘
     │
     │ 1. Opens otolithography.html
     ▼
┌──────────────────┐
│ otolithography   │
│      .html       │
│                  │
│  User actions:   │
│  1. Upload image │
│  2. Select type: │
│     - Taxonomy   │
│     - Otolith    │
│     - Habitat    │
└────┬─────────────┘
     │
     │ 2. Submit
     │    fetch('http://127.0.0.1:8000/analyze-image')
     │    FormData: file + analysis_type
     ▼
┌──────────────────┐
│  Backend API     │
│ POST /analyze-   │
│      image       │
│                  │
│ Process:         │
│ 1. Receive file  │
│ 2. Analyze type  │
│ 3. Run model     │
│ 4. Return result │
└────┬─────────────┘
     │
     │ 3. Return JSON
     │    { species, family, characteristics,
     │      size, habitat, confidence }
     ▼
┌──────────────────┐
│ otolithography   │
│      .html       │
│                  │
│  Display:        │
│  • Species       │
│  • Family        │
│  • Traits        │
│  • Size          │
│  • Habitat       │
│  • Confidence    │
│    bar           │
└──────────────────┘
```

---

## Component Interactions

### Frontend Components

```
index.html
    │
    ├─→ taxonomy.html
    │   └─→ /predict API
    │       └─→ taxonomy_model.h5
    │
    ├─→ oc.html
    │   └─→ /predict-ocean API
    │       └─→ Ocean Model (mock)
    │
    ├─→ otolithography.html
    │   └─→ /analyze-image API
    │       └─→ Image Model (mock)
    │
    └─→ stream.html
        └─→ (No backend - pure frontend)
```

### Backend Components

```
api.py
    │
    ├─→ Middleware
    │   ├─→ CORS
    │   └─→ Error Handling
    │
    ├─→ Models (Pydantic)
    │   ├─→ TaxonomyInput
    │   ├─→ OceanDataInput
    │   └─→ ImageAnalysisResponse
    │
    ├─→ Endpoints
    │   ├─→ GET  /
    │   ├─→ POST /predict
    │   ├─→ POST /predict-ocean
    │   └─→ POST /analyze-image
    │
    └─→ ML Models
        ├─→ taxonomy_model.h5
        └─→ artifacts/
            ├─→ kmer_index.pkl
            ├─→ filter_encoder.pkl
            ├─→ reads_scaler.pkl
            └─→ label_encoders.pkl
```

---

## Technology Stack Details

### Frontend Technologies

```
┌──────────────────────────────────────┐
│           Browser Layer               │
├──────────────────────────────────────┤
│                                       │
│  HTML5                                │
│  • Semantic markup                    │
│  • Forms with validation              │
│  • File upload input                  │
│                                       │
│  CSS3                                 │
│  • Custom properties (variables)      │
│  • Grid & Flexbox layouts            │
│  • Animations & transitions           │
│  • Glassmorphism effects             │
│                                       │
│  JavaScript (ES6+)                    │
│  • Fetch API for HTTP requests        │
│  • Async/Await                        │
│  • FormData for file uploads          │
│  • DOM manipulation                   │
│  • Event handling                     │
│                                       │
│  External Libraries                   │
│  • Font Awesome 6.4.0 (Icons)        │
│                                       │
└──────────────────────────────────────┘
```

### Backend Technologies

```
┌──────────────────────────────────────┐
│          Python Backend               │
├──────────────────────────────────────┤
│                                       │
│  FastAPI                              │
│  • REST API framework                 │
│  • Automatic OpenAPI docs             │
│  • Type validation                    │
│  • Async support                      │
│                                       │
│  Pydantic                             │
│  • Data validation                    │
│  • Type hints                         │
│  • Auto serialization                 │
│                                       │
│  TensorFlow/Keras                     │
│  • Deep learning models               │
│  • Model loading & inference          │
│                                       │
│  NumPy                                │
│  • Array operations                   │
│  • Vectorization                      │
│                                       │
│  Joblib                               │
│  • Model serialization                │
│  • Artifact loading                   │
│                                       │
│  Uvicorn                              │
│  • ASGI server                        │
│  • Hot reload support                 │
│                                       │
└──────────────────────────────────────┘
```

---

## Security & Performance

### CORS Configuration
```python
origins = [
    "http://127.0.0.1:5500",    # Frontend dev server
    "http://localhost:5500",     # Alternative
    "http://127.0.0.1:8000",    # Backend
    "*"                          # All (dev only)
]
```

### Request Validation
- All inputs validated via Pydantic models
- Type checking on all endpoints
- Automatic error responses for invalid data

### Error Handling
```python
try:
    # Process request
    return result
except Exception as e:
    return {"error": str(e), "status": "failed"}
```

---

## Scalability Considerations

### Current Architecture (Development)
- Single-threaded server
- In-memory model loading
- No caching
- No load balancing

### Production Recommendations

```
┌─────────────────────────────────────────────────┐
│              Load Balancer (Nginx)               │
└─────────────┬───────────────────────────────────┘
              │
        ┌─────┴─────┬──────────┬─────────┐
        │           │          │         │
        ▼           ▼          ▼         ▼
    ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
    │ API 1  │ │ API 2  │ │ API 3  │ │ API N  │
    └────────┘ └────────┘ └────────┘ └────────┘
        │           │          │         │
        └───────────┴──────────┴─────────┘
                    │
            ┌───────▼────────┐
            │   Redis Cache   │
            └────────────────┘
                    │
            ┌───────▼────────┐
            │   PostgreSQL    │
            │   (User Data)   │
            └────────────────┘
```

---

## Deployment Architecture

### Docker Containers

```
┌─────────────────────────────────────┐
│         Docker Compose               │
├─────────────────────────────────────┤
│                                      │
│  ┌────────────────────────────────┐ │
│  │   Frontend Container            │ │
│  │   • Nginx                       │ │
│  │   • Static files                │ │
│  │   Port: 80                      │ │
│  └────────────────────────────────┘ │
│                                      │
│  ┌────────────────────────────────┐ │
│  │   Backend Container             │ │
│  │   • Python 3.10                 │ │
│  │   • FastAPI + Uvicorn          │ │
│  │   • ML Models                   │ │
│  │   Port: 8000                    │ │
│  └────────────────────────────────┘ │
│                                      │
└─────────────────────────────────────┘
```

---

## Monitoring & Logging

### Recommended Tools

```
Application Logs
    │
    ├─→ FastAPI logging
    ├─→ Uvicorn access logs
    └─→ Custom error tracking
         │
         └─→ Sentry (Error tracking)
         └─→ ELK Stack (Log aggregation)

Performance Metrics
    │
    ├─→ Request latency
    ├─→ Model inference time
    └─→ API endpoint usage
         │
         └─→ Prometheus + Grafana
```

---

## Future Architecture Enhancements

1. **Microservices Split**
   - Taxonomy Service
   - Ocean Data Service
   - Image Analysis Service
   - User Management Service

2. **Message Queue**
   - RabbitMQ or Kafka
   - Async processing
   - Background jobs

3. **Database Layer**
   - PostgreSQL for structured data
   - MongoDB for unstructured data
   - S3 for image storage

4. **CI/CD Pipeline**
   - GitHub Actions
   - Automated testing
   - Docker builds
   - Deployment automation

---

**Architecture designed for:**
- 🔄 Easy maintenance
- 📈 Horizontal scaling
- 🔒 Security
- 🚀 Performance
- 📊 Monitoring
