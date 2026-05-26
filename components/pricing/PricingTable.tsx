"use client";

import {
  BarChart3,
  Calendar,
  Code,
  Globe,
  Layers,
  LayoutGrid,
  MessageCircle,
  MessageSquare,
  Settings,
  Users,
  type LucideIcon,
} from "lucide-react";
import CategoryRow from "@/components/pricing/CategoryRow";
import FeatureRow from "@/components/pricing/FeatureRow";
import PlanHeader from "@/components/pricing/PlanHeader";
import {
  PRICING_CATEGORIES,
  type BillingCycle,
  type PlanId,
} from "@/lib/pricing-data";

const categoryIcons: Record<string, LucideIcon> = {
  capacity: Calendar,
  "raven-ai": Layers,
  communication: MessageSquare,
  crm: Users,
  operations: LayoutGrid,
  automation: Settings,
  branding: Globe,
  analytics: BarChart3,
  developer: Code,
  support: MessageCircle,
};

type PricingTableProps = {
  billing: BillingCycle;
  mobilePlan: PlanId;
};

export default function PricingTable({
  billing,
  mobilePlan,
}: PricingTableProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-[20px] overflow-hidden shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)]">
      <PlanHeader billing={billing} mobilePlan={mobilePlan} />

      {PRICING_CATEGORIES.map((category) => {
        const Icon = categoryIcons[category.id] ?? Layers;
        return (
          <div key={category.id}>
            <CategoryRow icon={Icon} name={category.name} />
            {category.features.map((feature, idx) => (
              <FeatureRow
                key={feature.name}
                feature={feature}
                mobilePlan={mobilePlan}
                isLast={idx === category.features.length - 1}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
