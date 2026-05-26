import Link from "next/link";
import { PRICING_SUMMARY } from "@/lib/pricing-data";

export default function SummaryBar() {
  const parts = PRICING_SUMMARY.text.split(
    new RegExp(`(${PRICING_SUMMARY.highlightParts.join("|")})`)
  );

  return (
    <div className="mt-6 bg-gray-900 text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-4">
      <p className="text-base leading-snug max-w-2xl">
        {parts.map((part, i) =>
          PRICING_SUMMARY.highlightParts.includes(
            part as (typeof PRICING_SUMMARY.highlightParts)[number]
          ) ? (
            <strong key={i} className="font-semibold text-emerald-400">
              {part}
            </strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </p>
      <Link
        href="/contact"
        className="shrink-0 border border-white/30 text-white rounded-full px-5 py-2 text-sm hover:bg-white/10 transition-colors"
      >
        {PRICING_SUMMARY.cta} →
      </Link>
    </div>
  );
}
