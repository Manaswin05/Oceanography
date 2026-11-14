import React from 'react';
import { 
  Fish, 
  ThermometerSun, 
  Dna, 
  Compass, 
  Box,
  BarChart3, 
  Sparkles, 
  Cpu, 
  ArrowRight,
  ShieldCheck,
  Layers,
  Zap,
  Globe2
} from 'lucide-react';

export default function Dashboard({ setActiveTab, apiStatus }) {
  const statCards = [
    { label: 'Trained ML Models', value: '3 Active', detail: 'CNN, Ensemble & Deep Net', icon: Cpu, color: '#64ffda' },
    { label: 'Specimen Dataset', value: '9 Classes', detail: '6,200+ Augmented Samples', icon: Fish, color: '#38bdf8' },
    { label: 'Ocean Regressor R²', value: '0.9745', detail: 'Species Count & Biodiversity', icon: ThermometerSun, color: '#34d399' },
    { label: '3D & Spatial GIS', value: 'Three.js Ready', detail: 'WebGL Advection & Globe', icon: Box, color: '#a78bfa' },
  ];

  const modules = [
    {
      id: 'vision',
      title: 'Marine Specimen Vision AI',
      category: 'Computer Vision / Deep Learning',
      description: 'Upload photographs of marine specimens or otolith samples. Our PyTorch CNN model classifies fish species with 94%+ accuracy and provides biological taxonomy, size metrics, and habitat indicators.',
      icon: Fish,
      tags: ['PyTorch CNN', '9 Seafood Classes', 'Otolith Analysis', 'Habitat Indicators'],
      accent: 'from-[#0284c7] to-[#64ffda]',
      borderGlow: 'hover:border-[#64ffda]'
    },
    {
      id: 'ocean',
      title: 'Ocean Climate & Species Predictor',
      category: 'Environmental ML Ensemble',
      description: 'Analyze how Sea Surface Temperature (SST), pH ocean acidification, coral bleaching severity, and marine heatwaves impact species richness and ecosystem health.',
      icon: ThermometerSun,
      tags: ['Random Forest', 'Gradient Boosting', 'R²: 0.9745', 'Stress Index'],
      accent: 'from-[#0d9488] to-[#34d399]',
      borderGlow: 'hover:border-[#34d399]'
    },
    {
      id: 'taxonomy',
      title: 'Genomic Sequence Taxonomy',
      category: 'Bioinformatics & Deep Genomics',
      description: 'Submit raw DNA nucleotide sequences (A, C, G, T) to classify marine organisms across 7 hierarchical taxonomic levels (Kingdom, Phylum, Class, Order, Family, Genus, Species) using 4-mer k-mer vectorization.',
      icon: Dna,
      tags: ['Multi-Head Deep Net', '7 Taxonomic Ranks', 'Confidence Scoring', 'eDNA Ready'],
      accent: 'from-[#6366f1] to-[#a855f7]',
      borderGlow: 'hover:border-[#a855f7]'
    },
    {
      id: 'map',
      title: 'Marine Map & Currents Visualizer',
      category: 'Spatial Telemetry & Advection',
      description: 'Explore live ocean currents streamline animations (Windy/Nullschool style), satellite telemetry migration paths (tunas, sharks), otolith isotope life-history tracks, and spatial taxonomy markers.',
      icon: Compass,
      tags: ['Currents Advection', 'Migration Routes', 'Otolith Provenance', 'SST Heatmaps'],
      accent: 'from-[#ea580c] to-[#f59e0b]',
      borderGlow: 'hover:border-[#f59e0b]'
    },
    {
      id: 'three',
      title: 'Three.js 3D Ocean Space',
      category: '3D WebGL Development Studio',
      description: 'Dedicated 3D canvas and development playground for you to craft custom Three.js underwater environments, interactive rotating globes, current vector fields, and 3D specimen models.',
      icon: Box,
      tags: ['Three.js Canvas', 'Rotating Globe', 'Particle Fields', 'Developer Playground'],
      accent: 'from-[#06b6d4] to-[#3b82f6]',
      borderGlow: 'hover:border-[#3b82f6]'
    },
    {
      id: 'visuals',
      title: 'Analytics & Climate Simulator',
      category: 'Empirical Data Modeling',
      description: 'Interactive climate response simulator adjusting SST and pH dynamically, temperature-diversity response curves, coral bleaching distributions, and regional biodiversity matrices.',
      icon: BarChart3,
      tags: ['Dynamic Simulator', 'SST Response Curve', 'Reef Stress Distribution', 'Regional Basins'],
      accent: 'from-[#10b981] to-[#06b6d4]',
      borderGlow: 'hover:border-[#06b6d4]'
    }
  ];

  return (
    <div className="space-y-12 pb-16">
      
      {/* Hero Section */}
      <section className="relative text-center py-12 px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.3)] text-[#64ffda] text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Generation Marine Biology, Oceanography & 3D Analytics</span>
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
          AI, Machine Learning & <br />
          <span className="bg-gradient-to-r from-[#64ffda] via-[#38bdf8] to-[#818cf8] bg-clip-text text-transparent">
            Three.js Ocean Science
          </span>
        </h1>
        
        <p className="text-lg text-[#94a3b8] max-w-2xl mx-auto mb-8 leading-relaxed">
          Integrated scientific computational suite combining deep learning computer vision, climate regression models, genomic DNA classification, particle current advection, and Three.js 3D visualization.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button 
            onClick={() => setActiveTab('map')} 
            className="btn-ocean-solid"
          >
            <Compass className="w-5 h-5" />
            <span>Open Ocean Map & Currents</span>
          </button>
          <button 
            onClick={() => setActiveTab('three')} 
            className="btn-ocean"
          >
            <Box className="w-5 h-5" />
            <span>Launch Three.js 3D Studio</span>
          </button>
        </div>
      </section>

      {/* Live Platform Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="glass-panel p-5 relative overflow-hidden group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider">{stat.label}</span>
                  <div className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-white mb-1 font-mono">{stat.value}</div>
                <div className="text-xs text-[#64748b]">{stat.detail}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Main Module Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Layers className="w-6 h-6 text-[#64ffda]" />
              Analysis Modules, 3D Canvas & Spatial Engines
            </h2>
            <p className="text-sm text-[#94a3b8]">Select a module to launch interactive modeling, maps, and Three.js environments</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const Icon = mod.icon;
            return (
              <div 
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`glass-panel p-6 cursor-pointer group flex flex-col justify-between ${mod.borderGlow} hover:-translate-y-1.5 transition-all duration-300 relative`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mod.accent} p-0.5 shadow-md flex items-center justify-center`}>
                      <div className="w-full h-full bg-[#0a192f] rounded-[10px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.06)] text-[#94a3b8] border border-[rgba(255,255,255,0.08)]">
                      {mod.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#64ffda] transition-colors mb-2">
                    {mod.title}
                  </h3>

                  <p className="text-xs text-[#94a3b8] leading-relaxed mb-5">
                    {mod.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {mod.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[rgba(10,25,47,0.7)] text-[#38bdf8] border border-[rgba(56,189,248,0.2)]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-xs font-semibold text-[#64ffda] group-hover:translate-x-1 transition-transform">
                    <span>Launch Module</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
