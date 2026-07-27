"use client";

import CategoryRow from "@/components/pricing/CategoryRow";
import FeatureRow from "@/components/pricing/FeatureRow";
import PlanHeader from "@/components/pricing/PlanHeader";
import {
  PRICING_CATEGORIES,
  type BillingCycle,
  type PlanId,
} from "@/lib/pricing-data";

type PricingTableProps = {
  billing: BillingCycle;
  mobilePlan: PlanId;
};

export default function PricingTable({
  billing,
  mobilePlan,
}: PricingTableProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <PlanHeader billing={billing} mobilePlan={mobilePlan} />

      {PRICING_CATEGORIES.map((category) => (
        <div key={category.id}>
          <CategoryRow name={category.name} />
          {category.features.map((feature) => (
            <FeatureRow
              key={feature.name}
              feature={feature}
              mobilePlan={mobilePlan}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
