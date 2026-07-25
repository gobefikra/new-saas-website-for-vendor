"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BillingToggle from "@/components/pricing/BillingToggle";
import PlanCards from "@/components/pricing/PlanCards";
import PricingTable from "@/components/pricing/PricingTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import {
  PLANS,
  PRICING_HERO,
  type BillingCycle,
  type PlanId,
  formatPrice,
} from "@/lib/pricing-data";

const NAVY = "#0F172A";
const BODY = "#6B7280";

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
      <Navbar />

      <main className="pt-16 md:pt-[4.5rem]">
        {/* Hero - Cassis-style centered */}
        <section className="px-4 pb-10 pt-14 text-center md:px-8 md:pb-14 md:pt-20">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: BODY }}
          >
            Pricing
          </p>
          <h1
            className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: NAVY }}
          >
            {PRICING_HERO.title}
          </h1>
          <p
            className="font-dm-sans mx-auto mt-4 max-w-md text-base md:text-lg"
            style={{ color: BODY }}
          >
            {PRICING_HERO.subtitle}
          </p>
          <div className="mt-8 flex justify-center">
            <BillingToggle billing={billing} onChange={setBilling} />
          </div>
        </section>

        {/* Plan cards - Cassis-style grid */}
        <section className="px-4 pb-16 md:px-8 md:pb-20">
          <PlanCards billing={billing} />
        </section>

        {/* Feature comparison table - Cassis-style grid */}
        <section className="border-t border-gray-100 bg-white px-4 pb-16 md:px-8 md:pb-20">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6 lg:hidden">
              <label
                htmlFor="mobilePlanSelect"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-gray-500"
              >
                View plan
              </label>
              <select
                id="mobilePlanSelect"
                value={mobilePlan}
                onChange={(e) => setMobilePlan(e.target.value as PlanId)}
                className="w-full appearance-none rounded-xl border border-gray-200 bg-white p-3.5 px-4 text-[15px] font-medium text-gray-900 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23111827' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 18px center",
                }}
              >
                {PLANS.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {getMobilePlanLabel(plan.id, billing)}
                  </option>
                ))}
              </select>
            </div>

            <PricingTable billing={billing} mobilePlan={mobilePlan} />
          </div>
        </section>

        <PricingFAQ />
      </main>

      <Footer />
    </div>
  );
}
