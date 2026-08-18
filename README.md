# Marine Research Portal - Oceanography Analysis Platform

A comprehensive web platform for marine biology research, featuring taxonomical analysis, oceanographic data collection, image analysis, and research datasets.

## � Project Structure

```
Taxonomical_Analysis/
├── backend_taxonomy/          # Backend API Server
│   ├── api.py                # Main FastAPI application
│   ├── requirements.txt      # Python dependencies
│   ├── taxonomy_model.h5     # Trained ML model
│   └── artifacts/            # ML model artifacts
│       ├── kmer_index.pkl
│       ├── filter_encoder.pkl
│       ├── reads_scaler.pkl
│       └── label_encoders.pkl
│
└── frontend_taxonomy/         # Frontend Web Application
    ├── index.html            # Main landing page (portal hub)
    ├── taxonomy.html         # DNA sequence taxonomical analysis
    ├── oc.html              # Ocean data entry & prediction
    ├── otolithography.html  # Image analysis for marine specimens
    └── stream.html          # Research datasets repository
```

## 🎯 Features

### 1. **Taxonomical Analysis** (`taxonomy.html`)
- DNA sequence analysis for species identification
- 7-level taxonomy classification (Kingdom → Species)
- Confidence scoring for each taxonomic level
- Real-time API integration

### 2. **Ocean Data Analysis** (`oc.html`)
- Environmental data collection
- Coral bleaching severity tracking
- Marine heatwave monitoring
- Species population prediction based on environmental factors

### 3. **Image Analysis** (`otolithography.html`)
- Upload marine specimen images
- Three analysis modes:
  - Taxonomical Analysis
  - Otolithographical Analysis
  - Habitat Analysis
- Automated species identification with confidence scores

### 4. **Research Database** (`stream.html`)
- Browse and download marine research datasets
- Filter by category (Temperature, Species, Water Quality, etc.)
- Search functionality
- Dataset metadata and descriptions

## 🚀 Getting Started

### Quick Start (Using Concurrently - Recommended!)

**Prerequisites:**
- Node.js installed ([Download](https://nodejs.org/))
- Python 3.8+ installed ([Download](https://www.python.org/))

**One-Command Startup:**

```bash
# 1. Install dependencies (first time only)
npm install
cd backend_taxonomy && pip install -r requirements.txt && cd ..

# 2. Start both backend and frontend
npm start
```

**Or use the startup scripts:**

```bash
# Windows
start.bat

# Linux/Mac
chmod +x start.sh
./start.sh
```

That's it! Both servers will start with color-coded output:
- 🔵 Backend: http://127.0.0.1:8000
- 🟢 Frontend: http://127.0.0.1:5500

See `STARTUP_GUIDE.md` for detailed instructions.

---

### Alternative: Manual Setup

If you prefer to run servers separately:

### Backend Setup

1. **Create Conda Environment:**
```bash
conda create -n taxonomy python=3.10 -y
conda activate taxonomy
```

2. **Install Python dependencies:**
```bash
cd backend_taxonomy
pip install -r requirements.txt
```

3. **Prepare ML artifacts:**
   - Ensure your trained models are in the `artifacts/` folder:
     - `taxonomy_model.h5` (main model)
     - `kmer_index.pkl`
     - `filter_encoder.pkl`
     - `reads_scaler.pkl`
     - `label_encoders.pkl`

4. **Start the backend server:**
```bash
python -m uvicorn api:app --reload
```

The API will be available at: `http://127.0.0.1:8000`

API Documentation: `http://127.0.0.1:8000/docs`

### Frontend Setup

1. **Serve the frontend files:**
   
   **Option A: Using Live Server (VSCode)**
   - Install the "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"
   - Default URL: `http://127.0.0.1:5500`

   **Option B: Using Python HTTP Server**
   ```bash
   cd frontend_taxonomy
   python -m http.server 5500
   ```

   **Option C: Open directly**
   - Simply open `index.html` in your browser

2. **Access the application:**
   - Open browser to `http://127.0.0.1:5500/index.html`

## 🔌 API Endpoints

### Health Check
```http
GET http://127.0.0.1:8000/
```
Returns API status and available endpoints

### Taxonomical Analysis
```http
POST http://127.0.0.1:8000/predict
Content-Type: application/json

{
  "sequence": "ATCGATCGATCG...",
  "filter_id": "sample-001-alpha",
  "reads": 15000
}
```

**Response:**
```json
{
  "taxonomy": {
    "Kingdom": "Eukaryota",
    "Phylum": "Arthropoda",
    "Class": "Hexanauplia",
    "Order": "Calanoida",
    "Family": "Paracalanidae",
    "Genus": "Paracalanus",
    "Species": "unassigned"
  },
  "confidence": {
    "Kingdom": 0.98,
    "Phylum": 0.95,
    "Class": 0.92,
    "Order": 0.90,
    "Family": 0.88,
    "Genus": 0.85,
    "Species": 0.80
  }
}
```

### Ocean Data Prediction
```http
POST http://127.0.0.1:8000/predict-ocean
Content-Type: application/json

{
  "Location": "Great Barrier Reef",
  "Latitude": -27.4698,
  "Longitude": 153.0251,
  "SST": 29.5,
  "pH_Level": 8.1,
  "Year": 2025,
  "Month": 7,
  "Bleaching_Severity": "Moderate",
  "Marine_Heatwave": false
}
```

**Response:**
```json
{
  "predicted_species_observed": 42.50,
  "location": "Great Barrier Reef",
  "status": "success"
}
```

### Image Analysis
```http
POST http://127.0.0.1:8000/analyze-image
Content-Type: multipart/form-data

file: <image_file>
analysis_type: "taxonomy" | "otolith" | "habitat"
```

**Response:**
```json
{
  "species": "Thunnus albacares (Yellowfin Tuna)",
  "family": "Scombridae",
  "characteristics": "Yellow finlets, elongated dorsal and anal fins, metallic dark blue back",
  "size": "Estimated 1.2m length, 25kg weight",
  "habitat": "Tropical and subtropical oceans worldwide",
  "confidence": 0.92
}
```

## 🎨 Design Theme

The platform features a modern oceanography-inspired design:
- **Colors:** Deep blue gradient background (#0a192f → #14375c) with cyan accents (#64ffda)
- **Animations:** Floating bubbles, wave animations
- **UI:** Glassmorphism cards with hover effects
- **Responsive:** Mobile-friendly grid layouts
- **Icons:** Font Awesome 6.4.0

## 🛠 Technology Stack

### Backend
- **FastAPI** - Modern Python web framework
- **TensorFlow/Keras** - Machine learning models
- **NumPy** - Numerical computing
- **Joblib** - Model serialization
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server

### Frontend
- **HTML5/CSS3** - Structure and styling
- **Vanilla JavaScript** - Interactive functionality
- **Font Awesome** - Icon library
- **Fetch API** - Backend communication

## 📊 Data Models

### Taxonomy Input
```python
{
  "sequence": str,      # DNA sequence (ATCG format)
  "filter_id": str,     # Sample identifier
  "reads": int          # Number of reads
}
```

### Ocean Data Input
```python
{
  "Location": str,
  "Latitude": float,
  "Longitude": float,
  "SST": float,                    # Sea Surface Temperature (°C)
  "pH_Level": float,
  "Year": int,
  "Month": int,                    # 1-12
  "Bleaching_Severity": str,       # None/Low/Moderate/High/Severe
  "Marine_Heatwave": bool
}
```

## 🔧 Configuration

### CORS Settings
The backend is configured to accept requests from:
- `http://127.0.0.1:5500`
- `http://localhost:5500`
- `http://127.0.0.1:8000`
- `http://localhost:8000`
- `*` (all origins - development only)

To modify CORS settings, edit `backend_taxonomy/api.py`:
```python
origins = [
    "your-frontend-url",
    "*"  # Allow all (development only)
]
```

## 📝 Development Notes

### Current Implementation Status

✅ **Fully Implemented:**
- Complete frontend UI for all 5 modules
- Backend API structure with FastAPI
- CORS configuration
- Frontend-backend integration
- Taxonomical analysis with ML model
- File upload handling

⚠️ **Placeholder/Mock Functions:**
- Ocean data prediction (uses simple rule-based logic)
- Image analysis (returns static responses)

🔄 **Ready for Real Models:**
Replace placeholder logic in:
- `/predict-ocean` endpoint
- `/analyze-image` endpoint

## 🧠 Model Workflow (Taxonomy)

1. Input DNA sequence is converted into **k-mers** (k=4)
2. K-mers are vectorized using **precomputed indices**
3. Metadata (`filter_id`, `reads`) is **encoded and scaled**
4. Combined features are passed into the **trained neural network**
5. Output predictions are **decoded into taxonomy labels**
6. Confidence scores are calculated for each taxonomic level

## � Troubleshooting

### Backend won't start
- Ensure all dependencies are installed: `pip install -r requirements.txt`
- Check Python version (3.8+ recommended, 3.10 tested)
- Verify port 8000 is not in use
- Ensure model files exist in correct paths

### Frontend can't connect to backend
- Verify backend is running at `http://127.0.0.1:8000`
- Check browser console for CORS errors
- Ensure correct API URLs in frontend files (should be `http://127.0.0.1:8000`)
- Try accessing `/docs` endpoint to verify API is running

### Model not found errors
- Verify `taxonomy_model.h5` exists in `backend_taxonomy/`
- Create `artifacts/` folder in `backend_taxonomy/`
- Place all `.pkl` files in artifacts folder
- Verify file names match code references exactly

### CORS errors
- Ensure backend CORS middleware is configured
- Check that frontend URL is in the `origins` list
- Clear browser cache and restart both servers

## 📌 Future Enhancements

- [ ] Docker containerization
- [ ] User authentication and authorization
- [ ] Database integration for storing analysis results
- [ ] Batch predictions for multiple sequences
- [ ] Advanced data visualizations
- [ ] Real ML models for ocean data prediction
- [ ] Actual computer vision models for image analysis
- [ ] Export reports as PDF
- [ ] Cloud deployment (AWS/Azure/GCP)
- [ ] Real-time collaboration features

## 📜 License

This project is part of the Global Marine Conservation Initiative.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Create a Pull Request

## 🙏 Acknowledgments

- Marine Biology Research Community
- TensorFlow and FastAPI teams
- Font Awesome for icons
- Global Marine Conservation Initiative

## 📧 Contact

For questions or support, please contact the Marine Research Portal team.

---

**Marine Research Portal** | Advanced Oceanography Analysis Platform © 2025
