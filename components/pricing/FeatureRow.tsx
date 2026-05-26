"use client";

import FeatureCell from "@/components/pricing/FeatureCell";
import {
  PLANS,
  type PlanId,
  type PricingFeature,
} from "@/lib/pricing-data";

type FeatureRowProps = {
  feature: PricingFeature;
  mobilePlan: PlanId;
  isLast?: boolean;
};

export default function FeatureRow({
  feature,
  mobilePlan,
  isLast,
}: FeatureRowProps) {
  return (
    <div
      className={`grid grid-cols-[minmax(280px,1.5fr)_repeat(4,1fr)] max-lg:grid-cols-2 border-b border-gray-100 hover:bg-emerald-50/20 transition-colors ${
        isLast ? "last:border-b-0" : ""
      }`}
    >
      <div className="flex flex-col items-start gap-1 p-4 md:px-[22px] md:py-3.5 bg-gray-50 border-r border-gray-200 max-lg:col-span-2">
        <span className="font-medium text-sm text-gray-900">
          {feature.name}
        </span>
        <span className="text-xs text-gray-500 leading-snug">
          {feature.description}
        </span>
      </div>

      {PLANS.map((plan) => {
        const isFeatured = plan.featured;
        const isMobileVisible = mobilePlan === plan.id;

        return (
          <div
            key={plan.id}
            className={`flex items-center justify-center min-h-[52px] border-r border-gray-100 last:border-r-0 max-lg:border-r-0 max-lg:hidden max-lg:py-3 ${
              isMobileVisible ? "max-lg:!flex" : ""
            } ${isFeatured ? "bg-emerald-50/30" : ""}`}
          >
            <FeatureCell
              value={feature.values[plan.id]}
              featured={isFeatured}
            />
          </div>
        );
      })}
    </div>
  );
}
