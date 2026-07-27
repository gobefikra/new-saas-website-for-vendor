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
    <div className={`${GRID} border-b border-gray-200 bg-[#F9FAFB]`}>
      <div
        className="border-gray-100 px-4 py-3 text-xs font-bold uppercase tracking-wide md:px-5 md:py-3.5 lg:border-r"
        style={{ color: brand.navy }}
      >
        {name}
      </div>
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className={`hidden border-r border-gray-100 last:border-r-0 lg:block ${
            plan.featured ? "bg-emerald-50/40" : ""
          }`}
          aria-hidden
        />
      ))}
    </div>
  );
}
