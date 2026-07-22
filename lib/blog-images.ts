/** Reliable placeholder images via picsum.photos (Unsplash CDN IDs often 404) */

const picsum = (seed: string, w: number, h = Math.round(w * 0.6)) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const BLOG_HERO_IMAGE = picsum("befikra-blog-hero", 1920, 800);

export const BLOG_CARD_IMAGES = Array.from({ length: 12 }, (_, i) =>
  picsum(`befikra-blog-card-${i}`, 800, 480)
);

export const BLOG_ARTICLE_MOUNTAINS = picsum("befikra-article-mountains", 1200, 720);
export const BLOG_ARTICLE_TREK_TEAM = picsum("befikra-article-team", 1200, 720);

export function getBlogCardImage(index: number): string {
  return BLOG_CARD_IMAGES[index % BLOG_CARD_IMAGES.length];
}
