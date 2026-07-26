/**
 * Central site config for SEO.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment once the real
 * domain is live — every canonical URL, OG tag, and sitemap entry uses it.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://befikra.com"
).replace(/\/$/, "");

export const SITE_NAME = "Befikra Partner";

export const SITE_DESCRIPTION =
  "India's intelligent CRM for travel brands, combining automation, analytics, and AI to power faster growth.";

export const SITE_LOCALE = "en_IN";

export const SOCIAL_PROFILES = [
  "https://instagram.com/befikrapartner",
  "https://x.com/befikrapartner",
  "https://linkedin.com/company/befikra",
  "https://youtube.com/@befikra",
];

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** "Nov 5, 2025" -> ISO string for schema.org / sitemap */
export function toIsoDate(date: string): string {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime())
    ? new Date().toISOString()
    : parsed.toISOString();
}
