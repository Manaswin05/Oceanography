"""
app/controllers/pages_bp.py
============================
pages_bp — HTML page routes.

Routes
------
    GET  /                         → OceanVision SPA (templates/index.html)
    GET  /frontend/<filename>      → legacy frontend_taxonomy/ pages
"""

import os
from flask import Blueprint, render_template, send_from_directory, current_app

pages_bp = Blueprint("pages", __name__)

# Absolute path to frontend_taxonomy/ (one level above this package)
_FRONTEND_DIR = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),   # app/controllers/
    "..", "..",                                    # → project root
    "frontend_taxonomy",
)
_FRONTEND_DIR = os.path.normpath(_FRONTEND_DIR)


@pages_bp.route("/")
def index():
    """OceanVision main SPA."""
    return render_template("index.html")


@pages_bp.route("/frontend/<path:filename>")
def legacy_frontend(filename: str):
    """
    Serve any file from frontend_taxonomy/ under /frontend/<filename>.

    Examples
    --------
        /frontend/taxonomy.html
        /frontend/oc.html
        /frontend/otolithography.html
        /frontend/stream.html
    """
    return send_from_directory(_FRONTEND_DIR, filename)
