import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { HOME_FAQS } from "@/lib/faq-data";

const SectionFallback = () => <div className="min-h-[40vh] w-full bg-white" aria-hidden />;

const IntegrationsFeatures = dynamic(
  () => import("@/components/IntegrationsFeatures"),
  { loading: SectionFallback }
);
const SmartDashboardSection = dynamic(
  () => import("@/components/SmartDashboardSection"),
  { loading: SectionFallback }
);
const RavenAISection = dynamic(() => import("@/components/RavenAISection"), {
  loading: SectionFallback,
});
const ChannelsSection = dynamic(() => import("@/components/ChannelsSection"), {
  loading: SectionFallback,
});
const MyLinkrSection = dynamic(() => import("@/components/MyLinkrSection"), {
  loading: SectionFallback,
});
const PowerfulToolsSection = dynamic(
  () => import("@/components/PowerfulToolsSection"),
  { loading: SectionFallback }
);
const HowItWorksSection = dynamic(() => import("@/components/HowItWorksSection"), {
  loading: SectionFallback,
});
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  loading: SectionFallback,
});
const CTABanner = dynamic(() => import("@/components/CTABanner"), {
  loading: SectionFallback,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(HOME_FAQS)} />
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
