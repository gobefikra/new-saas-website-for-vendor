"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/blog/HeroBanner";
import BlogSection from "@/components/blog/BlogSection";
import BlogsCTA from "@/components/blog/BlogsCTA";
import {
  featuredReadsCards,
  quickInsightsCards,
  inDepthCards,
  featuredTabs,
  inDepthTabs,
} from "@/components/blog/blogData";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner />
      <BlogSection
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
        showArrows
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
