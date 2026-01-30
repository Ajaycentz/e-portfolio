export type SocialLink = {
  name: string;
  url: string;
  handle?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  featured: boolean;
  summary: string;
  description: string;
  role: string;
  tools: string[];
  year: string;
  cover: string;
  gallery: string[];
  tags: string[];
  process: string[];
  results: string[];
  link?: string;
};

export type Profile = {
  personal: {
    name: string;
    title: string;
    tagline: string;
    birthday: string;
    location: string;
    email: string;
    phone?: string;
    availability: string;
    summary: string;
    portrait: string;
  };
  socials: SocialLink[];
  stats: { label: string; value: string }[];
  focusAreas: string[];
  skills: { category: string; items: string[] }[];
  tools: string[];
  services: {
    title: string;
    description: string;
    price: string;
    features: string[];
  }[];
  experience: {
    company: string;
    role: string;
    start: string;
    end: string;
    location?: string;
    description: string;
    highlights: string[];
  }[];
  education: {
    school: string;
    program: string;
    start: string;
    end: string;
    location?: string;
    details: string[];
  }[];
  projects: Project[];
  testimonials: {
    quote: string;
    name: string;
    role: string;
    company?: string;
  }[];
};

export const profile: Profile = {
  personal: {
    name: "Alden Jay Centino",
    title: "Graphic Designer / Visual Brand Artist / Digital Creator",
    tagline: "Graphic Designer - Brand Visuals - Social Creatives - Print Design",
    birthday: "October 27, 1999",
    location: "Leyte, Philippines",
    email: "ajcentz28@gmail.com",
    phone: "09750165677",
    availability: "Open for projects",
    summary:
      "Graphic designer focused on brand visuals, social creatives, and print systems that deliver clarity and impact.",
    portrait: "/Profile.jpg",
  },
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/aldenjaycentz/",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@glicth27",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/gliich27/",
    },
    {
      name: "LinkedIn",
      url: "https://bit.ly/3YVrISy",
    },
  ],
  stats: [
    { label: "Years of experience", value: "6+" },
    { label: "Projects delivered", value: "100+" },
    { label: "Clients supported", value: "10+" },
    { label: "Results", value: "Strong" },
  ],
  focusAreas: [
    "Brand Identity",
    "Social Media Creatives",
    "Posters & Print",
    "Thumbnails & YouTube Branding",
  ],
  skills: [
    {
      category: "Graphic Design",
      items: [
        "Adobe Photoshop",
        "Canva",
        "Adobe Illustrator",
        "Lightroom",
        "Figma",
      ],
    },
    {
      category: "Video Editing",
      items: [
        "Adobe Premiere Pro",
        "CapCut",
        "Filmora",
        "DaVinci Resolve",
      ],
    },
    {
      category: "Web Development",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "Laravel",
        "Bootstrap",
        "Tailwind CSS",
        "Python",
        "React JS",
        "Visual Studio Code",
        "Git & GitHub",
        "Next.js",
      ],
    },
    {
      category: "AI Tools",
      items: [
        "Canva AI",
        "Adobe Firefly",
        "Uizard",
        "Midjourney",
        "Leonardo AI",
        "ChatGPT (Content, Ideas, Scripts, UI Concepts)",
        "Copilot",
        "CapCut AI",
        "Runway ML",
        "Pika / Kaiber (AI video tools)",
        "AI voice & subtitle tools",
        "DALL-E",
        "Google Gemini",
        "Meta AI",
        "VEO 3",
        "FLOW",
        "Stable Diffusion",
        "Synthesia",
        "Veed",
        "Lumen5",
        "ElevenLabs",
      ],
    },
  ],
  tools: [
    "Adobe Photoshop",
    "Canva",
    "Adobe Illustrator",
    "Lightroom",
    "Figma",
    "Adobe Premiere Pro",
    "CapCut",
    "Filmora",
    "DaVinci Resolve",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "Laravel",
    "Bootstrap",
    "Tailwind CSS",
    "Python",
    "React JS",
    "Visual Studio Code",
    "Git & GitHub",
    "Next.js",
    "Canva AI",
    "Adobe Firefly",
    "Uizard",
    "Midjourney",
    "Leonardo AI",
    "ChatGPT",
    "Copilot",
    "CapCut AI",
    "Runway ML",
    "Pika",
    "Kaiber",
    "DALL-E",
    "Google Gemini",
    "Meta AI",
    "VEO 3",
    "FLOW",
    "Stable Diffusion",
    "Synthesia",
    "Veed",
    "Lumen5",
    "ElevenLabs",
  ],
  services: [
    {
      title: "Brand Identity Suite",
      description:
        "Logo, typography, and visual system built for consistent brand expression.",
      price: "",
      features: [
        "Logo and wordmark",
        "Color and type system",
        "Brand guidelines",
        "Marketing templates",
        "Launch assets",
      ],
    },
    {
      title: "Social Creative Pack",
      description:
        "High-impact visuals for reels, stories, posts, and campaign launches.",
      price: "",
      features: [
        "Post and story templates",
        "Reel covers and thumbnails",
        "Campaign art direction",
        "Visual consistency pass",
        "Batch delivery",
      ],
    },
    {
      title: "Print & Poster System",
      description:
        "Posters, flyers, and print assets with bold typographic hierarchy.",
      price: "",
      features: [
        "Poster and flyer layouts",
        "Print-ready files",
        "Event or campaign variants",
        "Typography system",
        "Production guidance",
      ],
    },
  ],
  experience: [
    {
      company: "Self-Employed",
      role: "Visual Graphic Designer",
      start: "2020",
      end: "Present",
      location: "Leyte, Philippines",
      description:
        "Created brand visuals, marketing assets, and print-ready designs for clients across social, digital, and print.",
      highlights: [],
    },
    {
      company: "Self-Employed",
      role: "Web Designer UI/Ux",
      start: "2021",
      end: "2025",
      location: "Leyte, Philippines",
      description:
        "Designed user-centered interfaces, wireframes, and responsive layouts for web and mobile experiences.",
      highlights: [],
    },
    {
      company: "Self-Employed",
      role: "Website Development",
      start: "2020",
      end: "Present",
      location: "Leyte, Philippines",
      description:
        "Built and maintained websites with modern front-end stacks, focusing on performance and clean UI.",
      highlights: [],
    },
    {
      company: "Self-Employed",
      role: "Video Editor",
      start: "2020",
      end: "2025",
      location: "Leyte, Philippines",
      description:
        "Edited short-form and long-form videos with pacing, color, and sound polish for online platforms.",
      highlights: [],
    },
    {
      company: "Self-Employed",
      role: "Email Generation",
      start: "2025",
      end: "Present",
      location: "Leyte, Philippines",
      description:
        "Managed lead generation workflows and outreach lists to support client pipeline growth.",
      highlights: [],
    },
    {
      company: "Self-Employed",
      role: "Social Media Analyst",
      start: "2020",
      end: "Present",
      location: "Leyte, Philippines",
      description:
        "Tracked content performance, optimized posting strategy, and delivered actionable insights.",
      highlights: [],
    },
    {
      company: "ACLC",
      role: "Technical Support",
      start: "2024",
      end: "2025",
      location: "Leyte, Philippines",
      description:
        "Provided IT support, troubleshooting, and system maintenance for campus hardware and software.",
      highlights: [],
    },
  ],
  education: [
    {
      school: "ACLC College of Tacloban",
      program: "Bachelor of Science in Information Technology",
      start: "2023",
      end: "2024",
      location: "Tacloban",
      details: ["Summa Cum Laude"],
    },
    {
      school: "ACLC College of Tacloban",
      program: "Web Applications Development (Diploma)",
      start: "2022",
      end: "2023",
      location: "Tacloban",
      details: ["12 Different proficiency awards"],
    },
    {
      school: "ACLC College of Tacloban",
      program: "Senior High School",
      start: "2019",
      end: "2020",
      location: "Tacloban",
      details: ["With Honors"],
    },
    {
      school: "Sta. Fe National High School",
      program: "Junior High School",
      start: "2017",
      end: "2018",
      location: "Sta. Fe",
      details: ["With Honors"],
    },
    {
      school: "Sta. Fe Central School",
      program: "Primary School",
      start: "2010",
      end: "2011",
      location: "Sta. Fe",
      details: [],
    },
  ],
  projects: [
    {
      slug: "furniture-design",
      title: "Furniture Design",
      category: "Graphic Design",
      featured: true,
      summary: "A bold graphic set exploring furniture form, material, and mood.",
      description:
        "A graphic design series that blends product storytelling with clean editorial layouts and tactile texture.",
      role: "Graphic Designer",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2025",
      cover: "/projects/images/furniture/F1.PNG",
      gallery: [
        "/projects/images/furniture/F1.PNG",
        "/projects/images/furniture/F2.PNG",
        "/projects/images/furniture/F3.PNG",
        "/projects/images/furniture/F4.PNG",
        "/projects/images/furniture/F5.PNG",
        "/projects/images/furniture/F6.PNG",
        "/projects/images/furniture/F7.PNG",
        "/projects/images/furniture/F8.PNG",
        "/projects/images/furniture/F9.PNG",
        "/projects/images/furniture/F10.PNG",
        "/projects/images/furniture/F11.PNG",
        "/projects/images/furniture/F12.PNG",
      ],
      tags: ["Print", "Layout", "Product"],
      process: [
        "Concept boards and layout direction",
        "Image editing and color shaping",
        "Typography system + grid refinement",
        "Final print-ready export",
      ],
      results: [
        "High-impact visuals for portfolio showcase",
        "Consistent system across 12 assets",
      ],
    },
    {
      slug: "typography-design",
      title: "Typography Studies",
      category: "Posters / Flyers",
      featured: false,
      summary: "Experimental type compositions exploring hierarchy and rhythm.",
      description:
        "A typography-focused series built around contrast, scale, and grid systems for bold messaging.",
      role: "Graphic Designer",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      year: "2025",
      cover: "/projects/images/text/T1.jpg",
      gallery: [
        "/projects/images/text/T1.jpg",
        "/projects/images/text/T2.jpg",
        "/projects/images/text/T3.png",
        "/projects/images/text/T4.jpg",
        "/projects/images/text/T5.jpg",
        "/projects/images/text/T6.png",
        "/projects/images/text/T7.png",
      ],
      tags: ["Typography", "Posters", "Editorial"],
      process: [
        "Type exploration and concept directions",
        "Grid refinement and hierarchy testing",
        "Final layout polish and exports",
      ],
      results: [
        "Clear typographic hierarchy",
        "Distinct visual rhythm across the set",
      ],
    },
    {
      slug: "logo-brands",
      title: "Logo Brands",
      category: "Branding",
      featured: true,
      summary: "Logo explorations and brand marks built for clarity and recall.",
      description:
        "A logo-focused branding collection featuring clean marks, typography choices, and scalable identity systems.",
      role: "Graphic Designer",
      tools: ["Adobe Illustrator", "Adobe Photoshop"],
      year: "2025",
      cover: "/projects/images/brands/L1.png",
      gallery: [
        "/projects/images/brands/L1.png",
        "/projects/images/brands/L2.png",
        "/projects/images/brands/L3.png",
        "/projects/images/brands/L4.png",
        "/projects/images/brands/L5.png",
        "/projects/images/brands/L6.png",
        "/projects/images/brands/L7.png",
        "/projects/images/brands/L8.png",
        "/projects/images/brands/L9.png",
        "/projects/images/brands/L10.png",
      ],
      tags: ["Logo", "Identity", "Branding"],
      process: [
        "Logo exploration and concept sketches",
        "Vector refinement and typography pairing",
        "Brand mark system and variations",
      ],
      results: [
        "Strong, scalable logo systems",
        "Clear brand recognition across uses",
      ],
    },
    {
      slug: "brochure-design",
      title: "Brochures",
      category: "Posters / Flyers",
      featured: true,
      summary: "Brochure layouts with clean hierarchy and bold visual rhythm.",
      description:
        "A brochure series designed to balance typography, imagery, and white space for clarity and impact.",
      role: "Graphic Designer",
      tools: ["Adobe Photoshop", "Adobe Illustrator"],
      year: "2025",
      cover: "/projects/images/brochure/B1.jpg",
      gallery: [
        "/projects/images/brochure/B1.jpg",
        "/projects/images/brochure/B2.jpg",
        "/projects/images/brochure/B3.jpg",
        "/projects/images/brochure/B4.jpg",
        "/projects/images/brochure/B5.jpg",
        "/projects/images/brochure/B6.jpg",
        "/projects/images/brochure/B7.jpg",
        "/projects/images/brochure/B8.png",
        "/projects/images/brochure/B9.png",
        "/projects/images/brochure/B10.png",
        "/projects/images/brochure/B11.png",
        "/projects/images/brochure/B12.png",
      ],
      tags: ["Editorial", "Print", "Layout"],
      process: [
        "Content structure and layout planning",
        "Typography and grid system setup",
        "Image treatment and alignment",
        "Print-ready finishing",
      ],
      results: [
        "Clear, readable brochure system",
        "Consistent visual language across pages",
      ],
    },
    {
      slug: "aurora-design",
      title: "Aurora Brand System",
      category: "Branding",
      featured: true,
      summary: "Luminous identity system for a wellness tech startup.",
      description:
        "Built a flexible brand system with vibrant gradients, modular typography, and a visual toolkit for product and marketing teams.",
      role: "Brand Strategy, Visual Identity, Art Direction",
      tools: ["Figma", "Illustrator", "After Effects"],
      year: "2024",
      cover: "/projects/images/aurora/A1.png",
      gallery: [
        "/projects/images/aurora/A1.png",
        "/projects/images/aurora/A2.png",
        "/projects/images/aurora/A3.png",
        "/projects/images/aurora/A4.png",
        "/projects/images/aurora/A5.png",
        "/projects/images/aurora/A6.png",
        "/projects/images/aurora/A7.jpg",
      ],
      tags: ["Identity", "Guidelines", "Launch"],
      process: [
        "Brand workshop + positioning",
        "Visual exploration and logo design",
        "Systemization across touchpoints",
      ],
      results: [
        "Increased signups by 28% in 6 weeks",
        "Unified product and marketing visuals",
      ],
    },
    {
      slug: "social-design",
      title: "Pulse Social Kit",
      category: "Social Media Creatives",
      featured: true,
      summary: "High-energy social templates for a music streaming platform.",
      description:
        "Designed an animated template kit with bold type, dynamic crops, and motion highlights for weekly drops.",
      role: "Creative Direction, Motion Design",
      tools: ["Photoshop", "After Effects"],
      year: "2023",
      cover: "/projects/images/pulse/P1.jpg",
      gallery: [
        "/projects/images/pulse/P1.jpg",
        "/projects/images/pulse/P2.jpg",
        "/projects/images/pulse/P3.jpg",
        "/projects/images/pulse/P4.jpg",
        "/projects/images/pulse/P5.jpg",
      ],
      tags: ["Social", "Motion", "Templates"],
      process: [
        "Moodboard and motion tests",
        "Template design system",
        "Weekly rollout and iteration",
      ],
      results: [
        "Cut content production time by 35%",
        "Improved engagement by 22%",
      ],
    },
    {
      slug: "neon-design",
      title: "Neon Market Posters",
      category: "Posters / Flyers",
      featured: true,
      summary: "Event poster series with neon gradients and bold grid play.",
      description:
        "Created a print and digital poster series with cinematic textures and typographic hierarchy.",
      role: "Graphic Design, Print Production",
      tools: ["Illustrator", "Photoshop"],
      year: "2022",
      cover: "/projects/images/neon/O1.jpg",
      gallery: [
        "/projects/images/neon/O1.jpg",
        "/projects/images/neon/O2.jpg",
        "/projects/images/neon/O3.jpg",
        "/projects/images/neon/O4.jpg",
        "/projects/images/neon/O5.jpg",
      ],
      tags: ["Print", "Events", "Typography"],
      process: [
        "Layout system exploration",
        "Print-ready production",
        "Digital adaptation",
      ],
      results: [
        "Sold out 3 nights in a row",
        "Featured on citywide billboards",
      ],
    },
    {
      slug: "creator-design",
      title: "Creator Thumbnail Kit",
      category: "Thumbnails / YouTube Branding",
      featured: true,
      summary: "High-contrast thumbnail system for a tech creator.",
      description:
        "Built a dynamic thumbnail kit with bold shapes, iconography, and modular photo crops to improve video click-through.",
      role: "Art Direction, Graphic Design",
      tools: ["Photoshop", "Illustrator"],
      year: "2024",
      cover: "/projects/images/thumbnail/U1.jpg",
      gallery: [
        "/projects/images/thumbnail/U1.jpg",
        "/projects/images/thumbnail/U2.jpg",
        "/projects/images/thumbnail/U3.jpg",
        "/projects/images/thumbnail/U4.jpg",
        "/projects/images/thumbnail/U5.jpg",
        "/projects/images/thumbnail/U6.png",
        "/projects/images/thumbnail/U7.png",
        "/projects/images/thumbnail/U8.png",
        "/projects/images/thumbnail/U9.png",
        "/projects/images/thumbnail/U10.png",
        "/projects/images/thumbnail/U11.png",
        "/projects/images/thumbnail/U12.png",
      ],
      tags: ["YouTube", "Templates", "Branding"],
      process: [
        "Channel audit and visual benchmarking",
        "Template design and iteration",
        "Style guide handoff",
      ],
      results: [
        "Boosted average CTR by 18%",
        "Reduced thumbnail production by 40%",
      ],
    },
    {
      slug: "lumen-design",
      title: "Lumen Studio Digital Portfolio",
      category: "Digital Design",
      featured: true,
      summary: "Editorial-style visual system for a studio portfolio.",
      description:
        "Designed a visual language with asymmetrical grids, typography hierarchy, and cinematic motion studies.",
      role: "Visual Design, Art Direction",
      tools: ["Figma", "Photoshop"],
      year: "2025",
      cover: "/projects/images/lumen/N1.jpg",
      gallery: [
        "/projects/images/lumen/N1.jpg",
        "/projects/images/lumen/N2.jpg",
        "/projects/images/lumen/N3.jpg",
        "/projects/images/lumen/N4.jpg",
        "/projects/images/lumen/N5.jpg",
        "/projects/images/lumen/N6.jpg",
        "/projects/images/lumen/N7.jpg",
        "/projects/images/lumen/N8.jpg",
        "/projects/images/lumen/N9.jpg",
        "/projects/images/lumen/N10.jpg",
        "/projects/images/lumen/N11.jpg",
        "/projects/images/lumen/N12.jpg",
      ],
      tags: ["Digital", "Editorial", "Motion"],
      process: [
        "Visual direction and layout planning",
        "Typography system and grid refinement",
        "Motion studies and final mockups",
      ],
      results: [
        "Consistent visual system across pages",
        "Stronger brand presence and clarity",
      ],
    },
    {
      slug: "drift-design",
      title: "Drift Commerce Visual System",
      category: "Digital Design",
      featured: false,
      summary: "Graphic system for an ecommerce brand with bold layouts.",
      description:
        "Developed a layout and visual toolkit that balances product focus and storytelling.",
      role: "Visual Design, Layout System",
      tools: ["Illustrator", "Photoshop", "Figma"],
      year: "2024",
      cover: "/projects/images/commerce/C1.jpg",
      gallery: [
        "/projects/images/commerce/C1.jpg",
        "/projects/images/commerce/C2.jpg",
        "/projects/images/commerce/C3.jpg",
        "/projects/images/commerce/C4.jpg",
        "/projects/images/commerce/C5.jpg",
        "/projects/images/commerce/C6.jpg",
        "/projects/images/commerce/C7.jpg",
        "/projects/images/commerce/C8.jpg",
        "/projects/images/commerce/C9.jpg",
        "/projects/images/commerce/C10.jpg",
        "/projects/images/commerce/C11.jpg",
        "/projects/images/commerce/C12.jpg",
      ],
      tags: ["Digital", "Layout", "Ecommerce"],
      process: [
        "Layout system and art direction",
        "Visual hierarchy refinement",
        "Asset production and delivery",
      ],
      results: [
        "Unified product visuals across pages",
        "Stronger merchandising clarity",
      ],
    },
    {
      slug: "vivid-design",
      title: "Vivid Launch Identity",
      category: "Branding",
      featured: false,
      summary: "Launch identity for a creative analytics platform.",
      description:
        "Crafted a bold identity with motion-first guidelines and flexible graphic elements.",
      role: "Brand Strategy, Visual Identity",
      tools: ["Illustrator", "After Effects"],
      year: "2022",
      cover: "/projects/images/event/E1.jpg",
      gallery: [
        "/projects/images/event/E1.jpg",
        "/projects/images/event/E2.jpg",
        "/projects/images/event/E3.jpg",
        "/projects/images/event/E4.jpg",
        "/projects/images/event/E5.jpg",
        "/projects/images/event/E6.jpg",
        "/projects/images/event/E7.jpg",
        "/projects/images/event/E8.jpg",
        "/projects/images/event/E9.jpg",
        "/projects/images/event/E10.jpg",
      ],
      tags: ["Launch", "Identity", "Systems"],
      process: [
        "Competitive audit",
        "Logo explorations",
        "Guidelines and assets",
      ],
      results: [
        "Adopted across 3 product lines",
        "Press featured in 4 outlets",
      ],
    },
    {
      slug: "synthwave-design",
      title: "Synthwave Event Flyers",
      category: "Posters / Flyers",
      featured: false,
      summary: "Retro-future poster series for an art collective.",
      description:
        "Designed a series of flyers with chromatic gradients and structured grids for a touring exhibition.",
      role: "Graphic Design",
      tools: ["Photoshop", "Illustrator"],
      year: "2021",
      cover: "/projects/images/synth/S1.jpg",
      gallery: [
        "/projects/images/synth/S1.jpg",
        "/projects/images/synth/S2.jpg",
        "/projects/images/synth/S3.jpg",
        "/projects/images/synth/S4.jpg",
        "/projects/images/synth/S5.jpg",
      ],
      tags: ["Print", "Events", "Retro"],
      process: [
        "Visual exploration",
        "Poster system",
        "Print production",
      ],
      results: [
        "Tour attendance up 19%",
        "Limited poster run sold out",
      ],
    },
  ],
  testimonials: [],
};

