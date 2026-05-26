"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/components/motion";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden bg-white py-20 md:py-28 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight"
        >
          Smarter Systems.{" "}
          <span className="text-emerald-500">Faster</span>
          <br />
          <span className="text-emerald-500">Growth.</span> Better Decisions.
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-gray-900 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          See how Befikra automate bookings, manage leads, and increases revenue
          for travel businesses. All from one intelligent dashboard built for
          scale.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="mt-12 w-full max-w-5xl mx-auto aspect-video bg-gray-200 rounded-3xl"
          aria-label="Product video placeholder"
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#products"
            className="bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold text-lg hover:bg-emerald-600 transition-colors"
          >
            Discover Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
