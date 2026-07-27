"use client";

import dynamic from "next/dynamic";
import MyLinkrHeroSection from "@/components/mylinkr/HeroSection";

const SectionFallback = () => <div className="min-h-[36vh] w-full bg-white" aria-hidden />;

const PhoneCarousel = dynamic(() => import("@/components/mylinkr/PhoneCarousel"), {
  loading: SectionFallback,
});
const PreviewToggle = dynamic(() => import("@/components/mylinkr/PreviewToggle"), {
  loading: SectionFallback,
});
const FeaturesGrid = dynamic(() => import("@/components/mylinkr/FeaturesGrid"), {
  loading: SectionFallback,
});
const Testimonials = dynamic(() => import("@/components/mylinkr/Testimonials"), {
  loading: SectionFallback,
});
const MyLinkrFAQ = dynamic(() => import("@/components/mylinkr/MyLinkrFAQ"), {
  loading: SectionFallback,
});
const MyLinkrCTA = dynamic(() => import("@/components/mylinkr/MyLinkrCTA"), {
  loading: SectionFallback,
});
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => null });

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
