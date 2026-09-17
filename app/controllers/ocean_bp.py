"""
app/controllers/ocean_bp.py
============================
ocean_bp — ocean environmental data prediction.

Routes
------
    POST  /api/v1/predict-ocean    ← versioned
    POST  /predict-ocean           ← legacy alias
"""

from flask import Blueprint, jsonify, request

from app.services import OceanService

ocean_bp = Blueprint("ocean", __name__)

_BLEACHING_VALUES = {"none", "low", "moderate", "high", "severe"}


# ── Validation helper ──────────────────────────────────────

def _parse_ocean_request():
    """
    Parse and validate an ocean prediction request.
    Returns (data_dict, error_response | None).
    """
    data = request.get_json(silent=True)
    if not data:
        return None, (jsonify({"error": "JSON body required."}), 400)

    required = ["Location", "Year", "Month"]
    missing  = [k for k in required if k not in data]
    if missing:
        return None, (jsonify({"error": f"Missing required fields: {missing}"}), 400)

    severity = str(data.get("Bleaching_Severity", "")).lower()
    if severity and severity not in _BLEACHING_VALUES:
        return None, (
            jsonify({
                "error": f"Bleaching_Severity must be one of {sorted(_BLEACHING_VALUES)}."
            }),
            400,
        )

    return data, None


# ── Versioned route ────────────────────────────────────────

@ocean_bp.route("/api/v1/predict-ocean", methods=["POST"])
def predict_ocean_v1():
    """
    Ocean environmental data → predicted species count.

    Request body (JSON)
    -------------------
    {
        "Location":           "Great Barrier Reef",
        "Latitude":           -18.2871,
        "Longitude":          147.6992,
        "SST":                29.5,
        "pH_Level":           8.1,
        "Year":               2025,
        "Month":              7,
        "Bleaching_Severity": "Moderate",
        "Marine_Heatwave":    false
    }

    Response 200
    ------------
    {
        "predicted_species_observed": 42.5,
        "location": "Great Barrier Reef",
        "status":   "success"
    }
    """
    data, err = _parse_ocean_request()
    if err:
        return err

    result, status = OceanService.predict(data)
    return jsonify(result), status


# ── Legacy alias ───────────────────────────────────────────

@ocean_bp.route("/predict-ocean", methods=["POST"])
def predict_ocean_legacy():
    """Legacy /predict-ocean alias for frontend_taxonomy/oc.html."""
    return predict_ocean_v1()
