"""
app/factory.py
==============
Application factory — the only place that creates the Flask instance.

Startup sequence (optimised for fast first-response)
-----------------------------------------------------
  1.  Resolve config.
  2.  Create Flask instance.
  3.  Apply config.
  4.  Register CORS.
  5.  Phase-1 load: warm fish database (~instant, synchronous).
        → species / map endpoints are usable immediately.
  6.  Phase-2 load: start background thread for Keras + YOLO.
        → frontend polls /api/v1/ready while showing a loading screen.
  7.  Register Blueprints.

Usage
-----
    from app import create_app
    flask_app = create_app()
"""

from __future__ import annotations

import os
from typing import Type

from flask import Flask

from config import BaseConfig, get_config


def create_app(config_class: Type[BaseConfig] | None = None) -> Flask:
    """
    Create, configure and return the Flask application.

    Parameters
    ----------
    config_class : optional config class override.
                   Defaults to get_config() → reads FLASK_ENV env var.
    """
    cfg = config_class or get_config()

    # ── 1. Flask instance ──────────────────────────────────
    flask_app = Flask(
        __name__,
        template_folder=str(
            os.path.join(os.path.dirname(__file__), "..", "templates")
        ),
        static_folder=str(
            os.path.join(os.path.dirname(__file__), "..", "static")
        ),
    )

    # ── 2. Apply config ────────────────────────────────────
    flask_app.config.from_object(cfg)

    # ── 3. CORS ────────────────────────────────────────────
    _register_cors(flask_app, cfg)

    # ── 4. Phase-1: warm light data (synchronous, < 1 ms) ──
    #    Fish DB is pure Python — no file I/O, no heavy imports.
    #    After this point /api/v1/species and /api/v1/map-data work.
    with flask_app.app_context():
        from app.models import ModelRegistry
        registry = ModelRegistry.get_instance()
        registry.warm_light_data()

    # ── 5. Phase-2: kick off background model loading ──────
    #    Keras + YOLO load in a daemon thread; server is already
    #    accepting requests.  /api/v1/ready reflects progress.
    with flask_app.app_context():
        registry.start_background_load(flask_app.config)

    # ── 6. Blueprints ──────────────────────────────────────
    _register_blueprints(flask_app)

    return flask_app


# ── Private helpers ────────────────────────────────────────

def _register_cors(flask_app: Flask, cfg: Type[BaseConfig]) -> None:
    try:
        from flask_cors import CORS  # type: ignore
        CORS(flask_app, origins=cfg.CORS_ORIGINS)
    except ImportError:
        flask_app.logger.warning(
            "flask-cors not installed — CORS headers will not be set. "
            "Run: pip install flask-cors"
        )


def _register_blueprints(flask_app: Flask) -> None:
    from app.controllers import ALL_BLUEPRINTS
    for bp in ALL_BLUEPRINTS:
        flask_app.register_blueprint(bp)
