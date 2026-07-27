"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/components/motion";
import { RavenOrbitPanel } from "@/components/raven-ai/RavenOrbitPanel";
import { RavenPlatformGrid } from "@/components/raven-ai/RavenPlatformBento";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RavenAISection() {
  const topRef = useRef(null);
  const topInView = useInView(topRef, { once: true, margin: "-60px" });

  return (
    <section id="raven-ai-section" className="w-full overflow-x-hidden">
      {/* White header */}
      <div ref={topRef} className="bg-white px-4 py-12 text-center md:py-16">
        <motion.div
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <SectionHeading
            as="h2"
            eyebrow="AI Features"
            title={
              <>
                Meet <span className="text-brand-green">Raven AI</span>
              </>
            }
            script="your smartest teammate"
            description="Automate conversations, qualify leads instantly, get intelligent business insights, and create quick itineraries with Raven AI"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={topInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.14 }}
        >
          <RavenOrbitPanel />
        </motion.div>
      </div>

      {/* Dark platform grid — deep forest canvas */}
      <div className="bg-dark px-4 py-14 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <RavenPlatformGrid />
        </div>
      </div>
    </section>
  );
}
