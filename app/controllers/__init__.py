"""
app/controllers/__init__.py
============================
Imports and re-exports every Blueprint so the factory can register
them all with a single loop.

    from app.controllers import ALL_BLUEPRINTS
    for bp in ALL_BLUEPRINTS:
        app.register_blueprint(bp)
"""

from .health_bp    import health_bp
from .vision_bp    import vision_bp
from .taxonomy_bp  import taxonomy_bp
from .ocean_bp     import ocean_bp
from .species_bp   import species_bp
from .pages_bp     import pages_bp

# Ordered list consumed by the app factory
ALL_BLUEPRINTS = [
    pages_bp,     # page routes first (catches "/" before anything else)
    health_bp,
    vision_bp,
    taxonomy_bp,
    ocean_bp,
    species_bp,
]

__all__ = [
    "health_bp", "vision_bp", "taxonomy_bp",
    "ocean_bp", "species_bp", "pages_bp",
    "ALL_BLUEPRINTS",
]
