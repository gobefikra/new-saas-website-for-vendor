import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { PRICING_SUMMARY } from "@/lib/pricing-data";

const NAVY = "#0F172A";
const GREEN = "#10B981";

export default function SummaryBar() {
  const parts = PRICING_SUMMARY.text.split(
    new RegExp(`(${PRICING_SUMMARY.highlightParts.join("|")})`)
  );

  return (
    <div
      className="mt-6 flex flex-col flex-wrap items-start justify-between gap-5 rounded-2xl p-6 sm:flex-row sm:items-center md:p-7"
      style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #1a2f45 100%)`,
      }}
    >
      <div className="flex items-start gap-4">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: "rgba(16, 185, 129,0.15)" }}
        >
          <TrendingUp className="h-5 w-5" style={{ color: GREEN }} strokeWidth={2.25} />
        </span>
        <p className="font-dm-sans max-w-2xl text-base leading-relaxed text-gray-200">
          {parts.map((part, i) =>
            PRICING_SUMMARY.highlightParts.includes(
              part as (typeof PRICING_SUMMARY.highlightParts)[number]
            ) ? (
              <strong key={i} className="font-semibold text-white">
                {part}
              </strong>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
      </div>
      <Link
        href="/contact"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: GREEN }}
      >
        {PRICING_SUMMARY.cta}
        <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
      </Link>
    </div>
  );
}
