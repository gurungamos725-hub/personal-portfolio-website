import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#070b14",
        graphite: "#101722",
        panel: "#121d2b",
        cyan: "#3be7ff",
        blue: "#2f80ff",
        violet: "#8b5cf6",
        mint: "#69f0ae",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(59, 231, 255, 0.16)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;
