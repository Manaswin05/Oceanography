"""
Fish Physical Feature Extractor using OpenCV.

Extracts measurable physical features from fish images:
- Body shape (elongation, convexity, solidity)
- Eye characteristics (size ratio, position)
- Fin detection (dorsal fin prominence)
- Color distribution (HSV histogram)
- Jaw/mouth region features
- Texture features (edge density)
"""

import cv2
import numpy as np
from typing import Dict, List, Optional, Tuple


# ─────────────────────────────────────────────────────────
#  Helper utilities
# ─────────────────────────────────────────────────────────

def preprocess(image: np.ndarray, target_size: Tuple[int, int] = (256, 256)) -> np.ndarray:
    """Resize and normalise an image for feature extraction."""
    img = cv2.resize(image, target_size)
    return img


def get_fish_mask(image: np.ndarray) -> np.ndarray:
    """
    Return a binary mask isolating the fish body.

    Strategy:
    1. Convert to LAB colour space for better segmentation.
    2. Apply GrabCut with a central rectangle as the foreground hint.
    3. Fill holes and keep the largest connected component.
    """
    h, w = image.shape[:2]
    mask = np.zeros((h, w), np.uint8)

    # Central rectangle (80 % of the image) as a foreground hint
    rect = (int(w * 0.05), int(h * 0.05), int(w * 0.90), int(h * 0.90))

    bgd_model = np.zeros((1, 65), np.float64)
    fgd_model = np.zeros((1, 65), np.float64)

    try:
        cv2.grabCut(image, mask, rect, bgd_model, fgd_model, 5, cv2.GC_INIT_WITH_RECT)
        mask2 = np.where((mask == 2) | (mask == 0), 0, 1).astype(np.uint8)
    except Exception:
        # Fallback: simple threshold on value channel
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
        _, mask2 = cv2.threshold(hsv[:, :, 2], 30, 1, cv2.THRESH_BINARY)

    # Keep largest blob
    num_labels, labels, stats, _ = cv2.connectedComponentsWithStats(mask2, connectivity=8)
    if num_labels > 1:
        largest = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
        mask2 = (labels == largest).astype(np.uint8)

    return mask2


# ─────────────────────────────────────────────────────────
#  Individual feature groups
# ─────────────────────────────────────────────────────────

def extract_body_shape_features(mask: np.ndarray) -> Dict[str, float]:
    """
    Morphological shape features derived from the fish contour.

    Returns:
        aspect_ratio       – width / height of the bounding rectangle
        elongation         – major axis / minor axis from PCA ellipse
        solidity           – contour area / convex hull area
        convexity          – convex hull perimeter / contour perimeter
        extent             – contour area / bounding rect area
        circularity        – 4π·area / perimeter²
        fin_protrusion     – fraction of hull area outside the filled body
    """
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return _default_shape_features()

    cnt = max(contours, key=cv2.contourArea)
    area = cv2.contourArea(cnt)
    if area < 100:
        return _default_shape_features()

    perimeter = cv2.arcLength(cnt, True) + 1e-6
    x, y, bw, bh = cv2.boundingRect(cnt)

    # Convex hull
    hull = cv2.convexHull(cnt)
    hull_area = cv2.contourArea(hull) + 1e-6
    hull_perim = cv2.arcLength(hull, True) + 1e-6

    # Ellipse (PCA-based elongation)
    if len(cnt) >= 5:
        ellipse = cv2.fitEllipse(cnt)
        major, minor = max(ellipse[1]), min(ellipse[1]) + 1e-6
        elongation = major / minor
    else:
        elongation = bw / (bh + 1e-6)

    return {
        "aspect_ratio":   bw / (bh + 1e-6),
        "elongation":     elongation,
        "solidity":       area / hull_area,
        "convexity":      hull_perim / perimeter,
        "extent":         area / (bw * bh + 1e-6),
        "circularity":    (4 * np.pi * area) / (perimeter ** 2),
        "fin_protrusion": (hull_area - area) / hull_area,
    }


def _default_shape_features() -> Dict[str, float]:
    return {k: 0.0 for k in
            ["aspect_ratio", "elongation", "solidity", "convexity",
             "extent", "circularity", "fin_protrusion"]}


# ──────────────────────────────────────────────────────────

def extract_eye_features(image: np.ndarray, mask: np.ndarray) -> Dict[str, float]:
    """
    Detect eye(s) using Hough circles on the masked image.

    Returns:
        eye_size_ratio    – mean eye diameter / body length
        eye_position_x    – normalised horizontal position (0 = left, 1 = right)
        eye_position_y    – normalised vertical position (0 = top, 1 = bottom)
        num_eyes          – number of circles detected (capped at 3)
    """
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    masked_gray = cv2.bitwise_and(gray, gray, mask=mask)

    # Enhance contrast in masked area
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(masked_gray)

    circles = cv2.HoughCircles(
        enhanced, cv2.HOUGH_GRADIENT, dp=1.2, minDist=20,
        param1=50, param2=20, minRadius=3, maxRadius=40
    )

    h, w = image.shape[:2]
    # Get body bounding box for normalisation
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if contours:
        x, y, bw, bh = cv2.boundingRect(max(contours, key=cv2.contourArea))
        body_length = max(bw, bh) + 1e-6
    else:
        x, y, bw, bh = 0, 0, w, h
        body_length = max(w, h)

    if circles is None:
        return {"eye_size_ratio": 0.0, "eye_position_x": 0.3,
                "eye_position_y": 0.5, "num_eyes": 0.0}

    circles = np.round(circles[0, :]).astype(int)
    # Keep circles that lie inside the mask
    valid = [c for c in circles if 0 <= c[1] < h and 0 <= c[0] < w and mask[c[1], c[0]] == 1]
    if not valid:
        valid = circles.tolist()

    valid = valid[:3]  # cap
    cx_mean = np.mean([c[0] for c in valid])
    cy_mean = np.mean([c[1] for c in valid])
    r_mean  = np.mean([c[2] for c in valid])

    return {
        "eye_size_ratio":  (2 * r_mean) / body_length,
        "eye_position_x":  (cx_mean - x) / (bw + 1e-6),
        "eye_position_y":  (cy_mean - y) / (bh + 1e-6),
        "num_eyes":        min(len(valid), 3) / 3.0,
    }


# ──────────────────────────────────────────────────────────

def extract_fin_features(image: np.ndarray, mask: np.ndarray) -> Dict[str, float]:
    """
    Detect fins as protrusions from the convex hull.

    Strategy: subtract the eroded body from the convex-hull filled image
    to isolate fin tips, then measure their properties.

    Returns:
        dorsal_fin_height  – max vertical protrusion relative to body height
        fin_area_ratio     – total fin area / body area
        fin_count          – number of distinct fin protrusions (normalised /6)
        caudal_fin_width   – width of tail region relative to body
    """
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return _default_fin_features()

    cnt = max(contours, key=cv2.contourArea)
    area = cv2.contourArea(cnt)
    if area < 100:
        return _default_fin_features()

    h, w = mask.shape
    x, y, bw, bh = cv2.boundingRect(cnt)

    # Fill hull
    hull = cv2.convexHull(cnt)
    hull_mask = np.zeros_like(mask)
    cv2.fillPoly(hull_mask, [hull], 1)

    # Fin region = hull minus body
    fin_mask = cv2.subtract(hull_mask, mask)

    # Erode to remove noise
    kernel = np.ones((3, 3), np.uint8)
    fin_mask = cv2.erode(fin_mask, kernel, iterations=1)

    fin_contours, _ = cv2.findContours(fin_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    fin_area = sum(cv2.contourArea(c) for c in fin_contours) + 1e-6

    # Dorsal fin: largest protrusion above the centroid
    M = cv2.moments(cnt)
    cy = int(M["m01"] / (M["m00"] + 1e-6))
    dorsal_height = 0.0
    for fc in fin_contours:
        fx, fy, fw, fh = cv2.boundingRect(fc)
        if fy + fh < cy:  # protrusion is above centroid → likely dorsal
            dorsal_height = max(dorsal_height, fh)

    # Caudal fin: rightmost 15% of body width
    tail_x = x + int(bw * 0.85)
    tail_region = mask[:, tail_x:]
    tail_rows = np.any(tail_region > 0, axis=1)
    caudal_width = np.sum(tail_rows) / (bh + 1e-6) if bh > 0 else 0.0

    return {
        "dorsal_fin_height": dorsal_height / (bh + 1e-6),
        "fin_area_ratio":    fin_area / (area + 1e-6),
        "fin_count":         min(len(fin_contours), 6) / 6.0,
        "caudal_fin_width":  min(caudal_width, 2.0) / 2.0,
    }


def _default_fin_features() -> Dict[str, float]:
    return {"dorsal_fin_height": 0.0, "fin_area_ratio": 0.0,
            "fin_count": 0.0, "caudal_fin_width": 0.0}


# ──────────────────────────────────────────────────────────

def extract_jaw_features(image: np.ndarray, mask: np.ndarray) -> Dict[str, float]:
    """
    Estimate jaw/mouth characteristics from the anterior (front) body region.

    Returns:
        jaw_width_ratio    – estimated mouth width / head width
        jaw_protrusion     – how much the snout extends forward
        mouth_position_y   – vertical position of mouth (0 = top, 1 = bottom)
    """
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    if not contours:
        return {"jaw_width_ratio": 0.5, "jaw_protrusion": 0.5, "mouth_position_y": 0.5}

    cnt = max(contours, key=cv2.contourArea)
    x, y, bw, bh = cv2.boundingRect(cnt)

    # Head region = left 25% of body bounding box
    head_w = max(int(bw * 0.25), 10)
    head_region_mask = mask[y:y+bh, x:x+head_w]

    # Profile of the head (row-wise width of fish pixels)
    row_widths = np.sum(head_region_mask, axis=1).astype(float)
    row_widths = row_widths[row_widths > 0]
    if len(row_widths) == 0:
        return {"jaw_width_ratio": 0.5, "jaw_protrusion": 0.5, "mouth_position_y": 0.5}

    max_width = row_widths.max() + 1e-6
    min_width = row_widths.min()

    # Jaw width = narrowest part of the head profile (mouth)
    jaw_width_ratio = min_width / max_width

    # Protrusion: how tapered the snout is
    jaw_protrusion = row_widths[0] / max_width if len(row_widths) > 0 else 0.5

    # Vertical position of the narrowest row (mouth)
    mouth_row = np.argmin(row_widths)
    mouth_position_y = mouth_row / (len(row_widths) + 1e-6)

    return {
        "jaw_width_ratio":  float(jaw_width_ratio),
        "jaw_protrusion":   float(jaw_protrusion),
        "mouth_position_y": float(mouth_position_y),
    }


# ──────────────────────────────────────────────────────────

def extract_color_features(image: np.ndarray, mask: np.ndarray) -> Dict[str, float]:
    """
    Colour distribution in HSV space over the fish body.

    Returns 9 features:
        h_mean, h_std        – hue statistics
        s_mean, s_std        – saturation statistics
        v_mean, v_std        – value/brightness statistics
        colorfulness         – std(R-G) + std(R+G-2B) metric
        dominant_hue_bin     – which of 8 hue bins has most pixels (0-7, normalised)
        stripe_score         – variance of column-wise brightness (detects stripes)
    """
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    mask_bool = mask.astype(bool)

    h_vals = hsv[:, :, 0][mask_bool].astype(float)
    s_vals = hsv[:, :, 1][mask_bool].astype(float)
    v_vals = hsv[:, :, 2][mask_bool].astype(float)

    if len(h_vals) == 0:
        return {k: 0.0 for k in ["h_mean", "h_std", "s_mean", "s_std",
                                   "v_mean", "v_std", "colorfulness",
                                   "dominant_hue_bin", "stripe_score"]}

    # Dominant hue bin
    hist_h, _ = np.histogram(h_vals, bins=8, range=(0, 180))
    dominant_hue_bin = float(np.argmax(hist_h)) / 7.0

    # Stripe score: variance of column means of value channel
    col_means = np.mean(hsv[:, :, 2] * mask, axis=0)
    col_means = col_means[col_means > 0]
    stripe_score = float(np.std(col_means)) / 128.0 if len(col_means) > 0 else 0.0

    # Colorfulness (Hasler & Süsstrunk)
    b, g, r = image[:, :, 0][mask_bool].astype(float), \
               image[:, :, 1][mask_bool].astype(float), \
               image[:, :, 2][mask_bool].astype(float)
    rg = r - g
    yb = 0.5 * (r + g) - b
    colorfulness = (np.std(rg) + np.std(yb)) / 255.0

    return {
        "h_mean":           float(np.mean(h_vals)) / 180.0,
        "h_std":            float(np.std(h_vals))  / 90.0,
        "s_mean":           float(np.mean(s_vals)) / 255.0,
        "s_std":            float(np.std(s_vals))  / 128.0,
        "v_mean":           float(np.mean(v_vals)) / 255.0,
        "v_std":            float(np.std(v_vals))  / 128.0,
        "colorfulness":     float(colorfulness),
        "dominant_hue_bin": float(dominant_hue_bin),
        "stripe_score":     float(stripe_score),
    }


# ──────────────────────────────────────────────────────────

def extract_texture_features(image: np.ndarray, mask: np.ndarray) -> Dict[str, float]:
    """
    Texture features using edge density and Laplacian variance.

    Returns:
        edge_density   – fraction of fish pixels that are edges
        laplacian_var  – sharpness / texture roughness (normalised)
        scale_score    – periodic pattern indicator via row-wise brightness FFT
    """
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, 50, 150)
    fish_pixels = max(1, int(mask.sum()))

    edge_density = float(np.sum(edges[mask == 1] > 0)) / fish_pixels

    lap = cv2.Laplacian(gray, cv2.CV_64F)
    laplacian_var = float(np.var(lap[mask == 1])) / 10000.0

    # Scale score: FFT of row-wise brightness profile
    row_brightness = np.mean(gray * mask, axis=1)
    row_brightness = row_brightness[row_brightness > 0]
    if len(row_brightness) > 4:
        fft_vals = np.abs(np.fft.rfft(row_brightness))
        fft_vals = fft_vals[1:]  # remove DC
        scale_score = float(np.max(fft_vals)) / (np.sum(fft_vals) + 1e-6)
    else:
        scale_score = 0.0

    return {
        "edge_density":  min(edge_density, 1.0),
        "laplacian_var": min(laplacian_var, 1.0),
        "scale_score":   float(scale_score),
    }


# ─────────────────────────────────────────────────────────
#  Master extractor
# ─────────────────────────────────────────────────────────

FEATURE_NAMES = [
    # Body shape (7)
    "aspect_ratio", "elongation", "solidity", "convexity",
    "extent", "circularity", "fin_protrusion",
    # Eyes (4)
    "eye_size_ratio", "eye_position_x", "eye_position_y", "num_eyes",
    # Fins (4)
    "dorsal_fin_height", "fin_area_ratio", "fin_count", "caudal_fin_width",
    # Jaw (3)
    "jaw_width_ratio", "jaw_protrusion", "mouth_position_y",
    # Colour (9)
    "h_mean", "h_std", "s_mean", "s_std",
    "v_mean", "v_std", "colorfulness", "dominant_hue_bin", "stripe_score",
    # Texture (3)
    "edge_density", "laplacian_var", "scale_score",
]  # Total: 30 features


def extract_features(image: np.ndarray) -> Dict[str, float]:
    """
    Full feature extraction pipeline.

    Args:
        image: BGR image (numpy array) as loaded by cv2.

    Returns:
        Dictionary of 30 normalised float features (all in [0, ~2] range).
    """
    img = preprocess(image)
    mask = get_fish_mask(img)

    feats = {}
    feats.update(extract_body_shape_features(mask))
    feats.update(extract_eye_features(img, mask))
    feats.update(extract_fin_features(img, mask))
    feats.update(extract_jaw_features(img, mask))
    feats.update(extract_color_features(img, mask))
    feats.update(extract_texture_features(img, mask))

    return feats


def features_to_vector(feats: Dict[str, float]) -> List[float]:
    """Convert feature dict to an ordered numpy-ready list."""
    return [feats.get(name, 0.0) for name in FEATURE_NAMES]
