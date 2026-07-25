"use client";

import Footer from "@/components/Footer";
import MyLinkrHeroSection from "@/components/mylinkr/HeroSection";
import PhoneCarousel from "@/components/mylinkr/PhoneCarousel";
import PreviewToggle from "@/components/mylinkr/PreviewToggle";
import FeaturesGrid from "@/components/mylinkr/FeaturesGrid";
import Testimonials from "@/components/mylinkr/Testimonials";
import MyLinkrFAQ from "@/components/mylinkr/MyLinkrFAQ";
import MyLinkrCTA from "@/components/mylinkr/MyLinkrCTA";

export default function MyLinkrPage() {
  return (
    <main className="min-h-screen bg-white">
      <MyLinkrHeroSection />
      <PhoneCarousel />
      <PreviewToggle />
      <FeaturesGrid />
      <Testimonials />
      <MyLinkrFAQ />
      <MyLinkrCTA />
      <Footer />
    </main>
  );
}
