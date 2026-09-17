"""
app.py — OceanVision entry point
=================================
Thin launcher. All application logic lives in app/ (MVC structure).

Run development server
----------------------
    python app.py                    # uses FLASK_ENV=development by default

Run with a WSGI server (production)
------------------------------------
    gunicorn "app:create_app()" --bind 0.0.0.0:5000

Project layout
--------------
    app.py                    ← this file (entry point only)
    config.py                 ← environment-based configuration factory
    app/
      factory.py              ← create_app() — wires everything together
      models/
        registry.py           ← ModelRegistry singleton (thread-safe, lazy)
      services/
        vision_service.py     ← YOLOv8 + MobileNetV2 + OpenCV pipeline
        taxonomy_service.py   ← DNA k-mer → taxonomy prediction
        ocean_service.py      ← environmental data → species count
        species_service.py    ← fish database queries
      controllers/
        pages_bp.py           ← GET /  and  GET /frontend/<page>
        health_bp.py          ← GET /api/v1/health
        vision_bp.py          ← POST /api/v1/analyze
        taxonomy_bp.py        ← POST /api/v1/predict  (+ legacy /predict)
        ocean_bp.py           ← POST /api/v1/predict-ocean  (+ legacy alias)
        species_bp.py         ← GET  /api/v1/species[/<key>]  /map-data
    core/
      feature_extractor.py    ← 30-feature OpenCV extractor
      fish_db.py              ← species database + scoring
    models/                   ← trained model weight files
      fish_classifier_mobilenetv2.keras
      yolov8n.pt
      taxonomy_model.h5
      artifacts/              ← taxonomy pkl files
    frontend_taxonomy/        ← legacy research portal HTML pages
    templates/index.html      ← OceanVision SPA
    static/                   ← CSS + JS for the SPA
"""

import os
from app import create_app

flask_app = create_app()

if __name__ == "__main__":
    port  = int(os.getenv("FLASK_PORT", 5000))
    debug = os.getenv("FLASK_DEBUG", "true").lower() == "true"
    flask_app.run(host="0.0.0.0", port=port, debug=debug)
