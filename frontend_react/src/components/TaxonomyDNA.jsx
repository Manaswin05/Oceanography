import React, { useState } from 'react';
import { 
  Dna, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  ArrowRight, 
  Activity,
  FileCode,
  Copy,
  Check
} from 'lucide-react';

export default function TaxonomyDNA() {
  const PRESET_SEQUENCES = [
    {
      name: 'Yellowfin Tuna (Thunnus albacares)',
      sequence: 'ATGCCCGATCGATCGATCGAACGTGCTAGCTAGCATCGATCGATCGATCGA',
      filter_id: 'station-pacific-01',
      reads: 32000
    },
    {
      name: 'Gilt-Head Bream (Sparus aurata)',
      sequence: 'ATGCGGATCGACTAGCTAGCTAGCAACGTGCTAGCTCGATCGATCGATCGA',
      filter_id: 'med-survey-station-4',
      reads: 28000
    },
    {
      name: 'Atlantic Cod (Gadus morhua)',
      sequence: 'ATGCTAGCTCGATCGATCGAACGTGCTAGCTAGCTAGCAAGTCGATCGA',
      filter_id: 'north-sea-transect-B',
      reads: 45000
    },
    {
      name: 'Giant Tiger Shrimp (Penaeus monodon)',
      sequence: 'ATGCCGAACGTGCTAGCTAGCAAGTCGATCGATCGATCGATCGAACTAGCT',
      filter_id: 'estuary-mangrove-09',
      reads: 18500
    },
    {
      name: 'Staghorn Coral (Acropora cervicornis)',
      sequence: 'ATGCAAGTCGATCGATCGAACGTGCTAGCTAGCAACGTGCTAGCAAGTCGA',
      filter_id: 'coral-reef-core-3',
      reads: 54000
    },
    {
      name: 'Common Octopus (Octopus vulgaris)',
      sequence: 'ATGCAGTCGATCGATCGAACGTGCTAGCTAGCAAGTCGATCGAAGTCGATC',
      filter_id: 'pelagic-net-haul-12',
      reads: 22000
    }
  ];

  const [sequence, setSequence] = useState(PRESET_SEQUENCES[0].sequence);
  const [filterId, setFilterId] = useState(PRESET_SEQUENCES[0].filter_id);
  const [reads, setReads] = useState(PRESET_SEQUENCES[0].reads);

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const applyPreset = (preset) => {
    setSequence(preset.sequence);
    setFilterId(preset.filter_id);
    setReads(preset.reads);
    setResult(null);
  };

  const handleSequenceChange = (val) => {
    // Clean to valid DNA characters only
    const clean = val.replace(/[^ATCGatcg\n\r\s]/g, '').toUpperCase();
    setSequence(clean);
  };

  // Base composition calculation
  const getBaseComposition = () => {
    const s = sequence.toUpperCase().replace(/[^ATCG]/g, '');
    const len = s.length || 1;
    const count = { A: 0, T: 0, C: 0, G: 0 };
    for (let char of s) {
      if (count[char] !== undefined) count[char]++;
    }
    return {
      A: ((count.A / len) * 100).toFixed(1),
      T: ((count.T / len) * 100).toFixed(1),
      C: ((count.C / len) * 100).toFixed(1),
      G: ((count.G / len) * 100).toFixed(1),
      gc: (((count.G + count.C) / len) * 100).toFixed(1),
      total: s.length
    };
  };

  const comp = getBaseComposition();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sequence.trim() || sequence.length < 4) {
      setError('Sequence must contain at least 4 nucleotide base pairs (ATCG).');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sequence: sequence.trim(),
          filter_id: filterId || 'sample-001',
          reads: parseInt(reads) || 10000
        })
      });

      if (!response.ok) {
        throw new Error(`Server returned error: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Taxonomical sequence analysis failed: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ranksOrdered = ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(168,85,247,0.1)] border border-[rgba(168,85,247,0.3)] text-[#c084fc] text-xs font-semibold mb-3">
          <Dna className="w-3.5 h-3.5" />
          <span>Hierarchical 4-mer K-mer Genomic Classifier</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Genomic Sequence Taxonomy</h2>
        <p className="text-sm sm:text-base text-[#94a3b8] mt-2">
          Classify environmental DNA (eDNA) and marine genomic barcodes into 7-level biological taxonomical lineages using nucleotide 4-mer frequency representations.
        </p>
      </div>

      {/* Preset DNA Barcodes */}
      <div className="glass-panel p-4">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#94a3b8] uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#a855f7]" />
          <span>Quick Marine Species Genomic Presets:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {PRESET_SEQUENCES.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(preset)}
              className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(5,12,24,0.8)] hover:bg-[rgba(168,85,247,0.15)] text-[#cbd5e1] hover:text-[#c084fc] border border-[rgba(168,85,247,0.2)] hover:border-[#c084fc] transition-all"
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Form vs Taxonomy Tree */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Input Column (6 cols) */}
        <div className="lg:col-span-6 glass-panel p-7">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <FileCode className="w-5 h-5 text-[#a855f7]" />
            <span>Genomic Input Data</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* DNA Sequence Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="input-label mb-0">Nucleotide Sequence (A, T, C, G)</label>
                <span className="font-mono text-xs text-[#a855f7]">{comp.total} Base Pairs</span>
              </div>
              <textarea 
                rows={5}
                value={sequence}
                onChange={(e) => handleSequenceChange(e.target.value)}
                placeholder="Enter raw DNA sequence (e.g. ATGCCCGATCGA...)"
                className="input-field font-mono text-xs tracking-wider uppercase"
                required
              />
            </div>

            {/* Nucleotide Composition Breakdown */}
            <div className="p-3.5 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]">
              <div className="flex justify-between items-center text-xs mb-2 font-mono">
                <span className="text-[#94a3b8]">GC-Content: <strong className="text-white">{comp.gc}%</strong></span>
                <span className="text-[#94a3b8]">Length: <strong className="text-white">{comp.total} bp</strong></span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono">
                <div className="p-1.5 rounded bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] text-[#f87171]">
                  A: {comp.A}%
                </div>
                <div className="p-1.5 rounded bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-[#60a5fa]">
                  T: {comp.T}%
                </div>
                <div className="p-1.5 rounded bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] text-[#34d399]">
                  C: {comp.C}%
                </div>
                <div className="p-1.5 rounded bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#fbbf24]">
                  G: {comp.G}%
                </div>
              </div>
            </div>

            {/* Filter ID and Reads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="input-label">Filter / Station ID</label>
                <input 
                  type="text" 
                  value={filterId} 
                  onChange={(e) => setFilterId(e.target.value)}
                  className="input-field text-sm font-mono" 
                  placeholder="sample-001-alpha"
                  required 
                />
              </div>

              <div>
                <label className="input-label">Sequencing Reads</label>
                <input 
                  type="number" 
                  value={reads} 
                  onChange={(e) => setReads(e.target.value)}
                  min="1" 
                  className="input-field text-sm font-mono" 
                  required 
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
                  <span>Classifying 4-mers & Lineage...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Predict 7-Rank Biological Taxonomy</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* Output Column (6 cols): Hierarchical Taxonomy Tree */}
        <div className="lg:col-span-6 space-y-6">
          
          {error && (
            <div className="p-4 rounded-xl bg-[rgba(244,63,94,0.12)] border border-[rgba(244,63,94,0.3)] text-[#fb7185] flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {!result && !isLoading && (
            <div className="glass-panel p-10 text-center flex flex-col items-center justify-center min-h-[420px]">
              <div className="w-16 h-16 rounded-2xl bg-[rgba(168,85,247,0.1)] flex items-center justify-center mb-4">
                <Dna className="w-8 h-8 text-[#c084fc] opacity-70" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">No Taxonomy Lineage Computed</h3>
              <p className="text-sm text-[#94a3b8] max-w-xs">
                Submit a DNA nucleotide sequence on the left to view the complete 7-level biological taxonomy tree.
              </p>
            </div>
          )}

          {result && (
            <div className="glass-panel p-7 space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(100,255,218,0.15)]">
                <div>
                  <span className="text-xs font-mono text-[#a855f7] uppercase font-bold tracking-wider">
                    Taxonomical Classification
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-0.5 italic">
                    {result.taxonomy.Species}
                  </h3>
                  <span className="text-xs text-[#94a3b8]">
                    Filter: {result.filter_id} • Reads: {result.reads.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg bg-[rgba(5,12,24,0.8)] hover:bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.2)] text-[#64ffda] text-xs flex items-center gap-1.5 transition-colors"
                  title="Copy JSON"
                >
                  {copied ? <Check className="w-4 h-4 text-[#34d399]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* 7-Level Taxonomy Lineage Hierarchy */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
                  7-Level Taxonomic Lineage & Confidence
                </span>

                {ranksOrdered.map((rank, index) => {
                  const taxonName = result.taxonomy[rank] || 'Unknown';
                  const conf = result.confidence[rank] || 0.95;
                  const isSpecies = rank === 'Species';

                  return (
                    <div 
                      key={rank}
                      className={`p-3 rounded-xl border transition-all ${
                        isSpecies 
                          ? 'bg-[rgba(168,85,247,0.15)] border-[rgba(168,85,247,0.4)]' 
                          : 'bg-[rgba(5,12,24,0.6)] border-[rgba(100,255,218,0.1)]'
                      }`}
                      style={{ marginLeft: `${index * 8}px` }}
                    >
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[#94a3b8] uppercase font-semibold text-[10px]">
                            {rank}:
                          </span>
                          <span className={`font-bold ${isSpecies ? 'text-[#c084fc] text-sm italic' : 'text-white'}`}>
                            {taxonName}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-[#64ffda] font-bold">
                          {(conf * 100).toFixed(1)}%
                        </span>
                      </div>

                      <div className="h-1.5 w-full bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#a855f7]"
                          style={{ width: `${conf * 100}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}

