"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { scaleIn } from "@/components/motion";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden py-24 px-4 relative"
      style={{
        background:
          "linear-gradient(180deg, #0D2B1F 0%, #0F172A 50%, #0F172A 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(16, 185, 129, 0.15) 0%, transparent 65%)",
        }}
      />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={scaleIn}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-white block">One CRM. All Your</span>
          <span className="block bg-gradient-to-b from-white via-emerald-200 to-lime-accent bg-clip-text text-transparent">
            Integrations.
          </span>
          <span className="block bg-gradient-to-b from-white via-emerald-200 to-lime-accent bg-clip-text text-transparent">
            Fully Connected.
          </span>
        </h2>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-emerald-600 transition-colors"
          >
            Book a demo
          </Link>
          <Link
            href="/contact"
            className="border border-gray-500 text-white rounded-full px-8 py-3.5 font-semibold hover:border-white transition-colors"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
