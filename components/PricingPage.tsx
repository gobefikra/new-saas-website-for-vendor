"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import BillingToggle from "@/components/pricing/BillingToggle";
import PlanCards from "@/components/pricing/PlanCards";
import Eyebrow from "@/components/ui/Eyebrow";
import { brand } from "@/lib/brand-theme";
import {
  PLANS,
  PRICING_HERO,
  type BillingCycle,
  type PlanId,
  formatPrice,
} from "@/lib/pricing-data";

const SectionFallback = () => <div className="min-h-[28vh] w-full bg-[#FAFBFC]" aria-hidden />;

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
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        {/* Hero */}
        <section className="px-4 pb-10 pt-28 text-center md:px-8 md:pb-12 md:pt-32">
          <Eyebrow>Pricing</Eyebrow>
          <h1
            className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: brand.navy }}
          >
            {PRICING_HERO.title}
          </h1>
          <p
            className="font-dm-sans mx-auto mt-4 max-w-lg text-base leading-relaxed md:text-lg"
            style={{ color: brand.subtext }}
          >
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
        <section className="border-t border-gray-100 bg-[#FAFBFC] px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-8 text-center md:mb-10">
              <h2
                className="text-2xl font-extrabold tracking-tight md:text-3xl"
                style={{ color: brand.navy }}
              >
                Compare all features
              </h2>
              <p
                className="font-dm-sans mx-auto mt-3 max-w-md text-sm leading-relaxed md:text-base"
                style={{ color: brand.subtext }}
              >
                See exactly what&apos;s included in each plan before you choose.
              </p>
            </div>

            <div className="mb-5 lg:hidden">
              <label
                htmlFor="mobilePlanSelect"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                Compare plan
              </label>
              <select
                id="mobilePlanSelect"
                value={mobilePlan}
                onChange={(e) => setMobilePlan(e.target.value as PlanId)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white p-3.5 pr-10 text-[15px] font-medium text-gray-900 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
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
