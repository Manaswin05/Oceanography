from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import numpy as np
import joblib

app = FastAPI(title="Taxonomical Classification API")

origins = [
    "http://127.0.0.1:5500",  # frontend URL
    "http://localhost:5500"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# ------------------------
# Globals (lazy loaded)
# ------------------------
model = None
kmer_index = None
le_filter = None
scaler_reads = None
label_encoders = None

taxonomy_columns = [
    "Kingdom", "Phylum", "Class",
    "Order", "Family", "Genus", "Species"
]

k = 4


class TaxonomyInput(BaseModel):
    sequence: str
    filter_id: str
    reads: int


def load_artifacts():
    global model, kmer_index, le_filter, scaler_reads, label_encoders

    if model is None:
        # ⛔ TensorFlow import ONLY here
        from tensorflow.keras.models import load_model

        model = load_model("taxonomy_model.h5")
        kmer_index = joblib.load("artifacts/kmer_index.pkl")
        le_filter = joblib.load("artifacts/filter_encoder.pkl")
        scaler_reads = joblib.load("artifacts/reads_scaler.pkl")
        label_encoders = joblib.load("artifacts/label_encoders.pkl")


def kmer_count(sequence, k):
    return [sequence[i:i+k] for i in range(len(sequence) - k + 1)]


def vectorize_kmers(sequence, k):
    vec = np.zeros(len(kmer_index), dtype=np.float32)
    for kmer in kmer_count(sequence, k):
        if kmer in kmer_index:
            vec[kmer_index[kmer]] += 1
    return vec


@app.post("/predict")
def predict(data: TaxonomyInput):
    load_artifacts()

    X_seq = vectorize_kmers(data.sequence.upper(), k).reshape(1, -1)
    X_filter = np.array([[le_filter.transform([data.filter_id])[0]]])
    X_reads = scaler_reads.transform([[data.reads]])

    X = np.hstack([X_seq, X_filter, X_reads])

    preds = model.predict(X)

    taxonomy = {}
    confidence = {}

    for i, level in enumerate(taxonomy_columns):
        idx = int(np.argmax(preds[i][0]))
        taxonomy[level] = label_encoders[level].inverse_transform([idx])[0]
        confidence[level] = float(np.max(preds[i][0]))

    return {"taxonomy": taxonomy, "confidence": confidence}


@app.get("/")
def health():
    return {"status": "API running"}

