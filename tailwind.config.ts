import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#10B981",
        "lime-accent": "#84CC16",
        "forest-dark": "#0D2B1F",
        "navy-dark": "#0F172A",
        "near-black": "#111827",
        "off-white": "#F9FAFB",
        body: "#374151",
        subtext: "#6B7280",
        "footer-dark": "#0A1F14",
        "raven-dark": "#0E1F13",
        "raven-top": "#0D1A10",
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
