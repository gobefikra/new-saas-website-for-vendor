import { getBlogCardImage } from "@/lib/blog-images";

export const blogPost = {
  slug: "how-to-automate-trekking-business",
  category: "Automation / CRM",
  title: "How to Automate Your Trekking Business Without Hiring More Staff",
  excerpt:
    "Scaling a mountain is hard; scaling your operations shouldn't be. Discover how the Befikra CRM handles bookings, lead management, and logistics while you're at basecamp. Scaling a mountain is hard; scaling your operations shouldn't be. Discover how the Befikra CRM handles bookings, lead management, and logistics while you're at basecamp.",
  author: {
    name: "Sparsh Jain",
    role: "Trek Operations Expert",
    bio: "Sparsh has spent 10 years optimizing logistics for top-tier adventure travel companies across the Himalayas and the Alps.",
  },
  date: "Nov 5, 2025",
  readTime: "5 mins read",
};

export const relatedPosts = [
  {
    slug: "how-to-automate-trekking-business",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Introducing Befikra Workflows",
    excerpt:
      "Automate your most complex internal processes with our new visual workflow builder. No code....",
    category: "Automation & CRM",
    imageSrc: getBlogCardImage(0),
  },
  {
    slug: "how-to-automate-trekking-business",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Scaling PostgreSQL for time-series data",
    excerpt:
      "Lessons learned from migrating 50TB of analytics data without dropping a single customer request....",
    category: "AI & Insights",
    imageSrc: getBlogCardImage(1),
  },
  {
    slug: "how-to-automate-trekking-business",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Why we default to asynchronous communication",
    excerpt:
      "How our distributed team of 40 people stays aligned, productive, and sane without endless....",
    category: "Growth Strategies",
    imageSrc: getBlogCardImage(2),
  },
];

export const popularArticles = [
  {
    title: "5 Essential Digital Waivers Every Operator Needs",
    meta: "Legal | 4 min read",
  },
  {
    title: "How to Market Your New Winter Trekking Routes",
    meta: "Marketing | 6 min read",
  },
  {
    title: "Managing Customer Expectations Pre-Departure",
    meta: "Customer Success | 5 min read",
  },
];

export const moreFromBlog = relatedPosts;

export function getBlogPostBySlug(slug: string) {
  if (slug === blogPost.slug) return blogPost;
  return null;
}

export const blogSlugs = [blogPost.slug];
