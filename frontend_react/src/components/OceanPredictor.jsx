import React, { useState } from 'react';
import { 
  ThermometerSun, 
  Droplets, 
  MapPin, 
  Compass, 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Sparkles, 
  BarChart2, 
  Layers,
  Info
} from 'lucide-react';

export default function OceanPredictor() {
  const PRESET_STATIONS = [
    { name: 'Great Barrier Reef, Australia', lat: -18.2871, lon: 147.6992, sst: 28.2, ph: 8.08, bleach: 'Moderate', heatwave: true },
    { name: 'Monterey Bay Sanctuary, USA', lat: 36.6002, lon: -121.8947, sst: 14.8, ph: 8.16, bleach: 'None', heatwave: false },
    { name: 'Coral Triangle, Indonesia', lat: -1.5000, lon: 125.0000, sst: 29.5, ph: 8.05, bleach: 'High', heatwave: true },
    { name: 'North Sea Marine Shelf, UK', lat: 56.5000, lon: 3.2000, sst: 11.2, ph: 8.14, bleach: 'None', heatwave: false },
    { name: 'Galapagos Archipelago', lat: -0.9538, lon: -90.9656, sst: 22.4, ph: 8.12, bleach: 'Low', heatwave: false },
  ];

  const [formData, setFormData] = useState({
    Location: 'Great Barrier Reef, Australia',
    Latitude: -18.2871,
    Longitude: 147.6992,
    SST: 28.2,
    pH_Level: 8.08,
    Year: 2026,
    Month: 7,
    Bleaching_Severity: 'Moderate',
    Marine_Heatwave: true,
    Salinity: 34.8,
    Dissolved_Oxygen: 6.5,
    Depth: 25.0
  });

  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const applyPreset = (preset) => {
    setFormData(prev => ({
      ...prev,
      Location: preset.name,
      Latitude: preset.lat,
      Longitude: preset.lon,
      SST: preset.sst,
      pH_Level: preset.ph,
      Bleaching_Severity: preset.bleach,
      Marine_Heatwave: preset.heatwave
    }));
    setPrediction(null);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/predict-ocean', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`Server returned error: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data);
    } catch (err) {
      setError('Prediction failed: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getStressBadge = (stress) => {
    switch (stress?.toLowerCase()) {
      case 'low':
        return { color: 'text-[#34d399] bg-[rgba(16,185,129,0.12)] border-[rgba(16,185,129,0.3)]', label: 'Low Ecosystem Stress' };
      case 'moderate':
        return { color: 'text-[#f59e0b] bg-[rgba(245,158,11,0.12)] border-[rgba(245,158,11,0.3)]', label: 'Moderate Stress Level' };
      case 'high':
        return { color: 'text-[#f97316] bg-[rgba(249,115,22,0.12)] border-[rgba(249,115,22,0.3)]', label: 'High Stress Warning' };
      default:
        return { color: 'text-[#f43f5e] bg-[rgba(244,63,94,0.12)] border-[rgba(244,63,94,0.3)]', label: 'Critical Stress Risk' };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.3)] text-[#34d399] text-xs font-semibold mb-3">
          <Activity className="w-3.5 h-3.5" />
          <span>Ensemble Regressor (Random Forest + Gradient Boosting)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Ocean Climate & Species Predictor</h2>
        <p className="text-sm sm:text-base text-[#94a3b8] mt-2">
          Model marine ecosystem response, forecast species richness, and evaluate climate-induced stress using sea surface temperature, acidification, and bleaching indices.
        </p>
      </div>

      {/* Preset Stations Bar */}
      <div className="glass-panel p-4">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
          <Compass className="w-4 h-4 text-[#64ffda]" />
          <span>Load Quick Oceanographic Survey Presets:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_STATIONS.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(preset)}
              className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(5,12,24,0.8)] hover:bg-[rgba(100,255,218,0.15)] text-[#cbd5e1] hover:text-[#64ffda] border border-[rgba(100,255,218,0.15)] hover:border-[#64ffda] transition-all"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Form and Results Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Column (7 cols) */}
        <div className="lg:col-span-7 glass-panel p-7">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <ThermometerSun className="w-5 h-5 text-[#34d399]" />
            <span>Environmental Parameters & Survey Data</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Location & Year/Month */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="input-label">Survey Location / Region</label>
                <input 
                  type="text" 
                  value={formData.Location} 
                  onChange={(e) => handleInputChange('Location', e.target.value)}
                  className="input-field" 
                  required 
                />
              </div>

              <div>
                <label className="input-label">Year & Month</label>
                <div className="flex gap-2">
                  <input 
                    type="number" 
                    value={formData.Year} 
                    onChange={(e) => handleInputChange('Year', parseInt(e.target.value))}
                    min="1950" 
                    max="2100" 
                    className="input-field" 
                    required 
                  />
                  <input 
                    type="number" 
                    value={formData.Month} 
                    onChange={(e) => handleInputChange('Month', parseInt(e.target.value))}
                    min="1" 
                    max="12" 
                    className="input-field w-20" 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Coordinates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Latitude (°)</label>
                <input 
                  type="number" 
                  step="0.0001" 
                  value={formData.Latitude} 
                  onChange={(e) => handleInputChange('Latitude', parseFloat(e.target.value))}
                  className="input-field font-mono" 
                  required 
                />
              </div>
              <div>
                <label className="input-label">Longitude (°)</label>
                <input 
                  type="number" 
                  step="0.0001" 
                  value={formData.Longitude} 
                  onChange={(e) => handleInputChange('Longitude', parseFloat(e.target.value))}
                  className="input-field font-mono" 
                  required 
                />
              </div>
            </div>

            {/* Temperature (SST) & pH */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="input-label">Sea Surface Temp (SST)</label>
                  <span className="font-mono text-sm font-bold text-[#64ffda]">{formData.SST}°C</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="35" 
                  step="0.1" 
                  value={formData.SST} 
                  onChange={(e) => handleInputChange('SST', parseFloat(e.target.value))}
                  className="w-full accent-[#64ffda] cursor-pointer" 
                />
                <span className="text-[11px] text-[#94a3b8]">Optimal reef temp: 23–27°C</span>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="input-label">Ocean pH Level</label>
                  <span className="font-mono text-sm font-bold text-[#38bdf8]">{formData.pH_Level}</span>
                </div>
                <input 
                  type="range" 
                  min="7.5" 
                  max="8.4" 
                  step="0.01" 
                  value={formData.pH_Level} 
                  onChange={(e) => handleInputChange('pH_Level', parseFloat(e.target.value))}
                  className="w-full accent-[#38bdf8] cursor-pointer" 
                />
                <span className="text-[11px] text-[#94a3b8]">Normal ocean: ~8.10–8.20</span>
              </div>
            </div>

            {/* Bleaching Severity & Marine Heatwave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Coral Bleaching Severity</label>
                <select 
                  value={formData.Bleaching_Severity} 
                  onChange={(e) => handleInputChange('Bleaching_Severity', e.target.value)}
                  className="input-field"
                >
                  <option value="None">None (Pristine Reef)</option>
                  <option value="Low">Low (&lt; 10% Bleached)</option>
                  <option value="Moderate">Moderate (10–30% Bleached)</option>
                  <option value="High">High (30–60% Bleached)</option>
                  <option value="Severe">Severe (&gt; 60% Bleached)</option>
                </select>
              </div>

              <div>
                <label className="input-label">Marine Heatwave Status</label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleInputChange('Marine_Heatwave', false)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                      !formData.Marine_Heatwave 
                        ? 'bg-[rgba(16,185,129,0.2)] text-[#34d399] border-[#34d399]' 
                        : 'bg-[rgba(5,12,24,0.6)] text-[#94a3b8] border-[rgba(255,255,255,0.1)]'
                    }`}
                  >
                    No Heatwave
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('Marine_Heatwave', true)}
                    className={`flex-1 py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                      formData.Marine_Heatwave 
                        ? 'bg-[rgba(244,63,94,0.2)] text-[#fb7185] border-[#fb7185]' 
                        : 'bg-[rgba(5,12,24,0.6)] text-[#94a3b8] border-[rgba(255,255,255,0.1)]'
                    }`}
                  >
                    Active Heatwave
                  </button>
                </div>
              </div>
            </div>

            {/* Depth, Salinity, Dissolved Oxygen */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="input-label">Depth (m)</label>
                <input 
                  type="number" 
                  step="1" 
                  value={formData.Depth} 
                  onChange={(e) => handleInputChange('Depth', parseFloat(e.target.value))}
                  className="input-field text-xs font-mono" 
                />
              </div>
              <div>
                <label className="input-label">Salinity (PSU)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={formData.Salinity} 
                  onChange={(e) => handleInputChange('Salinity', parseFloat(e.target.value))}
                  className="input-field text-xs font-mono" 
                />
              </div>
              <div>
                <label className="input-label">Oxygen (mg/L)</label>
                <input 
                  type="number" 
                  step="0.1" 
                  value={formData.Dissolved_Oxygen} 
                  onChange={(e) => handleInputChange('Dissolved_Oxygen', parseFloat(e.target.value))}
                  className="input-field text-xs font-mono" 
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="btn-ocean-solid w-full justify-center py-3 text-base"
            >
              {isLoading ? (
                <>
                  <Activity className="w-5 h-5 animate-spin" />
                  <span>Computing Ecosystem Projections...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Predict Species Richness & Ecosystem Health</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* Results Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {error && (
            <div className="p-4 rounded-xl bg-[rgba(244,63,94,0.12)] border border-[rgba(244,63,94,0.3)] text-[#fb7185] flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {!prediction && !isLoading && (
            <div className="glass-panel p-10 text-center flex flex-col items-center justify-center min-h-[380px]">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(52,211,153,0.1)] flex items-center justify-center mb-4">
                <ThermometerSun className="w-8 h-8 text-[#34d399] opacity-70" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Awaiting Parameters</h3>
              <p className="text-sm text-[#94a3b8] max-w-xs">
                Fill in the survey parameters on the left or select a station preset, then click predict.
              </p>
            </div>
          )}

          {prediction && (
            <div className="glass-panel p-7 space-y-6">
              
              {/* Header */}
              <div className="pb-4 border-b border-[rgba(100,255,218,0.15)]">
                <span className="text-xs font-mono text-[#64ffda] uppercase font-bold tracking-wider">
                  Model Prediction Results
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  {prediction.location}
                </h3>
                <span className="text-xs text-[#94a3b8] font-mono">
                  Coordinates: {prediction.coordinates.lat.toFixed(4)}°, {prediction.coordinates.lon.toFixed(4)}°
                </span>
              </div>

              {/* Main Metric Cards */}
              <div className="grid grid-cols-2 gap-4">
                
                {/* Expected Species Count */}
                <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.18)]">
                  <span className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-1">
                    Species Richness
                  </span>
                  <div className="text-3xl font-extrabold text-[#64ffda] font-mono">
                    {prediction.predicted_species_observed}
                  </div>
                  <span className="text-[11px] text-[#64748b]">Expected species / zone</span>
                </div>

                {/* Biodiversity Index */}
                <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(56,189,248,0.18)]">
                  <span className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider block mb-1">
                    Biodiversity Index
                  </span>
                  <div className="text-3xl font-extrabold text-[#38bdf8] font-mono">
                    {prediction.biodiversity_index}
                    <span className="text-sm text-[#64748b]">/100</span>
                  </div>
                  <span className="text-[11px] text-[#64748b]">Ecosystem vitality score</span>
                </div>

              </div>

              {/* Stress Level Badge */}
              <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94a3b8] font-bold uppercase tracking-wider">
                    Ecosystem Stress Status
                  </span>
                  <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full border ${getStressBadge(prediction.ecosystem_stress).color}`}>
                    {getStressBadge(prediction.ecosystem_stress).label}
                  </span>
                </div>
              </div>

              {/* Thermal & Acidification Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[rgba(5,12,24,0.4)] border border-[rgba(255,255,255,0.06)]">
                  <span className="text-[#94a3b8] block mb-0.5">Thermal Regime</span>
                  <span className="font-semibold text-white">{prediction.environmental_status?.thermal_condition}</span>
                </div>
                <div className="p-3 rounded-lg bg-[rgba(5,12,24,0.4)] border border-[rgba(255,255,255,0.06)]">
                  <span className="text-[#94a3b8] block mb-0.5">Acidification Level</span>
                  <span className="font-semibold text-white">{prediction.environmental_status?.ocean_acidity}</span>
                </div>
              </div>

              {/* Impact Breakdown */}
              {prediction.impact_factors && (
                <div className="p-4 rounded-xl bg-[rgba(100,255,218,0.04)] border border-[rgba(100,255,218,0.12)]">
                  <span className="text-xs font-bold text-[#64ffda] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5" />
                    <span>Factor Contribution Breakdown</span>
                  </span>
                  <div className="space-y-1.5 text-xs text-[#cbd5e1] font-mono">
                    <div className="flex justify-between">
                      <span>Temperature Gradient:</span>
                      <span className="font-bold">{prediction.impact_factors.temperature_impact > 0 ? `+${prediction.impact_factors.temperature_impact}` : prediction.impact_factors.temperature_impact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Acidification Shift:</span>
                      <span className="font-bold">{prediction.impact_factors.acidification_impact > 0 ? `+${prediction.impact_factors.acidification_impact}` : prediction.impact_factors.acidification_impact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bleaching Impact:</span>
                      <span className="font-bold text-[#f43f5e]">{prediction.impact_factors.bleaching_penalty}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
