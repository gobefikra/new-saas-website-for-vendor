import { Check, Minus } from "lucide-react";
import { brand } from "@/lib/brand-theme";

const items = [
  {
    icon: (
      <span
        className="inline-flex h-5 w-5 items-center justify-center rounded-full"
        style={{ backgroundColor: brand.mint }}
      >
        <Check
          className="h-3 w-3"
          style={{ color: brand.primaryDark }}
          strokeWidth={3}
        />
      </span>
    ),
    label: "Included",
  },
  {
    icon: (
      <Minus className="h-4 w-4" style={{ color: brand.muted }} strokeWidth={2.25} />
    ),
    label: "Not available",
  },
  {
    icon: (
      <span
        className="rounded px-1.5 py-0.5 text-[11px] font-semibold"
        style={{ backgroundColor: brand.mint, color: brand.primaryDark }}
      >
        Limit
      </span>
    ),
    label: "Specific limit",
  },
  {
    icon: (
      <span
        className="text-[11px] font-semibold"
        style={{ color: brand.primaryDark }}
      >
        Unlimited
      </span>
    ),
    label: "No cap",
  },
];

export default function HelperRow() {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2.5 rounded-xl border border-border-default bg-[#F9FAFB] px-4 py-3 md:px-5">
      {items.map(({ icon, label }) => (
        <div
          key={label}
          className="font-sans flex items-center gap-2 text-[13px]"
          style={{ color: brand.subtext }}
        >
          {icon}
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
