const HAIR_DB = [
  {
    id: "hair_001",
    name: "Korean C-Curl Bob",
    category: "hair",
    description: "A chin-length bob with ends gently curled inwards, creating a soft and youthful look.",
    tags: ["round face", "v-line face", "thin hair"],
    primaryImage: "https://i.pinimg.com/736x/f5/c0/cc/f5c0ccf8843545ce07b8bf34cb2e47d5.jpg",
    fallbackImage: "https://i.pinimg.com/736x/f5/c0/cc/f5c0ccf8843545ce07b8bf34cb2e47d5.jpg",
    tutorial: {
      steps: [
        { title: "Prep", desc: "Start with damp hair. Apply a heat protectant." },
        { title: "Blow-dry", desc: "Use a round brush to blow-dry the ends inwards." },
        { title: "Set", desc: "Use a flat iron to gently curve the very ends inwards for a lasting C-curl." }
      ],
      videoId: "0hYR0pMphNw",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair_002",
    name: "Soft Long Layers",
    category: "hair",
    description: "Long flowing hair with soft layers to add movement and volume without losing length.",
    tags: ["round face", "square face", "thick hair"],
    primaryImage: "https://content.latest-hairstyles.com/wp-content/uploads/long-wispy-layers-with-soft-waves.jpg",
    fallbackImage: "https://content.latest-hairstyles.com/wp-content/uploads/long-wispy-layers-with-soft-waves.jpg",
    tutorial: {
      steps: [
        { title: "Sectioning", desc: "Divide hair into horizontal sections starting from the bottom." },
        { title: "Curling", desc: "Use a large barrel curling iron (32mm) away from the face." },
        { title: "Brushing", desc: "Let curls cool, then brush out gently with a wide-tooth comb for soft waves." }
      ],
      videoId: "rCYm9JwiIp0",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair_003",
    name: "Curtain Bangs",
    category: "hair",
    description: "Face-framing fringe parted in the middle, sweeping outwards to highlight cheekbones.",
    tags: ["round face", "high forehead", "v-line face"],
    primaryImage: "https://i.pinimg.com/736x/95/73/6a/95736a4ed7341d64507e12dd1d713c2f.jpg",
    fallbackImage: "https://i.pinimg.com/736x/95/73/6a/95736a4ed7341d64507e12dd1d713c2f.jpg",
    tutorial: {
      steps: [
        { title: "Dampen Bangs", desc: "Wet the bangs slightly." },
        { title: "Round Brush", desc: "Blow dry the bangs forward with a round brush, then roll backwards." },
        { title: "Split", desc: "Part in the middle and swoop the sides away from the face." }
      ],
      videoId: "cmz5r4Uk80g",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair_004",
    name: "Sleek Straight Glass Hair",
    category: "hair",
    description: "Ultra-shiny, perfectly straight hair with no frizz or flyaways.",
    tags: ["v-line face", "frizzy hair", "thick hair"],
    primaryImage: "https://sunday.salon/wp-content/smush-webp/2024/04/Sunday-Salon-Portfolio-39-819x1024.jpg.webp",
    fallbackImage: "https://sunday.salon/wp-content/smush-webp/2024/04/Sunday-Salon-Portfolio-39-819x1024.jpg.webp",
    tutorial: {
      steps: [
        { title: "Smoothing Cream", desc: "Apply anti-frizz smoothing cream to damp hair." },
        { title: "Blowout", desc: "Blow dry pointing the nozzle downwards to seal the cuticle." },
        { title: "Flat Iron", desc: "Flat iron small sections at a time for maximum sleekness, finish with shine spray." }
      ],
      videoId: "7QVC_DNQzbg",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair_005",
    name: "Voluminous Wavy Lob",
    category: "hair",
    description: "A shoulder-grazing long bob with messy, beachy waves for an effortless vibe.",
    tags: ["square face", "thin hair", "v-line face"],
    primaryImage: "https://i.pinimg.com/1200x/91/3b/fa/913bfa14100d9fb7bce539b0205bfa26.jpg",
    fallbackImage: "https://i.pinimg.com/1200x/91/3b/fa/913bfa14100d9fb7bce539b0205bfa26.jpg",
    tutorial: {
      steps: [
        { title: "Texturizing", desc: "Apply sea salt spray or texturizing mousse." },
        { title: "Waving", desc: "Use a flat iron to create S-waves by bending the iron back and forth." },
        { title: "Mess It Up", desc: "Scrunch the hair with your hands and flip your head upside down for volume." }
      ],
      videoId: "ckNaTRT1ZBA",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair_006",
    name: "Low Messy Bun",
    category: "hair",
    description: "An elegant yet relaxed bun sitting at the nape of the neck with loose face-framing pieces.",
    tags: ["round face", "frizzy hair", "thin hair"],
    primaryImage: "https://i.pinimg.com/736x/12/2d/ee/122deea07c1adf0dbcdfc4167483c18f.jpg",
    fallbackImage: "https://i.pinimg.com/736x/12/2d/ee/122deea07c1adf0dbcdfc4167483c18f.jpg",
    tutorial: {
      steps: [
        { title: "Gather", desc: "Pull hair into a low ponytail, leaving front pieces out." },
        { title: "Twist", desc: "Twist the ponytail loosely and wrap it around the base." },
        { title: "Pin", desc: "Secure with bobby pins and pull out pieces slightly to add texture." }
      ],
      videoId: "sdwM00Lh7Nk",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair_007",
    name: "Butterfly Cut",
    category: "hair",
    description: "Heavily layered cut with shorter top layers that blend into longer bottom layers.",
    tags: ["thick hair", "round face", "v-line face"],
    primaryImage: "https://i.pinimg.com/736x/ce/fa/81/cefa81650f4cb43ea9853bf0b385aa05.jpg",
    fallbackImage: "https://i.pinimg.com/736x/ce/fa/81/cefa81650f4cb43ea9853bf0b385aa05.jpg",
    tutorial: {
      steps: [
        { title: "Sectioning", desc: "Separate the shorter top layers from the longer bottom." },
        { title: "Flipping", desc: "Blow-dry the top layers away from the face to create wings." },
        { title: "Blending", desc: "Use a large round brush to blend the sections seamlessly." }
      ],
      videoId: "aeAQ7rO3q0k",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair_008",
    name: "Hippie Curls",
    category: "hair",
    description: "Tight, voluminous, and slightly messy curls from root to tip.",
    tags: ["thin hair", "frizzy hair", "square face"],
    primaryImage: "https://i.pinimg.com/736x/e3/de/93/e3de93c4d208373cb4504449a43a13bf.jpg",
    fallbackImage: "https://i.pinimg.com/736x/e3/de/93/e3de93c4d208373cb4504449a43a13bf.jpg",
    tutorial: {
      steps: [
        { title: "Curl Cream", desc: "Apply curl defining cream to very wet hair." },
        { title: "Scrunch", desc: "Scrunch upwards to encourage natural curl patterns." },
        { title: "Diffuse", desc: "Use a diffuser on medium heat until 80% dry." }
      ],
      videoId: "WbVIZTUa4Ws",
      sourceName: "YouTube"
    }
  }
];

module.exports = HAIR_DB;