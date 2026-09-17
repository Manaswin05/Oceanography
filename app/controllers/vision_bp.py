"""
app/controllers/vision_bp.py
=============================
vision_bp — fish image analysis endpoints.

Routes
------
    POST  /api/v1/analyze          multipart/form-data, field: "image"
"""

from flask import Blueprint, jsonify, request

from app.services import VisionService

vision_bp = Blueprint("vision", __name__, url_prefix="/api/v1")

_ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif", "bmp", "webp"}


def _allowed(filename: str) -> bool:
    return "." in filename and filename.rsplit(".", 1)[1].lower() in _ALLOWED_EXTENSIONS


@vision_bp.route("/analyze", methods=["POST"])
def analyze():
    """
    Run the full 3-model analysis pipeline on an uploaded fish image.

    Request
    -------
    Content-Type: multipart/form-data
    Field:        image  (PNG / JPG / WEBP / BMP — max 16 MB)

    Response 200
    ------------
    {
        "success":            true,
        "processing_time_ms": float,
        "yolo":   { detections, annotated_b64, model_used },
        "keras":  { predicted_key, confidence, model_used },
        "opencv": { features, match_scores, top_match, overlay_b64, num_contours },
        "species":{ found, key, common_name, … },
        "original_b64": str
    }
    """
    if "image" not in request.files:
        return jsonify({"error": "No image field in request."}), 400

    file = request.files["image"]
    if not file.filename or not _allowed(file.filename):
        return jsonify({"error": "Unsupported file type. Use PNG, JPG, JPEG, WEBP, BMP, or GIF."}), 400

    result, status = VisionService.full_analysis(file.read())
    return jsonify(result), status
