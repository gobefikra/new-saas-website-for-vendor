/**
 * Canonical GoBefikra / Travel Befikra UI theme.
 * Prefer these tokens (or matching Tailwind / CSS vars) over ad-hoc hex values.
 */

export const brand = {
  // Primary palette
  navy: "#0A1E3B",
  green: "#2D6A4F",
  greenDark: "#1F4D38",
  greenLight: "#E8F3EE",
  action: "#1A5C3A",
  muted: "#6B7280",
  orange: "#F5A623",
  star: "#FBBF24",
  border: "#E5E7EB",
  surfaceHover: "#F9FAFB",
  ink: "#111827",
  danger: "#E74C3C",
  info: "#2563EB",
  footer: "#06140F",
  footerLink: "#A8B4C8",
  accentMint: "#6EE7B7",
  white: "#FFFFFF",

  // Dark surfaces (forest — not blue/navy)
  dark: "#06140F",
  darkCard: "#0E1F13",
  darkPanel: "#0A1510",
  darkElevated: "#12281C",

  // Aliases kept for existing imports
  primary: "#2D6A4F",
  primaryDark: "#1F4D38",
  lime: "#2D6A4F",
  forest: "#1F4D38",
  nearBlack: "#111827",
  body: "#4A4A4A",
  subtext: "#6B7280",
  offWhite: "#F9FAFB",
  mint: "#E8F3EE",
  mintBorder: "#A7D7BC",
  footerDark: "#06140F",
  ravenDark: "#0E1F13",
  ravenTop: "#0D1A10",
  ravenCard: "#12281C",
  ravenBorder: "#1A3328",
  ravenPanel: "#0A1510",
} as const;

export const brandShadows = {
  card: "0 2px 12px rgba(10,30,59,0.06)",
  cardHover: "0 8px 28px rgba(10,30,59,0.12)",
  modal: "0 24px 80px rgba(10,30,59,0.28)",
  ctaGlow: "0 4px 14px rgba(31,77,56,0.25)",
} as const;

export const brandMotion = {
  ease: [0.16, 1, 0.3, 1] as const,
  durationUi: 0.2,
  durationEnter: 0.28,
} as const;

export type BrandColor = (typeof brand)[keyof typeof brand];
