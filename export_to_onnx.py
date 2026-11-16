"""
export_to_onnx.py
=================
Standalone ONNX export + ONNX Runtime inference benchmark.
Run this after training completes (fish_classifier_v2.pth must exist).

Usage
-----
  python export_to_onnx.py

Outputs
-------
  models/fish_classifier_v2.onnx
  models/onnx_benchmark.json
"""

import os, json, time
import numpy as np
import torch
from torchvision import models
import torch.nn as nn
import onnxruntime as ort

CHECKPOINT = os.path.join("models", "fish_classifier_v2.pth")
ONNX_PATH  = os.path.join("models", "fish_classifier_v2.onnx")
BENCH_PATH = os.path.join("models", "onnx_benchmark.json")
IMG_SIZE   = 224

CLASSES = [
    "Black Sea Sprat", "Gilt-Head Bream", "Hourse Mackerel",
    "Red Mullet", "Red Sea Bream", "Sea Bass",
    "Shrimp", "Striped Red Mullet", "Trout",
]


def build_model(num_classes: int) -> nn.Module:
    m = models.efficientnet_b0(weights=None)
    in_features = m.classifier[1].in_features
    m.classifier = nn.Sequential(
        nn.Dropout(p=0.3, inplace=True),
        nn.Linear(in_features, num_classes),
    )
    return m


def export():
    if not os.path.isfile(CHECKPOINT):
        print(f"Checkpoint not found: {CHECKPOINT}")
        print("Run train_fish_classifier_v2.py first.")
        return

    ckpt   = torch.load(CHECKPOINT, map_location="cpu")
    model  = build_model(len(CLASSES))
    model.load_state_dict(ckpt["model_state"])
    model.eval()
    print(f"Loaded checkpoint (val_acc={ckpt.get('val_acc',0)*100:.2f}% @ epoch {ckpt.get('epoch','?')})")

    dummy = torch.randn(1, 3, IMG_SIZE, IMG_SIZE)
    torch.onnx.export(
        model, dummy, ONNX_PATH,
        input_names=["input"],
        output_names=["logits"],
        dynamic_axes={"input": {0: "batch"}, "logits": {0: "batch"}},
        opset_version=17,
        do_constant_folding=True,
        verbose=False,
    )
    print(f"Exported: {ONNX_PATH}  ({os.path.getsize(ONNX_PATH)/1e6:.1f} MB)")

    benchmark()


def benchmark():
    providers = ort.get_available_providers()
    print(f"\nAvailable ONNX RT providers: {providers}")

    # Prefer CUDA if available, else CPU
    chosen = []
    if "CUDAExecutionProvider" in providers:
        chosen = ["CUDAExecutionProvider", "CPUExecutionProvider"]
    else:
        chosen = ["CPUExecutionProvider"]

    sess = ort.InferenceSession(ONNX_PATH, providers=chosen)
    active = sess.get_providers()[0]
    print(f"Running with: {active}")

    # Warm-up
    dummy_np = np.random.randn(1, 3, IMG_SIZE, IMG_SIZE).astype(np.float32)
    for _ in range(5):
        sess.run(["logits"], {"input": dummy_np})

    # Benchmark single-image latency
    runs = 100
    t0 = time.perf_counter()
    for _ in range(runs):
        sess.run(["logits"], {"input": dummy_np})
    elapsed = (time.perf_counter() - t0) / runs * 1000  # ms

    print(f"Single-image latency ({active}): {elapsed:.2f} ms  "
          f"({1000/elapsed:.0f} FPS)")

    # Batch benchmark
    batch_np = np.random.randn(16, 3, IMG_SIZE, IMG_SIZE).astype(np.float32)
    t0 = time.perf_counter()
    for _ in range(20):
        sess.run(["logits"], {"input": batch_np})
    batch_ms = (time.perf_counter() - t0) / 20 * 1000
    print(f"Batch-16 latency  ({active}): {batch_ms:.2f} ms  "
          f"({16000/batch_ms:.0f} FPS)")

    # Spot-check a prediction
    out = sess.run(["logits"], {"input": dummy_np})[0]
    pred_idx = int(np.argmax(out))
    print(f"\nSpot-check prediction: {CLASSES[pred_idx]} "
          f"(logit={out[0, pred_idx]:.3f})")

    bench = {
        "provider":          active,
        "single_image_ms":   round(elapsed, 3),
        "single_image_fps":  round(1000/elapsed, 1),
        "batch16_ms":        round(batch_ms, 3),
        "batch16_fps":       round(16000/batch_ms, 1),
    }
    with open(BENCH_PATH, "w") as f:
        json.dump(bench, f, indent=2)
    print(f"\nBenchmark saved: {BENCH_PATH}")


if __name__ == "__main__":
    export()
