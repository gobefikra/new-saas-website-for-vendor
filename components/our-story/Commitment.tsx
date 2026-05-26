"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Globe } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";

export default function Commitment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black py-24 px-6 text-center">
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-extrabold"
      >
        <span className="text-lime-400">Our Commitment</span>
        <span className="text-white"> to the Industry</span>
      </motion.h2>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-gray-300 text-base md:text-lg mt-8 max-w-3xl mx-auto leading-relaxed"
      >
        Befikra is not a finished product. It is an evolving platform. We
        continuously work on improving workflows, adding new features, and
        solving deeper operational challenges faced by travel businesses.{" "}
        <span className="text-emerald-400">
          We are committed to listening. We are committed to improving.
        </span>{" "}
        And most importantly, we are committed to helping travel businesses
        grow. Because we don&apos;t just build software. We build solutions for
        the industry we deeply understand. And we are proud to be part of your
        journey.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto text-left"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-[#0D1F14] border border-[#1A3A25] rounded-3xl p-8"
        >
          <div className="bg-[#0A2A18] rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-4">
            <Target className="text-emerald-400 text-2xl" />
          </div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-3">
            Our Mission
          </p>
          <p className="text-white font-bold text-xl leading-snug">
            To give businesses the tools they need to reach more people and
            succeed.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-[#0D1F14] border border-[#1A3A25] rounded-3xl p-8"
        >
          <div className="bg-[#0A1A30] rounded-xl p-3 w-14 h-14 flex items-center justify-center mb-4">
            <Globe className="text-blue-400 text-2xl" />
          </div>
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-3">
            Our Vision
          </p>
          <p className="text-white font-bold text-xl leading-snug">
            To make exploration easy, exciting, and accessible.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
