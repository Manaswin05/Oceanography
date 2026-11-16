import itertools
import numpy as np
import joblib
import os
import random
import json
import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import TensorDataset, DataLoader
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier

# Seed for reproducibility
random.seed(42)
np.random.seed(42)
torch.manual_seed(42)

# Generate all 4-mers (4^4 = 256)
BASES = ['A', 'C', 'G', 'T']
ALL_KMERS = [''.join(p) for p in itertools.product(BASES, repeat=4)]
KMER_INDEX = {kmer: idx for idx, kmer in enumerate(ALL_KMERS)}

# Realistic Marine Taxa Catalog (14 distinct marine species across 6 phyla)
MARINE_TAXONOMY_RECORDS = [
    {
        "Kingdom": "Animalia", "Phylum": "Chordata", "Class": "Actinopterygii",
        "Order": "Scombriformes", "Family": "Scombridae", "Genus": "Thunnus", "Species": "Thunnus albacares",
        "signature": "ATGCCCGATCGATCGATCGAACGTGCTAGCTAGCATCGATCGATCGATCGA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Chordata", "Class": "Actinopterygii",
        "Order": "Perciformes", "Family": "Sparidae", "Genus": "Sparus", "Species": "Sparus aurata",
        "signature": "ATGCGGATCGACTAGCTAGCTAGCAACGTGCTAGCTCGATCGATCGATCGA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Chordata", "Class": "Actinopterygii",
        "Order": "Gadiformes", "Family": "Gadidae", "Genus": "Gadus", "Species": "Gadus morhua",
        "signature": "ATGCTAGCTCGATCGATCGAACGTGCTAGCTAGCTAGCAAGTCGATCGA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Chordata", "Class": "Actinopterygii",
        "Order": "Salmoniformes", "Family": "Salmonidae", "Genus": "Salmo", "Species": "Salmo trutta",
        "signature": "ATGCAACGTGCTAGCTAGCTCGATCGATCGAAGTCGATCGATAGCTAGC"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Chordata", "Class": "Actinopterygii",
        "Order": "Moronidae", "Family": "Moronidae", "Genus": "Dicentrarchus", "Species": "Dicentrarchus labrax",
        "signature": "ATGCGATCGAAGTCGATCGATCGAACGTGCTAGCTAGCTAGCAACGTGCTA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Chordata", "Class": "Chondrichthyes",
        "Order": "Lamniformes", "Family": "Lamnidae", "Genus": "Carcharodon", "Species": "Carcharodon carcharias",
        "signature": "ATGCCTAGCTCGATCGATCGAACGTGCTCGATAGCTAGCAAGTCGATCGA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Arthropoda", "Class": "Malacostraca",
        "Order": "Decapoda", "Family": "Penaeidae", "Genus": "Penaeus", "Species": "Penaeus monodon",
        "signature": "ATGCCGAACGTGCTAGCTAGCAAGTCGATCGATCGATCGATCGAACTAGCT"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Arthropoda", "Class": "Malacostraca",
        "Order": "Decapoda", "Family": "Portunidae", "Genus": "Callinectes", "Species": "Callinectes sapidus",
        "signature": "ATGCGATCGAACGTGCTAGCTAGCAAGTCGATCGAACTAGCTAGCTAGCTA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Mollusca", "Class": "Cephalopoda",
        "Order": "Octopoda", "Family": "Octopodidae", "Genus": "Octopus", "Species": "Octopus vulgaris",
        "signature": "ATGCAGTCGATCGATCGAACGTGCTAGCTAGCAAGTCGATCGAAGTCGATC"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Mollusca", "Class": "Bivalvia",
        "Order": "Ostreida", "Family": "Ostreidae", "Genus": "Crassostrea", "Species": "Crassostrea virginica",
        "signature": "ATGCACGTGCTAGCTAGCAAGTCGATCGATCGAAGTCGATCGAAGTCGCTA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Cnidaria", "Class": "Anthozoa",
        "Order": "Scleractinia", "Family": "Acroporidae", "Genus": "Acropora", "Species": "Acropora cervicornis",
        "signature": "ATGCAAGTCGATCGATCGAACGTGCTAGCTAGCAACGTGCTAGCAAGTCGA"
    },
    {
        "Kingdom": "Animalia", "Phylum": "Echinodermata", "Class": "Asteroidea",
        "Order": "Valvatida", "Family": "Acanthasteridae", "Genus": "Acanthaster", "Species": "Acanthaster planci",
        "signature": "ATGCAGCTAGCAAGTCGATCGATCGAACGTGCTAGCTAGCAAGTCGATCGA"
    }
]

def kmer_count(sequence, k=4):
    seq = sequence.upper()
    return [seq[i:i+k] for i in range(len(seq) - k + 1)]

def vectorize_kmers(sequence, k=4):
    vec = np.zeros(len(KMER_INDEX), dtype=np.float32)
    for kmer in kmer_count(sequence, k):
        if kmer in KMER_INDEX:
            vec[KMER_INDEX[kmer]] += 1
    total = np.sum(vec)
    if total > 0:
        vec /= total
    return vec

def generate_training_data(n_samples_per_taxon=220):
    samples = []
    filter_ids = ["filter-001", "filter-002", "filter-003", "sample-alpha", "sample-beta", "station-deep"]
    
    for record in MARINE_TAXONOMY_RECORDS:
        sig = record["signature"]
        for _ in range(n_samples_per_taxon):
            chars = list(sig)
            mutations = random.randint(1, 5)
            for _ in range(mutations):
                pos = random.randint(0, len(chars) - 1)
                chars[pos] = random.choice(BASES)
            mult = random.randint(2, 4)
            mutated_seq = "".join(chars) * mult
            mutated_seq = mutated_seq[:random.randint(60, 160)]
            
            filter_id = random.choice(filter_ids)
            reads = random.randint(2000, 80000)
            
            vec = vectorize_kmers(mutated_seq, k=4)
            samples.append({
                "vec": vec,
                "sequence": mutated_seq,
                "filter_id": filter_id,
                "reads": reads,
                "Kingdom": record["Kingdom"],
                "Phylum": record["Phylum"],
                "Class": record["Class"],
                "Order": record["Order"],
                "Family": record["Family"],
                "Genus": record["Genus"],
                "Species": record["Species"]
            })
    return samples

# PyTorch Multi-Head Deep Neural Network for Hierarchical Taxonomy
class TaxonomyDeepNet(nn.Module):
    def __init__(self, in_features, class_counts):
        super(TaxonomyDeepNet, self).__init__()
        self.shared = nn.Sequential(
            nn.Linear(in_features, 256),
            nn.BatchNorm1d(256),
            nn.ReLU(),
            nn.Dropout(0.3),
            nn.Linear(256, 128),
            nn.BatchNorm1d(128),
            nn.ReLU(),
            nn.Dropout(0.2)
        )
        self.heads = nn.ModuleDict({
            rank: nn.Linear(128, count) for rank, count in class_counts.items()
        })

    def forward(self, x):
        h = self.shared(x)
        return {rank: head(h) for rank, head in self.heads.items()}

def train_taxonomy():
    os.makedirs("artifacts", exist_ok=True)
    os.makedirs("models", exist_ok=True)
    
    print("Generating comprehensive marine genomic taxonomy dataset...")
    data = generate_training_data(n_samples_per_taxon=250)
    print(f"Total genomic training sequences: {len(data)}")
    
    # 1. K-mer Index
    joblib.dump(KMER_INDEX, "artifacts/kmer_index.pkl")
    
    # 2. Filter Encoder
    all_filters = list(set([d["filter_id"] for d in data])) + ["unknown"]
    le_filter = LabelEncoder()
    le_filter.fit(all_filters)
    joblib.dump(le_filter, "artifacts/filter_encoder.pkl")
    
    # 3. Reads Scaler
    all_reads = np.array([[d["reads"]] for d in data])
    scaler_reads = StandardScaler()
    scaler_reads.fit(all_reads)
    joblib.dump(scaler_reads, "artifacts/reads_scaler.pkl")
    
    # 4. Label Encoders
    taxonomy_ranks = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"]
    label_encoders = {}
    class_counts = {}
    
    X_kmer = np.array([d["vec"] for d in data])
    X_filter = np.array([le_filter.transform([d["filter_id"]])[0] for d in data]).reshape(-1, 1)
    X_reads_scaled = scaler_reads.transform([[d["reads"]] for d in data])
    X = np.hstack([X_kmer, X_filter, X_reads_scaled]).astype(np.float32)
    
    encoded_targets = {}
    for rank in taxonomy_ranks:
        le = LabelEncoder()
        y = le.fit_transform([d[rank] for d in data])
        label_encoders[rank] = le
        encoded_targets[rank] = y
        class_counts[rank] = len(le.classes_)
        print(f"Rank '{rank}': {len(le.classes_)} classes")
        
    joblib.dump(label_encoders, "artifacts/label_encoders.pkl")
    
    # 5. Train Deep PyTorch Neural Network
    print("\nTraining Deep Neural Network (PyTorch Multi-Head Architecture)...")
    device = torch.device("cpu")
    model = TaxonomyDeepNet(in_features=258, class_counts=class_counts).to(device)
    
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=0.003, weight_decay=1e-5)
    
    X_tensor = torch.tensor(X, dtype=torch.float32)
    y_tensors = {rank: torch.tensor(encoded_targets[rank], dtype=torch.long) for rank in taxonomy_ranks}
    
    dataset = TensorDataset(X_tensor, *(y_tensors[rank] for rank in taxonomy_ranks))
    loader = DataLoader(dataset, batch_size=64, shuffle=True)
    
    epochs = 12
    for epoch in range(epochs):
        model.train()
        total_loss = 0.0
        for batch in loader:
            batch_x = batch[0].to(device)
            optimizer.zero_grad()
            outputs = model(batch_x)
            
            loss = 0.0
            for i, rank in enumerate(taxonomy_ranks):
                batch_y = batch[i + 1].to(device)
                loss += criterion(outputs[rank], batch_y)
                
            loss.backward()
            optimizer.step()
            total_loss += loss.item()
            
        if (epoch + 1) % 4 == 0 or epoch == epochs - 1:
            print(f"Epoch [{epoch+1}/{epochs}] - Multi-Head Loss: {total_loss / len(loader):.4f}")
            
    # Save PyTorch Deep Neural Network weights
    torch.save(model.state_dict(), "models/taxonomy_model.pth")
    print("Saved models/taxonomy_model.pth successfully!")
    
    # 6. Also train Scikit-learn multi-rank ensemble pipeline for robust fallback & fast inference
    rank_models = {}
    for rank in taxonomy_ranks:
        clf = RandomForestClassifier(n_estimators=70, max_depth=14, random_state=42, n_jobs=-1)
        clf.fit(X, encoded_targets[rank])
        rank_models[rank] = clf
        
    taxonomy_bundle = {
        "kmer_index": KMER_INDEX,
        "filter_encoder": le_filter,
        "reads_scaler": scaler_reads,
        "label_encoders": label_encoders,
        "rank_models": rank_models,
        "class_counts": class_counts,
        "ranks": taxonomy_ranks
    }
    joblib.dump(taxonomy_bundle, "models/taxonomy_pipeline.joblib")
    print("Saved models/taxonomy_pipeline.joblib and artifacts successfully!")

if __name__ == "__main__":
    train_taxonomy()

