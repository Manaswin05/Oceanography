import React from 'react';
import { 
  Waves, 
  Fish, 
  ThermometerSun, 
  Dna, 
  Compass, 
  Box,
  BarChart3, 
  Activity,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, apiStatus }) {
  const navItems = [
    { id: 'home', label: 'Overview', icon: Waves },
    { id: 'vision', label: 'Specimen Vision AI', icon: Fish },
    { id: 'ocean', label: 'Ocean Climate ML', icon: ThermometerSun },
    { id: 'taxonomy', label: 'Genomic Taxonomy', icon: Dna },
    { id: 'map', label: 'Map & Currents', icon: Compass },
    { id: 'three', label: 'Three.js Studio', icon: Box },
    { id: 'visuals', label: 'Visualizations', icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-[rgba(100,255,218,0.15)] bg-[rgba(5,12,24,0.85)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#64ffda] to-[#0284c7] p-0.5 shadow-lg shadow-[rgba(100,255,218,0.25)] flex items-center justify-center">
              <div className="w-full h-full bg-[#050c18] rounded-[10px] flex items-center justify-center">
                <Waves className="w-6 h-6 text-[#64ffda] group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#64ffda] transition-colors">
                  Marine Research Portal
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[rgba(100,255,218,0.12)] text-[#64ffda] border border-[rgba(100,255,218,0.3)]">
                  v2.0 AI & Three.js
                </span>
              </div>
              <p className="text-xs text-[#94a3b8] hidden sm:block">Oceanography & Biological Analysis Platform</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-xl bg-[rgba(13,27,49,0.7)] border border-[rgba(100,255,218,0.1)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-[rgba(100,255,218,0.2)] to-[rgba(56,189,248,0.2)] text-[#64ffda] border border-[rgba(100,255,218,0.35)] shadow-sm' 
                      : 'text-[#94a3b8] hover:text-white hover:bg-[rgba(255,255,255,0.05)]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#64ffda]' : 'text-[#64748b]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* API Health Pill */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border ${
              apiStatus.online 
                ? 'bg-[rgba(16,185,129,0.12)] border-[rgba(16,185,129,0.3)] text-[#34d399]' 
                : 'bg-[rgba(244,63,94,0.12)] border-[rgba(244,63,94,0.3)] text-[#fb7185]'
            }`}>
              <span className={`w-2 h-2 rounded-full ${apiStatus.online ? 'bg-[#34d399] animate-pulse' : 'bg-[#fb7185]'}`} />
              <span className="hidden sm:inline">{apiStatus.online ? 'Backend Connected' : 'Backend Offline'}</span>
              <span className="sm:hidden">{apiStatus.online ? 'API Online' : 'Offline'}</span>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Navigation bar */}
        <div className="flex lg:hidden overflow-x-auto gap-1 pb-3 scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  isActive 
                    ? 'bg-[rgba(100,255,218,0.2)] text-[#64ffda] border border-[rgba(100,255,218,0.4)]' 
                    : 'text-[#94a3b8] hover:text-white bg-[rgba(13,27,49,0.5)]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
}
