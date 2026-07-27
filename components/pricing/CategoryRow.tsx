"use client";

import { brand } from "@/lib/brand-theme";
import { PLANS } from "@/lib/pricing-data";

const GRID =
  "grid grid-cols-1 lg:grid-cols-[minmax(200px,1.4fr)_repeat(4,minmax(0,1fr))]";

type CategoryRowProps = {
  name: string;
};

export default function CategoryRow({ name }: CategoryRowProps) {
  return (
    <div className={`${GRID} border-b border-border-default bg-[#F9FAFB]`}>
      <div
        className="border-border-default px-4 py-3 text-xs font-bold uppercase tracking-wide md:px-5 md:py-3.5 lg:border-r"
        style={{ color: brand.navy }}
      >
        {name}
      </div>
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className={`hidden border-r border-border-default last:border-r-0 lg:block ${
            plan.featured ? "bg-brand-green-light/40" : ""
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}
