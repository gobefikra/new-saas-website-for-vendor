import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand-theme";
import { PRICING_CTA } from "@/lib/pricing-data";

export default function PricingCTA() {
  return (
    <section className="bg-white px-4 pb-20 md:px-8 md:pb-24">
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-14 text-center md:px-12 md:py-16"
        style={{
          background: `linear-gradient(145deg, ${brand.navy} 0%, #152a3d 55%, #0f2418 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.16), transparent 65%)",
          }}
        />

        <div className="relative">
          <h3 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {PRICING_CTA.title}{" "}
            <span style={{ color: brand.primary }}>{PRICING_CTA.titleEmphasis}</span>
          </h3>

          <p className="font-dm-sans mx-auto mt-4 max-w-md text-base leading-relaxed text-gray-300">
            {PRICING_CTA.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: brand.primary }}
            >
              {PRICING_CTA.primary}
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              {PRICING_CTA.secondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
