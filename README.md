# OceanVision 🐠
### AI-Powered Marine Species Intelligence Platform

A multi-model fish identification and oceanographic research web app — upload any fish photograph and get instant species ID, habitat mapping, migration routes, and ecological data.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/Manaswin05/Oceanography)
[![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-black?logo=flask)](https://flask.palletsprojects.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## What it does

| Feature | Detail |
|---|---|
| **Fish identification** | YOLOv8n detection + MobileNetV2 species classification + 30-feature OpenCV morphological analysis |
| **Interactive ocean map** | Leaflet.js with Esri Ocean tiles, habitat polygons, migration routes, species density heatmap |
| **Species database** | Searchable encyclopaedia of Indian Ocean species with IUCN conservation status |
| **DNA taxonomy** | k-mer vectorisation → 7-level taxonomic classification (Kingdom → Species) |
| **Ocean data prediction** | Environmental parameters (SST, pH, bleaching severity) → predicted species count |
| **Otolith analysis** | Research portal for CMLRE otolith image data |

---

## Tech stack

**Backend** — Flask 3, TensorFlow 2.17 (Keras), Ultralytics YOLOv8, OpenCV, scikit-learn, Gunicorn  
**Frontend** — Vanilla JS, Leaflet.js, Chart.js, Font Awesome, Google Fonts  
**Deployment** — Render (web service), Gunicorn WSGI

---

## Local setup

### Prerequisites
- Python 3.11
- Node.js 18+ (only needed for the `npm run dev` convenience script)
- The three model weight files (see [Model weights](#model-weights) below)

### Steps

```bash
# 1. Clone
git clone https://github.com/Manaswin05/Oceanography.git
cd Oceanography

# 2. Create virtual environment
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # macOS / Linux

# 3. Install Python dependencies
pip install -r requirements.txt

# 4. Copy environment file and edit if needed
copy .env.example .env

# 5. Place model weights (see section below)
#    models/fish_classifier_mobilenetv2.keras
#    models/yolov8n.pt
#    models/taxonomy_model.h5
#    models/artifacts/kmer_index.pkl  (+ 3 other pkl files)

# 6. (First time only) Generate taxonomy artifacts from the dataset
python scripts/generate_artifacts.py

# 7. Run
python app.py
# → http://127.0.0.1:5000
```

To run the legacy research portal pages alongside Flask:
```bash
npm install
npm run dev      # starts Flask on :5000 and http-server on :5500 concurrently
```

---

## Model weights

The binary model files are **not stored in git** (too large). You have two options:

### Option A — Manual copy
Place the files into `models/`:
```
models/
  fish_classifier_mobilenetv2.keras   (~14 MB)
  yolov8n.pt                          (~6 MB)
  taxonomy_model.h5                   (~varies)
  artifacts/
    kmer_index.pkl
    filter_encoder.pkl
    reads_scaler.pkl
    label_encoders.pkl
```

### Option B — External storage + env vars
Host the files on Google Drive / HuggingFace Hub / S3, then set these env vars and run `scripts/download_models.py` at build time:
```
KERAS_MODEL_URL=https://...
YOLO_MODEL_URL=https://...
TAXONOMY_MODEL_URL=https://...
ARTIFACTS_URL=https://...   # tar.gz of the artifacts/ folder
```

> The app **starts and serves immediately** even without model weights — it gracefully falls back to OpenCV-only analysis. Set `FLASK_ENV=development` to skip the production guards.

---

## Deploy on Render

The repo ships with a `render.yaml` that configures everything automatically.

### Steps

1. Push this repo to GitHub (your `Manaswin05/Oceanography` repo).

2. Go to [dashboard.render.com](https://dashboard.render.com) → **New → Web Service → Connect a repository**.

3. Select `Manaswin05/Oceanography`. Render will detect `render.yaml` and pre-fill all settings.

4. Set your model weight env vars in **Environment** (or upload weights to a Render Disk — see below).

5. Click **Deploy**.

### Render persistent disk (recommended for model weights)

On the Render dashboard for your service:
- **Disks** → **Add Disk** → mount path `/opt/render/project/src/models` → 1 GB
- Upload your `.keras`, `.pt`, `.h5`, and `.pkl` files via SFTP or the Render Shell.

The app reads weights from `models/` at startup — no env vars needed if the disk is mounted at that path.

### Important Render notes

| Thing | Why it matters |
|---|---|
| **Plan: Starter ($7/mo)** | Free tier only has 512 MB RAM — TensorFlow alone needs ~1.2 GB. Upgrade to Starter. |
| **`--workers 1`** | Each worker loads a full TF session. 1 worker + 4 threads is the right balance on Starter. |
| **`--preload`** | Loads the app once before forking threads — saves ~400 MB vs per-worker loading. |
| **`--timeout 120`** | TF model loading can take 30–60 s on a cold start. |
| **Health check** | Render pings `/api/v1/health` to confirm the service is up. The background model loader means this responds immediately even while Keras is still loading. |

---

## Project structure

```
OceanVision/
├── app.py                  ← Dev entry point
├── wsgi.py                 ← Production WSGI (Gunicorn / Render)
├── config.py               ← Environment-based config factory
├── render.yaml             ← Render deployment config
├── Procfile                ← Fallback for Heroku-style hosts
├── requirements.txt
│
├── app/
│   ├── factory.py          ← create_app() — two-phase startup
│   ├── controllers/        ← Flask blueprints (health, vision, taxonomy, ocean, species, pages)
│   ├── models/
│   │   └── registry.py     ← Thread-safe ModelRegistry (phase-1 light, phase-2 background)
│   └── services/           ← Business logic (vision, taxonomy, ocean, species)
│
├── core/
│   ├── feature_extractor.py  ← 30-feature OpenCV morphological extractor
│   └── fish_db.py            ← Hardcoded species database + scoring
│
├── models/                 ← Model weights (gitignored — place manually or download)
│   └── artifacts/          ← Taxonomy pkl artifacts
│
├── templates/index.html    ← OceanVision SPA (Jinja2)
├── static/
│   ├── css/style.css
│   └── js/main.js
│
├── frontend_taxonomy/      ← Legacy research portal (DNA taxonomy, ocean data, otolith)
├── data/                   ← CSV datasets (ASV table, ocean climate, otolith metadata)
└── scripts/
    ├── generate_artifacts.py   ← Builds taxonomy pkl files from asv_table.csv
    └── verify_setup.py         ← Checks all deps and model files
```

---

## API endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/v1/health` | Full model status + species count |
| `GET` | `/api/v1/ready` | Lightweight readiness probe (polled by loading screen) |
| `POST` | `/api/v1/analyze` | Fish image analysis (multipart, field: `image`) |
| `POST` | `/api/v1/predict` | DNA taxonomy prediction (JSON) |
| `POST` | `/api/v1/predict-ocean` | Ocean environment → species count (JSON) |
| `GET` | `/api/v1/species` | List all species (`?query=&habitat=`) |
| `GET` | `/api/v1/species/<key>` | Single species by key |
| `GET` | `/api/v1/map-data` | Lightweight species list for Leaflet map |

---

## Environment variables

| Variable | Default | Description |
|---|---|---|
| `FLASK_ENV` | `development` | `development` or `production` |
| `SECRET_KEY` | auto-generated | Flask session secret (set a real value in production) |
| `FLASK_PORT` | `5000` | Port for dev server |
| `FLASK_DEBUG` | `true` | Enable Flask debug mode |
| `PORT` | `5000` | Used by Render / Gunicorn |

---

## License

MIT © [Manaswin](https://github.com/Manaswin05)
