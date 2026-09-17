"""
app/controllers/species_bp.py
==============================
species_bp — fish species database routes.

Routes
------
    GET  /api/v1/species              list all species (optional ?query=&habitat= filters)
    GET  /api/v1/species/<key>        get one species by key
    GET  /api/v1/map-data             lightweight list for Leaflet map rendering
"""

from flask import Blueprint, jsonify, request

from app.services import SpeciesService

species_bp = Blueprint("species", __name__, url_prefix="/api/v1")


@species_bp.route("/species", methods=["GET"])
def list_species():
    """
    List all species, with optional filtering.

    Query parameters
    ----------------
    query   : free-text search (common_name, scientific_name, family, oceans)
    habitat : habitat type substring (e.g. "reef", "deep", "pelagic")

    Response 200  →  list of species objects
    """
    query   = request.args.get("query",   "").strip()
    habitat = request.args.get("habitat", "").strip()

    if query or habitat:
        results = SpeciesService.search(query=query, habitat=habitat)
    else:
        results = SpeciesService.list_all()

    return jsonify(results)


@species_bp.route("/species/<key>", methods=["GET"])
def get_species(key: str):
    """
    Get full details for a single species by its database key.

    Response 200  →  species object with "found": true
    Response 404  →  { "found": false, "key": "<key>" }
    """
    result, status = SpeciesService.get(key)
    return jsonify(result), status


@species_bp.route("/map-data", methods=["GET"])
def map_data():
    """
    Lightweight species dataset for Leaflet map.
    Excludes heavy fields (description, interesting_facts, etc.).

    Response 200  →  list of lightweight species objects
    """
    return jsonify(SpeciesService.map_data())
