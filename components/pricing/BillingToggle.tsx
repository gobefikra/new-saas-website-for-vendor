"use client";

import type { BillingCycle } from "@/lib/pricing-data";

type BillingToggleProps = {
  billing: BillingCycle;
  onChange: (billing: BillingCycle) => void;
};

export default function BillingToggle({ billing, onChange }: BillingToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full p-[5px] shadow-sm">
      <button
        type="button"
        onClick={() => onChange("annual")}
        className={`flex items-center gap-2 px-[22px] py-2.5 rounded-full text-sm font-medium transition-all ${
          billing === "annual"
            ? "bg-gray-900 text-white"
            : "text-gray-700 hover:text-gray-900"
        }`}
      >
        Annual
        <span className="bg-emerald-500 text-white text-xs font-mono px-2 py-0.5 rounded">
          SAVE 20%
        </span>
      </button>
      <button
        type="button"
        onClick={() => onChange("monthly")}
        className={`px-[22px] py-2.5 rounded-full text-sm font-medium transition-all ${
          billing === "monthly"
            ? "bg-gray-900 text-white"
            : "text-gray-700 hover:text-gray-900"
        }`}
      >
        Monthly
      </button>
    </div>
  );
}
