"""
scripts/generate_artifacts.py
==============================
Generates the four taxonomy .pkl artifacts required by /api/v1/predict.

Run this ONCE after cloning the repo (or whenever asv_table.csv changes):

    python scripts/generate_artifacts.py

Output files written to models/artifacts/:
    kmer_index.pkl       — dict mapping every 4-mer in the dataset → int index
    filter_encoder.pkl   — sklearn LabelEncoder fitted on FilterID column
    reads_scaler.pkl     — sklearn StandardScaler fitted on Reads column
    label_encoders.pkl   — dict {level: LabelEncoder} for all 7 taxonomy levels

The script is idempotent — re-running overwrites the existing pkl files.
"""

import os
import sys
import time
from pathlib import Path

# ── Resolve project root (one level above scripts/) ───────
ROOT      = Path(__file__).resolve().parent.parent
DATA_PATH = ROOT / "data" / "asv_table.csv"
OUT_DIR   = ROOT / "models" / "artifacts"

# ── Taxonomy constants (must match TaxonomyService) ───────
TAXONOMY_LEVELS = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"]
KMER_K          = 4


def banner(msg: str) -> None:
    print(f"\n{'─' * 60}\n  {msg}\n{'─' * 60}")


def check_deps() -> None:
    missing = []
    for pkg in ["pandas", "numpy", "sklearn", "joblib"]:
        try:
            __import__(pkg)
        except ImportError:
            missing.append(pkg)
    if missing:
        print(f"[ERROR] Missing packages: {missing}")
        print("        Run: pip install pandas scikit-learn joblib numpy")
        sys.exit(1)


def load_data(path: Path):
    import pandas as pd
    if not path.exists():
        print(f"[ERROR] Data file not found: {path}")
        print("        Expected: data/asv_table.csv")
        sys.exit(1)

    print(f"[*] Loading {path.name} …", end=" ", flush=True)
    t0 = time.time()
    df = pd.read_csv(path)
    print(f"{len(df):,} rows  ({time.time()-t0:.1f}s)")

    required_cols = ["ASV", "FilterID", "Reads"] + TAXONOMY_LEVELS
    missing = [c for c in required_cols if c not in df.columns]
    if missing:
        print(f"[ERROR] Missing columns in CSV: {missing}")
        print(f"        Found columns: {list(df.columns)}")
        sys.exit(1)

    # Drop rows where the sequence (ASV) is empty
    before = len(df)
    df = df.dropna(subset=["ASV", "FilterID", "Reads"])
    df = df[df["ASV"].str.strip() != ""]
    if len(df) < before:
        print(f"[~] Dropped {before - len(df)} rows with missing ASV/FilterID/Reads")

    return df


def build_kmer_index(sequences, k: int = KMER_K) -> dict:
    """Scan all sequences and assign an integer index to every unique k-mer."""
    print(f"[*] Building {k}-mer index from {len(sequences):,} sequences …", end=" ", flush=True)
    t0 = time.time()
    kmer_set: set = set()
    for seq in sequences:
        seq = str(seq).upper()
        kmer_set.update(seq[i:i+k] for i in range(len(seq) - k + 1))
    index = {kmer: idx for idx, kmer in enumerate(sorted(kmer_set))}
    print(f"{len(index):,} unique {k}-mers  ({time.time()-t0:.1f}s)")
    return index


def fit_label_encoders(df) -> dict:
    from sklearn.preprocessing import LabelEncoder
    encoders = {}
    for level in TAXONOMY_LEVELS:
        le = LabelEncoder()
        # Fill NaN/missing with "unassigned" so encoder sees every row
        col = df[level].fillna("unassigned").astype(str)
        le.fit(col)
        encoders[level] = le
        print(f"    {level:<10}: {len(le.classes_)} classes")
    return encoders


def main() -> None:
    banner("OceanVision — Taxonomy Artifact Generator")
    check_deps()

    import numpy as np
    import joblib
    from sklearn.preprocessing import LabelEncoder, StandardScaler

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"[*] Output directory: {OUT_DIR}")

    # ── 1. Load data ───────────────────────────────────────
    df = load_data(DATA_PATH)

    # ── 2. k-mer index ────────────────────────────────────
    kmer_index = build_kmer_index(df["ASV"].tolist())

    # ── 3. Filter-ID encoder ──────────────────────────────
    print("[*] Fitting FilterID LabelEncoder …", end=" ", flush=True)
    le_filter = LabelEncoder()
    le_filter.fit(df["FilterID"].astype(str))
    print(f"{len(le_filter.classes_)} unique filter IDs")

    # ── 4. Reads scaler ───────────────────────────────────
    print("[*] Fitting Reads StandardScaler …", end=" ", flush=True)
    scaler_reads = StandardScaler()
    scaler_reads.fit(df[["Reads"]].astype(float))
    print(f"mean={scaler_reads.mean_[0]:.1f}  std={scaler_reads.scale_[0]:.1f}")

    # ── 5. Taxonomy label encoders ────────────────────────
    print("[*] Fitting taxonomy LabelEncoders:")
    label_encoders = fit_label_encoders(df)

    # ── 6. Save everything ────────────────────────────────
    banner("Saving artifacts")
    artifacts = {
        "kmer_index.pkl":     kmer_index,
        "filter_encoder.pkl": le_filter,
        "reads_scaler.pkl":   scaler_reads,
        "label_encoders.pkl": label_encoders,
    }

    for filename, obj in artifacts.items():
        out_path = OUT_DIR / filename
        joblib.dump(obj, out_path)
        size_kb = out_path.stat().st_size / 1024
        print(f"  [✓] {filename:<25} {size_kb:>8.1f} KB  →  {out_path}")

    banner("Done — all artifacts ready")
    print("  You can now run:  python app.py")
    print("  POST /api/v1/predict will work immediately.\n")


if __name__ == "__main__":
    main()
