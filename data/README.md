# data/ — Datasets

All CSV files used by OceanVision models, training notebooks, and the research portal.

---

## asv_table.csv  (~63 MB)

**Used by:** `scripts/generate_artifacts.py` → `models/artifacts/` → `/api/v1/predict`

eDNA Amplicon Sequence Variant table from marine water samples. Each row is one
filtered water sample sequenced at a specific site.

| Column | Type | Description |
|--------|------|-------------|
| `ASV` | string | Raw DNA sequence (amplicon, ATCG) |
| `FilterID` | string | Sample identifier (e.g. `05114c01_12_edna_1`) |
| `Sequence_ID` | string | Full sequence ID with suffix |
| `Reads` | int | Number of sequencing reads |
| `Kingdom` | string | Taxonomic kingdom (e.g. `Eukaryota`) |
| `Phylum` | string | Taxonomic phylum |
| `Class` | string | Taxonomic class |
| `Order` | string | Taxonomic order |
| `Family` | string | Taxonomic family |
| `Genus` | string | Taxonomic genus |
| `Species` | string | Taxonomic species (`unassigned` when unknown) |

---

## synthetic_ocean_climate_dataset.csv  (~427 KB)

**Used by:** Ocean data analysis, `/api/v1/predict-ocean`, `oc.html`

Synthetic dataset of ocean climate observations designed to mirror NOAA coral-reef monitoring data.

| Column | Type | Description |
|--------|------|-------------|
| `Location` | string | Named reef / ocean region |
| `Latitude` | float | Decimal latitude |
| `Longitude` | float | Decimal longitude |
| `SST` | float | Sea Surface Temperature (°C) |
| `pH_Level` | float | Ocean pH |
| `Year` | int | Observation year |
| `Month` | int | Observation month (1–12) |
| `Bleaching_Severity` | string | None / Low / Moderate / High / Severe |
| `Marine_Heatwave` | bool | Whether a marine heatwave was active |
| `Species_Observed` | int | Number of distinct species observed |

---

## otolith_metadata.csv  (~6 KB)

**Used by:** Otolith analysis notebooks, species database augmentation

Real specimen metadata from CMLRE (Centre for Marine Living Resources & Ecology)
collected aboard R/V *Sagar Sampada*. Linked to the species in `core/fish_db.py`.

| Column | Description |
|--------|-------------|
| `otolithID` | Unique CMLRE specimen identifier |
| `image_filename` | Filename of the otolith image |
| `scientificName` | Species scientific name |
| `family` | Family name |
| `Locality` | Collection location name |
| `decimalLatitude` | Latitude of collection site |
| `decimalLongitude` | Longitude of collection site |
| `Collection_Depth` | Depth (m) at collection |
| `Collection_Date` | Date of collection |
| `Lifestage` | Adult / Juvenile |
| `Habitat` | Nektonic / Demersal / etc. |
| `Platform` | Research vessel name |

---

## otolith_labels.csv  (~868 B)

**Used by:** `notebooks/Otolith2.ipynb`

Raw otolith image labels with original filename paths, age, and length measurements.

| Column | Description |
|--------|-------------|
| `Image` | Path to the otolith image file |
| `Age` | Fish age in years |
| `Length` | Fish total length in mm |

---

## otolith_labels_converted.csv  (~1.1 KB)

**Used by:** `notebooks/otolith.ipynb`, `notebooks/otolith1.ipynb`

Same as `otolith_labels.csv` but with Windows-style paths (`Images_converted\…`)
and a more complete set of specimens from the MEDITS survey.

---

## simulated_biological_data.csv  (~3.4 KB)

**Used by:** `notebooks/otolith.ipynb` (baseline age/length modelling)

100-row simulated dataset pairing fish age (1–10 years) with body length (cm).
Generated from a Von Bertalanffy growth model with added Gaussian noise.

| Column | Description |
|--------|-------------|
| `Image` | Synthetic image filename (`image_N.jpg`) |
| `Age` | Simulated age (years) |
| `Length` | Simulated length (cm) |

---

## model_test_results.csv  (~1.6 KB)

**Used by:** Evaluation notebooks

Outputs from a trained otolith age-prediction model against hold-out test images.

| Column | Description |
|--------|-------------|
| `Image` | Test image path |
| `Actual_Length` | True fish length (mm) |
| `Actual_Age` | True fish age (years) |
| `Predicted_Age` | Model-predicted age |
| `Absolute_Error` | \|Predicted − Actual\| |
