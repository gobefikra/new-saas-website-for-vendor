import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "Pricing — Befikra Partner",
  description:
    "Compare Starter, Creator Pro, Business AI, and Enterprise plans. See every feature, platform fee, and AI credit across all tiers.",
};

export default function Pricing() {
  return <PricingPage />;
}
