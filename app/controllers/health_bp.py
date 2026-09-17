"""
app/controllers/health_bp.py
=============================
health_bp — system health & readiness checks.

Routes
------
    GET  /api/v1/health   — full model status (stable)
    GET  /api/v1/ready    — lightweight readiness probe (polled by UI loading screen)
"""

from flask import Blueprint, jsonify

from app.models   import ModelRegistry
from app.services import SpeciesService

health_bp = Blueprint("health", __name__, url_prefix="/api/v1")


@health_bp.route("/health", methods=["GET"])
def health():
    """
    Returns the operational status of every subsystem.

    Response
    --------
    {
        "status":            "ok",
        "keras_model":       bool,
        "yolo_model":        bool,
        "taxonomy_model":    bool,
        "light_data_ready":  bool,
        "models_ready":      bool,
        "species_count":     int,
        "conservation":      {status: count}
    }
    """
    registry = ModelRegistry.get_instance()
    stats    = SpeciesService.health_stats()

    return jsonify({
        "status":          "ok",
        **registry.status(),
        "species_count":   stats["total_species"],
        "conservation":    stats["conservation_summary"],
    })


@health_bp.route("/ready", methods=["GET"])
def ready():
    """
    Lightweight readiness probe — polled every second by the frontend
    loading screen while heavy models are loading in the background.

    Response
    --------
    {
        "light_data_ready": bool,   # species DB available
        "models_ready":     bool,   # Keras + YOLO finished (success or fail)
        "keras_ready":      bool,
        "yolo_ready":       bool,
        "steps": [
            {"key": str, "label": str, "state": str, "elapsed_ms": int},
            ...
        ],
        "error": str | null
    }

    States: "loading" | "ready" | "missing" | "unavailable" | "error"
    """
    registry = ModelRegistry.get_instance()
    return jsonify(registry.ready_payload())
