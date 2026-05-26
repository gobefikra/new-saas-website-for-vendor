import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import RavenAISection from "@/components/RavenAISection";
import ChannelsSection from "@/components/ChannelsSection";
import MyLinkrSection from "@/components/MyLinkrSection";
import PowerfulToolsSection from "@/components/PowerfulToolsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <RavenAISection />
      <ChannelsSection />
      <MyLinkrSection />
      <PowerfulToolsSection />
      <HowItWorksSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
