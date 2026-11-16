"""
extract_morphometrics.py
========================
Extracts morphometric measurements from each fish image using its paired
GT (ground-truth) binary mask.  All measurements are in pixels; a real-world
scale factor can be applied later if a calibration ruler is available.

Measurements extracted per image
---------------------------------
  body_length_px    – longest axis of the min-area bounding rectangle
  body_height_px    – shortest axis (body depth)
  aspect_ratio      – body_length / body_height
  fish_area_px2     – pixel area inside GT mask contour
  hull_area_px2     – convex hull area (includes fin protrusions)
  fin_area_proxy_px2 – hull_area - fish_area  (proxy for fin + tail surface)
  fin_body_ratio    – fin_area_proxy / fish_area
  perimeter_px      – GT mask contour perimeter
  compactness       – 4π·area / perimeter²  (1 = circle, fish ≈ 0.03–0.15)
  centroid_x/y      – centroid of the fish mask (px)
  bbox_x/y/w/h      – axis-aligned bounding box
  orientation_deg   – rotation of min-area rect

Output
------
  models/fish_morphometrics.csv   – one row per image
  models/morphometric_stats.json  – per-class summary statistics
"""

import os, json, csv
import cv2
import numpy as np

DATASET_ROOT = "datasets"
OUTPUT_CSV   = os.path.join("models", "fish_morphometrics.csv")
OUTPUT_STATS = os.path.join("models", "morphometric_stats.json")

CLASSES = [
    "Black Sea Sprat",
    "Gilt-Head Bream",
    "Hourse Mackerel",
    "Red Mullet",
    "Red Sea Bream",
    "Sea Bass",
    "Shrimp",
    "Striped Red Mullet",
    "Trout",
]

FIELDNAMES = [
    "class", "filename",
    "body_length_px", "body_height_px", "aspect_ratio",
    "fish_area_px2", "hull_area_px2",
    "fin_area_proxy_px2", "fin_body_ratio",
    "perimeter_px", "compactness",
    "centroid_x", "centroid_y",
    "bbox_x", "bbox_y", "bbox_w", "bbox_h",
    "orientation_deg",
]


def measure_fish(gt_path: str) -> dict | None:
    """Return morphometric dict for one GT mask image, or None on failure."""
    gt = cv2.imread(gt_path, cv2.IMREAD_GRAYSCALE)
    if gt is None:
        return None

    _, binary = cv2.threshold(gt, 127, 255, cv2.THRESH_BINARY)
    contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return None

    # largest contour = fish body
    c = max(contours, key=cv2.contourArea)
    area = cv2.contourArea(c)
    if area < 500:          # skip tiny noise contours
        return None

    peri = cv2.arcLength(c, True)
    compactness = (4 * np.pi * area / (peri ** 2)) if peri > 0 else 0.0

    # min-area rectangle → body length & height
    rect = cv2.minAreaRect(c)
    (cx, cy), (rw, rh), angle = rect
    body_length = float(max(rw, rh))
    body_height = float(min(rw, rh))
    aspect_ratio = body_length / body_height if body_height > 0 else 0.0

    # bounding box
    bx, by, bw, bh = cv2.boundingRect(c)

    # convex hull → fin proxy
    hull = cv2.convexHull(c)
    hull_area = cv2.contourArea(hull)
    fin_proxy = hull_area - area
    fin_body_ratio = fin_proxy / area if area > 0 else 0.0

    # centroid via image moments
    M = cv2.moments(c)
    mx = M["m10"] / M["m00"] if M["m00"] > 0 else cx
    my = M["m01"] / M["m00"] if M["m00"] > 0 else cy

    return {
        "body_length_px":      round(body_length, 2),
        "body_height_px":      round(body_height, 2),
        "aspect_ratio":        round(aspect_ratio, 4),
        "fish_area_px2":       round(float(area), 2),
        "hull_area_px2":       round(float(hull_area), 2),
        "fin_area_proxy_px2":  round(float(fin_proxy), 2),
        "fin_body_ratio":      round(fin_body_ratio, 4),
        "perimeter_px":        round(float(peri), 2),
        "compactness":         round(compactness, 6),
        "centroid_x":          round(float(mx), 2),
        "centroid_y":          round(float(my), 2),
        "bbox_x":  bx, "bbox_y": by,
        "bbox_w":  bw, "bbox_h": bh,
        "orientation_deg":     round(float(angle), 2),
    }


def extract_all():
    os.makedirs("models", exist_ok=True)
    rows = []
    total_processed = 0
    total_failed    = 0

    for cls in CLASSES:
        gt_folder = os.path.join(DATASET_ROOT, cls, f"{cls} GT")
        if not os.path.isdir(gt_folder):
            print(f"  [WARN] GT folder missing: {gt_folder}")
            continue

        files = sorted([f for f in os.listdir(gt_folder)
                        if f.lower().endswith((".png", ".jpg", ".jpeg"))])
        cls_ok = 0
        for fname in files:
            gt_path = os.path.join(gt_folder, fname)
            m = measure_fish(gt_path)
            if m is None:
                total_failed += 1
                continue
            row = {"class": cls, "filename": fname}
            row.update(m)
            rows.append(row)
            cls_ok += 1

        total_processed += cls_ok
        print(f"  {cls:22s}: {cls_ok:4d} images measured")

    # Write CSV
    with open(OUTPUT_CSV, "w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writeheader()
        writer.writerows(rows)

    print(f"\nTotal measured: {total_processed}  |  Failed/skipped: {total_failed}")
    print(f"Saved: {OUTPUT_CSV}")

    # Per-class stats
    stats = {}
    metric_cols = [k for k in FIELDNAMES if k not in ("class", "filename",
                   "bbox_x", "bbox_y", "centroid_x", "centroid_y", "orientation_deg")]
    for cls in CLASSES:
        cls_rows = [r for r in rows if r["class"] == cls]
        if not cls_rows:
            continue
        cls_stats = {}
        for col in metric_cols:
            vals = [r[col] for r in cls_rows if isinstance(r.get(col), (int, float))]
            if vals:
                cls_stats[col] = {
                    "mean":   round(float(np.mean(vals)), 4),
                    "std":    round(float(np.std(vals)),  4),
                    "min":    round(float(np.min(vals)),  4),
                    "max":    round(float(np.max(vals)),  4),
                    "median": round(float(np.median(vals)), 4),
                }
        stats[cls] = cls_stats

    with open(OUTPUT_STATS, "w") as f:
        json.dump(stats, f, indent=2)
    print(f"Saved: {OUTPUT_STATS}")

    # Quick summary table
    print("\nPer-class body length (px) summary")
    print(f"  {'Class':<24}  {'Mean':>8}  {'Std':>8}  {'Min':>8}  {'Max':>8}")
    print(f"  {'-'*24}  {'-'*8}  {'-'*8}  {'-'*8}  {'-'*8}")
    for cls, s in stats.items():
        bl = s.get("body_length_px", {})
        if bl:
            print(f"  {cls:<24}  {bl['mean']:8.1f}  {bl['std']:8.1f}  "
                  f"{bl['min']:8.1f}  {bl['max']:8.1f}")

    print("\nPer-class fin-body ratio summary")
    print(f"  {'Class':<24}  {'Mean':>8}  {'Std':>8}  {'Min':>8}  {'Max':>8}")
    print(f"  {'-'*24}  {'-'*8}  {'-'*8}  {'-'*8}  {'-'*8}")
    for cls, s in stats.items():
        fbr = s.get("fin_body_ratio", {})
        if fbr:
            print(f"  {cls:<24}  {fbr['mean']:8.4f}  {fbr['std']:8.4f}  "
                  f"{fbr['min']:8.4f}  {fbr['max']:8.4f}")


if __name__ == "__main__":
    extract_all()
