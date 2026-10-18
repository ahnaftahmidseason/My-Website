export interface FeaturedVideoItem {
  id: string;
  videoId: string;
  channelId: "ai-spoiler" | "dark-reels";
  channelName: string;
  channelHandle: string;
  channelLogo: string;
  episodeNumber: string;
  title: string;
  category: string;
  summary: string;
  formatLabel: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  videoUrl: string;
  isPlaceholder: boolean;
}

export interface CreatorChannelProfile {
  id: "ai-spoiler" | "dark-reels";
  name: string;
  handle: string;
  url: string;
  logoSrc: string;
  bannerSrc: string;
  tagline: string;
  description: string;
  accentColor: string;
  badges: string[];
}

export interface AISpoilerConfig {
  channelName: string;
  tagline: string;
  channelHandle: string;
  channelUrl: string;
  channelLogo: string;
  isChannelUrlConfigured: boolean;
  editorialDescription: string;
  manifestoParagraphs: string[];
  channels: CreatorChannelProfile[];
  themes: {
    code: string;
    title: string;
    description: string;
  }[];
  featuredVideos: FeaturedVideoItem[];
}

export const aiSpoilerData: AISpoilerConfig = {
  channelName: "AI Spoiler & Dark Reels",
  tagline: "We test AI. You decide. Plus high-voltage cinematic narrative breakdowns.",
  channelHandle: "@Ai_Spoiler · @DarkReels9",
  channelUrl: "https://www.youtube.com/@Ai_Spoiler",
  channelLogo: "/media/channels/ai-spoiler-logo.png",
  isChannelUrlConfigured: true,
  editorialDescription:
    "SEASON® operates two distinct creator broadcast channels on YouTube: AI Spoiler (@Ai_Spoiler), dedicated to pushing generative AI video models to their absolute limit, and Dark Reels (@DarkReels9), crafting high-retention cinematic story explanations.",
  manifestoParagraphs: [
    "On AI Spoiler, every new generative video engine—from Meta Muse AI and Seedance 2.5 to Dola AI and Artplayer—is put through real production tests: multi-clip character consistency, 1080p upscaling, commercial creation, and zero-watermark workflows.",
    "On Dark Reels, global cinema, K-Drama thrillers, and blockbuster narratives are distilled into gripping visual recaps with bold thumbnail art direction and razor-sharp pacing.",
  ],
  channels: [
    {
      id: "ai-spoiler",
      name: "AI Spoiler",
      handle: "@Ai_Spoiler",
      url: "https://www.youtube.com/@Ai_Spoiler",
      logoSrc: "/media/channels/ai-spoiler-logo.png",
      bannerSrc: "/media/thumbnails/ai-spoiler-character-sheet.png",
      tagline: "WE TEST AI. YOU DECIDE.",
      description:
        "Exploring, testing, and revealing the best free and pro AI video generators, full-video AI agents, and commercial creation pipelines.",
      accentColor: "#1E6BFF",
      badges: ["Generative AI Video", "Muse AI & Seedance 2.5", "Tool Deep-Dives"],
    },
    {
      id: "dark-reels",
      name: "Dark Reels",
      handle: "@DarkReels9",
      url: "https://www.youtube.com/@DarkReels9",
      logoSrc: "/media/channels/dark-reels-logo.png",
      bannerSrc: "/media/thumbnails/cash-hero.png",
      tagline: "CINEMA DECODED IN HIGH TENSION.",
      description:
        "Cinematic story explanations, K-Drama full recaps, and blockbuster film breakdowns crafted with atmospheric pacing.",
      accentColor: "#60A5FA",
      badges: ["K-Drama Explanations", "Movie Breakdowns", "Cinematic Storytelling"],
    },
  ],
  themes: [
    {
      code: "SYS // 01",
      title: "AI Video Agents & Full Films",
      description:
        "Creating 2-minute consistent narratives, commercials, animated shorts, and podcasts with Meta Muse AI, Seedance 2.5, and Dola AI.",
    },
    {
      code: "SYS // 02",
      title: "Zero-Cost Production Pipelines",
      description:
        "Uncovering 100% free 1080p AI video generators, watermark-free exports, and daily high-volume cinematic workflows.",
    },
    {
      code: "SYS // 03",
      title: "Dark Reels Narrative Cinema",
      description:
        "High-retention story explanations across global series and films—Cashero, Weak Hero Class 2, Michael (2026), and Spider-Man.",
    },
  ],
  featuredVideos: [
    {
      id: "muse-ai-guide",
      videoId: "LMQUoNPrwqs",
      channelId: "ai-spoiler",
      channelName: "AI Spoiler",
      channelHandle: "@Ai_Spoiler",
      channelLogo: "/media/channels/ai-spoiler-logo.png",
      episodeNumber: "AI SPOILER // 01",
      title: "Meta Muse AI: The Ultimate Guide to AI Video Generation, Image Creation, and More",
      category: "AI Video Agent",
      summary:
        "Full breakdown of Meta Muse AI—generating consistent 2-minute videos, commercials, animated short films, image edits, and AI podcasts.",
      formatLabel: "YouTube Release // @Ai_Spoiler",
      thumbnailSrc: "/media/thumbnails/muse-ai-insane.png",
      thumbnailAlt: "Muse AI Is Insane — AI Agent That Creates Full Videos, Commercials & Podcasts",
      videoUrl: "https://youtu.be/LMQUoNPrwqs?si=5RWQJpnXUTMBrHoQ",
      isPlaceholder: false,
    },
    {
      id: "make-100-cinematic",
      videoId: "unqsjUxd12o",
      channelId: "ai-spoiler",
      channelName: "AI Spoiler",
      channelHandle: "@Ai_Spoiler",
      channelLogo: "/media/channels/ai-spoiler-logo.png",
      episodeNumber: "AI SPOILER // 02",
      title: "Make 100 Cinematic AI Videos Daily - Completely FREE",
      category: "High-Volume Pipeline",
      summary:
        "How to generate up to 100 cinematic AI videos per day with free commercial use and built-in Artplayer AI upscaling.",
      formatLabel: "YouTube Release // @Ai_Spoiler",
      thumbnailSrc: "/media/thumbnails/make-100-cinematic.png",
      thumbnailAlt: "Make 100 Cinematic AI Videos Daily Completely Free",
      videoUrl: "https://youtu.be/unqsjUxd12o?si=kZARYurNVJblTaVf",
      isPlaceholder: false,
    },
    {
      id: "seedance-dola-ai",
      videoId: "b_9HKRUUbec",
      channelId: "ai-spoiler",
      channelName: "AI Spoiler",
      channelHandle: "@Ai_Spoiler",
      channelLogo: "/media/channels/ai-spoiler-logo.png",
      episodeNumber: "AI SPOILER // 03",
      title: "Seedance 2.5 FREE: 30 Sec Videos in Dola AI | No Watermark",
      category: "Seedance 2.5 Workflow",
      summary:
        "Generating extended 30-second cinematic AI videos inside Dola AI powered by Seedance 2.5 with zero watermarks.",
      formatLabel: "YouTube Release // @Ai_Spoiler",
      thumbnailSrc: "/media/thumbnails/dola-seedance.png",
      thumbnailAlt: "Dola AI Seedance 2.5 Free 30 Sec Videos No Watermark",
      videoUrl: "https://youtu.be/b_9HKRUUbec?si=vTjTCykew2oN2OE6",
      isPlaceholder: false,
    },
    {
      id: "seedance-unlimited",
      videoId: "vdP3nvdZZsk",
      channelId: "ai-spoiler",
      channelName: "AI Spoiler",
      channelHandle: "@Ai_Spoiler",
      channelLogo: "/media/channels/ai-spoiler-logo.png",
      episodeNumber: "AI SPOILER // 04",
      title: "I Found a Way to Use Seedance 2.5 for FREE (Unlimited Access)",
      category: "Generative Access",
      summary:
        "Unlocking unlimited free access to Seedance 2.5 for high-consistency AI motion and cinematic shot generation.",
      formatLabel: "YouTube Release // @Ai_Spoiler",
      thumbnailSrc: "/media/thumbnails/seedance-free.png",
      thumbnailAlt: "100% Free Seedance Unlimited Access",
      videoUrl: "https://youtu.be/vdP3nvdZZsk?si=3urF77_wlbWAhwki",
      isPlaceholder: false,
    },
    {
      id: "dola-ai-truth",
      videoId: "bIdO-_8tdcA",
      channelId: "ai-spoiler",
      channelName: "AI Spoiler",
      channelHandle: "@Ai_Spoiler",
      channelLogo: "/media/channels/ai-spoiler-logo.png",
      episodeNumber: "AI SPOILER // 05",
      title: "I Tried Dola AI to Make Consistent Videos: Here is the Truth",
      category: "Consistency Test",
      summary:
        "Hands-on stress test of Dola AI's character and scene consistency across multi-shot AI storytelling.",
      formatLabel: "YouTube Release // @Ai_Spoiler",
      thumbnailSrc: "/media/thumbnails/free-ai-video-generators.png",
      thumbnailAlt: "Free AI Video Generators Consistency Test",
      videoUrl: "https://youtu.be/bIdO-_8tdcA?si=G0COVtMngHiuQ7TD",
      isPlaceholder: false,
    },
    {
      id: "cashero-kdrama",
      videoId: "X1coBwqqX5Y",
      channelId: "dark-reels",
      channelName: "Dark Reels",
      channelHandle: "@DarkReels9",
      channelLogo: "/media/channels/dark-reels-logo.png",
      episodeNumber: "DARK REELS // 01",
      title: "Cashero K-Drama Hindi Explanation | Full Story Explained in Hindi",
      category: "K-Drama Breakdown",
      summary:
        "High-stakes narrative breakdown of Cashero—where supernatural strength scales with every note of cash in hand.",
      formatLabel: "YouTube Release // @DarkReels9",
      thumbnailSrc: "/media/thumbnails/cash-hero.png",
      thumbnailAlt: "Cash Hero — Paisa Ya Zindagi?",
      videoUrl: "https://youtu.be/X1coBwqqX5Y?si=-K3iFRPymZMLj2Wy",
      isPlaceholder: false,
    },
    {
      id: "michael-biopic-2026",
      videoId: "30_nEmnSTng",
      channelId: "dark-reels",
      channelName: "Dark Reels",
      channelHandle: "@DarkReels9",
      channelLogo: "/media/channels/dark-reels-logo.png",
      episodeNumber: "DARK REELS // 02",
      title: "Michael Movie Explained in Hindi | Michael Jackson Biopic Full Story (2026)",
      category: "Biopic Feature",
      summary:
        "Complete cinematic story breakdown and analysis of the 2026 Michael Jackson biopic film.",
      formatLabel: "YouTube Release // @DarkReels9",
      thumbnailSrc: "/media/thumbnails/michael-biopic.png",
      thumbnailAlt: "2026 Ki Sabse Badia Movie — Michael Jackson Ki Biopic",
      videoUrl: "https://youtu.be/30_nEmnSTng?si=iR5RJCVuUOrjF42Z",
      isPlaceholder: false,
    },
    {
      id: "weak-hero-class-2",
      videoId: "MUV43acFN8M",
      channelId: "dark-reels",
      channelName: "Dark Reels",
      channelHandle: "@DarkReels9",
      channelLogo: "/media/channels/dark-reels-logo.png",
      episodeNumber: "DARK REELS // 03",
      title: "Weak Hero Class 2 All Episodes Explained in Hindi",
      category: "Series Recap",
      summary:
        "Full-season narrative analysis of Netflix's viral series Weak Hero Class Season 2.",
      formatLabel: "YouTube Release // @DarkReels9",
      thumbnailSrc: "/media/thumbnails/weak-hero-class-2.jpg",
      thumbnailAlt: "Netflix Viral Series Weak Hero Class Season 2",
      videoUrl: "https://youtu.be/MUV43acFN8M?si=oQRbIPaiN0i51O9-",
      isPlaceholder: false,
    },
    {
      id: "spider-man-brand-new-day",
      videoId: "5dEG1Uii40k",
      channelId: "dark-reels",
      channelName: "Dark Reels",
      channelHandle: "@DarkReels9",
      channelLogo: "/media/channels/dark-reels-logo.png",
      episodeNumber: "DARK REELS // 04",
      title: "Spider-Man Brand New Day Explained in Hindi | Kya MJ ne Peter ko pehchan liya?",
      category: "Cinema Theory",
      summary:
        "Deep dive into Spider-Man: Brand New Day plot threads, memory fractures, and Peter Parker's next chapter.",
      formatLabel: "YouTube Release // @DarkReels9",
      thumbnailSrc: "https://i.ytimg.com/vi/5dEG1Uii40k/hqdefault.jpg",
      thumbnailAlt: "Spider-Man Brand New Day Explained in Hindi",
      videoUrl: "https://youtu.be/5dEG1Uii40k?si=hrqxjqKQ_LR3v9Gn",
      isPlaceholder: false,
    },
    {
      id: "can-this-love-be-translated",
      videoId: "vnaqAcReVCk",
      channelId: "dark-reels",
      channelName: "Dark Reels",
      channelHandle: "@DarkReels9",
      channelLogo: "/media/channels/dark-reels-logo.png",
      episodeNumber: "DARK REELS // 05",
      title: "Can This Love Be Translated K-Drama Hindi Explanation | Full Story Recap",
      category: "K-Drama Recap",
      summary:
        "Full story explanation and character study of the K-Drama series Can This Love Be Translated.",
      formatLabel: "YouTube Release // @DarkReels9",
      thumbnailSrc: "https://i.ytimg.com/vi/vnaqAcReVCk/hqdefault.jpg",
      thumbnailAlt: "Can This Love Be Translated K-Drama Full Story Recap",
      videoUrl: "https://youtu.be/vnaqAcReVCk?si=zE-4MQ6xZwh2Z4O6",
      isPlaceholder: false,
    },
  ],
};
