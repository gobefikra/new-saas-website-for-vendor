import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { PRICING_CTA } from "@/lib/pricing-data";

const NAVY = "#0F172A";
const GREEN = "#10B981";

export default function PricingCTA() {
  return (
    <section className="px-4 pb-20 md:px-8 md:pb-24">
      <div
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-16 text-center md:px-12 md:py-20"
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #152a3d 50%, #0f2418 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(16,185,129,0.18), transparent 65%)",
          }}
        />

        <div className="relative">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
            style={{
              borderColor: "rgba(16,185,129,0.35)",
              backgroundColor: "rgba(16,185,129,0.12)",
              color: GREEN,
            }}
          >
            <Rocket className="h-3.5 w-3.5" strokeWidth={2.25} />
            Get started
          </span>

          <h3 className="mt-6 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
            {PRICING_CTA.title}{" "}
            <span style={{ color: GREEN }}>{PRICING_CTA.titleEmphasis}</span>
          </h3>

          <p className="font-dm-sans mx-auto mt-4 max-w-md text-base text-gray-300">
            {PRICING_CTA.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN }}
            >
              {PRICING_CTA.primary}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-3.5 font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              {PRICING_CTA.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
