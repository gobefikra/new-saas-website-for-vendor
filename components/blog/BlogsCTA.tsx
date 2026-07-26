"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BlogsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white px-5 py-16 md:px-10 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] px-6 py-16 text-center md:px-12 md:py-20"
        style={{
          background:
            "radial-gradient(ellipse 75% 90% at 50% 40%, #0d3d2e 0%, #071b14 55%, #04110d 100%)",
        }}
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
          Ready to run your treks with less chaos?
        </h2>
        <p className="font-dm-sans mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
          Put these ideas into practice with a CRM built for trek operators —
          bookings, leads, and updates in one place.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(16,185,129,0.75)] transition hover:bg-emerald-400"
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
    </section>
  );
}
