"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/components/motion";

export default function StoryCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative bg-black py-28 px-6 text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #0D3D20 0%, #000000 70%)",
        }}
      />
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 24, scale: 0.96 },
          visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">
          Join the Travel
          <br />
          Businesses Building
          <br />
          Smarter Systems
        </h2>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="mt-10 flex gap-4 justify-center flex-wrap"
        >
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="inline-block bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-emerald-600 transition-colors"
            >
              Book a demo
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href="/contact"
              className="inline-block border border-gray-600 text-white rounded-full px-8 py-3.5 font-semibold hover:border-gray-400 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
