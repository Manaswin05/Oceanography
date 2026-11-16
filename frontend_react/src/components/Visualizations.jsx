import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Thermometer, 
  Droplet, 
  Sun, 
  Layers, 
  Globe,
  Sliders,
  Sparkles
} from 'lucide-react';

export default function Visualizations() {
  const [simSST, setSimSST] = useState(26.0);
  const [simPH, setSimPH] = useState(8.12);

  // Dynamic simulation calculations
  const calculateSimulatedBiodiversity = (sst, ph) => {
    const tempOptimum = Math.exp(-Math.pow(sst - 25.0, 2) / 50.0);
    const phFactor = Math.max(0.2, (ph - 7.5) / 0.65);
    const score = Math.min(100, Math.max(10, Math.round(100 * tempOptimum * phFactor)));
    return score;
  };

  const simScore = calculateSimulatedBiodiversity(simSST, simPH);

  const regionalData = [
    { region: 'Coral Triangle (Indo-Pacific)', biodiversity: 96, sst: '28.5°C', status: 'High Biodiversity Hotspot', color: '#64ffda' },
    { region: 'Great Barrier Reef (Australia)', biodiversity: 84, sst: '27.4°C', status: 'Thermal Stress Risk', color: '#38bdf8' },
    { region: 'Monterey Bay Sanctuary (USA)', biodiversity: 78, sst: '14.2°C', status: 'Kelp Forest Upwelling', color: '#34d399' },
    { region: 'Mediterranean Sea Basin', biodiversity: 69, sst: '21.5°C', status: 'Warming & Invasive Trends', color: '#f59e0b' },
    { region: 'North Sea Coastal Shelf', biodiversity: 58, sst: '11.8°C', status: 'Demersal Cold Regime', color: '#818cf8' },
    { region: 'Arctic Polar Benthos', biodiversity: 34, sst: '2.5°C', status: 'Sea-Ice Retreat Zone', color: '#f43f5e' },
  ];

  const sstCurvePoints = [
    { temp: 10, diversity: 25 },
    { temp: 15, diversity: 42 },
    { temp: 20, diversity: 68 },
    { temp: 23, diversity: 88 },
    { temp: 25, diversity: 98 },
    { temp: 27, diversity: 92 },
    { temp: 29, diversity: 65 },
    { temp: 31, diversity: 38 },
    { temp: 33, diversity: 18 },
  ];

  const bleachingDistribution = [
    { category: 'None', pct: 38, count: '2,660 surveys', color: '#34d399' },
    { category: 'Low', pct: 24, count: '1,680 surveys', color: '#38bdf8' },
    { category: 'Moderate', pct: 19, count: '1,330 surveys', color: '#f59e0b' },
    { category: 'High', pct: 12, count: '840 surveys', color: '#f97316' },
    { category: 'Severe', pct: 7, count: '490 surveys', color: '#f43f5e' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.3)] text-[#38bdf8] text-xs font-semibold mb-3">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Interactive Oceanographic Data Analytics</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Visualizations & Environmental Trends</h2>
        <p className="text-sm sm:text-base text-[#94a3b8] mt-2">
          Explore empirical relationships between ocean temperature, ocean acidification, coral reef bleaching, and marine biodiversity distribution.
        </p>
      </div>

      {/* Interactive Climate Response Simulator */}
      <section className="glass-panel p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#64ffda]" />
              <span>Interactive Marine Climate Response Simulator</span>
            </h3>
            <p className="text-xs text-[#94a3b8]">Adjust SST and pH to simulate ecosystem health response in real-time</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#94a3b8] font-bold uppercase">Simulated Vitality Index:</span>
            <div className="text-2xl font-extrabold font-mono text-[#64ffda]">
              {simScore} <span className="text-xs text-[#64748b]">/ 100</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Thermometer className="w-4 h-4 text-[#f59e0b]" />
                Sea Surface Temperature (SST)
              </span>
              <span className="font-mono font-bold text-[#f59e0b] text-sm">{simSST}°C</span>
            </div>
            <input 
              type="range" 
              min="8" 
              max="34" 
              step="0.2" 
              value={simSST}
              onChange={(e) => setSimSST(parseFloat(e.target.value))}
              className="w-full accent-[#f59e0b] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#64748b] mt-1 font-mono">
              <span>8°C (Cold Shelf)</span>
              <span>25°C (Optimal)</span>
              <span>34°C (Severe Heatwave)</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.6)] border border-[rgba(100,255,218,0.1)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                <Droplet className="w-4 h-4 text-[#38bdf8]" />
                Ocean pH Level (Acidification)
              </span>
              <span className="font-mono font-bold text-[#38bdf8] text-sm">{simPH}</span>
            </div>
            <input 
              type="range" 
              min="7.5" 
              max="8.3" 
              step="0.01" 
              value={simPH}
              onChange={(e) => setSimPH(parseFloat(e.target.value))}
              className="w-full accent-[#38bdf8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#64748b] mt-1 font-mono">
              <span>7.50 (Acidified)</span>
              <span>8.10 (Typical Ocean)</span>
              <span>8.30 (Pristine)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Simulator Health Meter */}
        <div className="h-3 w-full bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-[#f43f5e] via-[#f59e0b] to-[#34d399]"
            style={{ width: `${simScore}%` }}
          />
        </div>
      </section>

      {/* Two Column Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* SST vs Species Diversity Curve */}
        <div className="glass-panel p-7">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#64ffda]" />
            <span>Temperature (SST) vs. Species Richness Curve</span>
          </h3>
          <p className="text-xs text-[#94a3b8] mb-6">
            Bell-shaped distribution showing maximum species diversity at 24–26°C with steep thermal decay.
          </p>

          <div className="space-y-3 font-mono text-xs">
            {sstCurvePoints.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-14 text-[#94a3b8]">{pt.temp}°C</span>
                <div className="flex-1 h-3.5 bg-[rgba(5,12,24,0.6)] rounded-full overflow-hidden p-0.5 border border-[rgba(100,255,218,0.1)]">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-[#0284c7] via-[#64ffda] to-[#38bdf8]"
                    style={{ width: `${pt.diversity}%` }}
                  />
                </div>
                <span className="w-12 text-right font-bold text-white">{pt.diversity}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coral Bleaching Severity Distribution */}
        <div className="glass-panel p-7">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Sun className="w-5 h-5 text-[#f59e0b]" />
            <span>Coral Bleaching Distribution Across Surveys</span>
          </h3>
          <p className="text-xs text-[#94a3b8] mb-6">
            Proportion of surveyed reefs across bleaching stress tiers (7,000 global survey points).
          </p>

          <div className="space-y-4">
            {bleachingDistribution.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    {item.category} Bleaching
                  </span>
                  <span className="text-[#94a3b8]">{item.count} ({item.pct}%)</span>
                </div>
                <div className="h-2 w-full bg-[rgba(255,255,255,0.06)] rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Regional Biodiversity Comparison Table */}
      <section className="glass-panel p-7">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Globe className="w-5 h-5 text-[#38bdf8]" />
          <span>Major Global Ocean Basins & Biodiversity Index</span>
        </h3>
        <p className="text-xs text-[#94a3b8] mb-6">
          Empirical comparison across representative marine biogeographic realms and marine protected areas (MPAs).
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[rgba(100,255,218,0.15)] text-[#94a3b8] uppercase font-mono">
                <th className="pb-3">Marine Realm / Region</th>
                <th className="pb-3">Mean SST</th>
                <th className="pb-3">Biodiversity Index</th>
                <th className="pb-3">Ecological Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
              {regionalData.map((reg, idx) => (
                <tr key={idx} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                  <td className="py-3 font-semibold text-white">{reg.region}</td>
                  <td className="py-3 font-mono text-[#cbd5e1]">{reg.sst}</td>
                  <td className="py-3 font-mono font-bold" style={{ color: reg.color }}>
                    {reg.biodiversity} / 100
                  </td>
                  <td className="py-3 text-[#94a3b8]">{reg.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

