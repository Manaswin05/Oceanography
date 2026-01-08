# Taxonomical Classification Web Application

A full-stack web application for **taxonomical classification of genetic sequences** using a trained deep learning model.  
The system provides a modern web interface for user input and a FastAPI backend that performs feature engineering, model inference, and returns hierarchical taxonomy predictions.

---

## 🚀 Features

- 🔬 Predicts taxonomy at **7 biological levels**:
  - Kingdom
  - Phylum
  - Class
  - Order
  - Family
  - Genus
  - Species
- ⚡ FastAPI backend for high-performance inference
- 🧠 Deep learning model (`.h5`) with supporting ML artifacts (`.pkl`)
- 🌐 Modern HTML/CSS/JavaScript frontend
- 🔄 REST API integration using JSON
- 📊 Real-time prediction results displayed on UI
- 🧪 Interactive API testing via Swagger (`/docs`)

---

## 🏗️ Project Structure

```text
taxonomy/
│
├── backend_taxonomy/
│   ├── api.py                  # FastAPI application
│   ├── taxonomy_model.h5       # Trained deep learning model
│   ├── artifacts/
│   │   ├── kmer_index.pkl
│   │   ├── filter_encoder.pkl
│   │   ├── reads_scaler.pkl
│   │   └── label_encoders.pkl
│   └── requirements.txt
│
├── frontend_taxonomy/
│   └── index.html              # User interface
│
├── README.md
└── .gitignore
```

---

## ⚙️ Tech Stack

### Backend
- Python
- FastAPI
- TensorFlow / Keras
- NumPy
- Joblib
- Uvicorn

### Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/salil-kulkarni-03/Taxonomical_Analysis.git
cd taxonomy
```

### 2️⃣ Create & Activate Conda Environment
```bash
conda create -n taxonomy python=3.10 -y
conda activate taxonomy
```

### 3️⃣ Install Backend Dependencies
```bash
cd backend_taxonomy
pip install -r requirements.txt
```

### 4️⃣ Run FastAPI Server
```bash
python -m uvicorn api:app --reload
```

Backend URL:  
http://127.0.0.1:8000  

Swagger Docs:  
http://127.0.0.1:8000/docs  

---

### 5️⃣ Run Frontend

- Open `frontend_taxonomy/index.html` directly  
**OR**
- Use **VS Code Live Server** (recommended)

Frontend URL (typical):  
http://127.0.0.1:5500  

---

## 🔌 API Endpoint

### POST `/predict`

#### Request Body (JSON)
```json
{
  "sequence": "ATCGATCGATCG",
  "filter_id": "sample-001-alpha",
  "reads": 15000
}
```

#### Response
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

---

## 🧠 Model Workflow

- Input sequence is converted into **k-mers**
- K-mers are vectorized using **precomputed indices**
- Metadata (`filter_id`, `reads`) is **encoded and scaled**
- Combined features are passed into the **trained neural network**
- Output predictions are **decoded into taxonomy labels**

---

## 🛡️ Notes

- Ensure all `.pkl` and `.h5` files are present in correct directories
- Frontend and backend run on different ports (**CORS enabled**)
- Use `/docs` to test the API independently

---

## 📌 Future Enhancements

- Docker deployment
- Authentication
- Batch predictions
- Model confidence visualization
- Cloud hosting (AWS / Azure)