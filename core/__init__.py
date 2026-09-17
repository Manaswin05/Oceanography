# core/ — OceanVision business logic modules
# Exposes feature_extractor and fish_db for easy import from app.py
from .feature_extractor import extract_features, features_to_vector, FEATURE_NAMES
from .fish_db import (
    FISH_DATABASE, get_all_species, get_species,
    get_species_for_map, score_species_match,
)

__all__ = [
    "extract_features", "features_to_vector", "FEATURE_NAMES",
    "FISH_DATABASE", "get_all_species", "get_species",
    "get_species_for_map", "score_species_match",
]
