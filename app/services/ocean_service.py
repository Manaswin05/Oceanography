"""
app/services/ocean_service.py
==============================
OceanService
------------
Handles ocean environmental data → predicted species count.

The current implementation is rule-based (ported from the original
FastAPI backend). Replace _rule_based_prediction() with a real ML model
call when the ocean prediction model is ready.
"""

from __future__ import annotations

from typing import Any, Dict, Optional, Tuple


class OceanService:
    """Stateless — all methods are class-level."""

    @classmethod
    def predict(cls, data: Dict[str, Any]) -> Tuple[Dict[str, Any], int]:
        """
        Predict species observed count from environmental data.

        Expected keys (all optional except Location/Year/Month):
            Location, Latitude, Longitude,
            SST (°C), pH_Level,
            Year, Month (1-12),
            Bleaching_Severity (None|Low|Moderate|High|Severe),
            Marine_Heatwave (bool)

        Returns (response_dict, http_status_code).
        """
        try:
            predicted = cls._rule_based_prediction(data)
            return (
                {
                    "predicted_species_observed": round(max(5.0, predicted), 2),
                    "location": data.get("Location", ""),
                    "status":   "success",
                },
                200,
            )
        except Exception as exc:
            return {"error": str(exc), "status": "failed"}, 500

    # ── Prediction logic ───────────────────────────────────

    @staticmethod
    def _rule_based_prediction(data: Dict[str, Any]) -> float:
        """
        Simple rule-based baseline.
        Replace this method body with a trained model call when ready.

        Suggested replacement:
            model = OceanModelRegistry.get_instance().ocean_model
            features = OceanService._build_feature_vector(data)
            return float(model.predict([features])[0])
        """
        base: float = 50.0

        # Sea Surface Temperature effect
        sst: Optional[float] = data.get("SST")
        if sst is not None:
            if   sst > 30: base -= 10
            elif sst < 20: base -= 5

        # pH effect
        ph: Optional[float] = data.get("pH_Level")
        if ph is not None:
            if   ph < 7.8: base -= 8
            elif ph > 8.2: base += 5

        # Coral bleaching severity
        severity: str = str(data.get("Bleaching_Severity", "")).lower()
        severity_penalties = {"severe": -15, "high": -10, "moderate": -5, "low": -2}
        base += severity_penalties.get(severity, 0)

        # Marine heatwave
        if data.get("Marine_Heatwave"):
            base -= 8

        return base
