"use client";

import { PLANS } from "@/lib/pricing-data";

const NAVY = "#0D1B2A";

const GRID =
  "grid grid-cols-[minmax(220px,1.35fr)_repeat(4,1fr)] max-lg:grid-cols-1";

type CategoryRowProps = {
  name: string;
};

export default function CategoryRow({ name }: CategoryRowProps) {
  return (
    <div className={`${GRID} border-b border-gray-200 bg-[#F4F6F8]`}>
      <div
        className="border-r border-gray-200 px-4 py-3 text-sm font-semibold md:px-5 md:py-3.5"
        style={{ color: NAVY }}
      >
        {name}
      </div>
      {PLANS.map((plan) => (
        <div
          key={plan.id}
          className="hidden border-r border-gray-200 last:border-r-0 lg:block"
          aria-hidden
        />
      ))}
    </div>
  );
}
