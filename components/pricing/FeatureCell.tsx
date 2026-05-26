import { Check } from "lucide-react";
import type { BadgeVariant, CellValue } from "@/lib/pricing-data";

const badgeStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-100 text-gray-700 border border-gray-200",
  green: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border border-amber-200",
  rust: "bg-red-50 text-red-600 border border-red-200",
};

type FeatureCellProps = {
  value: CellValue;
  featured?: boolean;
};

export default function FeatureCell({ value, featured }: FeatureCellProps) {
  const baseClass = featured ? "bg-emerald-50/30" : "";

  switch (value.type) {
    case "check":
      return (
        <div className={`flex justify-center items-center p-2 ${baseClass}`}>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 text-white">
            <Check className="w-3 h-3" strokeWidth={3} />
          </span>
        </div>
      );
    case "dash":
      return (
        <div className={`flex justify-center items-center p-2 ${baseClass}`}>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-400 text-xs font-bold">
            —
          </span>
        </div>
      );
    case "infinity":
      return (
        <div className={`flex justify-center items-center p-2 ${baseClass}`}>
          <span className="text-emerald-600 font-bold text-xl leading-none">
            ∞
          </span>
        </div>
      );
    case "badge": {
      const variant = value.variant ?? "default";
      return (
        <div className={`flex justify-center items-center px-2 py-2 ${baseClass}`}>
          <span
            className={`font-mono text-[10px] px-2 py-0.5 rounded font-semibold tracking-wide ${badgeStyles[variant]}`}
          >
            {value.label}
          </span>
        </div>
      );
    }
  }
}
