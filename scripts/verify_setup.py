"""
scripts/verify_setup.py
========================
Checks every dependency, model file, and artifact required to run
OceanVision. Prints a clear colour-coded status report and exits with
code 0 (all OK) or 1 (one or more problems found).

    python scripts/verify_setup.py

Example output:
    ── Python packages ──────────────────────────────────
    [✓] flask
    [✓] flask_cors
    [✓] tensorflow
    [✓] ultralytics
    [!] joblib   ← MISSING — run: pip install joblib
    ── Model files ──────────────────────────────────────
    [✓] models/taxonomy_model.h5          (3.18 MB)
    [✓] models/fish_classifier_mobilenetv2.keras (23.9 MB)
    [✓] models/yolov8n.pt                  (6.25 MB)
    ── Taxonomy artifacts ───────────────────────────────
    [!] models/artifacts/kmer_index.pkl   MISSING
        → Run: python scripts/generate_artifacts.py
    ── Data files ───────────────────────────────────────
    [✓] data/asv_table.csv               (63.6 MB)
    ...
"""

import sys
import os
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# ─────────────────────────────────────────────────────────
#  Colour helpers (graceful fallback on Windows without ANSI)
# ─────────────────────────────────────────────────────────

def _supports_color() -> bool:
    return sys.stdout.isatty() and os.name != "nt" or "ANSICON" in os.environ

_GREEN  = "\033[92m" if _supports_color() else ""
_YELLOW = "\033[93m" if _supports_color() else ""
_RED    = "\033[91m" if _supports_color() else ""
_RESET  = "\033[0m"  if _supports_color() else ""

def ok(msg):    print(f"  {_GREEN}[✓]{_RESET} {msg}")
def warn(msg):  print(f"  {_YELLOW}[~]{_RESET} {msg}")
def fail(msg):  print(f"  {_RED}[!]{_RESET} {msg}")
def section(title): print(f"\n── {title} {'─' * max(0, 52 - len(title))}")


# ─────────────────────────────────────────────────────────
#  Check functions
# ─────────────────────────────────────────────────────────

def check_python_version() -> bool:
    section("Python version")
    major, minor = sys.version_info[:2]
    if (major, minor) >= (3, 10):
        ok(f"Python {major}.{minor} (3.10+ required)")
        return True
    else:
        fail(f"Python {major}.{minor} — need 3.10+. Download: https://python.org")
        return False


def check_packages() -> bool:
    section("Python packages")
    packages = [
        ("flask",            "flask"),
        ("flask_cors",       "flask-cors"),
        ("numpy",            "numpy"),
        ("cv2",              "opencv-python"),
        ("PIL",              "Pillow"),
        ("sklearn",          "scikit-learn"),
        ("joblib",           "joblib"),
        ("pandas",           "pandas"),
        ("dotenv",           "python-dotenv"),
        ("tensorflow",       "tensorflow"),
        ("ultralytics",      "ultralytics"),
    ]
    all_ok = True
    for import_name, pip_name in packages:
        try:
            __import__(import_name)
            ok(pip_name)
        except ImportError:
            fail(f"{pip_name}  ← MISSING — run: pip install {pip_name}")
            all_ok = False
    return all_ok


def check_model_files() -> bool:
    section("Model files")
    models = [
        ROOT / "models" / "taxonomy_model.h5",
        ROOT / "models" / "fish_classifier_mobilenetv2.keras",
        ROOT / "models" / "yolov8n.pt",
    ]
    all_ok = True
    for p in models:
        if p.exists():
            size_mb = p.stat().st_size / (1024 * 1024)
            ok(f"{p.relative_to(ROOT)}  ({size_mb:.2f} MB)")
        else:
            fail(f"{p.relative_to(ROOT)}  ← MISSING")
            all_ok = False
    return all_ok


def check_artifacts() -> bool:
    section("Taxonomy artifacts  (models/artifacts/)")
    artifacts = [
        ROOT / "models" / "artifacts" / "kmer_index.pkl",
        ROOT / "models" / "artifacts" / "filter_encoder.pkl",
        ROOT / "models" / "artifacts" / "reads_scaler.pkl",
        ROOT / "models" / "artifacts" / "label_encoders.pkl",
    ]
    all_present = all(p.exists() for p in artifacts)
    if all_present:
        for p in artifacts:
            size_kb = p.stat().st_size / 1024
            ok(f"{p.name:<28} ({size_kb:.1f} KB)")
    else:
        for p in artifacts:
            if p.exists():
                size_kb = p.stat().st_size / 1024
                ok(f"{p.name:<28} ({size_kb:.1f} KB)")
            else:
                fail(f"{p.name}  ← MISSING")
        print(f"\n  {_YELLOW}→ Fix:{_RESET} python scripts/generate_artifacts.py\n")
    return all_present


def check_data_files() -> bool:
    section("Data files  (data/)")
    data_files = [
        ("asv_table.csv",                    "Taxonomy training data (ASV sequences + labels)"),
        ("synthetic_ocean_climate_dataset.csv", "Ocean climate + bleaching data"),
        ("otolith_metadata.csv",             "CMLRE otolith specimen metadata"),
        ("otolith_labels.csv",               "Otolith image labels"),
        ("otolith_labels_converted.csv",     "Converted otolith labels (age + length)"),
        ("simulated_biological_data.csv",    "Simulated biological measurements"),
        ("model_test_results.csv",           "Otolith model prediction results"),
    ]
    all_ok = True
    for fname, desc in data_files:
        p = ROOT / "data" / fname
        if p.exists():
            size_mb = p.stat().st_size / (1024 * 1024)
            ok(f"{fname:<44}  {size_mb:>7.2f} MB  — {desc}")
        else:
            warn(f"{fname}  ← not found  ({desc})")
            # Data files are non-fatal (warn, don't fail)
    return all_ok


def check_env_file() -> bool:
    section(".env file")
    env_path = ROOT / ".env"
    if env_path.exists():
        ok(".env present")
    else:
        warn(".env not found — run: cp .env.example .env")
    return True   # non-fatal


def check_node() -> bool:
    section("Node.js / npm  (for npm run dev)")
    import subprocess
    try:
        result = subprocess.run(
            ["node", "--version"],
            capture_output=True, text=True, timeout=5
        )
        ok(f"Node.js {result.stdout.strip()}")
    except (FileNotFoundError, subprocess.TimeoutExpired):
        warn("Node.js not found — npm run dev will not work without it.")
        warn("Download: https://nodejs.org/")
    try:
        result = subprocess.run(
            ["npm", "--version"],
            capture_output=True, text=True, timeout=5
        )
        ok(f"npm {result.stdout.strip()}")
    except (FileNotFoundError, subprocess.TimeoutExpired):
        warn("npm not found")
    return True   # non-fatal


# ─────────────────────────────────────────────────────────
#  Main
# ─────────────────────────────────────────────────────────

def main() -> None:
    print("=" * 58)
    print("  OceanVision — Setup Verification")
    print("=" * 58)

    results = [
        check_python_version(),
        check_packages(),
        check_model_files(),
        check_artifacts(),
        check_data_files(),
        check_env_file(),
        check_node(),
    ]

    print("\n" + "=" * 58)
    if all(results):
        print(f"  {_GREEN}✓ All checks passed — ready to run!{_RESET}")
        print("\n  Start the app:   npm run dev")
        print("  Or directly:     python app.py")
        sys.exit(0)
    else:
        failed = sum(1 for r in results if not r)
        print(f"  {_RED}✗ {failed} check(s) failed — see above for fixes.{_RESET}")
        sys.exit(1)


if __name__ == "__main__":
    main()
