// data.js
const CONTENT_DATABASE = [
  {
    id: "hair-001",
    category: "hair",
    name: "Layered Hair with Curtain Bangs",
    description: "Makes the face look slender and creates natural volume.",
    tags: {
      faceShape: ["round", "square", "v-line"],
      hairType: ["thin", "thick"]
    },
    imageUrl: "https://cdnv2.tgdd.vn/mwg-static/common/News/1587320/toc-mai-bay-17%20%281%29.jpg",
    tutorial: {
      matchReasons: [
        "Curtain bangs help conceal wide cheeks.",
        "Multiple layers create root volume, excellent for thin hair."
      ],
      steps: [
        { title: "Preparation", desc: "Apply heat protectant and blow-dry 80%." },
        { title: "Sectioning", desc: "Divide hair into 2 layers, clip the top layer." },
        { title: "Blow-drying", desc: "Use a round brush to blow-dry the ends inward." },
        { title: "Curling bangs", desc: "Roll the curtain bangs backward for a natural sweep." }
      ],
      videoId: "b7ygeAigR0o",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-002",
    category: "hair",
    name: "Long Layered Hair",
    description: "Creates a gentle, feminine feel and is easy to care for.",
    tags: {
      faceShape: ["round", "v-line"],
      hairType: ["thin"]
    },
    imageUrl: "https://file.hstatic.net/200000503583/file/toc-layer-dai-nu__1__730079539a0942fa9c5cc0ad4c790ec3.jpg",
    tutorial: {
      matchReasons: [
        "Layered structure makes thin hair look fuller and thicker.",
        "Helps round faces appear longer and more balanced."
      ],
      steps: [
        { title: "Blow-drying", desc: "Blow-dry roots upward to create volume." },
        { title: "Loose styling", desc: "Twist the ends slightly while drying for loose waves." }
      ],
      videoId: "BY08Mbu0KE8",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-003",
    category: "hair",
    name: "Layered Lob",
    description: "Long version of the Bob, youthful and stylish.",
    tags: {
      faceShape: ["round", "square"],
      hairType: ["thin", "thick"]
    },
    imageUrl: "https://img.vuahanghieu.com/unsafe/0x0/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/news/content/2023/10/toc-lob-la-gi-cac-kieu-toc-lob-dep-35-jpg-1696842733-09102023161213.jpg",
    tutorial: {
      matchReasons: [
        "Collarbone length helps conceal square jaws and double chins.",
        "Light layering adds natural volume."
      ],
      steps: [
        { title: "Dampening", desc: "Spray a little water to make hair manageable." },
        { title: "Inward curling", desc: "Use a flat iron to curl all the ends inward in a C-shape." }
      ],
      videoId: "OsQ66lRSHWQ",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-004",
    category: "hair",
    name: "Long Curtain Bangs",
    description: "Highlight is the long bangs gently framing the cheeks, very chic.",
    tags: {
      faceShape: ["round", "v-line", "square"],
      hairType: ["thin", "frizzy"]
    },
    imageUrl: "https://image.voh.com.vn/voh/Image/2021/05/27/mai-bay-han-quoc-voh-17.jpg?t=o",
    tutorial: {
      matchReasons: [
        "Perfect for hiding high cheekbones or chubby cheeks.",
        "Easy to tie up while maintaining elegance."
      ],
      steps: [
        { title: "Rolling", desc: "Use a large roller on the bangs for about 15 minutes." },
        { title: "Setting", desc: "Spray a light hold hairspray, remove the roller, and part to the sides." }
      ],
      videoId: "vA9Xh3qo-Y4",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-005",
    category: "hair",
    name: "Layered Bob",
    description: "Short, edgy yet feminine thanks to meticulously cut layers.",
    tags: {
      faceShape: ["round"],
      hairType: ["thin"]
    },
    imageUrl: "https://cdnv2.tgdd.vn/mwg-static/common/News/1588616/toc-bob-1%20%281%29%20%281%29.jpg",
    tutorial: {
      matchReasons: [
        "Layered bob hugs the nape and cheeks naturally.",
        "The best solution to fake volume for thin hair."
      ],
      steps: [
        { title: "Shaping", desc: "Blow-dry and scrunch the nape area for a rounded shape." },
        { title: "Waxing", desc: "Use matte wax to define the layered strands." }
      ],
      videoId: "OsQ66lRSHWQ",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-006",
    category: "hair",
    name: "Edgy Shag",
    description: "Retro style, intentionally messy.",
    tags: {
      faceShape: ["round", "square"],
      hairType: ["thin", "thick"]
    },
    imageUrl: "https://cdnv2.tgdd.vn/mwg-static/common/News/0/toc-mullet-nu-26%20%281%29.jpg",
    tutorial: {
      matchReasons: [
        "Covers the forehead and strong jawline.",
        "Thin hair cut into a shag creates a textured, voluminous illusion."
      ],
      steps: [
        { title: "Texturize", desc: "Apply sea salt spray to damp hair." },
        { title: "Messy drying", desc: "Tousle hair with your hands and blow-dry freely without a comb." }
      ],
      videoId: "i-dryd_qZOc",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-007",
    category: "hair",
    name: "Short Curled Bob",
    description: "Brings a youthful, stylish look and is very easy to care for.",
    tags: {
      faceShape: ["v-line", "square"],
      hairType: ["thick"]
    },
    imageUrl: "https://cdn2.fptshop.com.vn/unsafe/toc_uon_cup_1_daf114f066.jpg",
    tutorial: {
      matchReasons: [
        "Suitable for thick hair as curling creates a beautiful C-shape.",
        "Softens the angles of a square face."
      ],
      steps: [
        { title: "Softening", desc: "Apply hair oil for a shiny finish." },
        { title: "Inward curling", desc: "Use a flat iron to pull straight from the roots and curl sharply at the ends." }
      ],
      videoId: "OsQ66lRSHWQ",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-008",
    category: "hair",
    name: "Elegant Low Ponytail",
    description: "Neat, elegant, and effectively manages frizzy hair.",
    tags: {
      faceShape: ["square", "v-line"],
      hairType: ["frizzy", "thick"]
    },
    imageUrl: "https://images2.thanhnien.vn/528068263637045248/2023/6/27/anh-6-16878346895321180168364.jpg",
    tutorial: {
      matchReasons: [
        "Effectively hides frizzy ends.",
        "Low ponytail creates a sophisticated, mature look."
      ],
      steps: [
        { title: "Smoothing", desc: "Use hair wax or gel to smooth down flyaways." },
        { title: "Tying", desc: "Tie neatly at the nape with an elastic, gently pull a few strands around the ears for a natural look." }
      ],
      videoId: "l5ayDeLt6f4",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-009",
    category: "hair",
    name: "Natural Messy Bun",
    description: "Casual messy bun, suitable for all occasions.",
    tags: {
      faceShape: ["round", "v-line"],
      hairType: ["frizzy", "thin"]
    },
    imageUrl: "https://cdn.tgdd.vn/Files/2020/05/09/1254511/danh-bay-nong-buc-mua-he-voi-5-kieu-bui-toc-thoi-trang-gon-gang-de-thuc-hien-nay-202005091610506279.jpg",
    tutorial: {
      matchReasons: [
        "Frizzy hair makes the bun look larger and more beautiful.",
        "Fakes thickness for thin hair."
      ],
      steps: [
        { title: "Gathering", desc: "Gather all hair high on the crown using your hands, no comb." },
        { title: "Messy bun", desc: "Twist into a bun and tie loosely, pulling out a few strands around the face." }
      ],
      videoId: "qD0hlzKasdM",
      sourceName: "YouTube"
    }
  },
  {
    id: "hair-010",
    category: "hair",
    name: "Big Voluminous Curls",
    description: "Glamorous, seductive, and pageant-inspired.",
    tags: {
      faceShape: ["v-line", "square"],
      hairType: ["thick"]
    },
    imageUrl: "https://cdn2.fptshop.com.vn/unsafe/cac_mau_toc_xoan_lon_to_dai_dep_2_2c75a741e5.jpg",
    tutorial: {
      matchReasons: [
        "Only thick hair can hold these big bouncy curls for a long time.",
        "Extremely elegant for special occasions."
      ],
      steps: [
        { title: "Sectioning", desc: "Divide hair into many small sections." },
        { title: "Large curling iron", desc: "Use a 32-38mm curling iron to curl hair outwards." },
        { title: "Brushing out", desc: "Wait for the hair to cool, then use a wide-tooth comb to blend the curls." }
      ],
      videoId: "qa2Bkiv-rTg",
      sourceName: "YouTube"
    }
  },
  // {
  //   id: "hair-011",
  //   category: "hair",
  //   name: "Natural Straight Hair",
  //   description: "Glossy and silky straight.",
  //   tags: {
  //     faceShape: ["v-line", "round"],
  //     hairType: ["thick", "frizzy"]
  //   },
  //   imageUrl: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=500&q=80",
  //   tutorial: {
  //     matchReasons: [
  //       "The ultimate solution to tame frizz.",
  //       "Suitable for thick, healthy hair."
  //     ],
  //     steps: [
  //       { title: "Moisturizing", desc: "Apply leave-in conditioner and heat protectant oil." },
  //       { title: "Straightening", desc: "Use a flat iron at 180 degrees from roots to ends." }
  //     ],
  //     videoId: "SlPO2jUYTCM",
  //     sourceName: "YouTube"
  //   }
  // },
  // {
  //   id: "hair-012",
  //   category: "hair",
  //   name: "Butterfly Cut",
  //   description: "Flowing layered cut, currently a hot trend.",
  //   tags: {
  //     faceShape: ["round", "v-line"],
  //     hairType: ["thick", "thin"]
  //   },
  //   imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",
  //   tutorial: {
  //     matchReasons: [
  //       "Creates a very thick layered effect without being heavy.",
  //       "Hugs the sides of the face, creating a V-line illusion."
  //     ],
  //     steps: [
  //       { title: "Flipping", desc: "Blow-dry the top layers flipping outwards, and bottom layers inwards." },
  //       { title: "Styling", desc: "Scrunch gently with your hands and apply flexible hold hairspray." }
  //     ],
  //     videoId: "M-vlGrR4ssI",
  //     sourceName: "YouTube"
  //   }
  // },
  // {
  //   id: "hair-013",
  //   category: "hair",
  //   name: "Hippie Curls",
  //   description: "Edgy, rebellious, and highly impressive.",
  //   tags: {
  //     faceShape: ["square", "v-line"],
  //     hairType: ["frizzy", "thin"]
  //   },
  //   imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
  //   tutorial: {
  //     matchReasons: [
  //       "Takes advantage of natural frizz to create a hippie style.",
  //       "Makes hair look twice as thick."
  //     ],
  //     steps: [
  //       { title: "Wetting", desc: "Use a spray bottle to wet hair and apply curl defining cream." },
  //       { title: "Diffusing", desc: "Use a diffuser attachment to dry and set the waves." }
  //     ],
  //     videoId: "qa2Bkiv-rTg",
  //     sourceName: "YouTube"
  //   }
  // },
  // {
  //   id: "hair-014",
  //   category: "hair",
  //   name: "V-cut Long Hair",
  //   description: "Traditional, feminine, and easy to tie.",
  //   tags: {
  //     faceShape: ["round", "square"],
  //     hairType: ["thick"]
  //   },
  //   imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&q=80",
  //   tutorial: {
  //     matchReasons: [
  //       "Reduces bulk at the ends for very thick hair.",
  //       "Looks very elegant from the back."
  //     ],
  //     steps: [
  //       { title: "Smoothing", desc: "Blow-dry straight naturally from top to bottom." },
  //       { title: "Nourishing ends", desc: "Apply hair oil focusing on the V-shaped ends to prevent split ends." }
  //     ],
  //     videoId: "tpyIQWGxUW8",
  //     sourceName: "YouTube"
  //   }
  // },
  // {
  //   id: "hair-015",
  //   category: "hair",
  //   name: "Trendy Wolf Cut",
  //   description: "Bold and trendy, a mix between Shag and Mullet.",
  //   tags: {
  //     faceShape: ["v-line", "round"],
  //     hairType: ["thin", "thick"]
  //   },
  //   imageUrl: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&q=80",
  //   tutorial: {
  //     matchReasons: [
  //       "High volume at the crown makes the face look longer and slimmer.",
  //       "Perfect for those who love an edgy style."
  //     ],
  //     steps: [
  //       { title: "Volume boost", desc: "Apply root volumizing spray." },
  //       { title: "Messy drying", desc: "Blow-dry messily, gently styling the nape hair to hug the neck." }
  //     ],
  //     videoId: "TCFG61E-Rjk",
  //     sourceName: "YouTube"
  //   }
  // }
];

// Hàm lấy dữ liệu
function getAllContent() {
  return CONTENT_DATABASE;
}

const MOCK_EXTRAS = [
  {
    id: "face-001", category: "face", name: "Clean Girl Makeup", description: "Lightweight, dewy foundation.",
    tags: { faceShape: ["round", "v-line", "square"], makeupStyle: ["natural", "party"] },
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80",
    tutorial: { matchReasons: [], steps: [], videoId: "y46hvE9JAXo", sourceName: "YouTube" }
  },
  {
    id: "outfit-001", category: "outfit", name: "Chic Office Outfit", description: "Flattering, hides flaws.",
    tags: { bodyShape: ["hourglass", "rectangle", "triangle"], style: ["elegant", "casual"] },
    imageUrl: "https://images2.thanhnien.vn/528068263637045248/2024/2/15/thoi-trang-cong-so8-1707978494595580799841.jpg",
    tutorial: { matchReasons: [], steps: [], videoId: "RcOgnCde8NU", sourceName: "YouTube" }
  },
  {
    id: "body-001", category: "body", name: "Balanced Pilates Routine", description: "Creates a toned figure.",
    tags: { goal: ["balance", "curves"], bodyShape: ["rectangle", "hourglass"] },
    imageUrl: "https://igapilates.vn/wp-content/uploads/2025/09/pilates-giup-co-the-tro-nen-can-doi-va-deo-dai-hon.webp",
    tutorial: { matchReasons: [], steps: [], videoId: "Mbk2tfr6iwY", sourceName: "YouTube" }
  }
];

CONTENT_DATABASE.push(...MOCK_EXTRAS);

module.exports = { CONTENT_DATABASE };
