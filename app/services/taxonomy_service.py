"""
app/services/taxonomy_service.py
================================
TaxonomyService
---------------
Handles DNA sequence → 7-level taxonomic classification.

Delegates model loading to ModelRegistry.load_taxonomy() so
this service never manages model state directly.
"""

from __future__ import annotations

from typing import Any, Dict, Tuple

import numpy as np
from flask import current_app

from app.models import ModelRegistry

# ── Taxonomy constants ─────────────────────────────────────
TAXONOMY_COLUMNS = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"]
KMER_K           = 4


class TaxonomyService:
    """Stateless — all methods are class-level."""

    @classmethod
    def predict(
        cls,
        sequence: str,
        filter_id: str,
        reads: int,
    ) -> Tuple[Dict[str, Any], int]:
        """
        Run taxonomy prediction for a DNA sequence.

        Parameters
        ----------
        sequence  : DNA string (ATCG…)
        filter_id : sample identifier string
        reads     : number of sequencing reads (int)

        Returns
        -------
        (response_dict, http_status_code)
        """
        registry = ModelRegistry.get_instance()

        # Lazy-load taxonomy artifacts on first call
        if not registry.load_taxonomy(current_app.config):
            return (
                {
                    "error": (
                        "Taxonomy model unavailable. "
                        "Place taxonomy_model.h5 in models/ "
                        "and the four .pkl files in models/artifacts/."
                    )
                },
                503,
            )

        try:
            X_seq    = cls._vectorize_kmers(sequence.upper(), registry).reshape(1, -1)
            X_filter = np.array([[registry.le_filter.transform([filter_id])[0]]])
            X_reads  = registry.scaler_reads.transform([[reads]])
            X        = np.hstack([X_seq, X_filter, X_reads])

            preds = registry.taxonomy_model.predict(X)

            taxonomy: Dict[str, str]   = {}
            confidence: Dict[str, float] = {}
            for i, level in enumerate(TAXONOMY_COLUMNS):
                idx               = int(np.argmax(preds[i][0]))
                taxonomy[level]   = registry.label_encoders[level].inverse_transform([idx])[0]
                confidence[level] = round(float(np.max(preds[i][0])), 4)

            return {"taxonomy": taxonomy, "confidence": confidence}, 200

        except Exception as exc:
            return {"error": str(exc)}, 500

    # ── k-mer helpers ──────────────────────────────────────

    @staticmethod
    def _vectorize_kmers(sequence: str, registry: ModelRegistry) -> np.ndarray:
        vec = np.zeros(len(registry.kmer_index), dtype=np.float32)
        for kmer in TaxonomyService._kmer_count(sequence):
            if kmer in registry.kmer_index:
                vec[registry.kmer_index[kmer]] += 1
        return vec

    @staticmethod
    def _kmer_count(sequence: str) -> list:
        return [sequence[i : i + KMER_K] for i in range(len(sequence) - KMER_K + 1)]
