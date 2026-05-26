"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/components/motion";

const steps = [
  {
    step: "Step 1",
    emoji: "📢",
    title: "Capture Leads from Multiple Sources",
    desc: "Funnel inquiries automatically from WhatsApp, Instagram, and web forms directly into your dashboard.",
  },
  {
    step: "Step 2",
    emoji: "📊",
    title: "Track and Manage Leads in CRM",
    desc: "Organize prospects in a visual pipeline. Use AI to qualify them and automate initial responses seamlessly",
  },
  {
    step: "Step 3",
    emoji: "🔄",
    title: "Convert Leads into Bookings",
    desc: "Share personalized itineraries, collect payments via secure links, and confirm slots instantly.",
  },
  {
    step: "Step 4",
    emoji: "📈",
    title: "Analyze Performance and Grow",
    desc: "Review revenue trends, track team efficiency, and optimize marketing spend using clear insights.",
    darkIcon: true,
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden bg-white py-20 md:py-28 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl md:text-5xl font-extrabold text-center text-near-black"
        >
          How <span className="text-lime-accent">Befikra Powers</span> Your
          Growth
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-subtext text-center max-w-2xl mx-auto mt-4"
        >
          Run Your Entire Travel Business in 4 Simple Steps. Capture leads,
          convert bookings, and manage operations — all from one powerful
          platform.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="border border-gray-200 rounded-3xl p-8 bg-white hover:shadow-lg transition-shadow"
            >
              <span className="text-sm text-subtext font-medium">{item.step}</span>
              <div
                className={`mt-4 w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
                  item.darkIcon
                    ? "bg-forest-dark"
                    : "bg-teal-100"
                }`}
              >
                <span role="img" aria-hidden>
                  {item.emoji}
                </span>
              </div>
              <h3 className="font-bold text-xl text-near-black mt-4">
                {item.title}
              </h3>
              <p className="text-subtext text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
