"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { BillingCycle } from "@/lib/pricing-data";

const GREEN = "#22C55E";

type BillingToggleProps = {
  billing: BillingCycle;
  onChange: (billing: BillingCycle) => void;
};

export default function BillingToggle({ billing, onChange }: BillingToggleProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const monthlyRef = useRef<HTMLButtonElement>(null);
  const annualRef = useRef<HTMLButtonElement>(null);
  const [pill, setPill] = useState({ width: 0, x: 0 });

  const updatePill = useCallback(() => {
    const btn = billing === "monthly" ? monthlyRef.current : annualRef.current;
    const nav = navRef.current;
    if (!btn || !nav) return;
    const navBox = nav.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();
    setPill({ width: btnBox.width, x: btnBox.left - navBox.left });
  }, [billing]);

  useLayoutEffect(() => {
    updatePill();
  }, [billing, updatePill]);

  useEffect(() => {
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  return (
    <div
      ref={navRef}
      className="relative inline-flex items-center rounded-full bg-[#F4F6F8] p-1"
    >
      <span
        aria-hidden
        className="absolute bottom-1 top-1 rounded-full bg-white shadow-sm transition-[transform,width] duration-300 ease-out"
        style={{
          width: pill.width,
          transform: `translateX(${pill.x}px)`,
        }}
      />
      <button
        ref={monthlyRef}
        type="button"
        onClick={() => onChange("monthly")}
        className={`relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 sm:px-6 ${
          billing === "monthly" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Monthly
      </button>
      <button
        ref={annualRef}
        type="button"
        onClick={() => onChange("annual")}
        className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 sm:px-6 ${
          billing === "annual" ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
        }`}
      >
        Yearly
        <span
          className="rounded-md px-1.5 py-0.5 text-[10px] font-bold"
          style={{ backgroundColor: "#E8F5E9", color: GREEN }}
        >
          -20%
        </span>
      </button>
    </div>
  );
}
