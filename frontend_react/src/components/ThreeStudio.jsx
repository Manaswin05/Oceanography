import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Box, 
  RotateCw, 
  Eye, 
  Maximize2, 
  Compass, 
  Sparkles, 
  Code2, 
  Globe2, 
  Layers, 
  Sliders, 
  Info,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

export default function ThreeStudio() {
  const mountRef = useRef(null);
  const [activeSceneMode, setActiveSceneMode] = useState('globe'); // 'globe', 'particles', 'hologram'
  const [autoRotate, setAutoRotate] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(0.003);
  const [selectedStation, setSelectedStation] = useState(null);
  const [showDevGuide, setShowDevGuide] = useState(false);

  // Marine observation stations data for 3D Globe
  const STATIONS = [
    { name: 'Great Barrier Reef (Australia)', lat: -18.28, lon: 147.70, depth: '45m', sst: '27.4°C', species: '1,500+ species', color: 0x64ffda },
    { name: 'Monterey Bay Sanctuary (USA)', lat: 36.60, lon: -121.89, depth: '1,200m', sst: '14.2°C', species: 'Kelp Forest Apex', color: 0x38bdf8 },
    { name: 'Coral Triangle (Indonesia)', lat: -1.50, lon: 125.00, depth: '85m', sst: '29.1°C', species: 'Global Epicenter', color: 0x34d399 },
    { name: 'Mariana Trench (Abyssal Zone)', lat: 11.35, lon: 142.20, depth: '10,984m', sst: '1.8°C', species: 'Hadal Extremophiles', color: 0xf59e0b },
    { name: 'Mid-Atlantic Ridge (Hydrothermal)', lat: 37.00, lon: -32.00, depth: '2,600m', sst: '2.5°C', species: 'Chemosynthetic Vent Biota', color: 0xf43f5e }
  ];

  // Helper to convert Lat/Lon to 3D Cartesian coordinates on sphere
  const latLonToVector3 = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- 1. Scene, Camera, Renderer Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050c18, 0.04);

    const width = container.clientWidth;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 5, 20);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // --- 2. Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x64ffda, 1.5);
    dirLight.position.set(10, 20, 15);
    scene.add(dirLight);

    const blueLight = new THREE.PointLight(0x0284c7, 2, 50);
    blueLight.position.set(-15, -10, -10);
    scene.add(blueLight);

    // Group to hold all objects for rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // --- 3. Scene Presets Implementation ---
    let animationFrameId;

    if (activeSceneMode === 'globe') {
      // --- GLOBE MODE ---
      const sphereRadius = 6.0;

      // Base Oceanic Sphere
      const globeGeo = new THREE.SphereGeometry(sphereRadius, 64, 64);
      const globeMat = new THREE.MeshPhongMaterial({
        color: 0x071e3d,
        emissive: 0x051326,
        specular: 0x64ffda,
        shininess: 35,
        wireframe: false,
        transparent: true,
        opacity: 0.92,
      });
      const globeMesh = new THREE.Mesh(globeGeo, globeMat);
      mainGroup.add(globeMesh);

      // Lat/Lon Wireframe Grid Layer
      const gridGeo = new THREE.SphereGeometry(sphereRadius + 0.05, 24, 24);
      const gridMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.15,
      });
      const gridMesh = new THREE.Mesh(gridGeo, gridMat);
      mainGroup.add(gridMesh);

      // Glowing Atmosphere Halo Ring
      const atmosphereGeo = new THREE.SphereGeometry(sphereRadius + 0.8, 48, 48);
      const atmosphereMat = new THREE.MeshBasicMaterial({
        color: 0x64ffda,
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      });
      const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
      mainGroup.add(atmosphereMesh);

      // Orbital Wind / Current Particle Rings
      const ringParticleCount = 600;
      const ringGeo = new THREE.BufferGeometry();
      const ringPos = new Float32Array(ringParticleCount * 3);
      for (let i = 0; i < ringParticleCount; i++) {
        const angle = (i / ringParticleCount) * Math.PI * 2;
        const r = sphereRadius + 0.4 + Math.sin(i * 0.1) * 0.3;
        ringPos[i * 3] = Math.cos(angle) * r;
        ringPos[i * 3 + 1] = (Math.sin(angle * 3) * 0.6);
        ringPos[i * 3 + 2] = Math.sin(angle) * r;
      }
      ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
      const ringMat = new THREE.PointsMaterial({
        color: 0x64ffda,
        size: 0.12,
        transparent: true,
        opacity: 0.8,
      });
      const ringMesh = new THREE.Points(ringGeo, ringMat);
      mainGroup.add(ringMesh);

      // Add Station Pins onto Globe
      STATIONS.forEach((station) => {
        const pos = latLonToVector3(station.lat, station.lon, sphereRadius + 0.1);
        
        // Pin base
        const pinGeo = new THREE.SphereGeometry(0.18, 16, 16);
        const pinMat = new THREE.MeshBasicMaterial({ color: station.color });
        const pinMesh = new THREE.Mesh(pinGeo, pinMat);
        pinMesh.position.copy(pos);
        pinMesh.userData = station;
        mainGroup.add(pinMesh);

        // Pulsing outer beacon
        const beaconGeo = new THREE.RingGeometry(0.2, 0.4, 24);
        const beaconMat = new THREE.MeshBasicMaterial({ 
          color: station.color, 
          side: THREE.DoubleSide, 
          transparent: true, 
          opacity: 0.6 
        });
        const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
        beaconMesh.position.copy(pos);
        beaconMesh.lookAt(0, 0, 0);
        mainGroup.add(beaconMesh);
      });

    } else if (activeSceneMode === 'particles') {
      // --- 3D UNDERWATER CURRENT FLOW FIELD MODE ---
      const particleCount = 2000;
      const geo = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities = [];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 25;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        velocities.push({
          x: 0.02 + Math.random() * 0.05,
          y: Math.sin(i) * 0.015,
          z: Math.cos(i) * 0.015
        });
      }
      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const pMat = new THREE.PointsMaterial({
        color: 0x64ffda,
        size: 0.15,
        transparent: true,
        opacity: 0.75,
      });
      const particleSystem = new THREE.Points(geo, pMat);
      mainGroup.add(particleSystem);

    } else if (activeSceneMode === 'hologram') {
      // --- HOLOGRAPHIC SPECIMEN WIREFRAME MODE ---
      // Wireframe torus knot simulating marine specimen morphological shell
      const knotGeo = new THREE.TorusKnotGeometry(4.5, 1.4, 128, 32);
      const knotMat = new THREE.MeshStandardMaterial({
        color: 0x64ffda,
        wireframe: true,
        emissive: 0x0284c7,
        emissiveIntensity: 0.4
      });
      const knotMesh = new THREE.Mesh(knotGeo, knotMat);
      mainGroup.add(knotMesh);

      // Inner glowing core
      const coreGeo = new THREE.IcosahedronGeometry(2.5, 2);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      mainGroup.add(coreMesh);
    }

    // --- 4. Interactive Mouse Orbit & Drag Controls ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      mainGroup.rotation.y += deltaX * 0.006;
      mainGroup.rotation.x += deltaY * 0.006;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e) => {
      camera.position.z = Math.max(8, Math.min(40, camera.position.z + e.deltaY * 0.02));
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight || 550;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', onResize);

    // --- 5. Animation Loop ---
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (autoRotate && !isDragging) {
        mainGroup.rotation.y += rotationSpeed;
      }

      // Dynamic animation in particle mode
      if (activeSceneMode === 'particles') {
        const pts = mainGroup.children[0];
        if (pts && pts.geometry) {
          const pos = pts.geometry.attributes.position.array;
          for (let i = 0; i < pos.length / 3; i++) {
            pos[i * 3] += 0.04;
            if (pos[i * 3] > 12) pos[i * 3] = -12;
            pos[i * 3 + 1] += Math.sin(clock.getElapsedTime() + i) * 0.006;
          }
          pts.geometry.attributes.position.needsUpdate = true;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // --- 6. Cleanup on Unmount ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('mousedown', onMouseDown);
      dom.removeEventListener('wheel', onWheel);
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
      renderer.dispose();
    };
  }, [activeSceneMode, autoRotate, rotationSpeed]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(100,255,218,0.1)] border border-[rgba(100,255,218,0.3)] text-[#64ffda] text-xs font-semibold mb-3">
          <Box className="w-3.5 h-3.5" />
          <span>Three.js 3D Interactive Graphics Studio</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Three.js 3D Ocean Space</h2>
        <p className="text-sm sm:text-base text-[#94a3b8] mt-2">
          Dedicated 3D canvas and development playground for you to craft WebGL shaders, 3D bathymetry, specimen morphometry models, and ocean current visualizers.
        </p>
      </div>

      {/* Mode Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 glass-panel p-4">
        
        {/* Preset Selector */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'globe', label: '3D Ocean Globe & Stations', icon: Globe2 },
            { id: 'particles', label: 'Underwater Vector Field Flow', icon: Sparkles },
            { id: 'hologram', label: 'Morphological Specimen Mesh', icon: Box },
          ].map((mode) => {
            const Icon = mode.icon;
            const isActive = activeSceneMode === mode.id;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveSceneMode(mode.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  isActive 
                    ? 'bg-gradient-to-r from-[#64ffda] to-[#38bdf8] text-[#050c18] shadow-md' 
                    : 'text-[#94a3b8] hover:text-white bg-[rgba(5,12,24,0.6)]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animation & Camera Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              autoRotate 
                ? 'bg-[rgba(100,255,218,0.15)] text-[#64ffda] border-[#64ffda]' 
                : 'bg-[rgba(5,12,24,0.6)] text-[#94a3b8] border-[rgba(255,255,255,0.1)]'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin-slow' : ''}`} />
            <span>{autoRotate ? 'Auto-Orbit: ON' : 'Auto-Orbit: OFF'}</span>
          </button>

          <button
            onClick={() => setShowDevGuide(!showDevGuide)}
            className="btn-ocean text-xs py-1.5"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>{showDevGuide ? 'Hide Developer Notes' : 'Three.js Dev Notes'}</span>
          </button>
        </div>

      </div>

      {/* 3D Viewport & Station Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main 3D Canvas (8 cols) */}
        <div className="lg:col-span-8 glass-panel p-2 relative overflow-hidden rounded-2xl">
          <div 
            ref={mountRef} 
            className="w-full h-[540px] cursor-grab active:cursor-grabbing rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#07192f] via-[#050c18] to-[#02050b]"
          />
          <div className="absolute bottom-4 left-4 pointer-events-none text-[11px] font-mono text-[#94a3b8] bg-[rgba(5,12,24,0.7)] px-3 py-1.5 rounded-lg backdrop-blur border border-[rgba(100,255,218,0.15)]">
            🖱️ Left Click + Drag: Rotate 3D Space • Scroll: Zoom Camera
          </div>
        </div>

        {/* Stations & Settings Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="glass-panel p-6">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#64ffda]" />
              <span>Marine Observation Stations</span>
            </h3>
            <p className="text-xs text-[#94a3b8] mb-4">
              Real-world oceanographic monitoring stations mapped on the 3D globe:
            </p>

            <div className="space-y-2.5">
              {STATIONS.map((st, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedStation(st)}
                  className={`p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                    selectedStation?.name === st.name 
                      ? 'bg-[rgba(100,255,218,0.15)] border-[#64ffda]' 
                      : 'bg-[rgba(5,12,24,0.6)] border-[rgba(100,255,218,0.1)] hover:border-[rgba(100,255,218,0.3)]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">{st.name}</span>
                    <span className="font-mono text-[10px] text-[#64ffda]">{st.sst}</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-[#94a3b8] font-mono">
                    <span>Depth: {st.depth}</span>
                    <span>{st.species}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats on Selected Station */}
          {selectedStation && (
            <div className="glass-panel p-5 space-y-2">
              <span className="text-[11px] font-bold text-[#64ffda] uppercase font-mono block">Station Telemetry</span>
              <h4 className="text-sm font-bold text-white">{selectedStation.name}</h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#cbd5e1] pt-2 border-t border-[rgba(255,255,255,0.08)]">
                <div>Lat: {selectedStation.lat}°</div>
                <div>Lon: {selectedStation.lon}°</div>
                <div>Depth: {selectedStation.depth}</div>
                <div>SST: {selectedStation.sst}</div>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Developer Integration Guide for Three.js */}
      {showDevGuide && (
        <section className="glass-panel p-7 space-y-4 animate-fadeIn">
          <div className="flex items-center gap-2 text-base font-bold text-[#64ffda]">
            <Code2 className="w-5 h-5" />
            <span>Developer Guide: How to Extend This Three.js Platform</span>
          </div>

          <p className="text-xs text-[#94a3b8] leading-relaxed">
            This module is structured cleanly for you to plug in advanced Three.js features. Here are the key patterns to implement:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            
            <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(100,255,218,0.15)] space-y-2">
              <span className="text-[#64ffda] font-bold block">1. Load Custom GLTF/GLB Models</span>
              <p className="text-[#94a3b8] text-[11px] leading-relaxed">
                Import <code className="text-white">GLTFLoader</code> from <code className="text-white">'three/examples/jsm/loaders/GLTFLoader.js'</code> to render animated fish, sharks, bathymetric terrain, or underwater ROVs directly into <code className="text-white">mainGroup</code>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(56,189,248,0.15)] space-y-2">
              <span className="text-[#38bdf8] font-bold block">2. Custom GLSL Water Shaders</span>
              <p className="text-[#94a3b8] text-[11px] leading-relaxed">
                Use <code className="text-white">THREE.ShaderMaterial</code> with vertex shaders modifying vertices with Perlin noise / Gerstner waves to create undulating oceanic waves and bioluminescent caustics.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[rgba(5,12,24,0.7)] border border-[rgba(52,211,153,0.15)] space-y-2">
              <span className="text-[#34d399] font-bold block">3. OrbitControls & Postprocessing</span>
              <p className="text-[#94a3b8] text-[11px] leading-relaxed">
                Add <code className="text-white">OrbitControls</code> for damping, and <code className="text-white">EffectComposer</code> with <code className="text-white">UnrealBloomPass</code> to give current vectors and specimen markers vivid bioluminescent neon glows.
              </p>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}

