/** Adventure & trek photos (Unsplash — free to use) */

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const BLOG_HERO_IMAGE = unsplash("1506905925346-21bda4d32df4", 1920);

export const BLOG_CARD_IMAGES = [
  unsplash("1551632811-562e4d453b2a"), // hikers on mountain trail
  unsplash("1464822759023-fed622ff2d3d"), // mountaineer at summit
  unsplash("1454496524508-65b97d5a0dd7"), // green mountain valley
  unsplash("1519681393784-d120267933ba"), // snowy peaks
  unsplash("1522163182082-0044adf42a69"), // hiking group on trail
  unsplash("1483728642382-f492f39e3f22"), // peaks above clouds
  unsplash("1478131143081-269f7d34b65f"), // camping under stars
  unsplash("1501785881-672b723a2ef8"), // lake and mountains
  unsplash("1551524163-839947690e30"), // rock climbing
  unsplash("1504280390367-361c50457226"), // mountain camping
  unsplash("1469474968028-56623f02e42e"), // forest trail hike
  unsplash("1682687220067-94c88e27f5a9"), // adventure trekking
];

export const BLOG_ARTICLE_MOUNTAINS = unsplash("1483728642382-f492f39e3f22", 1200);
export const BLOG_ARTICLE_TREK_TEAM = unsplash("1522163182082-0044adf42a69", 1200);

export function getBlogCardImage(index: number): string {
  return BLOG_CARD_IMAGES[index % BLOG_CARD_IMAGES.length];
}
