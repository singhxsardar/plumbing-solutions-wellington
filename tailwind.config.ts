import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design tokens — Plumbing Solutions Wellington
        deep: {
          DEFAULT: "#0B3D62", // deep blue — primary, header, footer
          900: "#082A44",
          800: "#0B3D62",
          700: "#0F4E7C",
        },
        brand: {
          DEFAULT: "#1C6DA8", // mid blue — CTAs, links
          600: "#175A8A",
          500: "#1C6DA8",
          400: "#2C86C7",
        },
        sky: {
          DEFAULT: "#3FA9F5", // accent — icon strokes, highlights
          400: "#5FBAF7",
          500: "#3FA9F5",
        },
        tint: {
          DEFAULT: "#EAF4FB", // light blue background wash
          50: "#F5FAFD",
          100: "#EAF4FB",
          200: "#D7EAF8",
        },
        ink: {
          DEFAULT: "#1E262E", // dark grey/blue text
          700: "#2B333B",
          500: "#5B6472", // muted secondary text
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(11, 61, 98, 0.06), 0 1px 2px rgba(11, 61, 98, 0.04)",
        cardHover: "0 12px 24px rgba(11, 61, 98, 0.12), 0 2px 6px rgba(11, 61, 98, 0.06)",
        header: "0 2px 12px rgba(11, 61, 98, 0.08)",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        flow: {
          "0%": { strokeDashoffset: "0" },
          "100%": { strokeDashoffset: "-40" },
        },
      },
      animation: {
        flow: "flow 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
