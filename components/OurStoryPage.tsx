"use client";

import Footer from "@/components/Footer";
import StoryHeroSection from "@/components/our-story/HeroSection";
import NewBeginning from "@/components/our-story/NewBeginning";
import BuiltWithFounders from "@/components/our-story/BuiltWithFounders";
import TrainedByFounders from "@/components/our-story/TrainedByFounders";
import Commitment from "@/components/our-story/Commitment";
import CoreValues from "@/components/our-story/CoreValues";
import StoryCTA from "@/components/our-story/StoryCTA";

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
