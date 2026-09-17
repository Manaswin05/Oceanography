"""
app/services/species_service.py
================================
SpeciesService
--------------
Provides all read-access to the fish species database.

The database itself lives in core/fish_db.py; this service is a thin
query layer so controllers never import from `core` directly.
"""

from __future__ import annotations

from typing import Any, Dict, List, Optional, Tuple

from core import FISH_DATABASE, get_all_species, get_species, get_species_for_map


class SpeciesService:
    """Stateless — all methods are class-level."""

    @classmethod
    def list_all(cls) -> List[Dict[str, Any]]:
        """Return every species as a list with the key included."""
        return get_all_species()

    @classmethod
    def get(cls, key: str) -> Tuple[Optional[Dict[str, Any]], int]:
        """
        Fetch a single species by its database key.

        Returns (species_dict | None, http_status_code).
        """
        sp = get_species(key)
        if sp:
            return {"found": True, "key": key, **sp}, 200
        return {"found": False, "key": key}, 404

    @classmethod
    def map_data(cls) -> List[Dict[str, Any]]:
        """Lightweight species list for map rendering (no heavy fields)."""
        return get_species_for_map()

    @classmethod
    def search(cls, query: str = "", habitat: str = "") -> List[Dict[str, Any]]:
        """
        Filter species by a free-text query and/or habitat substring.
        Case-insensitive. Both filters are ANDed if provided.
        """
        results = get_all_species()

        if query:
            q = query.lower()
            results = [
                sp for sp in results
                if q in sp.get("common_name", "").lower()
                or q in sp.get("scientific_name", "").lower()
                or q in sp.get("family", "").lower()
                or q in " ".join(sp.get("native_oceans", [])).lower()
            ]

        if habitat:
            h = habitat.lower()
            results = [
                sp for sp in results
                if h in sp.get("habitat_type", "").lower()
            ]

        return results

    @classmethod
    def health_stats(cls) -> Dict[str, Any]:
        """Aggregate statistics about the database (used by health endpoint)."""
        all_sp = get_all_species()
        statuses: Dict[str, int] = {}
        for sp in all_sp:
            status = sp.get("conservation", "Unknown")
            statuses[status] = statuses.get(status, 0) + 1
        return {
            "total_species":         len(all_sp),
            "conservation_summary":  statuses,
        }
