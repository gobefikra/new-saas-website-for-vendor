import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import { PRICING_FAQS } from "@/lib/pricing-data";

const title = "Pricing";
const description =
  "Compare Starter, Creator Pro, Business AI, and Enterprise plans. See every feature, platform fee, and AI credit across all tiers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `${title} - Befikra Partner`,
    description,
    url: "/pricing",
  },
  twitter: { title: `${title} - Befikra Partner`, description },
};

export default function Pricing() {
  return (
    <>
      <JsonLd data={faqSchema(PRICING_FAQS)} />
      <PricingPage />
    </>
  );
}
