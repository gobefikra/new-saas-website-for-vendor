"use client";

import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import { brand } from "@/lib/brand-theme";
import {
  PLANS,
  type BillingCycle,
  type FeeTagVariant,
  type Plan,
  getPlanPrice,
  getPlanStrike,
} from "@/lib/pricing-data";

type PlanCardsProps = {
  billing: BillingCycle;
};

const feeTagStyles: Record<FeeTagVariant, { bg: string; color: string }> = {
  default: { bg: "#F3F4F6", color: brand.subtext },
  green: { bg: brand.mint, color: brand.primaryDark },
  amber: { bg: "#FFFBEB", color: "#D97706" },
  rust: { bg: "#FEF2F2", color: "#DC2626" },
};

function PricingCard({ plan, billing }: { plan: Plan; billing: BillingCycle }) {
  const price = getPlanPrice(plan, billing);
  const strike = getPlanStrike(plan, billing);
  const fullName = plan.nameEmphasis
    ? `${plan.name} ${plan.nameEmphasis}`
    : plan.name;
  const feeStyle = feeTagStyles[plan.feeTag.variant] ?? feeTagStyles.default;

  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 md:p-7 ${
        plan.featured
          ? "border-[#10B981] shadow-[0_8px_32px_rgba(16,185,129,0.12)]"
          : "border-gray-200 shadow-[0_2px_16px_rgba(13,27,42,0.04)]"
      }`}
    >
      {plan.featured && plan.featuredBadge && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-semibold text-white"
          style={{ backgroundColor: brand.primary }}
        >
          {plan.featuredBadge}
        </span>
      )}

      <div>
        <h3 className="text-xl font-bold tracking-tight" style={{ color: brand.navy }}>
          {fullName}
        </h3>
        <p
          className="font-dm-sans mt-2 text-sm leading-relaxed"
          style={{ color: brand.subtext }}
        >
          {plan.description}
        </p>
      </div>

      <div className="mt-6 min-h-[5.5rem]">
        {plan.pricing.kind === "custom" ? (
          <div
            className="text-3xl font-bold tracking-tight"
            style={{ color: brand.navy }}
          >
            {plan.pricing.headline}
          </div>
        ) : plan.pricing.kind === "free" ? (
          <div
            className="text-4xl font-bold tracking-tight"
            style={{ color: brand.navy }}
          >
            Free
          </div>
        ) : (
          <div className="flex items-baseline gap-1.5">
            <span
              className="text-4xl font-bold leading-none tracking-tight"
              style={{ color: brand.navy }}
            >
              ₹{price}
            </span>
            <span
              className="font-dm-sans text-sm font-medium"
              style={{ color: brand.subtext }}
            >
              /month
            </span>
          </div>
        )}

        <p
          className="font-dm-sans mt-2 text-sm leading-snug"
          style={{ color: brand.subtext }}
        >
          {strike.showStrike ? (
            <>
              <s className="text-gray-400">
                ₹{strike.strikeAmount?.toLocaleString("en-IN")}
              </s>
              <span className="mx-1.5 text-gray-300" aria-hidden>
                ·
              </span>
              <span>{strike.text}</span>
            </>
          ) : (
            strike.text
          )}
        </p>

        <p
          className="mt-3 inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold"
          style={{ backgroundColor: feeStyle.bg, color: feeStyle.color }}
        >
          {plan.feeTag.text}
        </p>
      </div>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5 border-t border-gray-100 pt-6">
        {plan.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: brand.mint }}
            >
              <Check
                className="h-3 w-3"
                style={{ color: brand.primaryDark }}
                strokeWidth={3}
              />
            </span>
            <span
              className="font-dm-sans text-sm leading-snug"
              style={{ color: brand.body }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={plan.featured ? "primary" : "outline"}
        size="sm"
        className="mt-8 w-full"
      >
        {plan.cta}
      </Button>
    </div>
  );
}

export default function PlanCards({ billing }: PlanCardsProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 pt-3 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
      {PLANS.map((plan) => (
        <PricingCard key={plan.id} plan={plan} billing={billing} />
      ))}
    </div>
  );
}
