"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/components/motion";
import { RavenOrbitPanel, RavenPlatformGrid } from "@/components/raven-ai/RavenOrbitPanel";

const GREEN = "#22C55E";

export default function RavenAISection() {
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, margin: "-60px" });

  return (
    <section id="raven-ai-section" className="w-full overflow-x-hidden">
      {/* White header */}
      <div ref={topRef} className="bg-white px-4 py-16 text-center md:py-20">
        <motion.h2
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.2] text-[#0D1B2A] md:text-5xl lg:text-[3.25rem]"
        >
          Meet{" "}
          <span style={{ color: GREEN }}>Raven AI</span>
          <span className="hidden sm:inline"> —</span>
          <br className="sm:hidden" />
          <span className="sm:ml-1">Your CRM&apos;s Smartest Teammate</span>
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg"
        >
          Automate conversations, qualify leads instantly, get intelligent business
          insights, and create quick itineraries with Raven AI
        </motion.p>

        <motion.div
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.14 }}
        >
          <RavenOrbitPanel />
        </motion.div>
      </div>

      {/* Dark platform grid — part 2 */}
      <div
        className="px-4 py-16 md:py-24"
        style={{ backgroundColor: "#060908" }}
      >
        <div className="mx-auto max-w-[1200px]">
          <RavenPlatformGrid />
        </div>
      </div>
    </section>
  );
}
