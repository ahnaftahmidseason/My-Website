import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#030611",
        abyss: "#060B19",
        cobalt: "#0B1938",
        electric: "#2563EB",
        ice: "#93C5FD",
        glacial: "#FFFFFF",
        silver: "#8E96AA",
        slate: "#475569",
        ivory: "#030611",
        ink: "#FFFFFF",
        stone: "#1E293B",
        sand: "#081024",
        taupe: "#8E96AA",
        surface: "#060C1C",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "hero-monument": [
          "clamp(2.85rem, 7.2vw + 0.5rem, 7.25rem)",
          { lineHeight: "0.96", letterSpacing: "-0.045em" },
        ],
        "display-xl": [
          "clamp(2.4rem, 5.2vw + 0.5rem, 5.25rem)",
          { lineHeight: "0.98", letterSpacing: "-0.04em" },
        ],
        "display-lg": [
          "clamp(2rem, 3.8vw + 0.4rem, 4rem)",
          { lineHeight: "1.02", letterSpacing: "-0.035em" },
        ],
        "display-md": [
          "clamp(1.5rem, 2.4vw + 0.3rem, 2.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "editorial-lead": [
          "clamp(1.05rem, 0.9vw + 0.5rem, 1.3rem)",
          { lineHeight: "1.55", letterSpacing: "-0.01em" },
        ],
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        subtle: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      spacing: {
        "section-sm": "clamp(4rem, 7vw, 6.5rem)",
        "section-md": "clamp(5.5rem, 10vw, 9.5rem)",
        "section-lg": "clamp(7rem, 12vw, 12rem)",
      },
      borderRadius: {
        editorial: "4px",
        card: "10px",
        pill: "9999px",
      },
    },
  },
  plugins: [],
};

export default config;
