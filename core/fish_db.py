"""
fish_db.py – Comprehensive Fish Species & Migration Database
============================================================
Covers Indian Ocean species drawn from the CMLRE otolith dataset
plus globally iconic species used for ML demonstration.

Each entry contains:
  - Taxonomy & identifiers
  - Physical characteristics
  - Habitat polygon / representative coordinate
  - Depth range
  - Migration route waypoints  [lat, lng]
  - Conservation status (IUCN)
  - Ecological notes
  - OpenCV feature fingerprint hints (for scoring)
"""

from typing import Dict, Any, List

# ─────────────────────────────────────────────────────────────
#  Species Registry
# ─────────────────────────────────────────────────────────────
FISH_DATABASE: Dict[str, Dict[str, Any]] = {

    # ── Indian Ocean Deep-Sea Species (from CMLRE data) ───────

    "alepocephalus_bicolor": {
        "common_name":    "Bicolour Slickhead",
        "scientific_name": "Alepocephalus bicolor",
        "family":         "Alepocephalidae",
        "order":          "Alepocephaliformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern",
        "max_length_cm":  60,
        "max_depth_m":    1200,
        "min_depth_m":    400,
        "habitat_type":   "Bathypelagic",
        "diet":           "Crustaceans, small fish",
        "description":    "A deep-sea slickhead found in Indian Ocean waters. Characterised by its large head relative to body size and dark colouration with lighter underbelly.",
        "native_oceans":  ["Indian Ocean", "Arabian Sea"],
        "home_coords":    [11.165, 92.318],
        "habitat_polygon": [
            [8.0, 76.0], [8.0, 95.0], [15.0, 95.0], [15.0, 76.0]
        ],
        "migration_route": [
            [11.165, 92.318], [9.5, 88.0], [8.0, 82.0], [6.0, 76.0]
        ],
        "migration_season": "November – March (vertical diel migration)",
        "interesting_facts": [
            "Capable of vertical migrations of 400 m each night",
            "Collected by research vessel Sagar Sampada at 576 m depth",
            "Otolith (ear stone) used for age estimation in oceanographic studies"
        ],
        "color_profile":  {"primary": "#1a1a2e", "secondary": "#e8e8e8"},
        "feature_hints":  {"aspect_ratio": (2.5, 3.5), "elongation": (3.0, 4.0), "h_mean": (0.0, 0.1)},
    },

    "alepocephalus_blanfordii": {
        "common_name":    "Blanford's Slickhead",
        "scientific_name": "Alepocephalus blanfordii",
        "family":         "Alepocephalidae",
        "order":          "Alepocephaliformes",
        "class":          "Actinopterygii",
        "conservation":   "Data Deficient",
        "max_length_cm":  45,
        "max_depth_m":    1100,
        "min_depth_m":    600,
        "habitat_type":   "Bathypelagic",
        "diet":           "Zooplankton, small invertebrates",
        "description":    "Rare deep-sea species recorded off Trivandrum coast. Named after British naturalist W.T. Blanford.",
        "native_oceans":  ["Indian Ocean"],
        "home_coords":    [8.333, 76.175],
        "habitat_polygon": [[6.0, 73.0], [6.0, 80.0], [11.0, 80.0], [11.0, 73.0]],
        "migration_route": [[8.333, 76.175], [7.0, 74.0], [5.5, 72.0]],
        "migration_season": "Year-round at depth",
        "interesting_facts": [
            "Collected at 949 m depth off Trivandrum",
            "Very little is known about this species' biology",
            "Indicator species for deep-sea ecosystem health"
        ],
        "color_profile":  {"primary": "#0d1b2a", "secondary": "#c8c8c8"},
        "feature_hints":  {"aspect_ratio": (2.0, 3.0), "elongation": (2.5, 3.5), "v_mean": (0.1, 0.3)},
    },

    "atrobucca_nibe": {
        "common_name":    "Black Drum / Nibe Croaker",
        "scientific_name": "Atrobucca nibe",
        "family":         "Sciaenidae",
        "order":          "Perciformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern",
        "max_length_cm":  55,
        "max_depth_m":    300,
        "min_depth_m":    50,
        "habitat_type":   "Demersal",
        "diet":           "Small fish, crustaceans, molluscs",
        "description":    "A croaker found in the Indo-Pacific. Produces distinctive drumming sounds using its swim bladder. Important commercial species.",
        "native_oceans":  ["Indian Ocean", "Arabian Sea", "Bay of Bengal"],
        "home_coords":    [20.316, 69.387],
        "habitat_polygon": [[15.0, 65.0], [15.0, 75.0], [25.0, 75.0], [25.0, 65.0]],
        "migration_route": [
            [20.316, 69.387], [18.0, 68.0], [15.0, 67.0], [12.0, 68.0], [10.0, 70.0]
        ],
        "migration_season": "Monsoon breeding migration: June – September",
        "interesting_facts": [
            "Can produce audible sounds using its swim bladder",
            "Collected off Gujarat coast at 247 m depth",
            "Otoliths show clear annual growth rings — used for age determination",
            "Important commercial fish in Arabian Sea fisheries"
        ],
        "color_profile":  {"primary": "#2d4a22", "secondary": "#8b7355"},
        "feature_hints":  {"aspect_ratio": (2.8, 3.8), "elongation": (3.2, 4.2), "h_mean": (0.2, 0.4)},
    },

    "beryx_splendens": {
        "common_name":    "Splendid Alfonsino",
        "scientific_name": "Beryx splendens",
        "family":         "Berycidae",
        "order":          "Beryciformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern",
        "max_length_cm":  70,
        "max_depth_m":    800,
        "min_depth_m":    25,
        "habitat_type":   "Bathypelagic / Seamount-associated",
        "diet":           "Fish, crustaceans, squid",
        "description":    "Brilliant red deep-water fish associated with seamounts and rocky slopes. Highly valued commercially in Japan and Europe.",
        "native_oceans":  ["Indian Ocean", "Atlantic", "Pacific"],
        "home_coords":    [9.483, 75.706],
        "habitat_polygon": [[5.0, 72.0], [5.0, 82.0], [14.0, 82.0], [14.0, 72.0]],
        "migration_route": [
            [9.483, 75.706], [5.0, 72.0], [0.0, 70.0], [-5.0, 68.0], [-10.0, 65.0]
        ],
        "migration_season": "Follows seamount chains; seasonal depth migrations",
        "interesting_facts": [
            "Brilliant crimson-red colouration",
            "Long-lived — can reach 30+ years",
            "Associated with underwater seamounts and ridges",
            "Collected off Allapuzha at 327 m depth"
        ],
        "color_profile":  {"primary": "#8b0000", "secondary": "#ff4444"},
        "feature_hints":  {"h_mean": (0.0, 0.07), "s_mean": (0.6, 0.9), "v_mean": (0.5, 0.8)},
    },

    # ── Globally Iconic / Commercially Important ───────────────

    "clownfish": {
        "common_name":    "Clownfish / Ocellaris Clownfish",
        "scientific_name": "Amphiprion ocellaris",
        "family":         "Pomacentridae",
        "order":          "Perciformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern",
        "max_length_cm":  11,
        "max_depth_m":    15,
        "min_depth_m":    1,
        "habitat_type":   "Coral reef — symbiotic with sea anemones",
        "diet":           "Algae, zooplankton, anemone leftovers",
        "description":    "The iconic orange-and-white reef fish made famous worldwide. Lives in a symbiotic relationship with sea anemones, gaining protection while the fish provides nutrients and keeps parasites away.",
        "native_oceans":  ["Indian Ocean", "Pacific Ocean", "Coral Triangle"],
        "home_coords":    [4.5, 114.0],
        "habitat_polygon": [
            [-5.0, 100.0], [-5.0, 135.0], [15.0, 135.0], [15.0, 100.0]
        ],
        "migration_route": [
            [4.5, 114.0], [3.0, 110.0], [1.0, 105.0], [-2.0, 102.0]
        ],
        "migration_season": "Non-migratory — highly territorial around host anemone",
        "interesting_facts": [
            "All clownfish are born male; dominant individual becomes female",
            "Immune to sea anemone stings due to mucus coating",
            "Featured in the movie 'Finding Nemo'",
            "Communicates via popping and clicking sounds",
            "Can live 6–10 years in the wild"
        ],
        "color_profile":  {"primary": "#ff6600", "secondary": "#ffffff"},
        "feature_hints":  {"h_mean": (0.04, 0.1), "s_mean": (0.7, 0.95), "stripe_score": (0.4, 0.8)},
    },

    "bluefin_tuna": {
        "common_name":    "Atlantic Bluefin Tuna",
        "scientific_name": "Thunnus thynnus",
        "family":         "Scombridae",
        "order":          "Scombriformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern (recovering)",
        "max_length_cm":  300,
        "max_depth_m":    985,
        "min_depth_m":    0,
        "habitat_type":   "Epipelagic / Mesopelagic — open ocean",
        "diet":           "Fish (herring, mackerel), squid, crustaceans",
        "description":    "One of the ocean's apex predators and fastest fish. Warm-blooded, capable of maintaining body temperature above ambient. Subject of intense conservation pressure due to overfishing.",
        "native_oceans":  ["Atlantic Ocean", "Mediterranean Sea"],
        "home_coords":    [25.0, -30.0],
        "habitat_polygon": [
            [60.0, -80.0], [60.0, 40.0], [0.0, 40.0], [0.0, -80.0]
        ],
        "migration_route": [
            [25.0, -80.0], [30.0, -60.0], [35.0, -40.0], [40.0, -20.0],
            [38.0, 10.0], [36.0, 15.0], [35.0, 25.0]
        ],
        "migration_season": "Transatlantic: spring spawning migration to Mediterranean/Gulf of Mexico",
        "interesting_facts": [
            "Can swim at speeds exceeding 70 km/h",
            "Warm-blooded — maintains body temp 10°C above ocean",
            "Single fish can fetch over $1 million at Tsukiji market",
            "Migrates across entire Atlantic Ocean each year",
            "Can live to 40 years"
        ],
        "color_profile":  {"primary": "#1e3a5f", "secondary": "#4a9eca"},
        "feature_hints":  {"aspect_ratio": (3.5, 5.0), "elongation": (4.0, 6.0), "fin_protrusion": (0.1, 0.25)},
    },

    "great_white_shark": {
        "common_name":    "Great White Shark",
        "scientific_name": "Carcharodon carcharias",
        "family":         "Lamnidae",
        "order":          "Lamniformes",
        "class":          "Chondrichthyes",
        "conservation":   "Vulnerable",
        "max_length_cm":  640,
        "max_depth_m":    1200,
        "min_depth_m":    0,
        "habitat_type":   "Coastal and offshore — epipelagic to mesopelagic",
        "diet":           "Marine mammals, fish, sea turtles",
        "description":    "The ocean's most iconic apex predator. Critically important for maintaining healthy marine ecosystems. Far fewer attacks on humans than portrayed in media.",
        "native_oceans":  ["All major oceans"],
        "home_coords":    [-34.0, 18.5],
        "habitat_polygon": [
            [-50.0, -120.0], [-50.0, 160.0], [50.0, 160.0], [50.0, -120.0]
        ],
        "migration_route": [
            [-34.0, 18.5], [-20.0, 20.0], [0.0, 15.0], [15.0, 10.0],
            [20.0, -30.0], [15.0, -60.0], [5.0, -70.0]
        ],
        "migration_season": "Annual migrations following prey — some travel 20,000+ km",
        "interesting_facts": [
            "Can detect blood at 1 part per million in water",
            "Has electroreceptors called ampullae of Lorenzini",
            "Can jump completely out of the water (breaching)",
            "Teeth replaced continuously — 20,000+ in a lifetime",
            "Estimated only 3,500 remain globally"
        ],
        "color_profile":  {"primary": "#708090", "secondary": "#f0f0f0"},
        "feature_hints":  {"aspect_ratio": (3.0, 4.5), "fin_protrusion": (0.3, 0.5), "h_mean": (0.0, 0.15)},
    },

    "manta_ray": {
        "common_name":    "Giant Oceanic Manta Ray",
        "scientific_name": "Mobula birostris",
        "family":         "Mobulidae",
        "order":          "Myliobatiformes",
        "class":          "Chondrichthyes",
        "conservation":   "Endangered",
        "max_length_cm":  700,
        "max_depth_m":    1000,
        "min_depth_m":    0,
        "habitat_type":   "Pelagic — open ocean and productive coastal areas",
        "diet":           "Zooplankton, krill, small fish",
        "description":    "Largest ray in the ocean. Despite their massive wingspan (up to 7 m), they feed exclusively on tiny plankton. Intelligence rivals that of dolphins and great apes.",
        "native_oceans":  ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean"],
        "home_coords":    [5.0, 73.0],
        "habitat_polygon": [
            [-30.0, 40.0], [-30.0, 120.0], [30.0, 120.0], [30.0, 40.0]
        ],
        "migration_route": [
            [5.0, 73.0], [8.0, 68.0], [12.0, 60.0], [15.0, 55.0],
            [10.0, 50.0], [5.0, 45.0], [0.0, 42.0]
        ],
        "migration_season": "Follows productive upwelling zones; moves with ITCZ seasonally",
        "interesting_facts": [
            "Largest brain-to-body ratio of any fish",
            "Can recognise themselves in mirrors",
            "Leap entirely out of water — possibly for communication",
            "Give birth to fully-formed live young (viviparous)",
            "Cleaning stations where mantas queue for parasite removal"
        ],
        "color_profile":  {"primary": "#2c3e50", "secondary": "#ecf0f1"},
        "feature_hints":  {"aspect_ratio": (0.3, 0.8), "elongation": (0.5, 1.2), "fin_protrusion": (0.6, 0.9)},
    },

    "sea_horse": {
        "common_name":    "Lined Seahorse",
        "scientific_name": "Hippocampus erectus",
        "family":         "Syngnathidae",
        "order":          "Syngnathiformes",
        "class":          "Actinopterygii",
        "conservation":   "Vulnerable",
        "max_length_cm":  19,
        "max_depth_m":    70,
        "min_depth_m":    1,
        "habitat_type":   "Seagrass beds, coral reefs, mangroves",
        "diet":           "Copepods, amphipods, small shrimp",
        "description":    "Among the most unique fish on Earth. The only animal where males carry and birth young. Relies on camouflage rather than speed — moves using a tiny dorsal fin.",
        "native_oceans":  ["Atlantic Ocean", "Caribbean Sea"],
        "home_coords":    [25.0, -80.0],
        "habitat_polygon": [[15.0, -100.0], [15.0, -60.0], [40.0, -60.0], [40.0, -100.0]],
        "migration_route": [[25.0, -80.0], [24.0, -78.0], [23.0, -76.0]],
        "migration_season": "Non-migratory; small daily movements between feeding areas",
        "interesting_facts": [
            "Only species where males get pregnant and give birth",
            "Uses dorsal fin beating 35 times/sec to move",
            "Mates for life — reunite each morning to reaffirm bond",
            "No stomach — must eat almost constantly to survive",
            "Eyes move independently like a chameleon"
        ],
        "color_profile":  {"primary": "#8b6914", "secondary": "#d4a017"},
        "feature_hints":  {"aspect_ratio": (0.4, 0.9), "circularity": (0.3, 0.6), "elongation": (1.5, 2.5)},
    },

    "anglerfish": {
        "common_name":    "Deep-Sea Anglerfish",
        "scientific_name": "Melanocetus johnsonii",
        "family":         "Melanocetidae",
        "order":          "Lophiiformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern",
        "max_length_cm":  20,
        "max_depth_m":    4000,
        "min_depth_m":    200,
        "habitat_type":   "Bathypelagic — midnight zone",
        "diet":           "Any prey it can catch — ambush predator",
        "description":    "Master of the deep abyss. Uses a bioluminescent lure (esca) evolved from its dorsal spine to attract prey in absolute darkness. Female is 10x larger than the tiny parasitic male.",
        "native_oceans":  ["All deep oceans"],
        "home_coords":    [0.0, -30.0],
        "habitat_polygon": [
            [-60.0, -180.0], [-60.0, 180.0], [60.0, 180.0], [60.0, -180.0]
        ],
        "migration_route": [[0.0, -30.0], [5.0, -35.0], [10.0, -40.0]],
        "migration_season": "Vertical diel migrations between 200 m and 1000 m",
        "interesting_facts": [
            "The lure glows from bioluminescent bacteria",
            "Males permanently fuse to females and become parasites",
            "Jaws can open wide enough to swallow prey twice its size",
            "Never seen alive in its natural habitat until 2021 footage",
            "Female can carry up to 6 males fused to her body"
        ],
        "color_profile":  {"primary": "#0a0a0a", "secondary": "#001eff"},
        "feature_hints":  {"v_mean": (0.05, 0.2), "circularity": (0.4, 0.7), "jaw_protrusion": (0.7, 0.95)},
    },

    "sailfish": {
        "common_name":    "Indo-Pacific Sailfish",
        "scientific_name": "Istiophorus platypterus",
        "family":         "Istiophoridae",
        "order":          "Istiophoriformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern",
        "max_length_cm":  340,
        "max_depth_m":    350,
        "min_depth_m":    0,
        "habitat_type":   "Epipelagic — open ocean surface waters",
        "diet":           "Fish (sardines, mackerel), squid, octopus",
        "description":    "The fastest fish in the ocean, capable of bursts up to 110 km/h. The enormous cobalt-blue dorsal sail can be raised for communication, thermoregulation, or herding prey.",
        "native_oceans":  ["Indian Ocean", "Pacific Ocean"],
        "home_coords":    [10.0, 80.0],
        "habitat_polygon": [
            [-20.0, 60.0], [-20.0, 130.0], [35.0, 130.0], [35.0, 60.0]
        ],
        "migration_route": [
            [10.0, 80.0], [8.0, 75.0], [5.0, 68.0], [2.0, 60.0],
            [-2.0, 55.0], [-5.0, 50.0]
        ],
        "migration_season": "Follows warm surface currents; spawns in Indian Ocean summer",
        "interesting_facts": [
            "Fastest fish in the ocean — documented at 110 km/h",
            "Bill used as a weapon to slash through baitfish schools",
            "Sail changes colour when excited — electric blue to dark purple",
            "Can change colour patterns within milliseconds",
            "Hunts cooperatively in small groups"
        ],
        "color_profile":  {"primary": "#1a3a5c", "secondary": "#4fc3f7"},
        "feature_hints":  {"aspect_ratio": (4.0, 6.0), "elongation": (5.0, 8.0), "dorsal_fin_height": (0.5, 0.9)},
    },

    "mandarin_fish": {
        "common_name":    "Mandarin Fish / Mandarinfish",
        "scientific_name": "Synchiropus splendidus",
        "family":         "Callionymidae",
        "order":          "Gobiiformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern",
        "max_length_cm":  8,
        "max_depth_m":    18,
        "min_depth_m":    1,
        "habitat_type":   "Coral reef — rubble and dead coral",
        "diet":           "Small crustaceans, worms, fish eggs",
        "description":    "Considered one of the most beautiful fish in the ocean. Its stunning blue-green colouration comes not from pigment but from special chromatophores. Extremely popular in the aquarium trade.",
        "native_oceans":  ["Pacific Ocean", "Coral Triangle"],
        "home_coords":    [8.0, 125.0],
        "habitat_polygon": [
            [-5.0, 110.0], [-5.0, 140.0], [20.0, 140.0], [20.0, 110.0]
        ],
        "migration_route": [[8.0, 125.0], [7.0, 123.0], [6.0, 121.0]],
        "migration_season": "Non-migratory — very small home range",
        "interesting_facts": [
            "One of only two vertebrates to produce true blue pigment",
            "Colour produced by photonic nanostructures (not dye)",
            "Females choose mates based on sperm quality",
            "Emerges only at dusk to feed and spawn",
            "Mucus is mildly toxic — no scales for protection"
        ],
        "color_profile":  {"primary": "#0033ff", "secondary": "#ff6600"},
        "feature_hints":  {"h_mean": (0.35, 0.55), "s_mean": (0.8, 1.0), "colorfulness": (0.5, 0.9)},
    },

    "coelacanth": {
        "common_name":    "West Indian Ocean Coelacanth",
        "scientific_name": "Latimeria chalumnae",
        "family":         "Latimeriidae",
        "order":          "Coelacanthiformes",
        "class":          "Actinistia",
        "conservation":   "Critically Endangered",
        "max_length_cm":  200,
        "max_depth_m":    700,
        "min_depth_m":    90,
        "habitat_type":   "Deep rocky volcanic slopes and caves",
        "diet":           "Fish, squid, eels",
        "description":    "A living fossil — nearly identical to 400-million-year-old specimens. Thought extinct until 1938. More closely related to lungfish and tetrapods than to modern fish. Uses a unique lobed-fin movement resembling a trot gait.",
        "native_oceans":  ["Indian Ocean — Comoros, Tanzania, South Africa"],
        "home_coords":    [-12.0, 44.3],
        "habitat_polygon": [
            [-30.0, 30.0], [-30.0, 55.0], [0.0, 55.0], [0.0, 30.0]
        ],
        "migration_route": [
            [-12.0, 44.3], [-14.0, 43.0], [-16.0, 42.0], [-18.0, 41.0]
        ],
        "migration_season": "Diel vertical migration — 150–700 m depth range",
        "interesting_facts": [
            "Thought extinct for 66 million years until discovered in 1938",
            "More closely related to humans than to most fish",
            "Electroreceptor organ detects weak electrical fields",
            "Brain fills only 1.5% of the skull — rest is fat",
            "Can live to 100 years; slow-growing and late-maturing"
        ],
        "color_profile":  {"primary": "#1b4f72", "secondary": "#d4e6f1"},
        "feature_hints":  {"fin_protrusion": (0.4, 0.7), "elongation": (2.0, 3.5), "colorfulness": (0.2, 0.5)},
    },

    "lion_fish": {
        "common_name":    "Red Lionfish",
        "scientific_name": "Pterois volitans",
        "family":         "Scorpaenidae",
        "order":          "Scorpaeniformes",
        "class":          "Actinopterygii",
        "conservation":   "Least Concern (invasive in Atlantic)",
        "max_length_cm":  47,
        "max_depth_m":    300,
        "min_depth_m":    1,
        "habitat_type":   "Coral reefs, rocky habitats, mangroves",
        "diet":           "Small fish, shrimp, other invertebrates",
        "description":    "Striking venomous reef fish native to Indo-Pacific. Its elaborate fin spines deliver a painful venom. Became a devastating invasive species in the Atlantic and Caribbean after aquarium releases.",
        "native_oceans":  ["Indian Ocean", "Pacific Ocean"],
        "home_coords":    [10.0, 115.0],
        "habitat_polygon": [
            [-10.0, 95.0], [-10.0, 150.0], [30.0, 150.0], [30.0, 95.0]
        ],
        "migration_route": [
            [10.0, 115.0], [8.0, 110.0], [6.0, 105.0], [3.0, 100.0]
        ],
        "migration_season": "Largely non-migratory; juveniles may disperse via ocean currents",
        "interesting_facts": [
            "Venom delivered through 18 venomous spines",
            "Decimating reef fish populations in the Atlantic",
            "Consumes prey up to 2/3 its own length",
            "Has no natural predators in the Atlantic",
            "Can be eaten safely if spines removed — increasingly popular"
        ],
        "color_profile":  {"primary": "#8b0000", "secondary": "#ff9999"},
        "feature_hints":  {"fin_protrusion": (0.5, 0.8), "dorsal_fin_height": (0.4, 0.7), "stripe_score": (0.5, 0.9)},
    },

    "whale_shark": {
        "common_name":    "Whale Shark",
        "scientific_name": "Rhincodon typus",
        "family":         "Rhincodontidae",
        "order":          "Orectolobiformes",
        "class":          "Chondrichthyes",
        "conservation":   "Endangered",
        "max_length_cm":  1800,
        "max_depth_m":    1800,
        "min_depth_m":    0,
        "habitat_type":   "Epipelagic — tropical and warm-temperate oceans",
        "diet":           "Plankton, fish eggs, krill, small fish",
        "description":    "The largest fish in the ocean — reaching 18 m. Despite its immense size, it is a gentle filter feeder, swimming slowly through productive waters with its mouth agape, filtering plankton.",
        "native_oceans":  ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean"],
        "home_coords":    [-25.0, 114.0],
        "habitat_polygon": [
            [-30.0, 40.0], [-30.0, 160.0], [30.0, 160.0], [30.0, 40.0]
        ],
        "migration_route": [
            [-25.0, 114.0], [-20.0, 105.0], [-10.0, 95.0], [0.0, 85.0],
            [10.0, 75.0], [20.0, 65.0], [15.0, 55.0]
        ],
        "migration_season": "Follows plankton blooms and aggregations; Ningaloo Reef March–July",
        "interesting_facts": [
            "Largest fish in the ocean at up to 18 metres",
            "Filters up to 6,000 litres of water per hour",
            "Unique spot pattern — like a fingerprint for individual ID",
            "Can dive to 1,800 m depth",
            "Pregnancy lasts approximately 3 years"
        ],
        "color_profile":  {"primary": "#1a6b9a", "secondary": "#ffffff"},
        "feature_hints":  {"aspect_ratio": (3.0, 4.5), "elongation": (3.5, 5.0), "stripe_score": (0.3, 0.6)},
    },
}


# ─────────────────────────────────────────────────────────────
#  Lookup helpers
# ─────────────────────────────────────────────────────────────

def get_species(key: str) -> Dict[str, Any]:
    """Return species record by key, or empty dict if not found."""
    return FISH_DATABASE.get(key.lower().replace(" ", "_"), {})


def get_all_species() -> List[Dict[str, Any]]:
    """Return all species as a list with their key included."""
    return [{"key": k, **v} for k, v in FISH_DATABASE.items()]


def search_by_habitat(habitat_type: str) -> List[Dict[str, Any]]:
    """Return species matching a habitat substring (case-insensitive)."""
    ht = habitat_type.lower()
    return [{"key": k, **v} for k, v in FISH_DATABASE.items()
            if ht in v.get("habitat_type", "").lower()]


def get_species_for_map() -> List[Dict[str, Any]]:
    """Return a lightweight version of each species for map rendering."""
    results = []
    for key, sp in FISH_DATABASE.items():
        results.append({
            "key":            key,
            "common_name":    sp["common_name"],
            "scientific_name": sp["scientific_name"],
            "conservation":   sp["conservation"],
            "habitat_type":   sp["habitat_type"],
            "home_coords":    sp["home_coords"],
            "habitat_polygon": sp.get("habitat_polygon", []),
            "migration_route": sp.get("migration_route", []),
            "migration_season": sp.get("migration_season", ""),
            "color_profile":  sp.get("color_profile", {"primary": "#0077be", "secondary": "#ffffff"}),
            "max_depth_m":    sp.get("max_depth_m", 0),
            "max_length_cm":  sp.get("max_length_cm", 0),
        })
    return results


# ─────────────────────────────────────────────────────────────
#  Feature-based species matching
# ─────────────────────────────────────────────────────────────

def score_species_match(features: Dict[str, float]) -> List[Dict[str, Any]]:
    """
    Given extracted OpenCV features, compute a match score for each species.

    Scoring: for each feature_hint range the species provides, check how
    close the extracted value is. Returns a sorted list (best match first).
    """
    scores = []
    for key, sp in FISH_DATABASE.items():
        hints = sp.get("feature_hints", {})
        if not hints:
            continue
        total, matched = 0, 0
        for feat_name, (lo, hi) in hints.items():
            val = features.get(feat_name, None)
            if val is None:
                continue
            total += 1
            if lo <= val <= hi:
                matched += 1
            else:
                # partial credit for proximity
                mid = (lo + hi) / 2
                rng = (hi - lo) / 2 + 0.01
                dist = abs(val - mid) / rng
                matched += max(0.0, 1.0 - dist * 0.5)

        score = (matched / total) if total > 0 else 0.0
        scores.append({
            "key":          key,
            "common_name":  sp["common_name"],
            "score":        round(score * 100, 1),
            "conservation": sp["conservation"],
        })

    return sorted(scores, key=lambda x: x["score"], reverse=True)
