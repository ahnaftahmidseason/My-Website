export type ProjectCategory =
  | "AI & Generative Cinema"
  | "Creative Technology"
  | "Motion Direction"
  | "Experimental Systems";

export interface ProjectItem {
  slug: string;
  index: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  year?: string;
  isPlaceholder: boolean;
  featured: boolean;
  summary: string;
  editorialOverview: string[];
  deliverables: string[];
  toolsAndMediums: string[];
  thumbnailSrc: string;
  secondarySrc?: string;
  thumbnailAlt: string;
  visualMotif:
    | "liquid-chrome"
    | "monolith-light"
    | "latent-horizon"
    | "kinetic-grid"
    | "acoustic-glass"
    | "chrono-study";
  externalUrl?: string;
  externalLabel?: string;
  aspectRatio: "16:10" | "4:5" | "16:9";
}

export const projectCategories: ProjectCategory[] = [
  "AI & Generative Cinema",
  "Creative Technology",
  "Motion Direction",
  "Experimental Systems",
];

export const projectsData: ProjectItem[] = [
  {
    slug: "meta-muse-ai-production",
    index: "01",
    title: "Meta Muse AI — Full-Video Agent Architecture",
    subtitle: "Multi-clip consistent AI cinema, commercials, animated shorts & synthetic podcasts",
    category: "AI & Generative Cinema",
    year: "2026 // AI Spoiler",
    isPlaceholder: false,
    featured: true,
    summary:
      "An end-to-end production study on Meta Muse AI—orchestrating 2-minute consistent 12-clip narratives, product commercials, 60-second animated short films, and dual-host AI podcasts.",
    editorialOverview: [
      "Produced as a flagship deep-dive for AI Spoiler (@Ai_Spoiler), this study tests Meta Muse AI across five distinct creative verticals: multi-clip narrative video generation, commercial look-dev, 3D-style animated shorts, semantic image editing, and voice/audio podcast synthesis.",
      "The visual art direction pairs electric cobalt rim lighting with high-contrast interface telemetry to communicate complex AI agent capabilities at a glance.",
    ],
    deliverables: [
      "Full YouTube Production Breakdown",
      "12-Clip Narrative Consistency Test",
      "High-CTR Thumbnail Visual System",
    ],
    toolsAndMediums: [
      "Meta Muse AI",
      "Generative Video Direction",
      "Synthetic Voice & Audio",
      "Visual Packaging",
    ],
    thumbnailSrc: "/media/thumbnails/muse-ai-insane.png",
    secondarySrc: "/media/thumbnails/muse-ai-full.png",
    thumbnailAlt: "Muse AI Is Insane — AI Agent That Creates Full Videos, Commercials & Podcasts",
    visualMotif: "liquid-chrome",
    externalUrl: "https://youtu.be/LMQUoNPrwqs?si=5RWQJpnXUTMBrHoQ",
    externalLabel: "Watch on AI Spoiler (@Ai_Spoiler)",
    aspectRatio: "16:9",
  },
  {
    slug: "seedance-dola-cinema-pipeline",
    index: "02",
    title: "Seedance 2.5 & Dola AI — 30s Zero-Watermark Cinema",
    subtitle: "Extended-duration generative video synthesis and character continuity",
    category: "AI & Generative Cinema",
    year: "2026 // AI Spoiler",
    isPlaceholder: false,
    featured: true,
    summary:
      "Unlocking 30-second continuous AI video generation inside Dola AI with Seedance 2.5—solving temporal flicker, character drift, and watermark-free mastering.",
    editorialOverview: [
      "Short 4-second loops rarely suffice for real storytelling. This production workflow demonstrates how to chain Seedance 2.5 inside Dola AI for 30-second unwatermarked sequences across fantasy landscapes, urban night chases, and character close-ups.",
      "Tested across multiple episodes on @Ai_Spoiler to give independent creators a reliable, zero-cost cinema pipeline.",
    ],
    deliverables: [
      "30-Second Continuous AI Sequence Workflow",
      "Seedance 2.5 Unlimited Access Guide",
      "Character Consistency Benchmark",
    ],
    toolsAndMediums: [
      "Seedance 2.5",
      "Dola AI",
      "Temporal Continuity",
      "1080p Mastering",
    ],
    thumbnailSrc: "/media/thumbnails/dola-seedance.png",
    secondarySrc: "/media/thumbnails/seedance-free.png",
    thumbnailAlt: "Dola AI Seedance 2.5 Free 30 Sec Videos No Watermark",
    visualMotif: "monolith-light",
    externalUrl: "https://youtu.be/b_9HKRUUbec?si=vTjTCykew2oN2OE6",
    externalLabel: "Watch Seedance 2.5 Breakdown",
    aspectRatio: "16:9",
  },
  {
    slug: "cashero-dark-reels-narrative",
    index: "03",
    title: "Cashero & Weak Hero — Dark Reels Cinema Decoded",
    subtitle: "High-tension narrative editing and visual storytelling for global K-Drama thrillers",
    category: "Motion Direction",
    year: "2026 // Dark Reels",
    isPlaceholder: false,
    featured: true,
    summary:
      "Flagship narrative explanations on Dark Reels (@DarkReels9)—transforming complex multi-episode K-Dramas and feature films into gripping Hindi audio-visual essays.",
    editorialOverview: [
      "Dark Reels (@DarkReels9) approaches film and series explanations as cinema in their own right. From the moral dilemma of Cashero ('Paisa Ya Zindagi?') to Netflix's viral Weak Hero Class 2 and the 2026 Michael Jackson Biopic, every edit is paced for maximum narrative tension.",
      "Each release is paired with custom split-diopter and dramatic portrait poster art direction.",
    ],
    deliverables: [
      "Cashero Full Story Breakdown",
      "Weak Hero Class 2 All-Episodes Recap",
      "Michael (2026) Biopic Analysis",
    ],
    toolsAndMediums: [
      "Narrative Montage",
      "Cinematic Audio Pacing",
      "Poster & Thumbnail Art Direction",
      "Dark Reels Identity",
    ],
    thumbnailSrc: "/media/thumbnails/cash-hero.png",
    secondarySrc: "/media/thumbnails/michael-biopic.png",
    thumbnailAlt: "Cash Hero — Paisa Ya Zindagi? Dark Reels Breakdown",
    visualMotif: "kinetic-grid",
    externalUrl: "https://youtu.be/X1coBwqqX5Y?si=-K3iFRPymZMLj2Wy",
    externalLabel: "Watch on Dark Reels (@DarkReels9)",
    aspectRatio: "16:9",
  },
  {
    slug: "hundred-cinematic-ai-videos-daily",
    index: "04",
    title: "100 Cinematic AI Videos / Day — Automated Studio System",
    subtitle: "High-volume text-to-video, image-to-video, and Artplayer AI upscaling architecture",
    category: "Creative Technology",
    year: "2026 // AI Spoiler",
    isPlaceholder: false,
    featured: true,
    summary:
      "Designing a repeatable daily production system capable of generating and upscaling 100 commercial-ready AI video clips without subscription bottlenecks.",
    editorialOverview: [
      "Built for digital creators scaling YouTube and short-form cinema channels, this workflow combines batch text-to-video prompting, image-to-video motion anchoring, and real-time Artplayer AI optical upscaling.",
      "Featured on @Ai_Spoiler with full side-by-side before/after resolution comparisons.",
    ],
    deliverables: [
      "100 Videos/Day Pipeline Architecture",
      "Artplayer AI Upscaler Benchmark",
      "Commercial-Use Licensing Guide",
    ],
    toolsAndMediums: [
      "Text-to-Video Systems",
      "Image-to-Video Anchoring",
      "Artplayer AI Upscaler",
      "Workflow Automation",
    ],
    thumbnailSrc: "/media/thumbnails/make-100-cinematic.png",
    secondarySrc: "/media/thumbnails/free-1080p-generator.png",
    thumbnailAlt: "Make 100 Cinematic AI Videos Daily Completely Free",
    visualMotif: "acoustic-glass",
    externalUrl: "https://youtu.be/unqsjUxd12o?si=kZARYurNVJblTaVf",
    externalLabel: "Watch Pipeline Guide",
    aspectRatio: "16:9",
  },
  {
    slug: "ai-spoiler-character-identity",
    index: "05",
    title: "AI Spoiler Identity & Character Sheet System",
    subtitle: "Consistent digital host architecture ('Aiden') & electric-cobalt visual language",
    category: "Experimental Systems",
    year: "2026 // SEASON®",
    isPlaceholder: false,
    featured: false,
    summary:
      "Developing a recognizable creator persona, electric-blue & violet lighting system, and modular UI overlays across every AI Spoiler broadcast.",
    editorialOverview: [
      "Rather than generic stock thumbnails, AI Spoiler uses a unified character sheet system ('Aiden — AI Explorer & Reviewer — Tagline: WE TEST AI. YOU DECIDE.') with a strict five-swatch electric-blue, violet, obsidian, slate, and glacial-white palette.",
      "This visual continuity makes every release immediately identifiable in crowded feeds.",
    ],
    deliverables: [
      "Creator Character Sheet & Lookbook",
      "Electric-Blue & Violet Rim-Light Spec",
      "Channel Logo & Motion Graphics Kit",
    ],
    toolsAndMediums: [
      "Character Consistency",
      "Brand Design System",
      "Digital Art Direction",
    ],
    thumbnailSrc: "/media/thumbnails/ai-spoiler-character-sheet.png",
    thumbnailAlt: "AI Spoiler Character Sheet and Brand Identity System",
    visualMotif: "latent-horizon",
    externalUrl: "https://www.youtube.com/@Ai_Spoiler",
    externalLabel: "Visit @Ai_Spoiler Channel",
    aspectRatio: "16:9",
  },
  {
    slug: "optical-watermark-restoration",
    index: "06",
    title: "Google Vids Optical Clean-Plate & Restoration",
    subtitle: "Before/after frame restoration and clean-plate video mastering for creators",
    category: "Creative Technology",
    year: "2026 // AI Spoiler",
    isPlaceholder: false,
    featured: false,
    summary:
      "Technical demonstration of optical clean-plate restoration and watermark-free mastering for AI-generated video plates.",
    editorialOverview: [
      "A practical utility breakdown showing how creators restore clean 16:9 and 9:16 video plates while preserving alpine reflections, fine foliage detail, and color fidelity.",
    ],
    deliverables: [
      "Before / After Clean-Plate Comparison",
      "Short-Form Vertical Tutorial",
    ],
    toolsAndMediums: [
      "Google Vids",
      "Optical Inpainting",
      "Clean-Plate Mastering",
    ],
    thumbnailSrc: "/media/thumbnails/google-vids-watermark.png",
    thumbnailAlt: "Google Vids Watermark Removal Before and After",
    visualMotif: "chrono-study",
    externalUrl: "https://www.youtube.com/@Ai_Spoiler",
    externalLabel: "Explore on @Ai_Spoiler",
    aspectRatio: "4:5",
  },
];
