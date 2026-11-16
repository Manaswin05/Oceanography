import itertools
import numpy as np
import joblib
import os
import random
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier

# Seed
random.seed(42)
np.random.seed(42)

# Generate all 4-mers (4^4 = 256)
BASES = ['A', 'C', 'G', 'T']
ALL_KMERS = [''.join(p) for p in itertools.product(BASES, repeat=4)]
KMER_INDEX = {kmer: idx for idx, kmer in enumerate(ALL_KMERS)}

# Realistic Marine Taxa Catalog
MARINE_TAXONOMY_RECORDS = [
    # Fish / Chordata
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
    # Crustaceans / Arthropoda
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
    # Mollusca
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
    # Cnidaria / Corals
    {
        "Kingdom": "Animalia", "Phylum": "Cnidaria", "Class": "Anthozoa",
        "Order": "Scleractinia", "Family": "Acroporidae", "Genus": "Acropora", "Species": "Acropora cervicornis",
        "signature": "ATGCAAGTCGATCGATCGAACGTGCTAGCTAGCAACGTGCTAGCAAGTCGA"
    },
    # Echinodermata
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
    # Normalize frequencies
    total = np.sum(vec)
    if total > 0:
        vec /= total
    return vec

def generate_augmented_taxonomy_data(n_samples_per_taxon=150):
    samples = []
    filter_ids = ["filter-001", "filter-002", "filter-003", "sample-alpha", "sample-beta", "station-deep"]
    
    for record in MARINE_TAXONOMY_RECORDS:
        sig = record["signature"]
        for _ in range(n_samples_per_taxon):
            # Mutate slightly to mimic biological variation and sequencing noise
            chars = list(sig)
            mutations = random.randint(1, 6)
            for _ in range(mutations):
                pos = random.randint(0, len(chars) - 1)
                chars[pos] = random.choice(BASES)
            # Repeat or extend
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

def train_taxonomy():
    os.makedirs("artifacts", exist_ok=True)
    os.makedirs("models", exist_ok=True)
    
    print("Generating synthetic marine genomic taxonomy training samples...")
    data = generate_augmented_taxonomy_data(n_samples_per_taxon=200)
    
    # 1. Save K-mer Index
    joblib.dump(KMER_INDEX, "artifacts/kmer_index.pkl")
    print("Saved artifacts/kmer_index.pkl")
    
    # 2. Filter Encoder
    all_filters = list(set([d["filter_id"] for d in data])) + ["unknown"]
    le_filter = LabelEncoder()
    le_filter.fit(all_filters)
    joblib.dump(le_filter, "artifacts/filter_encoder.pkl")
    print("Saved artifacts/filter_encoder.pkl")
    
    # 3. Reads Scaler
    all_reads = np.array([[d["reads"]] for d in data])
    scaler_reads = StandardScaler()
    scaler_reads.fit(all_reads)
    joblib.dump(scaler_reads, "artifacts/reads_scaler.pkl")
    print("Saved artifacts/reads_scaler.pkl")
    
    # 4. Label Encoders and Multi-Head Classifiers for all 7 taxonomic ranks
    taxonomy_ranks = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"]
    label_encoders = {}
    rank_models = {}
    
    X_kmer = np.array([d["vec"] for d in data])
    X_filter = np.array([le_filter.transform([d["filter_id"]])[0] for d in data]).reshape(-1, 1)
    X_reads_scaled = scaler_reads.transform([[d["reads"]] for d in data])
    X = np.hstack([X_kmer, X_filter, X_reads_scaled])
    
    for rank in taxonomy_ranks:
        le = LabelEncoder()
        y = le.fit_transform([d[rank] for d in data])
        label_encoders[rank] = le
        
        clf = RandomForestClassifier(n_estimators=60, max_depth=12, random_state=42, n_jobs=-1)
        clf.fit(X, y)
        rank_models[rank] = clf
        print(f"Trained classifier for rank: {rank} ({len(le.classes_)} classes)")
        
    joblib.dump(label_encoders, "artifacts/label_encoders.pkl")
    print("Saved artifacts/label_encoders.pkl")
    
    taxonomy_bundle = {
        "kmer_index": KMER_INDEX,
        "filter_encoder": le_filter,
        "reads_scaler": scaler_reads,
        "label_encoders": label_encoders,
        "rank_models": rank_models,
        "ranks": taxonomy_ranks
    }
    joblib.dump(taxonomy_bundle, "models/taxonomy_pipeline.joblib")
    print("Saved models/taxonomy_pipeline.joblib successfully!")

if __name__ == "__main__":
    train_taxonomy()

