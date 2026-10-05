const SKINCARE_DB = [
  // Cleansers
  { id: "cl_cerave_hydrating", name: "CeraVe Hydrating Cleanser", type: "cleanser", skinType: ["dry", "normal", "sensitive"], budget: ["student", "mid-range"], imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80" },
  { id: "cl_cosrx_salicylic", name: "COSRX Salicylic Acid Daily Gentle Cleanser", type: "cleanser", skinType: ["oily", "combination"], budget: ["student"], imageUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&q=80" },
  { id: "cl_laroche_purifying", name: "La Roche-Posay Effaclar Purifying Foaming Gel", type: "cleanser", skinType: ["oily", "combination"], budget: ["mid-range"], imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80" },
  { id: "cl_tatcha_rice", name: "Tatcha The Rice Wash", type: "cleanser", skinType: ["dry", "normal", "combination"], budget: ["premium"], imageUrl: "https://images.unsplash.com/photo-1556228720-192a6af4e865?w=500&q=80" },

  // Makeup Removers
  { id: "mr_bioderma_pink", name: "Bioderma Sensibio H2O Micellar Water", type: "makeup_remover", skinType: ["dry", "normal", "sensitive"], budget: ["mid-range", "premium"], imageUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbc246?w=500&q=80" },
  { id: "mr_garnier_micellar", name: "Garnier Micellar Cleansing Water", type: "makeup_remover", skinType: ["all", "oily", "dry"], budget: ["student"], imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80" },
  { id: "mr_shu_uemura", name: "Shu Uemura Anti/Oxi+ Cleansing Oil", type: "makeup_remover", skinType: ["all", "dry", "combination"], budget: ["premium"], imageUrl: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80" },

  // Toners
  { id: "tn_klairs_supple", name: "Klairs Supple Preparation Facial Toner", type: "toner", skinType: ["dry", "normal", "sensitive"], budget: ["mid-range"], imageUrl: "https://images.unsplash.com/photo-1608280628286-905bb6361dd5?w=500&q=80" },
  { id: "tn_somebymi_aha", name: "Some By Mi AHA BHA PHA 30 Days Miracle Toner", type: "toner", skinType: ["oily", "combination"], budget: ["student"], imageUrl: "https://images.unsplash.com/photo-1615397323048-c8d50f5d54a2?w=500&q=80" },
  { id: "tn_sk2_essence", name: "SK-II Facial Treatment Essence", type: "toner", skinType: ["all", "dry", "oily"], budget: ["premium"], imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80" },

  // Serums
  { id: "sr_ordinary_niacinamide", name: "The Ordinary Niacinamide 10% + Zinc 1%", type: "serum", skinType: ["oily", "combination", "normal"], budget: ["student"], imageUrl: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80" },
  { id: "sr_laroche_b5", name: "La Roche-Posay Hyalu B5 Pure Hyaluronic Acid", type: "serum", skinType: ["dry", "normal", "sensitive"], budget: ["mid-range"], imageUrl: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80" },
  { id: "sr_estee_anr", name: "Estée Lauder Advanced Night Repair", type: "serum", skinType: ["all"], budget: ["premium"], imageUrl: "https://images.unsplash.com/photo-1615397323048-c8d50f5d54a2?w=500&q=80" },

  // Moisturizers
  { id: "mz_illiyoon_ceramide", name: "Illiyoon Ceramide Ato Concentrate Cream", type: "moisturizer", skinType: ["dry", "normal", "sensitive"], budget: ["student"], imageUrl: "https://images.unsplash.com/photo-1556228720-192a6af4e865?w=500&q=80" },
  { id: "mz_neutrogena_hydro", name: "Neutrogena Hydro Boost Water Gel", type: "moisturizer", skinType: ["oily", "combination"], budget: ["student", "mid-range"], imageUrl: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbc246?w=500&q=80" },
  { id: "mz_kiehls_ultra", name: "Kiehl's Ultra Facial Cream", type: "moisturizer", skinType: ["dry", "normal", "combination"], budget: ["premium"], imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&q=80" },

  // Sunscreens
  { id: "ss_biore_aqua", name: "Bioré UV Aqua Rich Watery Essence", type: "sunscreen", skinType: ["oily", "combination", "normal"], budget: ["student"], imageUrl: "https://images.unsplash.com/photo-1608280628286-905bb6361dd5?w=500&q=80" },
  { id: "ss_laroche_anthelios", name: "La Roche-Posay Anthelios Invisible Fluid", type: "sunscreen", skinType: ["all", "sensitive"], budget: ["mid-range"], imageUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&q=80" },
  { id: "ss_shiseido_urban", name: "Shiseido Urban Environment Sunscreen", type: "sunscreen", skinType: ["all"], budget: ["premium"], imageUrl: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80" }
,
    {
    "id": "skincare_009",
    "name": "Niacinamide Brightening Serum",
    "category": "skincare",
    "description": "Fades dark spots and balances sebum production for a radiant complexion.",
    "tags": [
      "serum",
      "brightening",
      "oily",
      "acne-prone"
    ],
    "skinType": [
      "oily",
      "combination",
      "acne-prone"
    ],
    "budget": [
      "affordable",
      "mid-range"
    ],
    "primaryImage": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800",
    "fallbackImage": "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800"
  },
  {
    "id": "skincare_010",
    "name": "Centella Asiatica Soothing Toner",
    "category": "skincare",
    "description": "Calms redness, reduces inflammation, and hydrates irritated skin instantly.",
    "tags": [
      "toner",
      "soothing",
      "sensitive",
      "redness"
    ],
    "skinType": [
      "sensitive",
      "dry",
      "all"
    ],
    "budget": [
      "affordable"
    ],
    "primaryImage": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800",
    "fallbackImage": "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800"
  },
  {
    "id": "skincare_011",
    "name": "Peptide Firming Eye Cream",
    "category": "skincare",
    "description": "Targets fine lines, crow's feet, and loss of firmness around the delicate eye area.",
    "tags": [
      "eye cream",
      "anti-aging",
      "firming"
    ],
    "skinType": [
      "mature",
      "dry",
      "all"
    ],
    "budget": [
      "high-end",
      "mid-range"
    ],
    "primaryImage": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800",
    "fallbackImage": "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800"
  },
  {
    "id": "skincare_012",
    "name": "AHA/BHA Exfoliating Peeling Solution",
    "category": "skincare",
    "description": "A 10-minute weekly treatment to deeply exfoliate pores and resurface skin texture.",
    "tags": [
      "exfoliator",
      "chemical peel",
      "acne-prone"
    ],
    "skinType": [
      "oily",
      "combination",
      "normal"
    ],
    "budget": [
      "affordable"
    ],
    "primaryImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800",
    "fallbackImage": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800"
  },
  {
    "id": "skincare_013",
    "name": "Ceramide Barrier Repair Cream",
    "category": "skincare",
    "description": "A thick, deeply nourishing cream that restores a damaged skin barrier and prevents moisture loss.",
    "tags": [
      "moisturizer",
      "barrier repair",
      "dry skin"
    ],
    "skinType": [
      "dry",
      "sensitive",
      "eczema"
    ],
    "budget": [
      "mid-range",
      "affordable"
    ],
    "primaryImage": "https://images.unsplash.com/photo-1556228720-192a613d33bd?w=800",
    "fallbackImage": "https://images.unsplash.com/photo-1556228720-192a613d33bd?w=800"
  }
];

module.exports = SKINCARE_DB;
