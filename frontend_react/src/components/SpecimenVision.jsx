import React, { useState, useEffect } from 'react';
import { 
  Fish, 
  Upload, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  RefreshCw, 
  ChevronRight,
  Shield,
  Layers,
  MapPin,
  Ruler,
  Maximize2
} from 'lucide-react';

export default function SpecimenVision() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [analysisType, setAnalysisType] = useState('taxonomy');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [sampleImages, setSampleImages] = useState([]);

  // Fetch sample test images on mount
  useEffect(() => {
    fetch('/sample-images')
      .then(res => res.json())
      .then(data => {
        if (data.samples) setSampleImages(data.samples);
      })
      .catch(() => {
        // Fallback local samples
        setSampleImages([
          { name: 'Red Mullet', filename: 'Red_Mullet.png', url: '/sample_images/Red_Mullet.png' },
          { name: 'Gilt-Head Bream', filename: 'Gilt-Head_Bream.png', url: '/sample_images/Gilt-Head_Bream.png' },
          { name: 'Sea Bass', filename: 'Sea_Bass.png', url: '/sample_images/Sea_Bass.png' },
          { name: 'Shrimp', filename: 'Shrimp.png', url: '/sample_images/Shrimp.png' },
          { name: 'Black Sea Sprat', filename: 'Black_Sea_Sprat.png', url: '/sample_images/Black_Sea_Sprat.png' },
          { name: 'Trout', filename: 'Trout.png', url: '/sample_images/Trout.png' }
        ]);
      });
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  const handleSelectSample = async (sample) => {
    try {
      setIsLoading(true);
      setError(null);
      setImagePreview(sample.url);
      
      const res = await fetch(sample.url);
      const blob = await res.blob();
      const file = new File([blob], sample.filename, { type: 'image/png' });
      setSelectedFile(file);
      
      // Automatically analyze sample
      await runAnalysis(file, analysisType);
    } catch (err) {
      setError('Failed to load sample image: ' + err.message);
      setIsLoading(false);
    }
  };

  const runAnalysis = async (fileToAnalyze, type) => {
    const file = fileToAnalyze || selectedFile;
    if (!file) {
      setError('Please upload or select an image first.');
      return;
    }

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('analysis_type', type || analysisType);

    try {
      const response = await fetch('/analyze-image', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Image analysis failed: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const exportReport = () => {
    if (!result) return;
    const blob = new Blob([JSON.stringify(result, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `marine_specimen_analysis_${result.common_name?.replace(/\s+/g, '_') || 'report'}.json`;
    a.click();
  };

  const resetAll = () => {
    setSelectedFile(null);
    setImagePreview(null);
    setResult(null);
    setError(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.3)] text-[#64ffda] text-xs font-semibold mb-3">
          <Fish className="w-3.5 h-3.5" />
          <span>PyTorch Deep Learning CNN Model</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Marine Specimen Vision AI</h2>
        <p className="text-sm sm:text-base text-[#94a3b8] mt-2">
          Upload specimen photographs or select from verified reference datasets to perform automated taxonomical identification and morphological analysis.
        </p>
      </div>

      {/* Analysis Type Selector */}
      <div className="flex justify-center">
        <div className="glass-panel p-1.5 flex flex-wrap gap-2 rounded-xl">
          {[
            { id: 'taxonomy', label: 'Specimen Taxonomy', desc: 'Species classification & biology' },
            { id: 'otolith', label: 'Otolithography', desc: 'Growth patterns & rings' },
            { id: 'habitat', label: 'Habitat Assessment', desc: 'Reef indicators & trophic role' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => {
                setAnalysisType(mode.id);
                if (selectedFile) runAnalysis(selectedFile, mode.id);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                analysisType === mode.id
                  ? 'bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md font-bold'
                  : 'text-[#94a3b8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Upload Area vs Results Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Upload & Sample Gallery (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Upload Zone */}
          <div className="glass-panel p-6">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <Upload className="w-4 h-4 text-[#64ffda]" />
              Upload Specimen Image
            </h3>

            {!imagePreview ? (
              <label className="border-2 border-dashed border-[rgba(100,255,218,0.25)] hover:border-[#64ffda] rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all bg-[rgba(5,12,24,0.4)] hover:bg-[rgba(100,255,218,0.04)]">
                <div className="w-16 h-16 rounded-full bg-[rgba(100,255,218,0.1)] flex items-center justify-center mb-4">
                  <Upload className="w-8 h-8 text-[#64ffda]" />
                </div>
                <span className="text-sm font-semibold text-white mb-1">Click to browse or drop image</span>
                <span className="text-xs text-[#94a3b8]">PNG, JPG, JPEG up to 25MB</span>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
            ) : (
              <div className="relative rounded-xl overflow-hidden border border-[rgba(100,255,218,0.3)] bg-black">
                <img 
                  src={imagePreview} 
                  alt="Specimen Preview" 
                  className="w-full h-64 object-contain bg-[rgba(5,12,24,0.9)]" 
                />
                <button
                  onClick={resetAll}
                  className="absolute top-3 right-3 p-2 rounded-lg bg-[rgba(5,12,24,0.85)] hover:bg-[rgba(244,63,94,0.85)] text-white text-xs border border-[rgba(255,255,255,0.2)] transition-colors"
                  title="Remove image"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            )}

            {imagePreview && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => runAnalysis(selectedFile, analysisType)}
                  disabled={isLoading}
                  className="btn-ocean-solid w-full justify-center"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Classifying Specimen...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Run Deep Learning Inference</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* 1-Click Sample Gallery */}
          <div className="glass-panel p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#38bdf8]" />
                1-Click Reference Test Samples
              </h3>
              <span className="text-xs text-[#64748b]">Real Dataset Samples</span>
            </div>

            <p className="text-xs text-[#94a3b8] mb-4">
              Click any verified specimen from our 9-class Kaggle dataset to test instant model inference:
            </p>

            <div className="grid grid-cols-3 gap-2.5">
              {sampleImages.map((sample, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectSample(sample)}
                  className="p-2 rounded-lg bg-[rgba(5,12,24,0.7)] hover:bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.15)] hover:border-[#64ffda] text-left transition-all group flex flex-col items-center text-center"
                >
                  <img 
                    src={sample.url} 
                    alt={sample.name} 
                    className="w-full h-14 object-cover rounded-md mb-1.5 group-hover:scale-105 transition-transform bg-black"
                  />
                  <span className="text-[11px] font-semibold text-white group-hover:text-[#64ffda] truncate w-full">
                    {sample.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: AI Predictions & Biological Card (7 cols) */}
        <div className="lg:col-span-7">
          {error && (
            <div className="p-4 rounded-xl bg-[rgba(244,63,94,0.12)] border border-[rgba(244,63,94,0.3)] text-[#fb7185] flex items-center gap-3 mb-6">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {!result && !isLoading && (
            <div className="glass-panel p-12 text-center flex flex-col items-center justify-center min-h-[380px]">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(100,255,218,0.08)] flex items-center justify-center mb-4">
                <Fish className="w-8 h-8 text-[#64ffda] opacity-70" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Analysis Run Yet</h3>
              <p className="text-sm text-[#94a3b8] max-w-sm mb-6">
                Upload a marine specimen photo or select one of the 9 sample specimens on the left to see instant classification results.
              </p>
            </div>
          )}

          {isLoading && (
            <div className="glass-panel p-12 text-center flex flex-col items-center justify-center min-h-[380px]">
              <div className="w-16 h-16 rounded-full border-4 border-[rgba(100,255,218,0.2)] border-t-[#64ffda] animate-spin mb-4" />
              <h3 className="text-lg font-bold text-white mb-1">Analyzing Morphological Features</h3>
              <p className="text-sm text-[#94a3b8]">Extracting feature embeddings through 4 ConvNet blocks...</p>
            </div>
          )}

          {result && (
            <div className="glass-panel p-7 space-y-6">
              
              {/* Top Banner: Species & Confidence */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[rgba(100,255,218,0.15)]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[rgba(100,255,218,0.15)] text-[#64ffda] border border-[rgba(100,255,218,0.3)]">
                      {result.family}
                    </span>
                    <span className="text-xs text-[#94a3b8]">{result.conservation_status}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">
                    {result.common_name}
                  </h3>
                  <p className="text-sm italic text-[#38bdf8] font-mono">
                    {result.scientific_name}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="text-xs text-[#94a3b8] uppercase font-bold tracking-wider mb-1">Confidence Score</span>
                  <div className="text-3xl font-extrabold text-[#64ffda] font-mono">
                    {(result.confidence * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              {/* Top 3 Candidate Probability Bars */}
              {result.top_candidates && (
                <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]">
                  <span className="text-xs font-bold text-white uppercase tracking-wider block mb-3">
                    Top-3 Candidate Distribution
                  </span>
                  <div className="space-y-2.5">
                    {result.top_candidates.map((cand, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className={idx === 0 ? 'text-[#64ffda] font-bold' : 'text-[#94a3b8]'}>
                            {cand.species}
                          </span>
                          <span className="text-white font-bold">
                            {(cand.probability * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-1.5 w-full bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full ${idx === 0 ? 'bg-gradient-to-r from-[#64ffda] to-[#38bdf8]' : 'bg-[rgba(100,255,218,0.3)]'}`}
                            style={{ width: `${cand.probability * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Biological Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#64ffda] mb-1.5">
                    <Ruler className="w-3.5 h-3.5" />
                    <span>SIZE & MASS</span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">{result.size}</p>
                </div>

                <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#38bdf8] mb-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>HABITAT & DEPTH</span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] leading-relaxed">{result.habitat}</p>
                </div>
              </div>

              {/* Physical Characteristics */}
              <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.5)] border border-[rgba(100,255,218,0.1)]">
                <span className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider block mb-1.5">
                  Morphological Characteristics
                </span>
                <p className="text-sm text-[#cbd5e1] leading-relaxed">
                  {result.characteristics}
                </p>
              </div>

              {/* Otolith Details if selected */}
              {result.otolith_analysis && (
                <div className="p-4 rounded-xl bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.3)]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#a5b4fc] uppercase tracking-wider mb-2">
                    <Layers className="w-4 h-4" />
                    <span>Otolith Structure & Ageing Findings</span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] mb-1">
                    <strong>Sagitta Pattern:</strong> {result.otolith_analysis.sagitta_pattern}
                  </p>
                  <p className="text-xs text-[#cbd5e1]">
                    <strong>Estimated Age:</strong> {result.otolith_analysis.estimated_specimen_age} ({result.otolith_analysis.growth_rate_status})
                  </p>
                </div>
              )}

              {/* Habitat Details if selected */}
              {result.habitat_analysis && (
                <div className="p-4 rounded-xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#6ee7b7] uppercase tracking-wider mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Ecosystem Health & Trophic Role</span>
                  </div>
                  <p className="text-xs text-[#cbd5e1] mb-1">
                    <strong>Bioindicator:</strong> {result.habitat_analysis.ecosystem_indicator}
                  </p>
                  <p className="text-xs text-[#cbd5e1]">
                    <strong>Trophic Role:</strong> {result.habitat_analysis.ecological_role}
                  </p>
                </div>
              )}

              {/* Actions Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[rgba(100,255,218,0.1)]">
                <button
                  onClick={exportReport}
                  className="btn-ocean text-xs"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Export JSON Report</span>
                </button>

                <button
                  onClick={resetAll}
                  className="text-xs text-[#94a3b8] hover:text-white flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Analyze Another Specimen</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>

    </div>
  );
}

