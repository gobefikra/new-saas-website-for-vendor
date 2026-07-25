"use client";

import { CircleHelp } from "lucide-react";
import FeatureCell from "@/components/pricing/FeatureCell";
import {
  PLANS,
  type PlanId,
  type PricingFeature,
} from "@/lib/pricing-data";

const NAVY = "#0F172A";
const BODY = "#6B7280";

const GRID =
  "grid grid-cols-[minmax(220px,1.35fr)_repeat(4,1fr)] max-lg:grid-cols-2";

type FeatureRowProps = {
  feature: PricingFeature;
  mobilePlan: PlanId;
};

export default function FeatureRow({ feature, mobilePlan }: FeatureRowProps) {
  return (
    <div className={`${GRID} border-b border-gray-200 bg-white`}>
      <div className="flex items-center gap-1.5 border-r border-gray-200 px-4 py-3.5 max-lg:col-span-2 md:px-5 md:py-4">
        <span className="text-sm font-medium" style={{ color: NAVY }}>
          {feature.name}
        </span>
        {feature.description && (
          <span
            className="inline-flex shrink-0 cursor-help"
            title={feature.description}
          >
            <CircleHelp
              className="h-3.5 w-3.5"
              style={{ color: BODY }}
              strokeWidth={2}
            />
          </span>
        )}
      </div>

      {PLANS.map((plan) => {
        const isMobileVisible = mobilePlan === plan.id;

        return (
          <div
            key={plan.id}
            className={`flex items-center justify-center border-r border-gray-200 px-3 py-3.5 last:border-r-0 max-lg:hidden md:py-4 ${
              isMobileVisible ? "max-lg:!flex" : ""
            }`}
          >
            <FeatureCell value={feature.values[plan.id]} />
          </div>
        );
      })}
    </div>
  );
}
