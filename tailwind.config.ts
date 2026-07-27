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
        navy: {
          DEFAULT: "#0A1E3B",
          dark: "#0A1E3B",
        },
        "brand-green": {
          DEFAULT: "#2D6A4F",
          dark: "#1F4D38",
          light: "#E8F3EE",
        },
        "primary-green": "#2D6A4F",
        "lime-accent": "#2D6A4F",
        "forest-dark": "#1F4D38",
        "navy-dark": "#0A1E3B",
        "near-black": "#111827",
        "off-white": "#F9FAFB",
        body: "#4A4A4A",
        subtext: "#6B7280",
        "footer-dark": "#06140F",
        "footer-link": "#A8B4C8",
        dark: {
          DEFAULT: "#06140F",
          card: "#0E1F13",
          panel: "#0A1510",
          elevated: "#12281C",
        },
        explore: {
          DEFAULT: "#1a5c3a",
          dark: "#145230",
          light: "#e8f5ee",
        },
        "brand-orange": "#F5A623",
        star: "#FBBF24",
        "border-default": "#E5E7EB",
        ink: "#111827",
        danger: "#E74C3C",
        "raven-dark": "#0E1F13",
        "raven-top": "#0D1A10",
        // Remap Tailwind emerald-* to forest greens so existing classes pick up brand palette
        emerald: {
          50: "#E8F3EE",
          100: "#D8EDE3",
          200: "#A7D7BC",
          300: "#6EE7B7",
          400: "#2D6A4F",
          500: "#2D6A4F",
          600: "#1F4D38",
          700: "#1A5C3A",
          800: "#145230",
          900: "#0D2B1F",
          950: "#06140F",
        },
      },
      fontFamily: {
        sans: ["var(--font-ui)", "var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        ui: ["var(--font-ui)", "var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        "dm-sans": ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.6875rem", { lineHeight: "1", letterSpacing: "0.22em" }],
        caption: ["0.75rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        home: "1520px",
        explore: "1420px",
        app: "72rem",
        content: "1200px",
      },
      borderRadius: {
        card: "16px",
        input: "12px",
        hero: "28px",
        "icon-well": "10px",
      },
      boxShadow: {
        card: "0 2px 12px rgba(10,30,59,0.06)",
        "card-hover": "0 8px 28px rgba(10,30,59,0.12)",
        modal: "0 24px 80px rgba(10,30,59,0.28)",
        "cta-glow": "0 4px 14px rgba(31,77,56,0.25)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
