"""
app/models/__init__.py
======================
Public surface of the model layer.

    from app.models import ModelRegistry
    registry = ModelRegistry.get_instance()
"""

from .registry import ModelRegistry

__all__ = ["ModelRegistry"]
