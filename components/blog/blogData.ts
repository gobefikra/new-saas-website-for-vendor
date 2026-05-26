import type { BlogCardProps } from "@/components/blog/BlogCard";
import { blogPost } from "@/lib/blog-data";
import { getBlogCardImage } from "@/lib/blog-images";

let cardImageIndex = 0;
const trekImg = () => getBlogCardImage(cardImageIndex++);

export const featuredReadsCards: BlogCardProps[] = [
  {
    category: "Automation & CRM",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "How to Automate Your Trekking Business Without Hiring More Staff",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
    slug: blogPost.slug,
  },
  {
    category: "Automation & CRM",
    date: "Nov 3, 2025",
    readTime: "6 Mins Read",
    title: "CRM Workflows Every Trek Operator Should Automate First",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Automation & CRM",
    date: "Oct 28, 2025",
    readTime: "4 Mins Read",
    title: "From Spreadsheets to Smart Dashboards in 30 Days",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Booking Systems",
    date: "Nov 8, 2025",
    readTime: "5 Mins Read",
    title: "The Bottlenecks in Manual Trek Booking Systems",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Booking Systems",
    date: "Nov 1, 2025",
    readTime: "7 Mins Read",
    title: "Why Instant Booking Pages Convert More Trekkers",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Booking Systems",
    date: "Oct 22, 2025",
    readTime: "5 Mins Read",
    title: "Reducing No-Shows with Automated Confirmations",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Operations Management",
    date: "Nov 6, 2025",
    readTime: "6 Mins Read",
    title: "Managing Trek Batches Without the Spreadsheet Chaos",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Operations Management",
    date: "Oct 30, 2025",
    readTime: "5 Mins Read",
    title: "Peak Season Ops: A Playbook for Trek Leaders",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Operations Management",
    date: "Oct 18, 2025",
    readTime: "4 Mins Read",
    title: "Vendor Coordination Made Simple for Multi-Day Treks",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "AI & Insights",
    date: "Nov 7, 2025",
    readTime: "5 Mins Read",
    title: "Using AI to Improve Trekker Experience & Conversions",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "AI & Insights",
    date: "Nov 2, 2025",
    readTime: "6 Mins Read",
    title: "Predicting Demand for Popular Trek Routes with Data",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "AI & Insights",
    date: "Oct 25, 2025",
    readTime: "5 Mins Read",
    title: "Smart Reply Templates That Sound Human on WhatsApp",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Growth Strategies",
    date: "Nov 4, 2025",
    readTime: "5 Mins Read",
    title: "Scaling Your Trek Brand Without Burning Out Your Team",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Growth Strategies",
    date: "Oct 27, 2025",
    readTime: "6 Mins Read",
    title: "Referral Programs That Work for Adventure Businesses",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Growth Strategies",
    date: "Oct 15, 2025",
    readTime: "4 Mins Read",
    title: "Turning Instagram DMs Into Confirmed Bookings",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
];

export const quickInsightsCards: BlogCardProps[] = [
  {
    category: "Quick Insights",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Reduce booking time from hours to minutes",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Quick Insights",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Automate waivers and confirmations",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
  {
    category: "Quick Insights",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Track leads without spreadsheets",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.....",
    imageSrc: trekImg(),
  },
];

export const inDepthCards: BlogCardProps[] = [
  {
    category: "CRM Automation",
    date: "Nov 5, 2025",
    readTime: "5 Mins Read",
    title: "Why Trek Operators Are Moving to Automation",
    excerpt: "Understanding the shift from manual to AI-driven systems.",
    imageSrc: trekImg(),
  },
  {
    category: "CRM Automation",
    date: "Nov 1, 2025",
    readTime: "6 Mins Read",
    title: "Building Automated Lead Routing for Multi-Channel Inquiries",
    excerpt: "Understanding the shift from manual to AI-driven systems.",
    imageSrc: trekImg(),
  },
  {
    category: "CRM Automation",
    date: "Oct 20, 2025",
    readTime: "5 Mins Read",
    title: "The ROI of CRM Automation for Small Trek Teams",
    excerpt: "Understanding the shift from manual to AI-driven systems.",
    imageSrc: trekImg(),
  },
  {
    category: "Lead Management",
    date: "Nov 6, 2025",
    readTime: "5 Mins Read",
    title: "How CRM Systems Improve Trek Operations",
    excerpt: "From lead capture to trek completion.",
    imageSrc: trekImg(),
  },
  {
    category: "Lead Management",
    date: "Oct 29, 2025",
    readTime: "6 Mins Read",
    title: "Tagging Leads by Source: WhatsApp, Instagram, and Web",
    excerpt: "From lead capture to trek completion.",
    imageSrc: trekImg(),
  },
  {
    category: "Lead Management",
    date: "Oct 17, 2025",
    readTime: "4 Mins Read",
    title: "Follow-Up Sequences That Convert Cold Inquiries",
    excerpt: "From lead capture to trek completion.",
    imageSrc: trekImg(),
  },
  {
    category: "Booking Workflow",
    date: "Nov 4, 2025",
    readTime: "5 Mins Read",
    title: "Scaling Operations Without Increasing Costs",
    excerpt: "Using automation to grow sustainably.",
    imageSrc: trekImg(),
  },
  {
    category: "Booking Workflow",
    date: "Oct 26, 2025",
    readTime: "7 Mins Read",
    title: "End-to-End Booking Flows for Group Treks",
    excerpt: "Using automation to grow sustainably.",
    imageSrc: trekImg(),
  },
  {
    category: "Booking Workflow",
    date: "Oct 14, 2025",
    readTime: "5 Mins Read",
    title: "Payment Reminders That Reduce Last-Minute Cancellations",
    excerpt: "Using automation to grow sustainably.",
    imageSrc: trekImg(),
  },
  {
    category: "Customer Experience",
    date: "Nov 3, 2025",
    readTime: "5 Mins Read",
    title: "Personalized Trek Recommendations at Scale",
    excerpt: "Delighting trekkers before they even arrive.",
    imageSrc: trekImg(),
  },
  {
    category: "Customer Experience",
    date: "Oct 24, 2025",
    readTime: "6 Mins Read",
    title: "Post-Trek Feedback Loops That Drive Repeat Bookings",
    excerpt: "Delighting trekkers before they even arrive.",
    imageSrc: trekImg(),
  },
  {
    category: "Customer Experience",
    date: "Oct 12, 2025",
    readTime: "4 Mins Read",
    title: "WhatsApp Updates Trekkers Actually Want to Receive",
    excerpt: "Delighting trekkers before they even arrive.",
    imageSrc: trekImg(),
  },
];

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
