"""
app/models/registry.py
======================
ModelRegistry — thread-safe Singleton that owns every ML model handle.

Startup is split into two phases so the server is useful immediately:

  Phase 1 (synchronous, ~instant)
    • Warms the FISH_DATABASE (pure Python dict — zero I/O).
    • Sets _light_data_ready = True so /api/v1/species and /api/v1/map-data
      can serve data right after the first request hits.

  Phase 2 (background thread, seconds → minutes)
    • Loads Keras MobileNetV2 and YOLOv8n models.
    • Sets _models_ready = True when both finish (or fail gracefully).
    • The frontend polls /api/v1/ready to track progress.

  Phase 3 (lazy, on first /api/v1/predict call)
    • Loads the taxonomy model + pkl artifacts on demand.

Usage
-----
    registry = ModelRegistry.get_instance()
    registry.start_background_load(config)   # called once by create_app()

    # In a service:
    if registry.keras_ready:
        preds = registry.keras_model.predict(X)
    if not registry.models_ready:
        return {"error": "Models still loading"}, 503
"""

from __future__ import annotations

import os
import threading
import time
from typing import Any, Dict, List, Optional


class ModelRegistry:
    """
    Singleton that holds references to all trained ML models.

    Design
    ------
    • Thread-safe double-checked locking for instance creation.
    • Phase-1 (light data) loads synchronously in < 1 ms.
    • Phase-2 (heavy models) runs in a daemon background thread.
    • Graceful degradation: each slot defaults to None on failure.
    • Lazy sub-loading for the taxonomy model.
    """

    _instance: Optional["ModelRegistry"] = None
    _lock: threading.Lock = threading.Lock()

    # ── private constructor guard ──────────────────────────
    def __init__(self) -> None:
        if ModelRegistry._instance is not None:
            raise RuntimeError("Use ModelRegistry.get_instance() instead.")

        # ── Fish-vision models (background-loaded) ─────────
        self.keras_model: Any   = None   # MobileNetV2 fish classifier
        self.yolo_model: Any    = None   # YOLOv8n object detector
        self.class_labels: List[str] = []

        # ── Taxonomy model (lazy) ──────────────────────────
        self.taxonomy_model: Any = None
        self.kmer_index: Any     = None
        self.le_filter: Any      = None
        self.scaler_reads: Any   = None
        self.label_encoders: Any = None

        # ── Status flags ───────────────────────────────────
        self._keras_loaded: bool    = False
        self._yolo_loaded: bool     = False
        self._taxonomy_loaded: bool = False

        # Phase-level ready flags (polled by /api/v1/ready)
        self._light_data_ready: bool = False   # fish DB warmed
        self._models_ready: bool     = False   # Keras + YOLO done

        # Progress tracking for the loading screen
        self._loading_steps: List[Dict[str, Any]] = []
        self._loading_error: Optional[str] = None

        # Locks
        self._taxonomy_lock: threading.Lock  = threading.Lock()
        self._bg_thread: Optional[threading.Thread] = None

    # ── Singleton accessor ─────────────────────────────────

    @classmethod
    def get_instance(cls) -> "ModelRegistry":
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    obj = object.__new__(cls)
                    obj.__init__()
                    cls._instance = obj
        return cls._instance

    # ─────────────────────────────────────────────────────
    #  Phase 1 — light data (synchronous, called in create_app)
    # ─────────────────────────────────────────────────────

    def warm_light_data(self) -> None:
        """
        Synchronously warm the fish database (pure Python dict, no I/O).
        Completes in < 1 ms.  After this returns, species endpoints work.
        """
        t0 = time.perf_counter()
        from core import FISH_DATABASE  # noqa: F401 — triggers module parse once
        self.class_labels = list(FISH_DATABASE.keys())
        self._light_data_ready = True
        elapsed = (time.perf_counter() - t0) * 1000
        print(f"[✓] Fish DB warmed  ({len(self.class_labels)} species, {elapsed:.1f} ms)")
        self._log_step("fish_db", "Fish database", "ready", elapsed)

    # ─────────────────────────────────────────────────────
    #  Phase 2 — heavy models (background thread)
    # ─────────────────────────────────────────────────────

    def start_background_load(self, config) -> None:
        """
        Kick off a daemon thread that loads Keras + YOLO.
        Returns immediately; call `models_ready` to check completion.
        ``config`` is the Flask config object.
        """
        if self._bg_thread and self._bg_thread.is_alive():
            return  # already running

        self._bg_thread = threading.Thread(
            target=self._bg_load,
            args=(config,),
            daemon=True,
            name="ModelLoader",
        )
        self._bg_thread.start()
        print("[~] Background model loading started…")

    def _bg_load(self, config) -> None:
        """Run inside the background thread."""
        try:
            self._load_keras(config.KERAS_MODEL_PATH)
            self._load_yolo(config.YOLO_MODEL_PATH)
        except Exception as exc:
            self._loading_error = str(exc)
            print(f"[!] Background load error: {exc}")
        finally:
            self._models_ready = True   # signal done (even on partial failure)
            print("[✓] Background model loading complete")

    def _load_keras(self, path: str) -> None:
        self._log_step("keras", "MobileNetV2 classifier", "loading")
        t0 = time.perf_counter()
        try:
            from tensorflow.keras.models import load_model  # type: ignore
            if os.path.exists(path):
                self.keras_model = load_model(path)
                self._keras_loaded = True
                elapsed = (time.perf_counter() - t0) * 1000
                print(f"[✓] Keras model loaded  → {path}  ({elapsed:.0f} ms)")
                self._log_step("keras", "MobileNetV2 classifier", "ready", elapsed)
            else:
                print(f"[~] Keras model not found at {path} — image classification unavailable.")
                self._log_step("keras", "MobileNetV2 classifier", "missing")
        except ImportError:
            print("[~] TensorFlow not installed — Keras model unavailable.")
            self._log_step("keras", "MobileNetV2 classifier", "unavailable")
        except Exception as exc:
            print(f"[!] Keras load error: {exc}")
            self._log_step("keras", "MobileNetV2 classifier", "error")

    def _load_yolo(self, path: str) -> None:
        self._log_step("yolo", "YOLOv8n detector", "loading")
        t0 = time.perf_counter()
        try:
            from ultralytics import YOLO  # type: ignore
            if os.path.exists(path):
                self.yolo_model = YOLO(path)
                self._yolo_loaded = True
                elapsed = (time.perf_counter() - t0) * 1000
                print(f"[✓] YOLOv8 model loaded → {path}  ({elapsed:.0f} ms)")
                self._log_step("yolo", "YOLOv8n detector", "ready", elapsed)
            else:
                print(f"[~] YOLO model not found at {path} — object detection unavailable.")
                self._log_step("yolo", "YOLOv8n detector", "missing")
        except ImportError:
            print("[~] ultralytics not installed — YOLO model unavailable.")
            self._log_step("yolo", "YOLOv8n detector", "unavailable")
        except Exception as exc:
            print(f"[!] YOLO load error: {exc}")
            self._log_step("yolo", "YOLOv8n detector", "error")

    # ─────────────────────────────────────────────────────
    #  Phase 3 — taxonomy (lazy, on first /predict call)
    # ─────────────────────────────────────────────────────

    def load_taxonomy(self, config) -> bool:
        """
        Lazy-load the taxonomy model + pkl artifacts on first use.
        Thread-safe double-checked locking.
        Returns True on success, False if anything is missing/broken.
        """
        if self._taxonomy_loaded:
            return True

        with self._taxonomy_lock:
            if self._taxonomy_loaded:
                return True

            art_dir  = config.ARTIFACTS_DIR
            tax_path = config.TAXONOMY_MODEL_PATH

            required = {
                "taxonomy_model": tax_path,
                "kmer_index":     os.path.join(art_dir, "kmer_index.pkl"),
                "filter_encoder": os.path.join(art_dir, "filter_encoder.pkl"),
                "reads_scaler":   os.path.join(art_dir, "reads_scaler.pkl"),
                "label_encoders": os.path.join(art_dir, "label_encoders.pkl"),
            }

            missing = [k for k, p in required.items() if not os.path.exists(p)]
            if missing:
                print(f"[~] Taxonomy artifacts missing: {missing}. /predict will return 503.")
                return False

            try:
                from tensorflow.keras.models import load_model  # type: ignore
                import joblib  # type: ignore

                self._log_step("taxonomy", "Taxonomy model", "loading")
                t0 = time.perf_counter()
                self.taxonomy_model  = load_model(tax_path)
                self.kmer_index      = joblib.load(required["kmer_index"])
                self.le_filter       = joblib.load(required["filter_encoder"])
                self.scaler_reads    = joblib.load(required["reads_scaler"])
                self.label_encoders  = joblib.load(required["label_encoders"])
                self._taxonomy_loaded = True
                elapsed = (time.perf_counter() - t0) * 1000
                print(f"[✓] Taxonomy model + artifacts loaded  ({elapsed:.0f} ms)")
                self._log_step("taxonomy", "Taxonomy model", "ready", elapsed)
                return True

            except ImportError as exc:
                print(f"[~] Dependency missing for taxonomy: {exc}")
                self._log_step("taxonomy", "Taxonomy model", "unavailable")
                return False
            except Exception as exc:
                print(f"[!] Taxonomy load error: {exc}")
                self._log_step("taxonomy", "Taxonomy model", "error")
                return False

    # ─────────────────────────────────────────────────────
    #  Internal helpers
    # ─────────────────────────────────────────────────────

    def _log_step(
        self,
        key: str,
        label: str,
        state: str,
        elapsed_ms: float = 0.0,
    ) -> None:
        """Upsert a step entry so the frontend can track progress."""
        for step in self._loading_steps:
            if step["key"] == key:
                step["state"] = state
                if elapsed_ms:
                    step["elapsed_ms"] = round(elapsed_ms)
                return
        self._loading_steps.append({
            "key":        key,
            "label":      label,
            "state":      state,
            "elapsed_ms": round(elapsed_ms),
        })

    # ─────────────────────────────────────────────────────
    #  Convenience properties & status
    # ─────────────────────────────────────────────────────

    @property
    def light_data_ready(self) -> bool:
        return self._light_data_ready

    @property
    def models_ready(self) -> bool:
        return self._models_ready

    @property
    def keras_ready(self) -> bool:
        return self._keras_loaded and self.keras_model is not None

    @property
    def yolo_ready(self) -> bool:
        return self._yolo_loaded and self.yolo_model is not None

    @property
    def taxonomy_ready(self) -> bool:
        return self._taxonomy_loaded

    def status(self) -> Dict[str, Any]:
        """Return a status snapshot for the /api/v1/health endpoint."""
        return {
            "keras_model":       self.keras_ready,
            "yolo_model":        self.yolo_ready,
            "taxonomy_model":    self.taxonomy_ready,
            "light_data_ready":  self.light_data_ready,
            "models_ready":      self.models_ready,
        }

    def ready_payload(self) -> Dict[str, Any]:
        """
        Payload for /api/v1/ready — polled by the frontend loading screen.
        """
        return {
            "light_data_ready": self.light_data_ready,
            "models_ready":     self.models_ready,
            "keras_ready":      self.keras_ready,
            "yolo_ready":       self.yolo_ready,
            "steps":            list(self._loading_steps),
            "error":            self._loading_error,
        }
