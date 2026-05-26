"use client";

import Link from "next/link";
import {
  PLANS,
  type BillingCycle,
  type Plan,
  type PlanId,
  getPlanPrice,
  getPlanStrike,
} from "@/lib/pricing-data";

const feeTagStyles = {
  default: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  green: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  amber: "bg-amber-50 text-amber-600 border border-amber-100",
  rust: "bg-red-50 text-red-500 border border-red-100",
} as const;

type PlanHeaderProps = {
  billing: BillingCycle;
  mobilePlan: PlanId;
};

function PlanCard({
  plan,
  billing,
  mobilePlan,
}: {
  plan: Plan;
  billing: BillingCycle;
  mobilePlan: PlanId;
}) {
  const price = getPlanPrice(plan, billing);
  const strike = getPlanStrike(plan, billing);
  const isMobileVisible = mobilePlan === plan.id;

  return (
    <div
      data-plan={plan.id}
      className={`relative flex flex-col justify-between gap-3 p-5 md:p-7 text-center border-r border-gray-200 last:border-r-0 max-lg:border-r-0 max-lg:hidden ${
        plan.featured
          ? "bg-gradient-to-b from-emerald-50 to-white"
          : ""
      } ${isMobileVisible ? "max-lg:!flex" : ""}`}
    >
      {plan.featured && plan.featuredBadge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[9px] font-bold tracking-widest px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
          {plan.featuredBadge}
        </span>
      )}

      <div>
        <div
          className={`font-mono text-[10px] tracking-[0.16em] uppercase ${
            plan.featured ? "text-emerald-600 font-semibold" : "text-gray-500"
          }`}
        >
          {plan.tag}
        </div>
        <div className="text-[26px] font-semibold tracking-tight leading-none mt-1 text-gray-900">
          {plan.name}
          {plan.nameEmphasis && (
            <span className="text-emerald-600"> {plan.nameEmphasis}</span>
          )}
        </div>
      </div>

      <div>
        {plan.pricing.kind === "custom" ? (
          <div className="text-[22px] font-semibold tracking-tight text-gray-900 pt-2">
            {plan.pricing.headline}
          </div>
        ) : (
          <div className="text-[32px] font-semibold tracking-tight leading-none text-gray-900">
            <span className="text-lg text-gray-500 mr-0.5">₹</span>
            {price}
          </div>
        )}
        <div className="font-mono text-[11px] text-gray-500 h-[14px] mt-1">
          {strike.showStrike ? (
            <>
              <s className="opacity-60">
                ₹{strike.strikeAmount?.toLocaleString("en-IN")}
              </s>{" "}
              {strike.text}
            </>
          ) : (
            strike.text
          )}
        </div>
      </div>

      <div
        className={`font-mono text-[11px] font-semibold px-2.5 py-[5px] rounded-md w-fit mx-auto ${feeTagStyles[plan.feeTag.variant]}`}
      >
        {plan.feeTag.text}
      </div>

      <Link
        href="/contact"
        className={`w-full py-2 px-4 rounded-full text-xs font-semibold transition w-full text-center ${
          plan.featured
            ? "bg-emerald-500 text-white hover:bg-emerald-600"
            : "border border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900"
        }`}
      >
        {plan.cta}
      </Link>
    </div>
  );
}

export default function PlanHeader({ billing, mobilePlan }: PlanHeaderProps) {
  return (
    <div className="sticky top-16 z-30 grid grid-cols-[minmax(280px,1.5fr)_repeat(4,1fr)] max-lg:grid-cols-2 bg-white border-b-2 border-gray-900 shadow-sm">
      <div className="hidden lg:flex flex-col justify-center p-7 text-left bg-gray-50 border-r border-gray-200">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-gray-500 mb-1.5">
          — Pick your plan
        </div>
        <div className="text-[28px] font-semibold leading-tight tracking-tight text-gray-900">
          Compare
          <br />
          across <span className="text-emerald-600">4 tiers</span>
        </div>
      </div>

      {PLANS.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          billing={billing}
          mobilePlan={mobilePlan}
        />
      ))}
    </div>
  );
}
