import React, { useState, useEffect, useRef } from 'react';
import { 
  Compass, 
  Wind, 
  Waves, 
  MapPin, 
  Thermometer, 
  Dna, 
  Layers, 
  Eye, 
  Play, 
  Pause, 
  Sliders, 
  BookOpen, 
  Activity, 
  ChevronRight,
  Info,
  Sparkles,
  Zap
} from 'lucide-react';

export default function MarineMapVisualizer() {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [particleSpeed, setParticleSpeed] = useState(1.5);
  const [activeLayers, setActiveLayers] = useState({
    currents: true,
    temperature: true,
    migration: true,
    taxonomy: true,
    otolith: true,
  });
  const [selectedEntity, setSelectedEntity] = useState(null);
  const [activeTab, setActiveTab] = useState('map'); // 'map' or 'study'

  const toggleLayer = (key) => {
    setActiveLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // 1. Major Ocean Currents (Curved vector streamlines)
  const OCEAN_CURRENTS = [
    { name: 'Gulf Stream', color: '#ff4d6d', speed: 2.2, points: [[25, -80], [32, -75], [38, -65], [42, -50], [48, -35], [55, -20]] },
    { name: 'North Atlantic Drift', color: '#ff758f', speed: 1.6, points: [[55, -20], [60, -10], [65, 0], [70, 15]] },
    { name: 'Kuroshio Current', color: '#38bdf8', speed: 2.1, points: [[15, 125], [24, 125], [32, 136], [38, 145], [42, 160]] },
    { name: 'California Current', color: '#64ffda', speed: 1.2, points: [[48, -125], [40, -124], [32, -118], [22, -110]] },
    { name: 'Antarctic Circumpolar Current (ACC)', color: '#a78bfa', speed: 1.8, points: [[-55, -160], [-58, -100], [-55, -40], [-52, 20], [-56, 80], [-58, 140], [-55, 180]] },
    { name: 'Equatorial Counter Current', color: '#fbbf24', speed: 1.4, points: [[5, 130], [6, 160], [5, -160], [6, -120], [5, -90]] },
    { name: 'Agulhas Current', color: '#f43f5e', speed: 2.0, points: [[-22, 40], [-28, 34], [-35, 26], [-38, 18]] }
  ];

  // 2. Apex Pelagic Species Migration Routes
  const MIGRATION_ROUTES = [
    {
      id: 'bluefin',
      species: 'Atlantic Bluefin Tuna (Thunnus thynnus)',
      color: '#38bdf8',
      speed: '4.5 knots',
      depthRange: '0–500m',
      season: 'April – October (Spawning to Foraging)',
      coordinates: [
        { name: 'Gulf of Mexico (Spawning)', lat: 26.5, lon: -88.0 },
        { name: 'Florida Straits Transiting', lat: 25.0, lon: -80.0 },
        { name: 'Cape Hatteras Pelagic Front', lat: 35.5, lon: -75.0 },
        { name: 'Grand Banks (Banquereau Foraging)', lat: 44.5, lon: -50.0 },
        { name: 'Norwegian Sea Summer Benthos', lat: 62.0, lon: 2.0 }
      ]
    },
    {
      id: 'white_shark',
      species: 'Great White Shark (Carcharodon carcharias)',
      color: '#f59e0b',
      speed: '3.2 knots',
      depthRange: '0–900m',
      season: 'December – July (Offshore Pelagic)',
      coordinates: [
        { name: 'Farallon Islands (Seal Predation)', lat: 37.7, lon: -123.0 },
        { name: 'Pelagic Transition Arc', lat: 31.0, lon: -135.0 },
        { name: 'Subtropical "Shark Café"', lat: 25.0, lon: -145.0 },
        { name: 'Hawaiian Pelagic Outpost', lat: 21.0, lon: -156.0 }
      ]
    },
    {
      id: 'leatherback',
      species: 'Leatherback Sea Turtle (Dermochelys coriacea)',
      color: '#10b981',
      speed: '2.1 knots',
      depthRange: '0–1,200m (Deep Diver)',
      season: 'Trans-Pacific Foraging',
      coordinates: [
        { name: 'Jamursba-Medi (Papua Nesting)', lat: -0.5, lon: 132.5 },
        { name: 'Micronesian Passage', lat: 8.0, lon: 145.0 },
        { name: 'North Pacific Gyre', lat: 30.0, lon: -160.0 },
        { name: 'California Upwelling Jellyfish Feeding', lat: 36.8, lon: -122.5 }
      ]
    }
  ];

  // 3. Otolith Geochemical Provenance & Life-History Traces
  const OTOLITH_TRACKS = [
    {
      id: 'otolith_cod',
      species: 'Atlantic Cod (Gadus morhua)',
      technique: 'LA-ICP-MS (Sr/Ca, Ba/Ca & δ18O)',
      summary: 'Natal estuary nursery signature -> Continental shelf adult feeding -> Fjord spawning aggregation',
      stages: [
        { stage: 'Nursery Ground (Estuary)', lat: 51.5, lon: 4.2, ratio: 'High Ba/Ca (Low Salinity)', color: '#64ffda' },
        { stage: 'Sub-adult Feeding Shelf', lat: 56.5, lon: 3.5, ratio: 'Moderate Sr/Ca (Marine Shelf)', color: '#38bdf8' },
        { stage: 'Adult Spawning Fjord', lat: 68.2, lon: 13.5, ratio: 'Cold δ18O Enrichment (Lofoten)', color: '#a78bfa' }
      ]
    },
    {
      id: 'otolith_bream',
      species: 'Gilt-Head Bream (Sparus aurata)',
      technique: 'Micro-milling Core-to-Edge Profiling',
      summary: 'Coastal Posidonia seagrass nursery -> Coastal lagoon fattening -> Offshore shelf winter check',
      stages: [
        { stage: 'Coastal Lagoon (Mar Menor)', lat: 37.7, lon: -0.8, ratio: 'Hypersaline Sr/Ca spike', color: '#64ffda' },
        { stage: 'Open Mediterranean Shelf', lat: 38.5, lon: 0.2, ratio: 'Stable Oceanic Marine Baseline', color: '#38bdf8' }
      ]
    }
  ];

  // 4. Taxonomy & eDNA Observation Points
  const TAXONOMY_SITES = [
    { name: 'Coral Triangle eDNA Bio-Station', lat: -2.5, lon: 122.0, taxon: 'Cnidaria & Actinopterygii', count: '480 species', depth: '15–60m' },
    { name: 'Monterey Canyon Deep Transect', lat: 36.7, lon: -122.1, taxon: 'Mollusca (Cephalopoda)', count: '125 species', depth: '400–1200m' },
    { name: 'North Sea Cod Spawning Bio-Grid', lat: 57.0, lon: 2.5, taxon: 'Gadidae (Gadus morhua)', count: '85 species', depth: '40–120m' },
    { name: 'Great Barrier Reef Outer Barrier', lat: -16.5, lon: 146.2, taxon: 'Scleractinia & Sparidae', count: '620 species', depth: '5–35m' },
    { name: 'Mid-Atlantic Benthos Station', lat: 40.0, lon: -35.0, taxon: 'Pelagic Teleosts & Crustacea', count: '94 species', depth: '100–800m' }
  ];

  // Map coordinates projection helper (Equirectangular projection to canvas XY)
  const project = (lat, lon, width, height) => {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
  };

  // Canvas Drawing & Particle Advection Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    // Initialize moving particles for currents advection
    const numParticles = 400;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        life: Math.random() * 100,
        maxLife: 80 + Math.random() * 80,
        currentIdx: Math.floor(Math.random() * OCEAN_CURRENTS.length),
        t: Math.random(),
        speed: 0.002 + Math.random() * 0.004
      });
    }

    const render = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Deep ocean background
      ctx.fillStyle = '#050c18';
      ctx.fillRect(0, 0, w, h);

      // --- LAYER 1: Sea Surface Temperature (SST) Thermal Gradient Bands ---
      if (activeLayers.temperature) {
        const sstGradient = ctx.createLinearGradient(0, 0, 0, h);
        sstGradient.addColorStop(0.05, 'rgba(56, 189, 248, 0.08)');  // Arctic (Cold)
        sstGradient.addColorStop(0.25, 'rgba(100, 255, 218, 0.06)'); // Temperate
        sstGradient.addColorStop(0.50, 'rgba(245, 158, 11, 0.15)');  // Tropical Warm Pool (Equator)
        sstGradient.addColorStop(0.75, 'rgba(100, 255, 218, 0.06)'); // Southern Temperate
        sstGradient.addColorStop(0.95, 'rgba(167, 139, 250, 0.08)'); // Southern Ocean
        ctx.fillStyle = sstGradient;
        ctx.fillRect(0, 0, w, h);

        // Latitude guidelines
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        [-60, -30, 0, 30, 60].forEach(lat => {
          const pt = project(lat, 0, w, h);
          ctx.beginPath();
          ctx.moveTo(0, pt.y);
          ctx.lineTo(w, pt.y);
          ctx.stroke();
        });
      }

      // --- Simplified World Coastlines / Landmass Outlines ---
      ctx.fillStyle = 'rgba(13, 27, 49, 0.7)';
      ctx.strokeStyle = 'rgba(100, 255, 218, 0.2)';
      ctx.lineWidth = 1.2;

      // Simplified Americas, Eurasia, Africa, Australia representations
      const drawLand = (coords) => {
        ctx.beginPath();
        coords.forEach(([lat, lon], idx) => {
          const pt = project(lat, lon, w, h);
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      };

      // North America
      drawLand([[70, -165], [60, -140], [50, -125], [30, -115], [20, -105], [15, -90], [25, -80], [35, -75], [45, -60], [60, -60], [70, -100]]);
      // South America
      drawLand([[10, -75], [0, -80], [-20, -70], [-45, -75], [-55, -68], [-40, -60], [-20, -40], [-5, -35], [5, -50], [10, -75]]);
      // Eurasia
      drawLand([[70, 20], [70, 180], [45, 140], [25, 120], [15, 100], [25, 60], [35, 35], [45, 10], [55, 10], [70, 20]]);
      // Africa
      drawLand([[35, -5], [30, 30], [10, 50], [-10, 40], [-35, 20], [-30, 15], [0, 10], [15, -15], [35, -5]]);
      // Australia
      drawLand([[-12, 130], [-15, 145], [-35, 150], [-38, 140], [-32, 115], [-20, 115], [-12, 130]]);

      // --- LAYER 2: Ocean Currents & Streamline Advection ---
      if (activeLayers.currents) {
        OCEAN_CURRENTS.forEach((current) => {
          ctx.strokeStyle = current.color;
          ctx.lineWidth = 2.2;
          ctx.shadowColor = current.color;
          ctx.shadowBlur = 8;
          ctx.beginPath();

          current.points.forEach(([lat, lon], idx) => {
            const pt = project(lat, lon, w, h);
            if (idx === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          });
          ctx.stroke();
          ctx.shadowBlur = 0; // Reset
        });

        // Advect animated current particles along paths
        particles.forEach(p => {
          const curr = OCEAN_CURRENTS[p.currentIdx];
          p.t += p.speed * particleSpeed;
          if (p.t >= 1) {
            p.t = 0;
            p.currentIdx = Math.floor(Math.random() * OCEAN_CURRENTS.length);
          }

          // Linear interpolation between waypoints
          const numSegs = curr.points.length - 1;
          const segFloat = p.t * numSegs;
          const segIdx = Math.floor(segFloat);
          const segT = segFloat - segIdx;

          if (segIdx < numSegs) {
            const p1 = curr.points[segIdx];
            const p2 = curr.points[segIdx + 1];
            const lat = p1[0] + (p2[0] - p1[0]) * segT;
            const lon = p1[1] + (p2[1] - p1[1]) * segT;
            const pt = project(lat, lon, w, h);

            // Draw glowing particle head
            ctx.fillStyle = curr.color;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 2.2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
      }

      // --- LAYER 3: Marine Migration Routes ---
      if (activeLayers.migration) {
        MIGRATION_ROUTES.forEach(route => {
          ctx.strokeStyle = route.color;
          ctx.lineWidth = 2;
          ctx.setLineDash([6, 4]); // Dashed migration trail
          ctx.beginPath();

          route.coordinates.forEach((coord, idx) => {
            const pt = project(coord.lat, coord.lon, w, h);
            if (idx === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          });
          ctx.stroke();
          ctx.setLineDash([]); // Reset dash

          // Draw Waypoints & Telemetry tags
          route.coordinates.forEach(coord => {
            const pt = project(coord.lat, coord.lon, w, h);
            ctx.fillStyle = route.color;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 4, 0, Math.PI * 2);
            ctx.fill();

            // Pulsing outer wave
            const pulse = (Date.now() / 300) % 8;
            ctx.strokeStyle = route.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 4 + pulse, 0, Math.PI * 2);
            ctx.stroke();
          });
        });
      }

      // --- LAYER 4: Otolith Geochemical Provenance Tracks ---
      if (activeLayers.otolith) {
        OTOLITH_TRACKS.forEach(oto => {
          ctx.strokeStyle = '#64ffda';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          oto.stages.forEach((st, idx) => {
            const pt = project(st.lat, st.lon, w, h);
            if (idx === 0) ctx.moveTo(pt.x, pt.y);
            else ctx.lineTo(pt.x, pt.y);
          });
          ctx.stroke();

          oto.stages.forEach(st => {
            const pt = project(st.lat, st.lon, w, h);
            ctx.fillStyle = st.color;
            ctx.fillRect(pt.x - 3.5, pt.y - 3.5, 7, 7); // Square isotope marker
          });
        });
      }

      // --- LAYER 5: Taxonomy & eDNA Observation Markers ---
      if (activeLayers.taxonomy) {
        TAXONOMY_SITES.forEach(site => {
          const pt = project(site.lat, site.lon, w, h);
          ctx.fillStyle = '#a855f7';
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.2;
          ctx.stroke();
        });
      }

      if (isPlaying) {
        animationId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [activeLayers, isPlaying, particleSpeed]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.3)] text-[#38bdf8] text-xs font-semibold mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Spatial Oceanographic & Biological GIS Platform</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Marine Map & Currents Visualizer</h2>
        <p className="text-sm sm:text-base text-[#94a3b8] mt-2">
          Animate dynamic ocean wind & current streamlines, plot multi-generational migration routes, analyze otolith provenance isotope trajectories, and explore spatial taxonomy distribution.
        </p>
      </div>

      {/* Main Tabs (Interactive Map vs Detailed Scientific Study) */}
      <div className="flex justify-center">
        <div className="glass-panel p-1.5 flex gap-2 rounded-xl">
          <button
            onClick={() => setActiveTab('map')}
            className={`px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'map'
                ? 'bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Interactive Map & Animation</span>
          </button>

          <button
            onClick={() => setActiveTab('study')}
            className={`px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all ${
              activeTab === 'study'
                ? 'bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md'
                : 'text-[#94a3b8] hover:text-white'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Detailed Scientific & Mapping Study</span>
          </button>
        </div>
      </div>

      {activeTab === 'map' ? (
        <div className="space-y-6">
          
          {/* Layer Toggles & Animation Controls Bar */}
          <div className="glass-panel p-4 flex flex-wrap items-center justify-between gap-4">
            
            {/* Layer Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#94a3b8] uppercase mr-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#64ffda]" />
                Layers:
              </span>

              {[
                { key: 'currents', label: 'Wind / Currents', icon: Wind, color: '#38bdf8' },
                { key: 'temperature', label: 'SST Isotherms', icon: Thermometer, color: '#f59e0b' },
                { key: 'migration', label: 'Migration Routes', icon: Activity, color: '#10b981' },
                { key: 'otolith', label: 'Otolith Provenance', icon: Sparkles, color: '#64ffda' },
                { key: 'taxonomy', label: 'Taxonomy Sites', icon: Dna, color: '#a855f7' },
              ].map(layer => {
                const Icon = layer.icon;
                const active = activeLayers[layer.key];
                return (
                  <button
                    key={layer.key}
                    onClick={() => toggleLayer(layer.key)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                      active
                        ? 'bg-[rgba(100,255,218,0.15)] text-white border-[rgba(100,255,218,0.4)]'
                        : 'bg-[rgba(5,12,24,0.6)] text-[#64748b] border-[rgba(255,255,255,0.06)]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: active ? layer.color : '#64748b' }} />
                    <span>{layer.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Animation Speed & Play/Pause */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="btn-ocean py-1.5 text-xs"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause Flows' : 'Resume Flows'}</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8]">
                <span>Speed:</span>
                <input
                  type="range"
                  min="0.5"
                  max="3.5"
                  step="0.5"
                  value={particleSpeed}
                  onChange={(e) => setParticleSpeed(parseFloat(e.target.value))}
                  className="w-20 accent-[#64ffda] cursor-pointer"
                />
                <span className="text-white font-bold">{particleSpeed}x</span>
              </div>
            </div>

          </div>

          {/* Map Canvas Viewport */}
          <div className="glass-panel p-3 relative overflow-hidden rounded-2xl">
            <canvas
              ref={canvasRef}
              width={1120}
              height={560}
              className="w-full h-auto rounded-xl block border border-[rgba(100,255,218,0.1)]"
            />
            
            {/* Live Map Legend Overlay */}
            <div className="absolute bottom-6 left-6 p-3 rounded-xl bg-[rgba(5,12,24,0.85)] backdrop-blur border border-[rgba(100,255,218,0.2)] text-[11px] font-mono space-y-1.5 pointer-events-none">
              <span className="text-[#64ffda] font-bold block mb-1">🗺️ Telemetry Legend</span>
              <div className="flex items-center gap-2">
                <span className="w-3 h-1 bg-[#ff4d6d] rounded-full inline-block" />
                <span className="text-white">Gulf Stream / Tropical Currents</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-1 bg-[#38bdf8] rounded-full inline-block" />
                <span className="text-white">Bluefin Tuna Telemetry (Arc)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-1 bg-[#f59e0b] rounded-full inline-block" />
                <span className="text-white">White Shark Trans-Pacific Path</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#64ffda] inline-block" />
                <span className="text-white">Otolith Chemical Nursery Provenance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a855f7] inline-block" />
                <span className="text-white">eDNA Taxonomy Bio-Station</span>
              </div>
            </div>
          </div>

          {/* Interactive Route Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MIGRATION_ROUTES.map(route => (
              <div 
                key={route.id}
                onClick={() => setSelectedEntity(route)}
                className="glass-panel p-4 cursor-pointer hover:border-[#64ffda] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold" style={{ color: route.color }}>
                    {route.speed}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[rgba(255,255,255,0.06)] text-[#94a3b8]">
                    {route.depthRange}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{route.species}</h4>
                <p className="text-xs text-[#94a3b8]">{route.season}</p>
              </div>
            ))}
          </div>

        </div>
      ) : (
        /* Detailed Scientific Study & Architecture Panel */
        <div className="glass-panel p-8 space-y-8 animate-fadeIn">
          
          <div className="border-b border-[rgba(100,255,218,0.15)] pb-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-[#64ffda]" />
              <span>Scientific Guide: How to Plot & Represent Marine Data on Maps</span>
            </h3>
            <p className="text-sm text-[#94a3b8] mt-1">
              A comprehensive technical study covering particle advection, geochemical otolith provenancing, satellite telemetry filtering, and WebGL shader pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs leading-relaxed">
            
            {/* Section 1: Weather & Currents Advection */}
            <div className="p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(56,189,248,0.2)] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#38bdf8]">
                <Wind className="w-4 h-4" />
                <h4>1. Ocean Currents & Wind Vector Animation (Nullschool / Windy Style)</h4>
              </div>
              <p className="text-[#cbd5e1]">
                <strong>Data Sources:</strong> Real-time vector wind and ocean current data are distributed by NOAA (GFS / OSCAR) and Copernicus (CMEMS) in <strong>GRIB2</strong> or <strong>NetCDF</strong> format containing spatial velocity components $u$ (east-west) and $v$ (north-south).
              </p>
              <p className="text-[#94a3b8]">
                <strong>Advection Mathematics:</strong> Particle positions evolve via the Lagrangian trajectory formula:
              </p>
              <div className="p-2.5 rounded bg-black font-mono text-[11px] text-[#64ffda]">
                $$\vec{x}(t + \Delta t) = \vec{x}(t) + \vec{v}(\vec{x}(t)) \cdot \Delta t$$
              </div>
              <p className="text-[#94a3b8]">
                For production smoothness, 4th-Order Runge-Kutta (RK4) integration is utilized over bilinear spatial interpolation of grid nodes.
              </p>
              <p className="text-[#cbd5e1]">
                <strong>GPU Shader Pipeline:</strong> In WebGL / Three.js, rendering 20,000+ particles at 60 FPS is done via <em>Ping-Pong GPU Textures</em>. Two floating-point framebuffers alternate: Shader 1 updates particle positions based on current velocity textures; Shader 2 fades particle trails by blending previous frames with decay alpha (0.95).
              </p>
            </div>

            {/* Section 2: Otolithography Provenance Mapping */}
            <div className="p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(100,255,218,0.2)] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#64ffda]">
                <Sparkles className="w-4 h-4" />
                <h4>2. Otolithography Provenance & Life-History Tracing</h4>
              </div>
              <p className="text-[#cbd5e1]">
                <strong>Principle:</strong> Fish otoliths (ear bones) are metabolically inert calcium carbonate ($CaCO_3$, predominantly aragonite). As fish swim through varying water masses, minor and trace elements are permanently accreted into daily and seasonal growth rings.
              </p>
              <p className="text-[#94a3b8]">
                <strong>Analytical Instrumentation:</strong> Laser Ablation Inductively Coupled Plasma Mass Spectrometry (<strong>LA-ICP-MS</strong>) profiles elemental ratios along the growth axis from core (natal birth) to edge (capture):
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[#94a3b8]">
                <li><strong>Strontium/Calcium ($Sr/Ca$):</strong> Directly correlates with ambient salinity; spikes identify transitions from freshwater/estuarine nurseries to open ocean.</li>
                <li><strong>Barium/Calcium ($Ba/Ca$):</strong> Elevated in nutrient-rich freshwater runoff and coastal river plumes.</li>
                <li><strong>Oxygen Isotopes ($\delta^{18}\text{O}$):</strong> Reconstructs historical ambient water temperature experienced across migration seasons.</li>
              </ul>
              <p className="text-[#cbd5e1]">
                <strong>Mapping Technique:</strong> Measured isotope profiles are inverted against regional oceanic <em>Isoscapes</em> (IsoMAP models) to generate maximum-likelihood geographic tracks.
              </p>
            </div>

            {/* Section 3: Satellite Telemetry Migration */}
            <div className="p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(245,158,11,0.2)] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#fbbf24]">
                <Activity className="w-4 h-4" />
                <h4>3. Marine Animal Migration & Telemetry Modeling</h4>
              </div>
              <p className="text-[#cbd5e1]">
                <strong>Tag Technologies:</strong> Pop-up Satellite Archival Tags (PSAT) and Smart Position and Temperature transmitting (SPOT) tags record light-level latitude, depth, and ambient SST.
              </p>
              <p className="text-[#94a3b8]">
                <strong>State-Space Models (SSMs):</strong> Raw Argos satellite fixes suffer from positional noise ($\pm 5\text{km}$). Researchers apply two-state First-Difference Correlated Random Walk (DCRW) switching models:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[#94a3b8]">
                <li><strong>State 1 (Transiting):</strong> High speed, low turning angles (directed trans-oceanic migration).</li>
                <li><strong>State 2 (Area-Restricted Search / Foraging):</strong> Low speed, high tortuosity (feeding in upwelling fronts).</li>
              </ul>
              <p className="text-[#cbd5e1]">
                <strong>Cartographic Representation:</strong> Great Circle geodesics with animated gradient pulses along the line string, color-coded by behavioral mode or vertical depth.
              </p>
            </div>

            {/* Section 4: Taxonomy & eDNA Spatial Mapping */}
            <div className="p-5 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(168,85,247,0.2)] space-y-3">
              <div className="flex items-center gap-2 text-sm font-bold text-[#c084fc]">
                <Dna className="w-4 h-4" />
                <h4>4. Taxonomy & eDNA Biogeographic Distributions</h4>
              </div>
              <p className="text-[#cbd5e1]">
                <strong>Global Biodiversity Databases:</strong> Integrating with OBIS (Ocean Biodiversity Information System) and GBIF via GeoJSON FeatureCollections.
              </p>
              <p className="text-[#94a3b8]">
                <strong>Cartographic Representation Techniques:</strong>
              </p>
              <ul className="list-disc pl-4 space-y-1 text-[#94a3b8]">
                <li><strong>H3 Hexagonal Hierarchical Spatial Indexing:</strong> Binning continuous eDNA reads into discrete hexagonal grid cells to prevent point cluttering.</li>
                <li><strong>Biodiversity Iso-surfaces:</strong> Kernel Density Estimation (KDE) contour lines showing species richness drops across environmental fronts.</li>
                <li><strong>Phylogenetic Tree Mapping:</strong> Linking geo-markers to interactive circular dendrograms displaying hierarchical taxonomy lineage.</li>
              </ul>
            </div>

          </div>

          {/* Recommended Web Stack & Libraries */}
          <div className="p-5 rounded-xl bg-[rgba(100,255,218,0.05)] border border-[rgba(100,255,218,0.2)]">
            <h4 className="text-sm font-bold text-[#64ffda] mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Recommended Production Web Stack for World-Class Ocean Visualizations</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-[#cbd5e1] font-mono">
              <div className="p-2.5 rounded bg-[rgba(5,12,24,0.6)]">
                <strong className="text-white block mb-1">Three.js</strong>
                <span>Custom WebGL shaders, 3D globes, and volumetric bathymetric rendering.</span>
              </div>
              <div className="p-2.5 rounded bg-[rgba(5,12,24,0.6)]">
                <strong className="text-white block mb-1">Deck.gl</strong>
                <span>High-performance WebGL layer for millions of telemetry points & H3 hexes.</span>
              </div>
              <div className="p-2.5 rounded bg-[rgba(5,12,24,0.6)]">
                <strong className="text-white block mb-1">MapLibre GL</strong>
                <span>Open-source vector tile basemaps with custom ocean bathymetry styling.</span>
              </div>
              <div className="p-2.5 rounded bg-[rgba(5,12,24,0.6)]">
                <strong className="text-white block mb-1">D3-Geo & Turf.js</strong>
                <span>Geodesic Great Circle calculations and spatial geometric interpolation.</span>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}

