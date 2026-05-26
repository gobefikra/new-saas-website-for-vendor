"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillingToggle from "@/components/pricing/BillingToggle";
import PricingTable from "@/components/pricing/PricingTable";
import HelperRow from "@/components/pricing/HelperRow";
import SummaryBar from "@/components/pricing/SummaryBar";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import {
  PLANS,
  PRICING_HERO,
  type BillingCycle,
  type PlanId,
  formatPrice,
} from "@/lib/pricing-data";

const mobilePlanLabels: Record<PlanId, string> = {
  starter: "Starter (Free)",
  creator: `Creator Pro · ₹${formatPrice(3999)}/mo`,
  business: `Business AI · ₹${formatPrice(9583)}/mo`,
  enterprise: "Enterprise · Custom",
};

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingCycle>("annual");
  const [mobilePlan, setMobilePlan] = useState<PlanId>("creator");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-16 md:pt-[4.5rem]">
        <section className="max-w-[1320px] mx-auto px-4 md:px-8 pt-12 md:pt-20 pb-10 md:pb-12">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-emerald-600 mb-6">
            <span className="w-7 h-px bg-emerald-500" />
            {PRICING_HERO.eyebrow}
          </div>
          <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold leading-none tracking-tight mb-6 text-gray-900">
            {PRICING_HERO.title}{" "}
            <span className="text-emerald-600">{PRICING_HERO.titleEmphasis}</span>
            <br />
            One table.
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 max-w-[620px] mb-8 md:mb-10">
            {PRICING_HERO.subtitle}
          </p>
          <BillingToggle billing={billing} onChange={setBilling} />
        </section>

        <section className="max-w-[1320px] mx-auto px-4 md:px-8 pb-16 md:pb-20">
          <HelperRow />

          <div className="lg:hidden mb-6">
            <label
              htmlFor="mobilePlanSelect"
              className="font-mono text-[11px] tracking-[0.16em] uppercase text-gray-500 block mb-2"
            >
              Compare plans
            </label>
            <select
              id="mobilePlanSelect"
              value={mobilePlan}
              onChange={(e) => setMobilePlan(e.target.value as PlanId)}
              className="w-full p-3.5 px-4 bg-white border border-gray-200 rounded-[10px] text-[15px] font-medium text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23111827' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 18px center",
              }}
            >
              {PLANS.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {mobilePlanLabels[plan.id]}
                </option>
              ))}
            </select>
          </div>

          <PricingTable billing={billing} mobilePlan={mobilePlan} />
          <SummaryBar />
        </section>

        <PricingFAQ />
        <PricingCTA />
      </main>

      <Footer />
    </div>
  );
}
