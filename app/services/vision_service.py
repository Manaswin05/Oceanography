"""
app/services/vision_service.py
==============================
VisionService
--------------
Owns all fish-image analysis logic:
    • YOLOv8 object detection
    • MobileNetV2 species classification
    • OpenCV morphological feature extraction + species scoring

Controllers call this service; it never touches Flask request/response objects.
"""

from __future__ import annotations

import base64
import time
from typing import Any, Dict, Optional, Tuple

import cv2
import numpy as np
from PIL import Image as PILImage

from core import (
    extract_features,
    score_species_match,
    FISH_DATABASE,
)
from app.models import ModelRegistry


class VisionService:
    """Stateless service — all methods are static/class-level."""

    # ── Image helpers ──────────────────────────────────────

    @staticmethod
    def decode_image(file_bytes: bytes) -> Optional[np.ndarray]:
        """Decode raw bytes → BGR ndarray, or None on failure."""
        arr = np.frombuffer(file_bytes, dtype=np.uint8)
        img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
        return img

    @staticmethod
    def to_base64(img_bgr: np.ndarray, quality: int = 85) -> str:
        """Encode a BGR image to a base64 JPEG string."""
        _, buf = cv2.imencode(".jpg", img_bgr, [cv2.IMWRITE_JPEG_QUALITY, quality])
        return base64.b64encode(buf.tobytes()).decode("utf-8")

    # ── YOLO detection ─────────────────────────────────────

    @classmethod
    def run_yolo(cls, img_bgr: np.ndarray) -> Dict[str, Any]:
        """
        Run YOLOv8 detection.

        Returns a dict with:
            detections    list[{label, confidence, bbox}]
            annotated_b64 base64 JPEG with drawn bounding boxes
            model_used    "YOLOv8n" | "unavailable"
        """
        registry = ModelRegistry.get_instance()

        if not registry.yolo_ready:
            return {
                "detections":    [],
                "annotated_b64": cls.to_base64(img_bgr),
                "model_used":    "unavailable",
            }

        results   = registry.yolo_model(img_bgr, verbose=False)
        annotated = results[0].plot()
        detections = [
            {
                "label":      registry.yolo_model.names.get(int(box.cls[0]), f"class_{int(box.cls[0])}"),
                "confidence": round(float(box.conf[0]) * 100, 1),
                "bbox":       [round(x) for x in box.xyxy[0].tolist()],
            }
            for box in results[0].boxes
        ]
        return {
            "detections":    detections,
            "annotated_b64": cls.to_base64(annotated),
            "model_used":    "YOLOv8n",
        }

    # ── Keras classification ───────────────────────────────

    @classmethod
    def run_keras(cls, img_bgr: np.ndarray) -> Dict[str, Any]:
        """
        Run MobileNetV2 classification.

        Returns a dict with:
            predicted_key  species key string | None
            confidence     float (0-100)
            model_used     "MobileNetV2" | "unavailable"
        """
        registry = ModelRegistry.get_instance()

        if not registry.keras_ready:
            return {"predicted_key": None, "confidence": 0.0, "model_used": "unavailable"}

        try:
            from tensorflow.keras.preprocessing.image import img_to_array  # type: ignore

            img_rgb = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2RGB)
            pil_img = PILImage.fromarray(img_rgb).resize((224, 224))
            arr     = img_to_array(pil_img) / 255.0
            arr     = np.expand_dims(arr, axis=0)
            preds   = registry.keras_model.predict(arr, verbose=0)[0]

            top_idx    = int(np.argmax(preds))
            confidence = float(preds[top_idx])
            labels     = registry.class_labels
            label      = labels[top_idx] if top_idx < len(labels) else "unknown"

            return {
                "predicted_key": label,
                "confidence":    round(confidence * 100, 1),
                "model_used":    "MobileNetV2",
            }
        except Exception as exc:
            return {"predicted_key": None, "confidence": 0.0, "model_used": "error", "error": str(exc)}

    # ── OpenCV analysis ────────────────────────────────────

    @classmethod
    def run_opencv(cls, img_bgr: np.ndarray) -> Dict[str, Any]:
        """
        Extract 30 morphological/colour/texture features and score against
        every species in the fish database.

        Returns:
            features     dict of 30 float features
            match_scores list[{key, common_name, score, conservation}]  top-5
            top_match    best-matching species entry
            overlay_b64  base64 JPEG with contour overlay
            num_contours int
        """
        features     = extract_features(img_bgr)
        match_scores = score_species_match(features)
        top_match    = match_scores[0] if match_scores else {"key": "unknown", "score": 0}

        # Contour overlay (256×256 for bandwidth efficiency)
        resized  = cv2.resize(img_bgr, (256, 256))
        gray     = cv2.cvtColor(resized, cv2.COLOR_BGR2GRAY)
        edges    = cv2.Canny(cv2.GaussianBlur(gray, (5, 5), 0), 50, 150)
        contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
        overlay  = resized.copy()
        cv2.drawContours(overlay, contours, -1, (0, 255, 150), 1)

        return {
            "features":     features,
            "match_scores": match_scores[:5],
            "top_match":    top_match,
            "overlay_b64":  cls.to_base64(overlay),
            "num_contours": len(contours),
        }

    # ── Orchestrated full analysis ─────────────────────────

    @classmethod
    def full_analysis(cls, file_bytes: bytes) -> Tuple[Dict[str, Any], int]:
        """
        Run the complete analysis pipeline on raw image bytes.

        Returns (response_dict, http_status_code).
        """
        img_bgr = cls.decode_image(file_bytes)
        if img_bgr is None:
            return {"error": "Could not decode image."}, 400

        t0 = time.time()
        result: Dict[str, Any] = {}

        # --- run each analysis stage, isolating failures ---
        try:
            result["yolo"] = cls.run_yolo(img_bgr)
        except Exception as exc:
            result["yolo"] = {"error": str(exc), "detections": [], "model_used": "error"}

        try:
            result["keras"] = cls.run_keras(img_bgr)
        except Exception as exc:
            result["keras"] = {"error": str(exc), "predicted_key": None, "model_used": "error"}

        try:
            result["opencv"] = cls.run_opencv(img_bgr)
        except Exception as exc:
            result["opencv"] = {"error": str(exc), "features": {}, "match_scores": []}

        # --- best species prediction ---
        predicted_key: Optional[str] = (
            result.get("keras", {}).get("predicted_key")
            or result.get("opencv", {}).get("top_match", {}).get("key")
        )

        result["species"] = _get_species_details(predicted_key)

        # --- thumbnail ---
        thumb = cv2.resize(img_bgr, (400, 300))
        result["original_b64"]       = cls.to_base64(thumb)
        result["processing_time_ms"] = round((time.time() - t0) * 1000, 1)
        result["success"]            = True

        return result, 200


# ── Module-private helper ──────────────────────────────────

def _get_species_details(key: Optional[str]) -> Dict[str, Any]:
    if key and key in FISH_DATABASE:
        return {"found": True, "key": key, **FISH_DATABASE[key]}
    return {"found": False, "key": key}
