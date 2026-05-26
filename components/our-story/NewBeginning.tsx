"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell, MessageSquareX, Clock, LayoutGrid } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";

const painCards = [
  {
    icon: Bell,
    title: "Missed Leads",
    desc: "Opportunities lost to slow response times.",
  },
  {
    icon: MessageSquareX,
    title: "Misscommunication",
    desc: "Opportunities lost to slow response times.",
  },
  {
    icon: Clock,
    title: "Delayed Follow-ups",
    desc: "Hours wasted typing the same emails.",
  },
  {
    icon: LayoutGrid,
    title: "Spreadsheet Chaos",
    desc: "Static spreadsheets that break constantly.",
  },
];

export default function NewBeginning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black py-24 px-6 text-center">
      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-emerald-400 text-xs font-semibold tracking-[0.3em] uppercase mb-8"
      >
        A NEW BEGINNING
      </motion.p>

      <motion.blockquote
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="text-white text-2xl md:text-4xl font-bold leading-snug max-w-4xl mx-auto"
      >
        We spoke to multiple travel and adventure business owners who told us
        the same thing: &ldquo;We are good at running experiences. We are not
        good at managing systems.&rdquo;
      </motion.blockquote>

      <motion.p
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-base mt-10 max-w-3xl mx-auto leading-relaxed"
      >
        It started with a simple observation: travel agencies were drowning in
        admin work while trying to deliver dream vacations. We saw passionate
        founders buried in spreadsheets, losing track of inquiries, and
        struggling to scale. We knew there had to be a better way.
      </motion.p>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto"
      >
        {painCards.map((card) => (
          <motion.div
            key={card.title}
            variants={fadeInUp}
            className="bg-[#0D1F14] border border-[#1A3A25] rounded-2xl p-6 text-left hover:border-emerald-700 transition-colors"
          >
            <div className="bg-[#0A2A18] rounded-xl p-3 w-12 h-12 flex items-center justify-center mb-4">
              <card.icon className="text-emerald-400 text-2xl" />
            </div>
            <h3 className="font-semibold text-white text-base">{card.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
