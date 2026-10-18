export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  label: string;
  href: string;
  handle: string;
  isConfigured: boolean;
}

export interface CreativePillar {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface MilestoneItem {
  period: string;
  title: string;
  detail: string;
  isPlaceholder: boolean;
}

export interface SiteConfig {
  brand: {
    name: string;
    wordmark: string;
    positioning: string;
    tagline: string;
    heroHeadline: string;
    heroSupportingCopy: string;
    locationLabel: string;
    availabilityLabel: string;
  };
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    siteUrl?: string;
    ogImagePath: string;
  };
  navigation: NavItem[];
  contact: {
    email: string;
    isEmailConfigured: boolean;
    collaborationHeadline: string;
    collaborationCopy: string;
    inquiryTypes: string[];
    responseExpectation: string;
  };
  socials: SocialLink[];
  about: {
    leadStatement: string;
    editorialParagraphs: string[];
    philosophyQuote: string;
    portraitAsset: {
      src: string;
      alt: string;
      caption: string;
      isPlaceholder: boolean;
    };
    pillars: CreativePillar[];
    showMilestones: boolean;
    milestones: MilestoneItem[];
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Ahnaf Tahmid Season",
    wordmark: "SEASON®",
    positioning: "INDEPENDENT DIGITAL CREATOR",
    tagline: "Exploring AI, cinematic visuals, and the future of digital creativity.",
    heroHeadline: "Ideas beyond the ordinary.",
    heroSupportingCopy:
      "Exploring AI, cinematic visuals, and the future of digital creativity.",
    locationLabel: "Fulbari, Dinajpur, Bangladesh // AI Spoiler & Dark Reels",
    availabilityLabel: "Available for AI Tool Sponsorships, Video Collaborations & Creative Direction",
  },
  seo: {
    defaultTitle: "SEASON® — Ahnaf Tahmid Season | Digital Creator",
    titleTemplate: "%s — SEASON®",
    description:
      "Hey, I’m Ahnaf Tahmid Season, a 17-year-old content creator from Fulbari, Dinajpur, Bangladesh running AI Spoiler (@Ai_Spoiler) and Dark Reels (@DarkReels9).",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || undefined,
    ogImagePath: "/media/season-portrait.jpg",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "AI Spoiler", href: "/ai-spoiler" },
    { label: "Dark Reels", href: "/dark-reels" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "ahnaftahmidseason07022009@gmail.com",
    isEmailConfigured: true,
    collaborationHeadline: "Ideas beyond the ordinary.",
    collaborationCopy:
      "Open for selected collaborations in generative AI filmmaking, tool reviews & sponsorships on AI Spoiler, movie explanation & narrative breakdowns on Dark Reels, and creative direction.",
    inquiryTypes: [
      "AI Tool Sponsorship (@Ai_Spoiler)",
      "Cinematic Narrative & Trailer (@DarkReels9)",
      "Generative AI Video Production",
      "Creative Direction & Collaboration",
    ],
    responseExpectation:
      "Direct collaborations via ahnaftahmidseason07022009@gmail.com or official YouTube channels.",
  },
  socials: [
    {
      id: "ai-spoiler",
      platform: "YouTube",
      label: "AI Spoiler (@Ai_Spoiler)",
      href: "https://www.youtube.com/@Ai_Spoiler",
      handle: "@Ai_Spoiler",
      isConfigured: true,
    },
    {
      id: "dark-reels",
      platform: "YouTube",
      label: "Dark Reels (@DarkReels9)",
      href: "https://www.youtube.com/@DarkReels9",
      handle: "@DarkReels9",
      isConfigured: true,
    },
  ],
  about: {
    leadStatement:
      "Hey, I’m Ahnaf Tahmid Season, a 17-year-old content creator from Fulbari, Dinajpur, Bangladesh.",
    editorialParagraphs: [
      "Hey, I’m Ahnaf Tahmid Season, a 17-year-old content creator from Fulbari, Dinajpur, Bangladesh.",
      "I’ve always been curious about technology, especially AI. I love exploring new AI tools, experimenting with different ideas, and figuring out how technology can turn something that once seemed impossible into reality. That curiosity is a big part of who I am and what I create.",
      "Right now, I’m running two YouTube channels focused on different sides of my creativity: AI Spoiler, where I explore AI tools and share what’s possible with artificial intelligence, and Dark Reels, where I create movie explanation content. For me, content creation is more than just making videos. It’s a way to express ideas, learn new things, and turn my imagination into something people can enjoy.",
      "Outside of creating content, I’m a big football fan. I also enjoy learning, experimenting with new technology, and discovering things I haven’t tried before. I speak Bangla, Hindi, and English, which helps me connect with different people and explore ideas from different parts of the world.",
      "And one of my biggest dreams? To travel around the world someday. I want to experience different cultures, explore new places, meet interesting people, and see more of what life has to offer.",
      "I’m still at the beginning of my journey, with a lot to learn and a lot I want to build. But that’s what makes it exciting. I’m here to keep creating, keep exploring, and see how far curiosity can take me.",
    ],
    philosophyQuote: "This is just the beginning.",
    portraitAsset: {
      src: "/media/season-portrait.jpg",
      alt: "Ahnaf Tahmid Season — Content Creator from Fulbari, Dinajpur, Bangladesh",
      caption: "AHNAF TAHMID SEASON // FULBARI, DINAJPUR, BANGLADESH",
      isPlaceholder: false,
    },
    pillars: [
      {
        index: "01",
        title: "Curiosity for AI & Tech",
        subtitle: "Turning the Impossible into Reality",
        description:
          "Exploring new AI tools, experimenting with bold ideas, and discovering how emerging technology transforms imagination into reality.",
        capabilities: [
          "AI Video & Tool Exploration",
          "Creative Tech Experimentation",
          "Next-Gen Workflow Testing",
        ],
      },
      {
        index: "02",
        title: "AI Spoiler & Dark Reels",
        subtitle: "Two Sides of Creativity",
        description:
          "Running AI Spoiler (@Ai_Spoiler) to showcase what is possible with artificial intelligence, and Dark Reels (@DarkReels9) for movie explanations and storytelling.",
        capabilities: [
          "AI Spoiler (@Ai_Spoiler)",
          "Dark Reels (@DarkReels9)",
          "High-Retention Visual Storytelling",
        ],
      },
      {
        index: "03",
        title: "Beyond the Screen",
        subtitle: "Football, Learning & 3 Languages",
        description:
          "A passionate football fan who speaks Bangla, Hindi, and English—connecting with people and ideas across different cultures.",
        capabilities: [
          "Bangla · Hindi · English",
          "Passionate Football Fan",
          "Continuous Learner",
        ],
      },
      {
        index: "04",
        title: "Global Horizon",
        subtitle: "This Is Just the Beginning",
        description:
          "Dreaming of traveling around the world to experience diverse cultures, explore new places, meet inspiring people, and keep building.",
        capabilities: [
          "World Travel Ambition",
          "Cross-Cultural Exploration",
          "Long-Term Creative Journey",
        ],
      },
    ],
    showMilestones: true,
    milestones: [
      {
        period: "CHANNEL 01 // LIVE",
        title: "AI Spoiler (@Ai_Spoiler)",
        detail:
          "Exploring AI tools and sharing what’s possible with artificial intelligence.",
        isPlaceholder: false,
      },
      {
        period: "CHANNEL 02 // LIVE",
        title: "Dark Reels (@DarkReels9)",
        detail:
          "Creating movie explanation content and cinematic narrative breakdowns.",
        isPlaceholder: false,
      },
      {
        period: "NEXT HORIZON",
        title: "This Is Just the Beginning",
        detail:
          "Continuing to learn, build, and explore how far curiosity can take the journey from Fulbari, Dinajpur to the world.",
        isPlaceholder: false,
      },
    ],
  },
};
