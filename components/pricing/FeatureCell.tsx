import { Check, Minus } from "lucide-react";
import { brand } from "@/lib/brand-theme";
import type { BadgeVariant, CellValue } from "@/lib/pricing-data";

type FeatureCellProps = {
  value: CellValue;
};

const badgeColors: Record<BadgeVariant, string> = {
  default: brand.navy,
  green: brand.primaryDark,
  amber: "#D97706",
  rust: "#DC2626",
};

export default function FeatureCell({ value }: FeatureCellProps) {
  switch (value.type) {
    case "check":
      return (
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: brand.mint }}
          aria-label="Included"
        >
          <Check
            className="h-3.5 w-3.5"
            style={{ color: brand.primaryDark }}
            strokeWidth={3}
          />
        </span>
      );
    case "dash":
      return (
        <span aria-label="Not available">
          <Minus
            className="h-4 w-4"
            style={{ color: brand.muted }}
            strokeWidth={2.25}
          />
        </span>
      );
    case "infinity":
      return (
        <span
          className="text-sm font-semibold"
          style={{ color: brand.primaryDark }}
        >
          Unlimited
        </span>
      );
    case "badge": {
      const isLong = value.label.length > 18;
      return (
        <span
          className={`block max-w-[11rem] text-center font-medium leading-snug ${
            isLong ? "text-xs" : "text-sm"
          }`}
          style={{ color: badgeColors[value.variant ?? "default"] }}
        >
          {value.label}
        </span>
      );
    }
  }
}
