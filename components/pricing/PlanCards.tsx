"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import {
  PLANS,
  type BillingCycle,
  type Plan,
  getPlanPrice,
  getPlanStrike,
} from "@/lib/pricing-data";

const NAVY = "#0F172A";
const GREEN = "#10B981";
const BODY = "#6B7280";

type PlanCardsProps = {
  billing: BillingCycle;
};

function PricingCard({ plan, billing }: { plan: Plan; billing: BillingCycle }) {
  const price = getPlanPrice(plan, billing);
  const strike = getPlanStrike(plan, billing);
  const fullName = plan.nameEmphasis
    ? `${plan.name} ${plan.nameEmphasis}`
    : plan.name;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-6 md:p-7 ${
        plan.featured
          ? "border-[#10B981] shadow-[0_8px_40px_rgba(16,185,129,0.12)] lg:-mt-2 lg:mb-2 lg:pb-9"
          : "border-gray-200 shadow-[0_4px_24px_rgba(13,27,42,0.04)]"
      }`}
    >
      {plan.featured && plan.featuredBadge && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold text-white"
          style={{ backgroundColor: GREEN }}
        >
          {plan.featuredBadge}
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold" style={{ color: NAVY }}>
          {fullName}
        </h3>
        <p className="font-dm-sans mt-2 text-sm leading-relaxed" style={{ color: BODY }}>
          {plan.description}
        </p>
      </div>

      <div className="mt-6">
        {plan.pricing.kind === "custom" ? (
          <div className="text-3xl font-bold tracking-tight" style={{ color: NAVY }}>
            {plan.pricing.headline}
          </div>
        ) : plan.pricing.kind === "free" ? (
          <div className="text-4xl font-bold tracking-tight" style={{ color: NAVY }}>
            Free
          </div>
        ) : (
          <div className="flex items-end gap-1">
            <span className="font-dm-sans mb-1.5 text-sm" style={{ color: BODY }}>
              /month
            </span>
            <span className="text-4xl font-bold leading-none tracking-tight" style={{ color: NAVY }}>
              ₹{price}
            </span>
          </div>
        )}
        <p className="font-dm-sans mt-1.5 text-xs" style={{ color: BODY }}>
          {strike.showStrike ? (
            <>
              <s className="opacity-60">₹{strike.strikeAmount?.toLocaleString("en-IN")}</s>{" "}
              {strike.text}
            </>
          ) : (
            strike.text
          )}
        </p>
        <p
          className="mt-2 inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold"
          style={{ backgroundColor: "#ECFDF5", color: "#059669" }}
        >
          {plan.feeTag.text}
        </p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-3">
        {plan.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: "#ECFDF5" }}
            >
              <Check className="h-2.5 w-2.5" style={{ color: GREEN }} strokeWidth={3} />
            </span>
            <span className="font-dm-sans text-sm leading-snug" style={{ color: NAVY }}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href="/contact"
        className="mt-8 block w-full rounded-xl py-3 text-center text-sm font-semibold transition-opacity hover:opacity-90"
        style={
          plan.featured
            ? { backgroundColor: GREEN, color: "#fff" }
            : { backgroundColor: NAVY, color: "#fff" }
        }
      >
        {plan.cta}
      </Link>
    </div>
  );
}

export default function PlanCards({ billing }: PlanCardsProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} billing={billing} />
      ))}
    </div>
  );
}
