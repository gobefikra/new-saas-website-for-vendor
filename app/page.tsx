import HeroSection from "@/components/HeroSection";
import IntegrationsFeatures from "@/components/IntegrationsFeatures";
import SmartDashboardSection from "@/components/SmartDashboardSection";
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
      <HeroSection />
      <IntegrationsFeatures />
      <SmartDashboardSection />
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
