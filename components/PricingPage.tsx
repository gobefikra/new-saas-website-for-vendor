"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import BillingToggle from "@/components/pricing/BillingToggle";
import PlanCards from "@/components/pricing/PlanCards";
import Eyebrow from "@/components/ui/Eyebrow";
import ScriptAccent from "@/components/ui/ScriptAccent";
import { brand } from "@/lib/brand-theme";
import {
  PLANS,
  PRICING_HERO,
  type BillingCycle,
  type PlanId,
  formatPrice,
} from "@/lib/pricing-data";

const SectionFallback = () => <div className="min-h-[28vh] w-full bg-[#F9FAFB]" aria-hidden />;

const HelperRow = dynamic(() => import("@/components/pricing/HelperRow"), {
  loading: () => null,
});
const PricingTable = dynamic(() => import("@/components/pricing/PricingTable"), {
  loading: SectionFallback,
});
const PricingFAQ = dynamic(() => import("@/components/pricing/PricingFAQ"), {
  loading: SectionFallback,
});
const PricingCTA = dynamic(() => import("@/components/pricing/PricingCTA"), {
  loading: SectionFallback,
});
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => null });

function getMobilePlanLabel(planId: PlanId, billing: BillingCycle): string {
  const plan = PLANS.find((p) => p.id === planId)!;
  if (plan.pricing.kind === "free") return "Starter (Free)";
  if (plan.pricing.kind === "custom") return "Enterprise · Custom";
  const price = plan.pricing[billing === "annual" ? "annual" : "monthly"];
  const name = plan.nameEmphasis ? `${plan.name} ${plan.nameEmphasis}` : plan.name;
  return `${name} · ₹${formatPrice(price)}/mo`;
}

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("annual");
  const [mobilePlan, setMobilePlan] = useState<PlanId>("creator");

  return (
    <div className="min-h-screen bg-white text-navy">
      <main>
        {/* Hero */}
        <section className="px-4 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32">
          <Eyebrow>Pricing</Eyebrow>
          <h1 className="section-title mx-auto mt-5 max-w-2xl">
            {PRICING_HERO.title}
          </h1>
          <div className="mt-3 flex justify-center">
            <ScriptAccent size="md">simple &amp; transparent</ScriptAccent>
          </div>
          <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-subtext md:text-lg">
            {PRICING_HERO.subtitle}
          </p>
          <div className="mt-8 flex justify-center">
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>
        </section>

        {/* Plan cards */}
        <section className="px-4 pb-16 md:px-8 md:pb-20">
          <PlanCards billing={billing} />
        </section>

        {/* Feature comparison */}
        <section className="border-t border-border-default bg-off-white px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 text-center md:mb-10">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy md:text-3xl">
                Compare all features
              </h2>
              <p className="mx-auto mt-3 max-w-md font-sans text-sm leading-relaxed text-subtext md:text-base">
                See exactly what&apos;s included in each plan before you choose.
              </p>
            </div>

            <div className="mb-5 lg:hidden">
              <label
                htmlFor="mobilePlanSelect"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-subtext"
              >
                Compare plan
              </label>
              <select
                id="mobilePlanSelect"
                value={mobilePlan}
                onChange={(e) => setMobilePlan(e.target.value as PlanId)}
                className="input-brand appearance-none p-3.5 pr-10 text-[15px] font-medium shadow-card"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23111827' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                }}
              >
                {PLANS.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {getMobilePlanLabel(plan.id, billing)}
                  </option>
                ))}
              </select>
            </div>

            <div className="hidden lg:block">
              <HelperRow />
            </div>

            <PricingTable billing={billing} mobilePlan={mobilePlan} />
          </div>
        </section>

        <PricingFAQ />
        <PricingCTA />
      </main>

      <Footer />
    </div>
  );
}
