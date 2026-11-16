"""
train_fin_estimator.py
======================
Trains regression models on the morphometric CSV produced by extract_morphometrics.py.

Targets
-------
  fin_area_proxy_px2  – absolute fin surface area proxy
  fin_body_ratio      – fin area as fraction of body area
  body_length_px      – body length
  aspect_ratio        – body elongation

Models trained
--------------
  RandomForestRegressor   (ensemble, handles non-linearity well)
  GradientBoostingRegressor (best for small-medium tabular data)

Output
------
  models/fin_estimator.joblib   – bundle with both regressors + scaler + feature list
  models/fin_estimator_metrics.json
"""

import os, json
import numpy as np
import pandas as pd
import joblib
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
from sklearn.metrics import r2_score, mean_absolute_error

CSV_PATH    = os.path.join("models", "fish_morphometrics.csv")
OUTPUT_PATH = os.path.join("models", "fin_estimator.joblib")
METRICS_PATH = os.path.join("models", "fin_estimator_metrics.json")

FEATURE_COLS = [
    "class",
    "body_length_px",
    "body_height_px",
    "aspect_ratio",
    "fish_area_px2",
    "perimeter_px",
    "compactness",
    "bbox_w", "bbox_h",
]

TARGETS = {
    "fin_area_proxy_px2": "Fin Area Proxy (px²)",
    "fin_body_ratio":     "Fin-to-Body Ratio",
    "body_length_px":     "Body Length (px)",    # sanity-check: near-perfect R²
    "aspect_ratio":       "Aspect Ratio",
}


def load_data():
    if not os.path.isfile(CSV_PATH):
        raise FileNotFoundError(
            f"{CSV_PATH} not found. Run extract_morphometrics.py first."
        )
    df = pd.read_csv(CSV_PATH)
    print(f"Loaded {len(df)} rows from {CSV_PATH}")
    print(f"Classes: {sorted(df['class'].unique())}")
    return df


def build_pipeline(model_type: str = "rf") -> Pipeline:
    """Build a preprocessing + regression pipeline."""
    num_cols = [c for c in FEATURE_COLS if c != "class"]
    cat_cols = ["class"]

    preprocessor = ColumnTransformer([
        ("num", StandardScaler(),                                           num_cols),
        ("cat", OneHotEncoder(handle_unknown="ignore", sparse_output=False), cat_cols),
    ])

    if model_type == "rf":
        regressor = RandomForestRegressor(
            n_estimators=200, max_depth=16, min_samples_leaf=2,
            random_state=42, n_jobs=1
        )
    else:  # gb
        regressor = GradientBoostingRegressor(
            n_estimators=200, max_depth=5, learning_rate=0.08,
            subsample=0.85, random_state=42
        )

    return Pipeline([("prep", preprocessor), ("reg", regressor)])


def train_fin_estimator():
    df = load_data()
    df = df.dropna(subset=FEATURE_COLS + list(TARGETS.keys()))
    print(f"After dropna: {len(df)} rows\n")

    X = df[FEATURE_COLS]
    all_metrics = {}
    models_bundle = {}

    for target_col, target_name in TARGETS.items():
        y = df[target_col].values
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )

        print(f"--- Target: {target_name} ---")

        # Random Forest
        rf_pipe = build_pipeline("rf")
        rf_pipe.fit(X_train, y_train)
        rf_pred = rf_pipe.predict(X_test)
        rf_r2  = r2_score(y_test, rf_pred)
        rf_mae = mean_absolute_error(y_test, rf_pred)
        print(f"  RandomForest    R²={rf_r2:.4f}  MAE={rf_mae:.4f}")

        # Gradient Boosting
        gb_pipe = build_pipeline("gb")
        gb_pipe.fit(X_train, y_train)
        gb_pred = gb_pipe.predict(X_test)
        gb_r2  = r2_score(y_test, gb_pred)
        gb_mae = mean_absolute_error(y_test, gb_pred)
        print(f"  GradientBoost   R²={gb_r2:.4f}  MAE={gb_mae:.4f}")

        # Keep best
        best_name = "rf" if rf_r2 >= gb_r2 else "gb"
        best_pipe = rf_pipe if best_name == "rf" else gb_pipe
        best_r2   = max(rf_r2, gb_r2)
        print(f"  Best: {best_name.upper()}  R²={best_r2:.4f}\n")

        models_bundle[target_col] = best_pipe
        all_metrics[target_col] = {
            "target_name":   target_name,
            "best_model":    best_name.upper(),
            "r2":            round(float(best_r2), 4),
            "mae":           round(float(min(rf_mae, gb_mae)), 4),
            "rf_r2":         round(float(rf_r2), 4),
            "gb_r2":         round(float(gb_r2), 4),
        }

    # Feature importance for the fin_body_ratio RF model
    _print_feature_importance(models_bundle, X, df)

    # Save bundle
    bundle = {
        "models":       models_bundle,
        "feature_cols": FEATURE_COLS,
        "targets":      list(TARGETS.keys()),
        "metrics":      all_metrics,
    }
    joblib.dump(bundle, OUTPUT_PATH)
    print(f"Saved: {OUTPUT_PATH}")

    with open(METRICS_PATH, "w") as f:
        json.dump(all_metrics, f, indent=2)
    print(f"Saved: {METRICS_PATH}")

    # Pretty summary
    print("\nFin Estimator Summary:")
    for col, m in all_metrics.items():
        print(f"  {m['target_name']:<26}  {m['best_model']}  "
              f"R²={m['r2']:.4f}  MAE={m['mae']:.4f}")


def _print_feature_importance(bundle: dict, X: pd.DataFrame, df: pd.DataFrame):
    """Print top features for fin_body_ratio model if it's a RandomForest."""
    pipe = bundle.get("fin_body_ratio")
    if pipe is None:
        return
    reg = pipe.named_steps["reg"]
    if not hasattr(reg, "feature_importances_"):
        return

    prep = pipe.named_steps["prep"]
    num_names = [c for c in FEATURE_COLS if c != "class"]
    cat_encoder = prep.named_transformers_["cat"]
    cat_names = list(cat_encoder.get_feature_names_out(["class"]))
    all_names = num_names + cat_names

    importances = reg.feature_importances_
    pairs = sorted(zip(importances, all_names), reverse=True)[:8]
    print("Top features for fin_body_ratio:")
    for imp, name in pairs:
        bar = "█" * int(imp * 50)
        print(f"  {name:<30}  {imp:.4f}  {bar}")
    print()


if __name__ == "__main__":
    train_fin_estimator()
