import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import SpecimenVision from './components/SpecimenVision.jsx';
import OceanPredictor from './components/OceanPredictor.jsx';
import TaxonomyDNA from './components/TaxonomyDNA.jsx';
import MarineMapVisualizer from './components/MarineMapVisualizer.jsx';
import ThreeStudio from './components/ThreeStudio.jsx';
import Visualizations from './components/Visualizations.jsx';
import { Waves, Shield } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [apiStatus, setApiStatus] = useState({ online: false, data: null });

  // Check backend health on mount and periodically
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch('/');
        if (res.ok) {
          const data = await res.json();
          setApiStatus({ online: true, data });
        } else {
          setApiStatus({ online: false, data: null });
        }
      } catch (err) {
        setApiStatus({ online: false, data: null });
      }
    };

    checkHealth();
    const interval = setInterval(checkHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-[#64ffda] selection:text-[#050c18]">
      
      {/* Background Animated Waves */}
      <div className="ocean-waves-bg" />

      {/* Floating Bioluminescent Bubble Particles */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={i} 
          className="biolum-bubble"
          style={{
            width: `${Math.random() * 24 + 8}px`,
            height: `${Math.random() * 24 + 8}px`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 18 + 14}s`,
            animationDelay: `${Math.random() * 6}s`
          }}
        />
      ))}

      {/* Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        apiStatus={apiStatus} 
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 pt-4">
        {activeTab === 'home' && (
          <Dashboard setActiveTab={setActiveTab} apiStatus={apiStatus} />
        )}
        {activeTab === 'vision' && <SpecimenVision />}
        {activeTab === 'ocean' && <OceanPredictor />}
        {activeTab === 'taxonomy' && <TaxonomyDNA />}
        {activeTab === 'map' && <MarineMapVisualizer />}
        {activeTab === 'three' && <ThreeStudio />}
        {activeTab === 'visuals' && <Visualizations />}
      </main>

      {/* Global Oceanic Footer */}
      <footer className="relative z-10 border-t border-[rgba(100,255,218,0.12)] bg-[rgba(5,12,24,0.92)] mt-16 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[rgba(100,255,218,0.15)] flex items-center justify-center">
                <Waves className="w-5 h-5 text-[#64ffda]" />
              </div>
              <div>
                <span className="font-bold text-white text-sm">Marine Research Portal</span>
                <p className="text-xs text-[#94a3b8]">AI, Deep Learning & Three.js 3D Ocean Space</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs text-[#94a3b8]">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#34d399]" />
                <span>PyTorch 2.1 & Scikit-Learn Ensembles</span>
              </span>
              <span>•</span>
              <span>Three.js WebGL Engine</span>
              <span>•</span>
              <span>FastAPI Backend</span>
            </div>

            <div className="text-xs text-[#64748b]">
              Part of Global Marine Conservation & Taxonomy Initiative
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
