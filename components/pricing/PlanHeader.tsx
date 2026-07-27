"use client";

import Link from "next/link";
import { brand } from "@/lib/brand-theme";
import {
  PLANS,
  type BillingCycle,
  type Plan,
  type PlanId,
} from "@/lib/pricing-data";

const GRID =
  "grid grid-cols-1 lg:grid-cols-[minmax(200px,1.4fr)_repeat(4,minmax(0,1fr))]";

type PlanHeaderProps = {
  billing: BillingCycle;
  mobilePlan: PlanId;
};

function TablePlanHeader({
  plan,
  mobilePlan,
}: {
  plan: Plan;
  mobilePlan: PlanId;
}) {
  const fullName = plan.nameEmphasis
    ? `${plan.name} ${plan.nameEmphasis}`
    : plan.name;
  const isMobileVisible = mobilePlan === plan.id;

  return (
    <div
      className={`flex-col items-start justify-center gap-1.5 border-gray-100 px-4 py-4 last:border-r-0 max-lg:hidden md:px-5 md:py-5 lg:flex lg:border-r ${
        plan.featured ? "bg-emerald-50/40" : ""
      } ${isMobileVisible ? "max-lg:!flex" : ""}`}
    >
      <h4
        className="text-base font-bold tracking-tight md:text-lg"
        style={{ color: brand.navy }}
      >
        {fullName}
      </h4>
      <Link
        href="/contact"
        className="text-sm font-medium transition-colors hover:text-emerald-600"
        style={{ color: brand.subtext }}
      >
        {plan.cta} &rsaquo;
      </Link>
    </div>
  );
}

export default function PlanHeader({ billing, mobilePlan }: PlanHeaderProps) {
  void billing;

  return (
    <div
      className={`${GRID} sticky top-16 z-30 rounded-t-2xl border-b border-gray-200 bg-white/95 backdrop-blur-md md:top-[4.5rem]`}
    >
      <div className="hidden border-r border-gray-100 lg:block" />

      {PLANS.map((plan) => (
        <TablePlanHeader key={plan.id} plan={plan} mobilePlan={mobilePlan} />
      ))}
    </div>
  );
}
