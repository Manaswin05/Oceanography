/* ══════════════════════════════════════════════════════════════
   OceanVision — main.js
   Handles: drag-drop upload, AJAX analysis, Leaflet map,
            species DB browser, Chart.js radar, animations
══════════════════════════════════════════════════════════════ */

"use strict";

/* ── IUCN colour map ──────────────────────────────────────── */
const IUCN_COLOR = {
  "Critically Endangered": "#ff1744",
  "Endangered":            "#ff9800",
  "Vulnerable":            "#ffeb3b",
  "Least Concern":         "#69f0ae",
  "Data Deficient":        "#78909c",
  "Near Threatened":       "#ce93d8",
};

/* ── Habitat icons ────────────────────────────────────────── */
const HABITAT_EMOJI = {
  "Coral reef": "🪸",
  "Deep Sea": "🌊",
  "Open Ocean": "🌏",
  "Demersal": "🐟",
  "Reef": "🪸",
  "Bathypelagic": "🌑",
  "Pelagic": "🌊",
  "Seamount": "⛰️",
};

/* ══════════════════════════════════════════════════════════
   DOM REFERENCES
══════════════════════════════════════════════════════════ */
const dropZone      = document.getElementById("dropZone");
const fileInput     = document.getElementById("fileInput");
const previewBox    = document.getElementById("previewBox");
const previewImg    = document.getElementById("previewImg");
const previewMeta   = document.getElementById("previewMeta");
const clearBtn      = document.getElementById("clearBtn");
const analyzeBtn    = document.getElementById("analyzeBtn");
const loadingOverlay = document.getElementById("loadingOverlay");
const emptyState    = document.getElementById("emptyState");
const analysisResults = document.getElementById("analysisResults");
const mapJumpBtn    = document.getElementById("mapJumpBtn");

/* ══════════════════════════════════════════════════════════
   STATE
══════════════════════════════════════════════════════════ */
let currentFile    = null;
let currentSpecies = null;
let speciesDB      = [];
let mapInstance    = null;
let mapLayers      = { habitat: [], migration: [], markers: [], heatmap: null, depth: [] };
let featureChart   = null;
let animInterval   = null;

/* ══════════════════════════════════════════════════════════
   HEALTH CHECK + HERO STATS
══════════════════════════════════════════════════════════ */
async function initSystem() {
  try {
    const r = await fetch("/api/v1/health");
    const d = await r.json();
    const dot = document.getElementById("systemStatus");
    const txt = document.getElementById("statusText");
    if (d.status === "ok") {
      dot.classList.add("online");
      txt.textContent = "System Online";
      document.getElementById("heroSpeciesCount").textContent = d.species_count;
    } else {
      dot.classList.add("offline");
      txt.textContent = "System Error";
    }
  } catch (e) {
    document.getElementById("systemStatus").classList.add("offline");
    document.getElementById("statusText").textContent = "Offline";
  }
}

/* ══════════════════════════════════════════════════════════
   DRAG & DROP UPLOAD
══════════════════════════════════════════════════════════ */
["dragenter", "dragover"].forEach(ev =>
  dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.add("drag-over"); })
);
["dragleave", "drop"].forEach(ev =>
  dropZone.addEventListener(ev, e => { e.preventDefault(); dropZone.classList.remove("drag-over"); })
);
dropZone.addEventListener("drop", e => {
  const files = e.dataTransfer.files;
  if (files.length) handleFile(files[0]);
});
dropZone.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", () => {
  if (fileInput.files.length) handleFile(fileInput.files[0]);
});
clearBtn.addEventListener("click", clearUpload);

function handleFile(file) {
  if (!file.type.startsWith("image/")) {
    alert("Please upload an image file.");
    return;
  }
  currentFile = file;
  const reader = new FileReader();
  reader.onload = e => {
    previewImg.src = e.target.result;
    previewMeta.textContent = `${file.name}  ·  ${(file.size / 1024).toFixed(1)} KB  ·  ${file.type}`;
    dropZone.style.display = "none";
    previewBox.style.display = "block";
  };
  reader.readAsDataURL(file);
}

function clearUpload() {
  currentFile = null;
  previewImg.src = "";
  previewMeta.textContent = "";
  dropZone.style.display = "";
  previewBox.style.display = "none";
  emptyState.style.display = "";
  analysisResults.style.display = "none";
  fileInput.value = "";
}

/* ══════════════════════════════════════════════════════════
   ANALYZE BUTTON
══════════════════════════════════════════════════════════ */
analyzeBtn.addEventListener("click", runAnalysis);

async function runAnalysis() {
  if (!currentFile) return;

  // Show loader
  emptyState.style.display = "none";
  analysisResults.style.display = "none";
  loadingOverlay.style.display = "flex";
  analyzeBtn.disabled = true;

  // Animate stages
  const stages = ["stage-yolo", "stage-keras", "stage-opencv", "stage-db"];
  let si = 0;
  const stageAnim = setInterval(() => {
    if (si < stages.length) {
      const el = document.getElementById(stages[si]);
      if (el) el.classList.add("done");
      si++;
    } else {
      clearInterval(stageAnim);
    }
  }, 600);

  const formData = new FormData();
  formData.append("image", currentFile);

  try {
    const response = await fetch("/api/v1/analyze", { method: "POST", body: formData });
    const data = await response.json();
    clearInterval(stageAnim);

    if (data.success) {
      renderResults(data);
    } else {
      alert("Analysis failed: " + (data.error || "Unknown error"));
    }
  } catch (err) {
    alert("Network error: " + err.message);
  } finally {
    loadingOverlay.style.display = "none";
    analyzeBtn.disabled = false;
    // Reset stage dots
    stages.forEach(id => document.getElementById(id)?.classList.remove("done"));
  }
}

/* ══════════════════════════════════════════════════════════
   RENDER RESULTS
══════════════════════════════════════════════════════════ */
function renderResults(data) {
  analysisResults.style.display = "flex";

  const sp = data.species || {};
  currentSpecies = sp.key || null;

  // ── Species hero card ─────────────────────────────────
  document.getElementById("speciesBadge").textContent = getSpeciesEmoji(sp);
  document.getElementById("speciesCommon").textContent = sp.common_name || "Unknown Species";
  document.getElementById("speciesScientific").textContent = sp.scientific_name || "";

  const tagsEl = document.getElementById("speciesTags");
  tagsEl.innerHTML = "";
  if (sp.habitat_type) tagsEl.innerHTML += `<span class="tag">${sp.habitat_type}</span>`;
  if (sp.conservation) {
    const cls = iucnClass(sp.conservation);
    tagsEl.innerHTML += `<span class="tag ${cls}">${sp.conservation}</span>`;
  }
  if (sp.family) tagsEl.innerHTML += `<span class="tag">${sp.family}</span>`;

  // Confidence ring
  const kerasConf  = data.keras?.confidence  || 0;
  const opencvConf = data.opencv?.top_match?.score || 0;
  const displayConf = kerasConf > 0 ? kerasConf : opencvConf;
  drawConfRing(displayConf);
  document.getElementById("confLabel").textContent = Math.round(displayConf) + "%";

  // ── YOLO ──────────────────────────────────────────────
  const yoloEl = document.getElementById("yoloResults");
  if (data.yolo?.detections?.length) {
    yoloEl.innerHTML = data.yolo.detections.map(d =>
      `<div class="detection-item">
         <span class="det-label"><i class="fas fa-crosshairs"></i> ${d.label}</span>
         <span class="det-conf">${d.confidence}%</span>
       </div>`
    ).join("");
  } else {
    const msg = data.yolo?.model_used === "unavailable"
      ? "YOLOv8 model not loaded — using OpenCV analysis."
      : "No objects detected by YOLO.";
    yoloEl.innerHTML = `<p class="no-model-msg">${msg}</p>`;
  }

  // ── Keras ─────────────────────────────────────────────
  const kerasEl = document.getElementById("kerasResults");
  if (data.keras?.predicted_key) {
    const ksp = speciesDB.find(s => s.key === data.keras.predicted_key);
    kerasEl.innerHTML = `
      <div class="detection-item">
        <span class="det-label">${ksp?.common_name || data.keras.predicted_key}</span>
        <span class="det-conf">${data.keras.confidence}%</span>
      </div>`;
  } else {
    kerasEl.innerHTML = `<p class="no-model-msg">${
      data.keras?.model_used === "unavailable"
        ? "MobileNetV2 model not loaded."
        : "No classification result."
    }</p>`;
  }

  // ── Feature radar chart ───────────────────────────────
  renderFeatureChart(data.opencv?.features || {});

  // ── OpenCV overlay ────────────────────────────────────
  if (data.opencv?.overlay_b64) {
    document.getElementById("opencvOverlay").src = "data:image/jpeg;base64," + data.opencv.overlay_b64;
  }

  // ── Match scores ──────────────────────────────────────
  const matchEl = document.getElementById("matchScores");
  const matches = data.opencv?.match_scores || [];
  matchEl.innerHTML = matches.map((m, i) => `
    <div class="match-item" onclick="openSpeciesModal('${m.key}')">
      <div class="match-rank">${i + 1}</div>
      <div class="match-name">${speciesDB.find(s => s.key === m.key)?.common_name || m.common_name}</div>
      <div class="match-bar-wrap"><div class="match-bar" style="width:${m.score}%"></div></div>
      <div class="match-score">${m.score}%</div>
    </div>`).join("");

  // ── Species encyclopedia ───────────────────────────────
  renderSpeciesDetail(sp);

  // ── Map jump button ───────────────────────────────────
  mapJumpBtn.onclick = () => {
    document.getElementById("map-section").scrollIntoView({ behavior: "smooth" });
    if (currentSpecies) highlightSpeciesOnMap(currentSpecies);
  };

  analysisResults.classList.add("fade-in-up");
}

/* ── Confidence ring (tiny canvas arc) ─────────────────── */
function drawConfRing(pct) {
  const canvas = document.getElementById("confRing");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 90, 90);
  const cx = 45, cy = 45, r = 36;

  // Background
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0,229,255,0.1)"; ctx.lineWidth = 6; ctx.stroke();

  // Arc
  const angle = (pct / 100) * Math.PI * 2 - Math.PI / 2;
  ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI / 2, angle);
  const grad = ctx.createLinearGradient(0, 0, 90, 0);
  grad.addColorStop(0, "#00e5ff"); grad.addColorStop(1, "#69f0ae");
  ctx.strokeStyle = grad; ctx.lineWidth = 6;
  ctx.lineCap = "round"; ctx.stroke();
}

/* ── Feature radar chart ────────────────────────────────── */
function renderFeatureChart(features) {
  const labels = ["Body Shape", "Elongation", "Solidity", "Eye Size", "Fin Area", "Colour", "Texture", "Circularity", "Stripe"];
  const keys   = ["aspect_ratio", "elongation", "solidity", "eye_size_ratio", "fin_area_ratio",
                   "colorfulness", "edge_density", "circularity", "stripe_score"];

  const values = keys.map(k => {
    const v = features[k] ?? 0;
    return Math.min(1, Math.max(0, v));
  });

  if (featureChart) featureChart.destroy();
  const ctx = document.getElementById("featureChart").getContext("2d");
  featureChart = new Chart(ctx, {
    type: "radar",
    data: {
      labels,
      datasets: [{
        label: "Feature Profile",
        data: values,
        backgroundColor: "rgba(0,229,255,0.12)",
        borderColor: "#00e5ff",
        pointBackgroundColor: "#00e5ff",
        pointRadius: 4,
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        r: {
          min: 0, max: 1,
          ticks: { color: "#4a6070", backdropColor: "transparent", font: { size: 9 } },
          grid: { color: "rgba(255,255,255,0.06)" },
          angleLines: { color: "rgba(255,255,255,0.08)" },
          pointLabels: { color: "#8baabb", font: { size: 10 } }
        }
      },
      plugins: {
        legend: { display: false }
      },
      responsive: true, maintainAspectRatio: false,
    }
  });
}

/* ── Species detail card ────────────────────────────────── */
function renderSpeciesDetail(sp) {
  const el = document.getElementById("speciesDetail");
  if (!sp || !sp.found) {
    el.innerHTML = `<p class="no-data">No species data available.</p>`;
    return;
  }

  el.innerHTML = `
    <div class="detail-block fade-in-up">
      <h4>Description</h4>
      <p>${sp.description || "—"}</p>
    </div>

    <div class="detail-block fade-in-up">
      <h4>Quick Stats</h4>
      <div class="detail-stat-row">
        <div class="detail-stat">
          <div class="ds-val">${sp.max_length_cm || "?"}cm</div>
          <div class="ds-lbl">Max Length</div>
        </div>
        <div class="detail-stat">
          <div class="ds-val">${sp.max_depth_m || "?"}m</div>
          <div class="ds-lbl">Max Depth</div>
        </div>
        <div class="detail-stat">
          <div class="ds-val" style="font-size:0.8rem">${sp.conservation || "—"}</div>
          <div class="ds-lbl">IUCN</div>
        </div>
      </div>
    </div>

    <div class="detail-block fade-in-up">
      <h4>Taxonomy</h4>
      <p>Order: ${sp.order || "—"}<br>Family: ${sp.family || "—"}<br>Class: ${sp.class || "—"}</p>
    </div>

    <div class="detail-block fade-in-up">
      <h4>Habitat &amp; Diet</h4>
      <p>${sp.habitat_type || "—"}<br>${sp.diet || "—"}</p>
    </div>

    <div class="detail-block fade-in-up" style="grid-column:1/-1">
      <h4>Migration</h4>
      <p>${sp.migration_season || "—"}</p>
    </div>

    <div class="detail-block fade-in-up" style="grid-column:1/-1">
      <h4>Fascinating Facts</h4>
      <ul class="fact-list">
        ${(sp.interesting_facts || []).map(f => `<li>${f}</li>`).join("")}
      </ul>
    </div>
  `;
}

/* ── Utility: species emoji ─────────────────────────────── */
function getSpeciesEmoji(sp) {
  const ht = (sp.habitat_type || "").toLowerCase();
  if (ht.includes("reef") || ht.includes("coral")) return "🪸";
  if (ht.includes("deep") || ht.includes("bathy")) return "🌑";
  if (ht.includes("pelagic")) return "🌊";
  if (ht.includes("demersal")) return "🐟";
  return "🐠";
}

/* ── Utility: IUCN css class ─────────────────────────────── */
function iucnClass(status) {
  const s = (status || "").toLowerCase();
  if (s.includes("critically")) return "danger";
  if (s.includes("endangered")) return "warning";
  if (s.includes("vulnerable")) return "warning";
  if (s.includes("concern")) return "success";
  return "";
}

/* ══════════════════════════════════════════════════════════
   LEAFLET MAP
══════════════════════════════════════════════════════════ */
const TILE_LAYERS = {
  ocean: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
    name: "Ocean"
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles &copy; Esri",
    name: "Satellite"
  },
  dark: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: "&copy; CartoDB",
    name: "Dark"
  },
  osm: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "&copy; OpenStreetMap contributors",
    name: "OSM"
  }
};

let currentTileLayer = null;

function initMap() {
  mapInstance = L.map("oceanMap", {
    center: [10, 70], zoom: 3, zoomControl: true,
    preferCanvas: true,
  });

  currentTileLayer = L.tileLayer(TILE_LAYERS.ocean.url, {
    attribution: TILE_LAYERS.ocean.attribution, maxZoom: 18
  }).addTo(mapInstance);

  // Load species data and build layers
  fetch("/api/v1/map-data")
    .then(r => r.json())
    .then(data => buildMapLayers(data))
    .catch(e => console.error("Map data load failed:", e));
}

function buildMapLayers(species) {
  speciesDB = species; // store globally (reused by analysis panel)

  // Populate species highlight dropdown
  const sel = document.getElementById("speciesHighlight");
  species.forEach(sp => {
    const opt = document.createElement("option");
    opt.value = sp.key;
    opt.textContent = sp.common_name;
    sel.appendChild(opt);
  });

  // Update stats bar
  document.getElementById("mstatSpecies").textContent = species.length;
  document.getElementById("mstatRoutes").textContent = species.filter(s => s.migration_route.length > 1).length;
  document.getElementById("mstatZones").textContent  = species.filter(s => s.habitat_polygon.length > 2).length;
  document.getElementById("mstatThreaten").textContent = species.filter(s =>
    ["Critically Endangered", "Endangered", "Vulnerable"].includes(s.conservation)).length;

  // ── Build all layer groups ─────────────────────────
  const habitatLayer   = L.layerGroup();
  const migrationLayer = L.layerGroup();
  const markerLayer    = L.layerGroup();
  const heatPoints     = [];

  species.forEach(sp => {
    const color = IUCN_COLOR[sp.conservation] || "#00e5ff";

    // -- Habitat polygon --
    if (sp.habitat_polygon && sp.habitat_polygon.length >= 3) {
      const poly = L.polygon(sp.habitat_polygon, {
        color: "#00e5ff", fillColor: "#00e5ff",
        fillOpacity: 0.05, weight: 1, opacity: 0.35, dashArray: "4,6",
      });
      poly.bindTooltip(`<b>${sp.common_name}</b><br>${sp.habitat_type}`, { sticky: true });
      poly.addTo(habitatLayer);
      mapLayers.habitat.push(poly);
    }

    // -- Migration route --
    if (sp.migration_route && sp.migration_route.length >= 2) {
      const line = L.polyline(sp.migration_route, {
        color: sp.color_profile?.primary || "#ff6b35",
        weight: 2.5, opacity: 0.75,
        dashArray: "8,5",
      });

      // Animated pulsing arrows along the route
      const popupHtml = `
        <div class="popup-title">${sp.common_name} Migration</div>
        <div class="popup-sci">${sp.scientific_name}</div>
        <div class="popup-row"><b>Season:</b> ${sp.migration_season}</div>
        <button class="popup-btn" onclick="openSpeciesModal('${sp.key}')">Full Profile</button>`;
      line.bindPopup(popupHtml);
      line.addTo(migrationLayer);
      mapLayers.migration.push(line);
    }

    // -- Species marker --
    const markerColor = IUCN_COLOR[sp.conservation] || "#00e5ff";
    const svgMarker = L.divIcon({
      html: `<div style="
        width:16px; height:16px; border-radius:50%;
        background:${markerColor}; border:2px solid rgba(255,255,255,0.5);
        box-shadow: 0 0 8px ${markerColor}, 0 0 16px ${markerColor}40;
        cursor:pointer;">
      </div>`,
      className: "", iconSize: [16, 16], iconAnchor: [8, 8],
    });

    const marker = L.marker(sp.home_coords, { icon: svgMarker });
    const popupHtml = `
      <div class="popup-title">${sp.common_name}</div>
      <div class="popup-sci">${sp.scientific_name}</div>
      <div class="popup-row"><b>Habitat:</b> ${sp.habitat_type}</div>
      <div class="popup-row"><b>Max depth:</b> ${sp.max_depth_m} m</div>
      <div class="popup-row"><b>IUCN:</b> ${sp.conservation}</div>
      <div class="popup-row"><b>Max size:</b> ${sp.max_length_cm} cm</div>
      <button class="popup-btn" onclick="openSpeciesModal('${sp.key}')">View Full Profile</button>`;
    marker.bindPopup(popupHtml, { maxWidth: 240 });
    marker.addTo(markerLayer);
    mapLayers.markers.push(marker);

    // Heat points
    heatPoints.push([sp.home_coords[0], sp.home_coords[1], 0.7]);
  });

  // Add depth zone overlays
  addDepthZones();

  habitatLayer.addTo(mapInstance);
  migrationLayer.addTo(mapInstance);
  markerLayer.addTo(mapInstance);

  // Store layer groups
  mapLayers.habitatGroup   = habitatLayer;
  mapLayers.migrationGroup = migrationLayer;
  mapLayers.markerGroup    = markerLayer;
  mapLayers.heatData       = heatPoints;

  // Build species grid now that we have the data
  buildSpeciesGrid();

  // ── Wire up controls ──────────────────────────────
  document.getElementById("layerHabitat").addEventListener("change", e => {
    e.target.checked ? mapInstance.addLayer(habitatLayer) : mapInstance.removeLayer(habitatLayer);
  });
  document.getElementById("layerMigration").addEventListener("change", e => {
    e.target.checked ? mapInstance.addLayer(migrationLayer) : mapInstance.removeLayer(migrationLayer);
  });
  document.getElementById("layerMarkers").addEventListener("change", e => {
    e.target.checked ? mapInstance.addLayer(markerLayer) : mapInstance.removeLayer(markerLayer);
  });
  document.getElementById("layerHeatmap").addEventListener("change", e => {
    if (e.target.checked) {
      mapLayers.heatLayer = L.heatLayer(heatPoints, {
        radius: 45, blur: 30, maxZoom: 6,
        gradient: { 0.4: "#001eff", 0.65: "#00e5ff", 1: "#ff6b35" }
      }).addTo(mapInstance);
    } else {
      if (mapLayers.heatLayer) mapInstance.removeLayer(mapLayers.heatLayer);
    }
  });
  document.getElementById("layerDepth").addEventListener("change", e => {
    mapLayers.depthLayers.forEach(l =>
      e.target.checked ? mapInstance.addLayer(l) : mapInstance.removeLayer(l));
  });
}

/* ── Ocean depth zone rectangles ─────────────────────────── */
function addDepthZones() {
  mapLayers.depthLayers = [];

  const zones = [
    { bounds: [[-90,-180],[90,180]], color: "#001eff", opacity: 0.03, label: "Abyssal > 4000m" },
    { bounds: [[-60,-180],[60,180]], color: "#0055ff", opacity: 0.03, label: "Bathyal 1000–4000m" },
    { bounds: [[-45,-180],[45,180]], color: "#0099ff", opacity: 0.03, label: "Mesopelagic 200–1000m" },
  ];

  zones.forEach(z => {
    const layer = L.rectangle(z.bounds, {
      color: z.color, fillColor: z.color, fillOpacity: z.opacity, weight: 0
    });
    mapLayers.depthLayers.push(layer);
  });
}

/* ── Change map style ────────────────────────────────────── */
document.getElementById("mapStyleSel").addEventListener("change", e => {
  const style = e.target.value;
  if (currentTileLayer) mapInstance.removeLayer(currentTileLayer);
  const cfg = TILE_LAYERS[style] || TILE_LAYERS.ocean;
  currentTileLayer = L.tileLayer(cfg.url, { attribution: cfg.attribution, maxZoom: 18 }).addTo(mapInstance);
});

/* ── Filter by conservation ──────────────────────────────── */
document.getElementById("conservFilter").addEventListener("change", e => {
  const val = e.target.value;
  rebuildMarkers(val, document.getElementById("speciesHighlight").value);
});

/* ── Highlight species ───────────────────────────────────── */
document.getElementById("speciesHighlight").addEventListener("change", e => {
  rebuildMarkers(document.getElementById("conservFilter").value, e.target.value);
});

function rebuildMarkers(conservFilter, speciesKey) {
  if (!mapLayers.markerGroup) return;
  mapLayers.markerGroup.clearLayers();
  mapLayers.migrationGroup.clearLayers();

  speciesDB.forEach(sp => {
    if (conservFilter !== "all" && conservFilter !== "" && sp.conservation !== conservFilter) return;
    if (speciesKey && sp.key !== speciesKey) return;

    const color = IUCN_COLOR[sp.conservation] || "#00e5ff";
    const size = speciesKey && sp.key === speciesKey ? 22 : 14;
    const svgMarker = L.divIcon({
      html: `<div style="width:${size}px;height:${size}px;border-radius:50%;
        background:${color};border:2px solid rgba(255,255,255,0.6);
        box-shadow:0 0 10px ${color};">
      </div>`,
      className: "", iconSize: [size, size], iconAnchor: [size/2, size/2],
    });
    const m = L.marker(sp.home_coords, { icon: svgMarker });
    m.bindPopup(`<div class="popup-title">${sp.common_name}</div>
      <div class="popup-sci">${sp.scientific_name}</div>
      <div class="popup-row"><b>Status:</b> ${sp.conservation}</div>
      <button class="popup-btn" onclick="openSpeciesModal('${sp.key}')">Full Profile</button>`,
      { maxWidth: 240 });
    m.addTo(mapLayers.markerGroup);

    // Re-add migration route for this species
    if (sp.migration_route?.length >= 2) {
      L.polyline(sp.migration_route, {
        color: sp.color_profile?.primary || "#ff6b35",
        weight: speciesKey ? 4 : 2, opacity: 0.8, dashArray: "8,5"
      }).addTo(mapLayers.migrationGroup);
    }
  });

  if (speciesKey) {
    const sp = speciesDB.find(s => s.key === speciesKey);
    if (sp?.home_coords) mapInstance.flyTo(sp.home_coords, 5, { duration: 1.2 });
  }
}

/* ── Reset map ───────────────────────────────────────────── */
document.getElementById("resetMapBtn").addEventListener("click", () => {
  mapInstance.flyTo([10, 70], 3, { duration: 1 });
  document.getElementById("speciesHighlight").value = "";
  document.getElementById("conservFilter").value = "all";
  rebuildMarkers("all", "");
});

/* ── Animate migration (highlight routes one at a time) ──── */
document.getElementById("animateMigBtn").addEventListener("click", () => {
  if (animInterval) {
    clearInterval(animInterval);
    animInterval = null;
    document.getElementById("animateMigBtn").innerHTML = '<i class="fas fa-play"></i> Animate Migration';
    rebuildMarkers("all", "");
    return;
  }
  document.getElementById("animateMigBtn").innerHTML = '<i class="fas fa-stop"></i> Stop';
  let idx = 0;
  const keys = speciesDB.map(s => s.key);
  animInterval = setInterval(() => {
    if (idx >= keys.length) idx = 0;
    rebuildMarkers("all", keys[idx]);
    idx++;
  }, 2500);
});

/* ── Highlight species on map (called from analysis panel) ── */
function highlightSpeciesOnMap(key) {
  document.getElementById("speciesHighlight").value = key;
  rebuildMarkers("all", key);
}

/* ══════════════════════════════════════════════════════════
   SPECIES DATABASE BROWSER
══════════════════════════════════════════════════════════ */
function buildSpeciesGrid(filterText = "", filterHabitat = "") {
  const grid = document.getElementById("speciesGrid");
  grid.innerHTML = "";

  const ft = filterText.toLowerCase();
  const fh = filterHabitat.toLowerCase();

  const filtered = speciesDB.filter(sp => {
    const textMatch = !ft ||
      sp.common_name.toLowerCase().includes(ft) ||
      sp.scientific_name.toLowerCase().includes(ft) ||
      (sp.family || "").toLowerCase().includes(ft) ||
      (sp.habitat_type || "").toLowerCase().includes(ft);

    const habMatch = !fh ||
      (sp.habitat_type || "").toLowerCase().includes(fh);

    return textMatch && habMatch;
  });

  if (!filtered.length) {
    grid.innerHTML = `<p class="no-data" style="grid-column:1/-1">No species found.</p>`;
    return;
  }

  filtered.forEach(sp => {
    const color = IUCN_COLOR[sp.conservation] || "#00e5ff";
    const iucnCls = `iucn-${sp.conservation?.split(" ").pop().slice(0,2).toLowerCase() || "lc"}`;
    const card = document.createElement("div");
    card.className = "species-card";
    card.innerHTML = `
      <div class="sc-header" style="background:linear-gradient(90deg,${color}44,${color}11)"></div>
      <div class="sc-body">
        <div class="sc-icon">${getSpeciesEmoji(sp)}</div>
        <div class="sc-common">${sp.common_name}</div>
        <div class="sc-sci">${sp.scientific_name}</div>
        <div class="sc-tags">
          <span class="tag">${sp.family || sp.habitat_type || "—"}</span>
          ${sp.native_oceans?.[0] ? `<span class="tag">${sp.native_oceans[0]}</span>` : ""}
        </div>
        <div class="sc-depth"><i class="fas fa-water"></i> ${sp.min_depth_m || 0}–${sp.max_depth_m || "?"}m depth</div>
      </div>
      <div class="sc-footer">
        <span class="${iucnCls} sc-iucn">${sp.conservation || "Unknown"}</span>
        <span style="font-size:0.75rem;color:var(--text-muted)">${sp.max_length_cm || "?"}cm max</span>
      </div>`;
    card.addEventListener("click", () => openSpeciesModal(sp.key));
    grid.appendChild(card);
  });
}

document.getElementById("speciesSearch").addEventListener("input", e => {
  buildSpeciesGrid(e.target.value, document.getElementById("habitatFilter").value);
});
document.getElementById("habitatFilter").addEventListener("change", e => {
  buildSpeciesGrid(document.getElementById("speciesSearch").value, e.target.value);
});

/* ══════════════════════════════════════════════════════════
   SPECIES MODAL
══════════════════════════════════════════════════════════ */
function openSpeciesModal(key) {
  const sp = speciesDB.find(s => s.key === key);
  if (!sp) return;

  const color = IUCN_COLOR[sp.conservation] || "#00e5ff";
  const modal = document.getElementById("speciesModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <div style="background:linear-gradient(135deg,${color}22,transparent);padding:2rem 2rem 0;">
      <div style="font-size:3rem;margin-bottom:0.5rem">${getSpeciesEmoji(sp)}</div>
      <h2 style="font-family:'Rajdhani',sans-serif;font-size:1.6rem;color:var(--text-primary)">${sp.common_name}</h2>
      <p style="font-style:italic;color:var(--text-secondary);margin-bottom:0.75rem">${sp.scientific_name}</p>
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:1rem">
        <span class="tag">${sp.habitat_type}</span>
        <span class="tag">${sp.family || sp.order}</span>
        <span class="tag ${iucnClass(sp.conservation)}">${sp.conservation}</span>
      </div>
    </div>
    <div style="padding:1.5rem;display:grid;grid-template-columns:1fr 1fr;gap:1.2rem">
      <div class="detail-block">
        <h4>Description</h4>
        <p>${sp.description || "—"}</p>
      </div>
      <div class="detail-block">
        <h4>Biology</h4>
        <p>Max length: <b>${sp.max_length_cm} cm</b><br>
           Depth range: <b>${sp.min_depth_m}–${sp.max_depth_m} m</b><br>
           Diet: ${sp.diet}<br>
           Class: ${sp.class}</p>
      </div>
      <div class="detail-block" style="grid-column:1/-1">
        <h4>Migration</h4>
        <p>${sp.migration_season}</p>
      </div>
      <div class="detail-block" style="grid-column:1/-1">
        <h4>Fascinating Facts</h4>
        <ul class="fact-list">
          ${(sp.interesting_facts || []).map(f => `<li>${f}</li>`).join("")}
        </ul>
      </div>
    </div>
    <div style="padding:0 1.5rem 1.5rem;display:flex;gap:0.75rem;flex-wrap:wrap">
      <button class="ctrl-btn" onclick="highlightSpeciesOnMap('${sp.key}');document.getElementById('map-section').scrollIntoView({behavior:'smooth'});document.getElementById('speciesModal').style.display='none'">
        <i class="fas fa-map-marked-alt"></i> Show on Map
      </button>
    </div>`;

  modal.style.display = "flex";
}

document.getElementById("modalClose").addEventListener("click", () => {
  document.getElementById("speciesModal").style.display = "none";
});
document.getElementById("speciesModal").addEventListener("click", e => {
  if (e.target === document.getElementById("speciesModal"))
    document.getElementById("speciesModal").style.display = "none";
});

/* ══════════════════════════════════════════════════════════
   APP LOADING SCREEN
   Polls /api/v1/ready every second while the backend loads
   Keras + YOLO in its background thread.  Once models_ready
   is true (or the user clicks Skip), the overlay fades out
   and the main app initialises.
══════════════════════════════════════════════════════════ */

const LOADER_STEPS = ["fish_db", "keras", "yolo", "map"];

// How many "steps" count as done at each stage (for the progress bar)
const STEP_WEIGHT = { fish_db: 10, keras: 40, yolo: 35, map: 15 };

// State icons per step state
const STEP_ICON = {
  waiting:     "fas fa-circle",
  loading:     "fas fa-circle-notch fa-spin",
  ready:       "fas fa-check-circle",
  missing:     "fas fa-exclamation-circle",
  unavailable: "fas fa-minus-circle",
  error:       "fas fa-times-circle",
};

// Badge text per state
const STEP_BADGE_TEXT = {
  waiting:     "–",
  loading:     "…",
  ready:       "✓",
  missing:     "n/a",
  unavailable: "n/a",
  error:       "err",
};

let _loaderDone   = false;
let _pollInterval = null;

function setStepState(key, state, elapsedMs = 0) {
  const el = document.getElementById(`alStep-${key}`);
  if (!el) return;

  // Remove all state classes, add the new one
  LOADER_STEPS.concat(["map"]).forEach(k => {
    el.classList.remove(`al-step--${k}`);
  });
  el.classList.remove(
    "al-step--waiting", "al-step--loading", "al-step--ready",
    "al-step--missing", "al-step--unavailable", "al-step--error"
  );
  el.classList.add(`al-step--${state}`);

  // Icon
  const iconEl = el.querySelector(".al-step-icon i");
  if (iconEl) {
    iconEl.className = STEP_ICON[state] || "fas fa-circle";
  }

  // Badge
  const badgeEl = el.querySelector(".al-step-badge");
  if (badgeEl) {
    badgeEl.textContent = elapsedMs > 0
      ? `${(elapsedMs / 1000).toFixed(1)}s`
      : STEP_BADGE_TEXT[state] || "–";
  }
}

function setLoaderProgress(pct, msg) {
  const fill  = document.getElementById("alProgressFill");
  const pctEl = document.getElementById("alProgressPct");
  const bar   = document.getElementById("alProgressBar");
  const msgEl = document.getElementById("alStatusMsg");

  if (fill)  fill.style.width = `${Math.min(100, pct)}%`;
  if (pctEl) pctEl.textContent = `${Math.round(pct)}%`;
  if (bar)   bar.setAttribute("aria-valuenow", Math.round(pct));
  if (msg && msgEl) msgEl.textContent = msg;
}

function dismissLoader() {
  if (_loaderDone) return;
  _loaderDone = true;
  if (_pollInterval) { clearInterval(_pollInterval); _pollInterval = null; }

  const loader = document.getElementById("appLoader");
  if (loader) {
    loader.classList.add("al-fade-out");
    // Remove from DOM after transition ends so it doesn't block clicks
    loader.addEventListener("transitionend", () => loader.remove(), { once: true });
  }
}

async function pollReady() {
  try {
    const r = await fetch("/api/v1/ready");
    if (!r.ok) return;
    const d = await r.json();

    // ── Update each step from backend data ──────────────
    let progressPct = 0;

    (d.steps || []).forEach(step => {
      setStepState(step.key, step.state, step.elapsed_ms || 0);
      if (step.state === "ready" || step.state === "missing" || step.state === "unavailable") {
        progressPct += STEP_WEIGHT[step.key] || 0;
      } else if (step.state === "loading") {
        progressPct += (STEP_WEIGHT[step.key] || 0) * 0.3; // partial credit
      }
    });

    // fish_db is always the first step — mark loading if not yet in steps
    const hasFishDb = (d.steps || []).some(s => s.key === "fish_db");
    if (!hasFishDb && d.light_data_ready) {
      setStepState("fish_db", "ready");
      progressPct += STEP_WEIGHT["fish_db"];
    }

    // ── Status message ───────────────────────────────────
    let msg = "Loading AI models…";
    if (d.models_ready) {
      msg = d.keras_ready || d.yolo_ready
        ? "Models loaded — preparing interface…"
        : "Models unavailable — running in fallback mode.";
    } else if (d.light_data_ready) {
      msg = "Fish database ready. Loading neural networks…";
    }
    setLoaderProgress(progressPct, msg);

    // ── Show skip button after 4 s if fish DB is ready ──
    if (d.light_data_ready) {
      const skipBtn = document.getElementById("alSkipBtn");
      if (skipBtn) skipBtn.style.display = "inline-flex";
    }

    // ── Done? ─────────────────────────────────────────
    if (d.models_ready) {
      // Mark map step as loading (we're about to fetch it)
      setStepState("map", "loading");
      setLoaderProgress(90, "Fetching ocean map data…");

      // Give a brief moment for the UI to update, then init
      await new Promise(res => setTimeout(res, 300));
      await bootApp();
      setStepState("map", "ready");
      setLoaderProgress(100, "Ready!");
      await new Promise(res => setTimeout(res, 500));
      dismissLoader();
    }
  } catch (e) {
    // Network error — silently retry
    console.warn("Readiness poll failed:", e);
  }
}

async function bootApp() {
  await initSystem();
  initMap();
  // Species grid is built after map data arrives (inside buildMapLayers)
}

/* ══════════════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════════════ */
window.addEventListener("DOMContentLoaded", () => {
  // Wire skip button
  const skipBtn = document.getElementById("alSkipBtn");
  if (skipBtn) {
    skipBtn.addEventListener("click", async () => {
      setLoaderProgress(90, "Entering app…");
      await bootApp();
      dismissLoader();
    });
  }

  // Start polling immediately, then every 1.2 s
  pollReady();
  _pollInterval = setInterval(pollReady, 1200);
});

// Expose for onclick handlers in HTML
window.openSpeciesModal = openSpeciesModal;
window.highlightSpeciesOnMap = highlightSpeciesOnMap;
