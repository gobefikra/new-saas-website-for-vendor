"use client";

import dynamic from "next/dynamic";
import StoryHeroSection from "@/components/our-story/HeroSection";

const SectionFallback = () => (
  <div className="min-h-[40vh] w-full bg-black" aria-hidden />
);

const NewBeginning = dynamic(() => import("@/components/our-story/NewBeginning"), {
  loading: SectionFallback,
});
const BuiltWithFounders = dynamic(
  () => import("@/components/our-story/BuiltWithFounders"),
  { loading: SectionFallback }
);
const TrainedByFounders = dynamic(
  () => import("@/components/our-story/TrainedByFounders"),
  { loading: SectionFallback }
);
const Commitment = dynamic(() => import("@/components/our-story/Commitment"), {
  loading: SectionFallback,
});
const CoreValues = dynamic(() => import("@/components/our-story/CoreValues"), {
  loading: SectionFallback,
});
const StoryCTA = dynamic(() => import("@/components/our-story/StoryCTA"), {
  loading: SectionFallback,
});
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => null });

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <StoryHeroSection />
      <NewBeginning />
      <BuiltWithFounders />
      <TrainedByFounders />
      <Commitment />
      <CoreValues />
      <StoryCTA />
      <Footer />
    </main>
  );
}
