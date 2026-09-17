"""
config.py
=========
Centralised application configuration.

Usage
-----
    from config import get_config
    cfg = get_config()           # picks FLASK_ENV from environment

Or explicitly:
    from config import DevelopmentConfig, ProductionConfig
"""

import os
from pathlib import Path

# ── Absolute project root (one level up from this file) ────
ROOT_DIR      = Path(__file__).resolve().parent
MODELS_DIR    = ROOT_DIR / "models"
ARTIFACTS_DIR = MODELS_DIR / "artifacts"
UPLOADS_DIR   = ROOT_DIR / "uploads"
STATIC_DIR    = ROOT_DIR / "static"
TEMPLATES_DIR = ROOT_DIR / "templates"
FRONTEND_DIR  = ROOT_DIR / "frontend_taxonomy"

# ── Model file paths ───────────────────────────────────────
KERAS_MODEL_PATH    = MODELS_DIR / "fish_classifier_mobilenetv2.keras"
YOLO_MODEL_PATH     = MODELS_DIR / "yolov8n.pt"
TAXONOMY_MODEL_PATH = MODELS_DIR / "taxonomy_model.h5"

# Taxonomy pkl artifacts
KMER_INDEX_PATH     = ARTIFACTS_DIR / "kmer_index.pkl"
FILTER_ENCODER_PATH = ARTIFACTS_DIR / "filter_encoder.pkl"
READS_SCALER_PATH   = ARTIFACTS_DIR / "reads_scaler.pkl"
LABEL_ENCODERS_PATH = ARTIFACTS_DIR / "label_encoders.pkl"


class BaseConfig:
    """Shared settings for all environments."""

    SECRET_KEY: str = os.getenv("SECRET_KEY", "ocean-vision-dev-key-change-in-prod")
    MAX_CONTENT_LENGTH: int = 16 * 1024 * 1024   # 16 MB upload limit
    UPLOAD_FOLDER: str = str(UPLOADS_DIR)

    # ── Model paths (string form for easy use) ─────────────
    KERAS_MODEL_PATH: str    = str(KERAS_MODEL_PATH)
    YOLO_MODEL_PATH: str     = str(YOLO_MODEL_PATH)
    TAXONOMY_MODEL_PATH: str = str(TAXONOMY_MODEL_PATH)
    ARTIFACTS_DIR: str       = str(ARTIFACTS_DIR)

    # ── API settings ───────────────────────────────────────
    API_PREFIX: str = "/api/v1"

    # ── CORS ───────────────────────────────────────────────
    CORS_ORIGINS: list = [
        "http://127.0.0.1:5000",
        "http://localhost:5000",
        "http://127.0.0.1:5500",
        "http://localhost:5500",
    ]

    @classmethod
    def init_dirs(cls) -> None:
        """Create required runtime directories."""
        UPLOADS_DIR.mkdir(parents=True, exist_ok=True)
        ARTIFACTS_DIR.mkdir(parents=True, exist_ok=True)


class DevelopmentConfig(BaseConfig):
    DEBUG: bool   = True
    TESTING: bool = False
    # Allow all origins in dev so you can open HTML files directly
    CORS_ORIGINS: list = ["*"]


class ProductionConfig(BaseConfig):
    DEBUG: bool   = False
    TESTING: bool = False


class TestingConfig(BaseConfig):
    DEBUG: bool   = True
    TESTING: bool = True
    # Use a throwaway upload folder during tests
    UPLOAD_FOLDER: str = str(ROOT_DIR / "uploads_test")


# ── Config registry ────────────────────────────────────────
_CONFIG_MAP = {
    "development": DevelopmentConfig,
    "production":  ProductionConfig,
    "testing":     TestingConfig,
}


def get_config(env: str | None = None) -> type[BaseConfig]:
    """
    Return the appropriate config class.

    Priority: explicit ``env`` arg → FLASK_ENV env var → "development"
    """
    name = (env or os.getenv("FLASK_ENV", "development")).lower()
    cfg  = _CONFIG_MAP.get(name)
    if cfg is None:
        raise ValueError(
            f"Unknown environment '{name}'. "
            f"Choose from: {list(_CONFIG_MAP.keys())}"
        )
    cfg.init_dirs()
    return cfg
