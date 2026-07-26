"use client";

import dynamic from "next/dynamic";
import HeroBanner from "@/components/blog/HeroBanner";
import {
  featuredReadsCards,
  quickInsightsCards,
  inDepthCards,
  featuredTabs,
  inDepthTabs,
} from "@/components/blog/blogData";

const SectionFallback = () => <div className="min-h-[32vh] w-full bg-white" aria-hidden />;

const BlogSection = dynamic(() => import("@/components/blog/BlogSection"), {
  loading: SectionFallback,
});
const BlogsCTA = dynamic(() => import("@/components/blog/BlogsCTA"), {
  loading: SectionFallback,
});
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => null });

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      <BlogSection
        id="featured-reads"
        label="Featured Reads"
        heading="Learn. Optimize. Scale."
        cards={featuredReadsCards}
        tabs={featuredTabs}
        defaultTab="Automation & CRM"
      />
      <BlogSection
        label="Quick Insights"
        heading="Quick Insights For Busy Operators"
        cards={quickInsightsCards}
      />
      <BlogSection
        label="In-Depth Guides"
        heading="Deep Dive Into Trek Operations"
        cards={inDepthCards}
        tabs={inDepthTabs}
        defaultTab="CRM Automation"
      />
      <BlogsCTA />
      <Footer />
    </main>
  );
}
