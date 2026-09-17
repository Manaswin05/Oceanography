"""
wsgi.py — Production WSGI entry point
======================================
Used by Gunicorn on Render (and any WSGI host).

Render start command (set in render.yaml):
    gunicorn wsgi:application --bind 0.0.0.0:$PORT --workers 1 --timeout 120 --preload

Local production test
---------------------
    $env:FLASK_ENV = "production"   # PowerShell
    pip install gunicorn
    gunicorn wsgi:application --bind 0.0.0.0:5000 --workers 1 --timeout 120

Waitress (Windows alternative)
-------------------------------
    pip install waitress
    waitress-serve --host 0.0.0.0 --port 5000 wsgi:application
"""

import os

# Default to production when invoked via gunicorn
os.environ.setdefault("FLASK_ENV", "production")

from app import create_app  # noqa: E402

application = create_app()

# Gunicorn uses `application`; some hosts also look for `app`
app = application

if __name__ == "__main__":
    # Direct python wsgi.py — useful for quick smoke-tests
    port = int(os.getenv("PORT", 5000))
    application.run(host="0.0.0.0", port=port)
