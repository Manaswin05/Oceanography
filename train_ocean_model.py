import numpy as np
import pandas as pd
import joblib
import os
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor, RandomForestClassifier
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.metrics import r2_score, mean_absolute_error, accuracy_score

# Set seed for reproducibility
np.random.seed(42)

def generate_oceanographic_dataset(n_samples=6000):
    """
    Generate synthetic oceanographic research dataset based on empirical 
    marine biology and oceanographic ecological principles (NOAA/Copernicus distributions).
    """
    latitudes = np.random.uniform(-60.0, 60.0, n_samples)
    longitudes = np.random.uniform(-180.0, 180.0, n_samples)
    
    years = np.random.randint(2010, 2027, n_samples)
    months = np.random.randint(1, 13, n_samples)
    
    # SST depends on latitude and seasonal cycle
    abs_lat = np.abs(latitudes)
    base_sst = 28.5 - 0.35 * abs_lat + 2.5 * np.cos(2 * np.pi * (months - 1) / 12)
    noise_sst = np.random.normal(0, 1.2, n_samples)
    sst = np.clip(base_sst + noise_sst, 4.0, 34.0)
    
    # Marine heatwaves more likely with elevated SST
    heatwave_prob = 1.0 / (1.0 + np.exp(-(sst - 28.0) * 0.8))
    marine_heatwave = (np.random.rand(n_samples) < heatwave_prob).astype(int)
    
    # pH ranges 7.6 to 8.25, slightly decreasing with higher temperature and recent years (ocean acidification)
    ph = 8.18 - 0.003 * (years - 2010) - 0.008 * (sst - 20.0) + np.random.normal(0, 0.04, n_samples)
    ph = np.clip(ph, 7.55, 8.35)
    
    # Bleaching severity correlated with SST, marine heatwave, and low pH
    bleaching_risk = (sst - 26.5) * 1.5 + marine_heatwave * 3.5 + (8.1 - ph) * 15.0 + np.random.normal(0, 1.0, n_samples)
    bleaching_cats = []
    for r in bleaching_risk:
        if r < 1.0:
            bleaching_cats.append("None")
        elif r < 4.5:
            bleaching_cats.append("Low")
        elif r < 8.0:
            bleaching_cats.append("Moderate")
        elif r < 12.0:
            bleaching_cats.append("High")
        else:
            bleaching_cats.append("Severe")
            
    # Salinity (PSU) and Dissolved Oxygen (mg/L)
    salinity = np.clip(34.5 + np.random.normal(0, 1.2, n_samples), 31.0, 38.5)
    dissolved_oxygen = np.clip(10.5 - 0.18 * sst + np.random.normal(0, 0.5, n_samples), 3.2, 11.5)
    depth = np.random.exponential(scale=35.0, size=n_samples) + 2.0
    depth = np.clip(depth, 1.0, 250.0)
    
    # Calculate Expected Species Observed (Ecological formula)
    # Higher diversity in tropical/subtropical coral zones (latitudes 0-25) at optimal temperatures (22-27°C)
    # Severe bleaching, heatwaves, or acidification reduces biodiversity
    optimal_temp_factor = np.exp(-((sst - 25.0) ** 2) / 45.0)
    ph_factor = np.clip((ph - 7.6) / 0.55, 0.2, 1.2)
    lat_factor = 1.0 - 0.4 * (abs_lat / 60.0)
    bleaching_penalty = {"None": 1.0, "Low": 0.88, "Moderate": 0.72, "High": 0.50, "Severe": 0.28}
    bleach_mult = np.array([bleaching_penalty[b] for b in bleaching_cats])
    heatwave_mult = np.where(marine_heatwave == 1, 0.82, 1.0)
    oxygen_factor = np.clip(dissolved_oxygen / 7.0, 0.4, 1.25)
    
    species_observed = (
        55.0 * optimal_temp_factor * ph_factor * lat_factor * bleach_mult * heatwave_mult * oxygen_factor
        + np.random.normal(0, 2.5, n_samples)
    )
    species_observed = np.clip(species_observed, 5.0, 98.0)
    
    # Biodiversity Health Index (0 - 100)
    health_index = (
        (species_observed / 65.0) * 45.0 +
        (ph_factor) * 25.0 +
        (bleach_mult) * 20.0 +
        (dissolved_oxygen / 9.0) * 10.0
    )
    health_index = np.clip(health_index, 8.0, 99.0)
    
    # Ecosystem Stress Category
    stress_levels = []
    for h in health_index:
        if h >= 75.0:
            stress_levels.append("Low")
        elif h >= 50.0:
            stress_levels.append("Moderate")
        elif h >= 30.0:
            stress_levels.append("High")
        else:
            stress_levels.append("Critical")
            
    df = pd.DataFrame({
        "Latitude": latitudes,
        "Longitude": longitudes,
        "Year": years,
        "Month": months,
        "SST": np.round(sst, 2),
        "pH_Level": np.round(ph, 3),
        "Salinity": np.round(salinity, 2),
        "Dissolved_Oxygen": np.round(dissolved_oxygen, 2),
        "Depth": np.round(depth, 1),
        "Marine_Heatwave": marine_heatwave,
        "Bleaching_Severity": bleaching_cats,
        "Species_Observed": np.round(species_observed, 1),
        "Biodiversity_Index": np.round(health_index, 1),
        "Ecosystem_Stress": stress_levels
    })
    
    return df

def train_ocean_models():
    print("Generating comprehensive oceanographic training dataset...")
    df = generate_oceanographic_dataset(n_samples=7000)
    
    os.makedirs("models", exist_ok=True)
    df.to_csv("models/oceanographic_training_data.csv", index=False)
    print(f"Dataset generated with {len(df)} records. Sample saved to models/oceanographic_training_data.csv")
    
    feature_cols = [
        "Latitude", "Longitude", "Year", "Month", 
        "SST", "pH_Level", "Salinity", "Dissolved_Oxygen", 
        "Depth", "Marine_Heatwave", "Bleaching_Severity"
    ]
    
    X = df[feature_cols]
    y_species = df["Species_Observed"]
    y_biodiversity = df["Biodiversity_Index"]
    y_stress = df["Ecosystem_Stress"]
    
    num_features = ["Latitude", "Longitude", "Year", "Month", "SST", "pH_Level", "Salinity", "Dissolved_Oxygen", "Depth", "Marine_Heatwave"]
    cat_features = ["Bleaching_Severity"]
    
    preprocessor = ColumnTransformer(
        transformers=[
            ("num", StandardScaler(), num_features),
            ("cat", OneHotEncoder(categories=[["None", "Low", "Moderate", "High", "Severe"]], handle_unknown="ignore"), cat_features)
        ]
    )
    
    # 1. Regressor for Species Observed
    species_pipeline = Pipeline([
        ("preprocessor", preprocessor),
        ("regressor", RandomForestRegressor(n_estimators=100, max_depth=14, random_state=42, n_jobs=-1))
    ])
    
    # 2. Regressor for Biodiversity Index
    biodiversity_pipeline = Pipeline([
        ("preprocessor", preprocessor),
        ("regressor", GradientBoostingRegressor(n_estimators=100, max_depth=6, random_state=42))
    ])
    
    # 3. Classifier for Ecosystem Stress
    stress_pipeline = Pipeline([
        ("preprocessor", preprocessor),
        ("classifier", RandomForestClassifier(n_estimators=80, max_depth=10, random_state=42, n_jobs=-1))
    ])
    
    X_train, X_test, y_sp_train, y_sp_test, y_bio_train, y_bio_test, y_str_train, y_str_test = train_test_split(
        X, y_species, y_biodiversity, y_stress, test_size=0.2, random_state=42
    )
    
    print("Training Species Observed Model (Random Forest)...")
    species_pipeline.fit(X_train, y_sp_train)
    sp_preds = species_pipeline.predict(X_test)
    sp_r2 = r2_score(y_sp_test, sp_preds)
    sp_mae = mean_absolute_error(y_sp_test, sp_preds)
    print(f"Species Model -> R²: {sp_r2:.4f}, MAE: {sp_mae:.2f}")
    
    print("Training Biodiversity Index Model (Gradient Boosting)...")
    biodiversity_pipeline.fit(X_train, y_bio_train)
    bio_preds = biodiversity_pipeline.predict(X_test)
    bio_r2 = r2_score(y_bio_test, bio_preds)
    bio_mae = mean_absolute_error(y_bio_test, bio_preds)
    print(f"Biodiversity Model -> R²: {bio_r2:.4f}, MAE: {bio_mae:.2f}")
    
    print("Training Ecosystem Stress Classifier...")
    stress_pipeline.fit(X_train, y_str_train)
    str_preds = stress_pipeline.predict(X_test)
    str_acc = accuracy_score(y_str_test, str_preds)
    print(f"Ecosystem Stress Classifier -> Accuracy: {str_acc*100:.2f}%")
    
    # Bundle into a single package
    ocean_bundle = {
        "species_model": species_pipeline,
        "biodiversity_model": biodiversity_pipeline,
        "stress_model": stress_pipeline,
        "metrics": {
            "species_r2": round(float(sp_r2), 4),
            "species_mae": round(float(sp_mae), 2),
            "biodiversity_r2": round(float(bio_r2), 4),
            "biodiversity_mae": round(float(bio_mae), 2),
            "stress_accuracy": round(float(str_acc), 4)
        },
        "feature_cols": feature_cols
    }
    
    joblib.dump(ocean_bundle, "models/ocean_model.joblib")
    print("Successfully saved models/ocean_model.joblib!")

if __name__ == "__main__":
    train_ocean_models()

