import type { BlogCardProps } from "@/components/blog/BlogCard";
import { blogPosts, toCardData } from "@/lib/blog-data";

function asCards(
  posts: typeof blogPosts
): BlogCardProps[] {
  return posts.map((p) => toCardData(p));
}

export const featuredReadsCards: BlogCardProps[] = asCards(
  blogPosts.filter((p) => p.listGroup === "featured")
);

export const quickInsightsCards: BlogCardProps[] = asCards(
  blogPosts.filter((p) => p.listGroup === "quick")
);

export const inDepthCards: BlogCardProps[] = asCards(
  blogPosts.filter((p) => p.listGroup === "indepth")
);

export const featuredTabs = [
  "Automation & CRM",
  "Booking Systems",
  "Operations Management",
  "AI & Insights",
  "Growth Strategies",
];

export const inDepthTabs = [
  "CRM Automation",
  "Lead Management",
  "Booking Workflow",
  "Customer Experience",
];
