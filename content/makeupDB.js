const MAKEUP_DB = [
  {
    id: "makeup_001",
    name: "Soft Everyday Glow",
    category: "makeup",
    description: "Lightweight, dewy foundation with natural tones for a fresh, everyday look.",
    tags: ["natural", "daytime", "dry skin"],
    primaryImage: "https://images.unsplash.com/photo-1512496015851-a1c8f4807491?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1512496015851-a1c8f4807491?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Base", desc: "Apply a light BB cream or skin tint using a damp sponge." },
        { title: "Cheeks", desc: "Use a cream blush on the apples of your cheeks for a natural flush." },
        { title: "Lips", desc: "Finish with a hydrating lip oil or sheer gloss." }
      ],
      videoId: "y46hvE9JAXo",
      sourceName: "YouTube"
    }
  },
  {
    id: "makeup_002",
    name: "Korean Natural Makeup",
    category: "makeup",
    description: "Straight brows, puppy eyeliner, and gradient lips for a youthful, innocent vibe.",
    tags: ["korean", "youthful", "monolid"],
    primaryImage: "https://images.unsplash.com/photo-1617066922906-81498b3f4db0?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1617066922906-81498b3f4db0?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Brows", desc: "Fill in brows straight and lightly with a powder." },
        { title: "Eyes", desc: "Draw eyeliner slightly downwards at the outer corners." },
        { title: "Lips", desc: "Apply lip tint in the center of the lips and blend outwards." }
      ],
      videoId: "wE08NnJzC_8",
      sourceName: "YouTube"
    }
  },
  {
    id: "makeup_003",
    name: "Peach Makeup",
    category: "makeup",
    description: "Warm, coral-toned monochromatic look that brightens the complexion.",
    tags: ["warm tone", "spring", "cute"],
    primaryImage: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Eyes", desc: "Sweep a peach eyeshadow across the lids and lower lash line." },
        { title: "Blush", desc: "Apply matching peach blush high on the cheekbones." },
        { title: "Lips", desc: "Use a coral lipstick or tint to tie the look together." }
      ],
      videoId: "Zq1fFv0f2Y4",
      sourceName: "YouTube"
    }
  },
  {
    id: "makeup_004",
    name: "Clean Girl Makeup",
    category: "makeup",
    description: "Minimalist aesthetic focusing on flawless, glowing skin and groomed brows.",
    tags: ["minimalist", "glowing", "trendy"],
    primaryImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Skincare Prep", desc: "Prep skin heavily with moisturizer and illuminating primer." },
        { title: "Conceal", desc: "Spot conceal only where necessary, leaving the rest of the skin bare." },
        { title: "Brows", desc: "Brush brows up with a clear brow gel for a laminated effect." }
      ],
      videoId: "oF0c5q_qC0c",
      sourceName: "YouTube"
    }
  },
  {
    id: "makeup_005",
    name: "Romantic Makeup",
    category: "makeup",
    description: "Soft pink tones, smudged eyeliner, and fluttery lashes for a dreamy look.",
    tags: ["date night", "pink tone", "soft"],
    primaryImage: "https://images.unsplash.com/photo-1516975080661-460f384faeb4?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1516975080661-460f384faeb4?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Eyes", desc: "Use soft pink and mauve eyeshadows, blending edges seamlessly." },
        { title: "Liner", desc: "Use a brown pencil liner and smudge the wing." },
        { title: "Lashes", desc: "Apply volumizing mascara or individual falsies to the outer corners." }
      ],
      videoId: "1r_2-sV0g3Y",
      sourceName: "YouTube"
    }
  },
  {
    id: "makeup_006",
    name: "Soft Glam",
    category: "makeup",
    description: "Flawless matte base, neutral cut crease, and defined features without being too harsh.",
    tags: ["party", "evening", "glam"],
    primaryImage: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Base", desc: "Apply full coverage foundation and set with translucent powder." },
        { title: "Contour", desc: "Sculpt cheekbones and jawline using a matte contour powder." },
        { title: "Eyes", desc: "Create a soft cut crease using neutral brown shades and add a subtle shimmer on the lid." }
      ],
      videoId: "b5D3n4fV7yA",
      sourceName: "YouTube"
    }
  },
  {
    id: "makeup_007",
    name: "Latte Makeup",
    category: "makeup",
    description: "Warm, bronzey, caramel tones dominating the eyes, cheeks, and lips.",
    tags: ["bronze", "warm tone", "trendy"],
    primaryImage: "https://images.unsplash.com/photo-1615809796856-1cb7a5b32607?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1615809796856-1cb7a5b32607?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Bronzing", desc: "Liberally apply cream bronzer across the cheeks, forehead, and nose." },
        { title: "Eyes", desc: "Wash a caramel brown shade over the entire eyelid." },
        { title: "Lips", desc: "Use a brown lip liner with a nude lipstick." }
      ],
      videoId: "Zq1fFv0f2Y4",
      sourceName: "YouTube"
    }
  },
  {
    id: "makeup_008",
    name: "Date Night Makeup",
    category: "makeup",
    description: "Seductive look featuring a classic bold red lip and sharp winged eyeliner.",
    tags: ["classic", "bold", "evening"],
    primaryImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&q=80",
    tutorial: {
      steps: [
        { title: "Eyes", desc: "Keep eyeshadow minimal, draw a sharp black winged liner." },
        { title: "Lashes", desc: "Apply two coats of black mascara." },
        { title: "Lips", desc: "Outline lips carefully with red liner, then fill in with a long-lasting matte red lipstick." }
      ],
      videoId: "dQw4w9WgXcQ",
      sourceName: "YouTube"
    }
  }
];

module.exports = MAKEUP_DB;
