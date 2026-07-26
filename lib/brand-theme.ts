/**
 * Canonical Befikra Partner UI theme.
 * Prefer these tokens (or matching Tailwind classes) over ad-hoc hex values.
 */

export const brand = {
  primary: "#10B981", // primary-green / emerald-500
  primaryDark: "#059669", // emerald-600 - CTAs, emphasis
  lime: "#10B981", // accent green (aligned with primary)
  forest: "#0D2B1F", // forest-dark
  navy: "#0F172A", // navy-dark
  nearBlack: "#111827",
  body: "#374151",
  subtext: "#6B7280",
  muted: "#9CA3AF",
  offWhite: "#F9FAFB",
  white: "#FFFFFF",
  mint: "#ECFDF5", // emerald-50
  mintBorder: "#A7F3D0", // emerald-200
  footerDark: "#0A1F14",
  ravenDark: "#0E1F13",
  ravenTop: "#0D1A10",
  ravenCard: "#0F1F18",
  ravenBorder: "#1A3328",
  ravenPanel: "#0A120E",
} as const;

export type BrandColor = (typeof brand)[keyof typeof brand];
