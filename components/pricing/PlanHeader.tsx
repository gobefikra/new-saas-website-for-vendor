"use client";

import Link from "next/link";
import {
  PLANS,
  type BillingCycle,
  type Plan,
  type PlanId,
} from "@/lib/pricing-data";

const NAVY = "#0D1B2A";
const BODY = "#6B7280";

const GRID =
  "grid grid-cols-[minmax(220px,1.35fr)_repeat(4,1fr)] max-lg:grid-cols-2";

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
      className={`flex flex-col items-start justify-center gap-2 border-r border-gray-200 px-4 py-5 last:border-r-0 max-lg:hidden md:px-5 md:py-6 ${
        isMobileVisible ? "max-lg:!flex" : ""
      }`}
    >
      <h4 className="text-base font-bold md:text-lg" style={{ color: NAVY }}>
        {fullName}
      </h4>
      <Link
        href="/contact"
        className="text-sm font-medium transition-opacity hover:opacity-70"
        style={{ color: BODY }}
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
      className={`${GRID} sticky top-[4.5rem] z-30 border-b border-gray-200 bg-white/95 backdrop-blur-md`}
    >
      <div className="hidden border-r border-gray-200 lg:block" />

      {PLANS.map((plan) => (
        <TablePlanHeader key={plan.id} plan={plan} mobilePlan={mobilePlan} />
      ))}
    </div>
  );
}
