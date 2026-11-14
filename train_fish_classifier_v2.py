"""
train_fish_classifier_v2.py
===========================
Fish species classifier using EfficientNet-B0 (torchvision).
Uses the full dataset (up to 1000 images/class), GT-mask-based augmentation,
cosine annealing LR, label smoothing, and ONNX export.

GPU: Uses CUDA if available, otherwise CPU (ONNX Runtime handles inference acceleration).

Outputs
-------
  models/fish_classifier_v2.pth      – best checkpoint
  models/fish_classifier_v2.onnx     – ONNX export for runtime inference
  models/fish_classes.json           – class list
  models/training_log_v2.json        – per-epoch metrics
"""

import os, json, random, time
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import Dataset, DataLoader
from torchvision import transforms, models
from PIL import Image
import numpy as np

# ── Reproducibility ──────────────────────────────────────────────────────────
SEED = 42
random.seed(SEED)
np.random.seed(SEED)
torch.manual_seed(SEED)

# ── Config ───────────────────────────────────────────────────────────────────
DATASET_ROOT      = "datasets"
MODELS_DIR        = "models"
CHECKPOINT_PATH   = os.path.join(MODELS_DIR, "fish_classifier_v2.pth")
ONNX_PATH         = os.path.join(MODELS_DIR, "fish_classifier_v2.onnx")
CLASSES_PATH      = os.path.join(MODELS_DIR, "fish_classes.json")
LOG_PATH          = os.path.join(MODELS_DIR, "training_log_v2.json")

IMG_SIZE          = 224        # EfficientNet-B0 native size
BATCH_SIZE        = 32
EPOCHS            = 25
LR                = 3e-4
WEIGHT_DECAY      = 1e-4
LABEL_SMOOTHING   = 0.1
TRAIN_SPLIT       = 0.80
MAX_IMGS_PER_CLASS = 1000      # use the full augmented dataset

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

# ── Dataset ──────────────────────────────────────────────────────────────────
class FishDataset(Dataset):
    def __init__(self, samples, transform=None):
        self.samples   = samples
        self.transform = transform

    def __len__(self):
        return len(self.samples)

    def __getitem__(self, idx):
        path, label = self.samples[idx]
        image = Image.open(path).convert("RGB")
        if self.transform:
            image = self.transform(image)
        return image, label


def collect_samples():
    train_samples, val_samples = [], []
    for idx, cls in enumerate(CLASSES):
        folder = os.path.join(DATASET_ROOT, cls, cls)
        if not os.path.isdir(folder):
            print(f"  [WARN] Missing folder: {folder}")
            continue
        imgs = sorted([
            os.path.join(folder, f) for f in os.listdir(folder)
            if f.lower().endswith((".png", ".jpg", ".jpeg"))
        ])
        random.shuffle(imgs)
        imgs = imgs[:MAX_IMGS_PER_CLASS]
        split = int(TRAIN_SPLIT * len(imgs))
        for p in imgs[:split]:
            train_samples.append((p, idx))
        for p in imgs[split:]:
            val_samples.append((p, idx))

    print(f"  Train: {len(train_samples)} | Val: {len(val_samples)}")
    return train_samples, val_samples


# ImageNet mean/std (EfficientNet was pretrained on ImageNet)
MEAN = [0.485, 0.456, 0.406]
STD  = [0.229, 0.224, 0.225]

train_transform = transforms.Compose([
    transforms.Resize((IMG_SIZE + 32, IMG_SIZE + 32)),
    transforms.RandomCrop(IMG_SIZE),
    transforms.RandomHorizontalFlip(),
    transforms.RandomVerticalFlip(p=0.2),
    transforms.RandomRotation(20),
    transforms.ColorJitter(brightness=0.3, contrast=0.3, saturation=0.2, hue=0.05),
    transforms.RandomGrayscale(p=0.05),
    transforms.ToTensor(),
    transforms.Normalize(MEAN, STD),
])

val_transform = transforms.Compose([
    transforms.Resize((IMG_SIZE, IMG_SIZE)),
    transforms.ToTensor(),
    transforms.Normalize(MEAN, STD),
])


# ── Model ────────────────────────────────────────────────────────────────────
def build_model(num_classes: int) -> nn.Module:
    """EfficientNet-B0 with replaced classifier head."""
    model = models.efficientnet_b0(weights=models.EfficientNet_B0_Weights.IMAGENET1K_V1)
    in_features = model.classifier[1].in_features
    model.classifier = nn.Sequential(
        nn.Dropout(p=0.3, inplace=True),
        nn.Linear(in_features, num_classes),
    )
    return model


# ── Training loop ─────────────────────────────────────────────────────────────
def train():
    os.makedirs(MODELS_DIR, exist_ok=True)

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
    print(f"\n{'='*55}")
    print(f"  Device : {device}")
    if device.type == "cuda":
        print(f"  GPU    : {torch.cuda.get_device_name(0)}")
    print(f"  Epochs : {EPOCHS}  |  Batch : {BATCH_SIZE}  |  LR : {LR}")
    print(f"{'='*55}\n")

    print("Collecting dataset samples...")
    train_samples, val_samples = collect_samples()

    train_ds = FishDataset(train_samples, train_transform)
    val_ds   = FishDataset(val_samples,   val_transform)

    num_workers = 0  # Windows-safe default; increase on Linux
    train_loader = DataLoader(train_ds, batch_size=BATCH_SIZE, shuffle=True,
                              num_workers=num_workers, pin_memory=(device.type=="cuda"))
    val_loader   = DataLoader(val_ds,   batch_size=BATCH_SIZE, shuffle=False,
                              num_workers=num_workers, pin_memory=(device.type=="cuda"))

    model = build_model(num_classes=len(CLASSES)).to(device)

    criterion = nn.CrossEntropyLoss(label_smoothing=LABEL_SMOOTHING)
    optimizer = optim.AdamW(model.parameters(), lr=LR, weight_decay=WEIGHT_DECAY)
    # Cosine annealing: smooth LR decay over all epochs
    scheduler = optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=EPOCHS, eta_min=1e-6)

    best_val_acc = 0.0
    log = []

    for epoch in range(1, EPOCHS + 1):
        t0 = time.time()

        # ── Train ──
        model.train()
        running_loss, correct, total = 0.0, 0, 0
        for images, labels in train_loader:
            images, labels = images.to(device), labels.to(device)
            optimizer.zero_grad()
            outputs = model(images)
            loss    = criterion(outputs, labels)
            loss.backward()
            optimizer.step()

            running_loss += loss.item() * images.size(0)
            preds  = outputs.argmax(dim=1)
            correct += (preds == labels).sum().item()
            total   += labels.size(0)

        scheduler.step()
        train_loss = running_loss / total
        train_acc  = correct / total

        # ── Validate ──
        model.eval()
        val_correct, val_total = 0, 0
        with torch.no_grad():
            for images, labels in val_loader:
                images, labels = images.to(device), labels.to(device)
                preds = model(images).argmax(dim=1)
                val_correct += (preds == labels).sum().item()
                val_total   += labels.size(0)

        val_acc = val_correct / val_total
        elapsed = time.time() - t0
        current_lr = scheduler.get_last_lr()[0]

        print(f"Epoch [{epoch:02d}/{EPOCHS}] "
              f"loss={train_loss:.4f}  train={train_acc*100:.2f}%  "
              f"val={val_acc*100:.2f}%  lr={current_lr:.2e}  "
              f"({elapsed:.1f}s)")

        entry = dict(epoch=epoch, train_loss=round(train_loss, 4),
                     train_acc=round(train_acc, 4), val_acc=round(val_acc, 4),
                     lr=round(current_lr, 8))
        log.append(entry)

        if val_acc > best_val_acc:
            best_val_acc = val_acc
            torch.save({"model_state": model.state_dict(),
                        "classes": CLASSES,
                        "val_acc": best_val_acc,
                        "epoch": epoch}, CHECKPOINT_PATH)
            print(f"  → Saved checkpoint (val={val_acc*100:.2f}%)")

    print(f"\nBest val accuracy: {best_val_acc*100:.2f}%")

    # ── Save metadata ──
    with open(CLASSES_PATH, "w") as f:
        json.dump(CLASSES, f, indent=2)
    with open(LOG_PATH, "w") as f:
        json.dump({"best_val_acc": round(best_val_acc, 4), "epochs": log}, f, indent=2)
    print(f"Saved: {CHECKPOINT_PATH}, {CLASSES_PATH}, {LOG_PATH}")

    # ── ONNX export ──
    export_onnx(model, device)


def export_onnx(model: nn.Module, device: torch.device):
    """Export to ONNX and verify with ONNX Runtime."""
    print("\nExporting model to ONNX...")
    model.eval()
    dummy = torch.randn(1, 3, IMG_SIZE, IMG_SIZE, device=device)
    torch.onnx.export(
        model, dummy, ONNX_PATH,
        input_names=["input"],
        output_names=["logits"],
        dynamic_axes={"input": {0: "batch"}, "logits": {0: "batch"}},
        opset_version=17,
        do_constant_folding=True,
    )
    print(f"  Exported: {ONNX_PATH}")

    # Verify
    try:
        import onnxruntime as ort
        sess = ort.InferenceSession(ONNX_PATH,
                                    providers=["CUDAExecutionProvider", "CPUExecutionProvider"])
        dummy_np = dummy.cpu().numpy()
        out = sess.run(["logits"], {"input": dummy_np})
        pred_class = int(np.argmax(out[0]))
        print(f"  ONNX Runtime verification OK — dummy pred class: {CLASSES[pred_class]}")
        print(f"  Active provider: {sess.get_providers()[0]}")
    except Exception as e:
        print(f"  ONNX Runtime check failed: {e}")


if __name__ == "__main__":
    train()
