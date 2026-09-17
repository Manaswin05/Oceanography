# app/__init__.py  — Flask application package
# The public surface is the create_app factory (imported by app.py / wsgi.py).
from .factory import create_app

__all__ = ["create_app"]
