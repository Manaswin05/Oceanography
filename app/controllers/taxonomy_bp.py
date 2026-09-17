"""
app/controllers/taxonomy_bp.py
================================
taxonomy_bp — DNA taxonomy prediction.

Routes
------
    POST  /api/v1/predict          ← new versioned route
    POST  /predict                 ← legacy alias (keeps old frontend pages working)
"""

from flask import Blueprint, jsonify, request

from app.services import TaxonomyService

taxonomy_bp = Blueprint("taxonomy", __name__)


# ── Validation helper ──────────────────────────────────────

def _parse_taxonomy_request():
    """
    Parse and validate a taxonomy prediction request body.

    Returns (sequence, filter_id, reads, error_response | None).
    """
    data = request.get_json(silent=True)
    if not data:
        return None, None, None, (jsonify({"error": "JSON body required."}), 400)

    sequence  = str(data.get("sequence", "")).strip()
    filter_id = str(data.get("filter_id", "sample-001"))
    reads     = int(data.get("reads", 0))

    if not sequence:
        return None, None, None, (jsonify({"error": "'sequence' field is required."}), 400)

    valid_bases = set("ATCGNatcgn")
    if not set(sequence).issubset(valid_bases):
        return None, None, None, (
            jsonify({"error": "Sequence contains invalid characters. Use A/T/C/G/N only."}),
            400,
        )

    return sequence, filter_id, reads, None


# ── Versioned route ────────────────────────────────────────

@taxonomy_bp.route("/api/v1/predict", methods=["POST"])
def predict_v1():
    """
    DNA taxonomy prediction (versioned).

    Request body (JSON)
    -------------------
    {
        "sequence":  "ATCGATCG…",
        "filter_id": "sample-001",
        "reads":     15000
    }

    Response 200
    ------------
    {
        "taxonomy":   { "Kingdom": …, "Phylum": …, … "Species": … },
        "confidence": { "Kingdom": 0.98, … }
    }
    """
    sequence, filter_id, reads, err = _parse_taxonomy_request()
    if err:
        return err

    result, status = TaxonomyService.predict(sequence, filter_id, reads)
    return jsonify(result), status


# ── Legacy alias ───────────────────────────────────────────

@taxonomy_bp.route("/predict", methods=["POST"])
def predict_legacy():
    """
    Legacy /predict alias — keeps frontend_taxonomy/taxonomy.html working
    without any changes to its JS fetch call.
    """
    return predict_v1()
