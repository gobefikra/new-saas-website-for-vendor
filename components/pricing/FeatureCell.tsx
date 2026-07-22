import { Check, X } from "lucide-react";
import type { CellValue } from "@/lib/pricing-data";

const GREEN = "#22C55E";
const NAVY = "#0D1B2A";
const MUTED = "#9CA3AF";

type FeatureCellProps = {
  value: CellValue;
};

export default function FeatureCell({ value }: FeatureCellProps) {
  switch (value.type) {
    case "check":
      return (
        <span
          className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full"
          style={{ backgroundColor: GREEN }}
        >
          <Check className="h-3 w-3 text-white" strokeWidth={3} />
        </span>
      );
    case "dash":
      return (
        <X className="h-4 w-4" style={{ color: MUTED }} strokeWidth={2.25} />
      );
    case "infinity":
      return (
        <span className="text-sm font-medium" style={{ color: NAVY }}>
          Unlimited
        </span>
      );
    case "badge":
      return (
        <span className="text-sm font-medium" style={{ color: NAVY }}>
          {value.label}
        </span>
      );
  }
}
