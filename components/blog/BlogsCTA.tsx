"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand-theme";

export default function BlogsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl px-6 py-16 text-center md:px-12 md:py-20"
          style={{
            background: `radial-gradient(ellipse 70% 80% at 50% 45%, ${brand.forest} 0%, ${brand.ravenDark} 52%, ${brand.dark} 100%)`,
          }}
        >
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl">
            Ready to run your treks with less chaos?
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-sans text-sm leading-relaxed text-white/65 md:text-base">
            Put these ideas into practice with a CRM built for trek operators —
            bookings, leads, and updates in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white shadow-cta-glow transition-all duration-200 ease-brand hover:bg-brand-green-dark active:scale-95"
            >
              Start for Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/5"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
