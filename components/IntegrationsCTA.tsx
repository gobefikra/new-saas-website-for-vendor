"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { scaleIn } from "@/components/motion";

export default function IntegrationsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden py-24 px-4 relative"
      style={{
        background:
          "radial-gradient(ellipse at center, #0D2B1F 0%, #0F172A 55%, #0F172A 100%)",
      }}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={scaleIn}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
          Connect Your
          <br />
          Customer Channels
        </h2>
        <p className="text-gray-300 text-base mt-6 max-w-md mx-auto leading-relaxed">
          Capture leads, reply instantly, and manage bookings from WhatsApp,
          Instagram, and Befikra — all in one powerful CRM.
        </p>
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
