"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function DetailCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-6 text-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #0D2B1F 0%, #0F172A 55%, #0F172A 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={
          inView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 24, scale: 0.96 }
        }
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
          Ready to experience
          <br />
          the difference?
        </h2>
        <p className="text-gray-300 text-base mt-6 max-w-md mx-auto">
          Join thousands of teams building better products faster with
          Befikra&apos;s real-time infrastructure.
        </p>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-emerald-600 transition-colors"
          >
            Start for Free
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
