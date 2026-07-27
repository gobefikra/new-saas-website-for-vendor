"use client";

import { CircleHelp } from "lucide-react";
import FeatureCell from "@/components/pricing/FeatureCell";
import { brand } from "@/lib/brand-theme";
import {
  PLANS,
  type PlanId,
  type PricingFeature,
} from "@/lib/pricing-data";

const GRID =
  "grid grid-cols-1 lg:grid-cols-[minmax(200px,1.4fr)_repeat(4,minmax(0,1fr))]";

type FeatureRowProps = {
  feature: PricingFeature;
  mobilePlan: PlanId;
};

export default function FeatureRow({ feature, mobilePlan }: FeatureRowProps) {
  return (
    <div className={`${GRID} border-b border-border-default bg-white last:border-b-0`}>
      <div className="flex min-h-[3.25rem] items-center gap-1.5 border-border-default px-4 py-4 lg:border-r md:px-5 md:py-4.5">
        <span
          className="text-sm font-medium leading-normal"
          style={{ color: brand.navy }}
        >
          {feature.name}
        </span>
        {feature.description && (
          <span
            className="inline-flex shrink-0 cursor-help"
            title={feature.description}
          >
            <CircleHelp
              className="h-3.5 w-3.5"
              style={{ color: brand.muted }}
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
            className={`min-h-[3.25rem] items-center justify-center border-border-default px-3 py-4 last:border-r-0 max-lg:hidden md:py-4.5 lg:flex lg:border-r ${
              plan.featured ? "bg-brand-green-light/40" : ""
            } ${isMobileVisible ? "max-lg:!flex max-lg:justify-start max-lg:px-4 max-lg:py-3" : ""}`}
          >
            <FeatureCell value={feature.values[plan.id]} />
          </div>
        );
      })}
    </div>
  );
}
