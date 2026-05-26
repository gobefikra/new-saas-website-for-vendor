"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Database,
  CalendarCheck,
  UserCheck,
  Settings,
} from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/components/motion";

const insights = [
  "How manual work slows down growth.",
  "How follow-ups directly impact conversion.",
  "How batches and bookings work differently in travel.",
  "We understood how leads arrive from multiple platforms.",
];

const corners = [
  { label: "Lead Management", icon: Database, pos: "top-[8%] left-[2%]" },
  { label: "Booking System", icon: CalendarCheck, pos: "top-[8%] right-[2%]" },
  { label: "Account Management", icon: UserCheck, pos: "bottom-[8%] left-[2%]" },
  { label: "Automation & AI", icon: Settings, pos: "bottom-[8%] right-[2%]" },
];

export default function BuiltWithFounders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black py-24 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <p className="text-emerald-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            CO-CREATED ECOSYSTEM
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Built With <span className="text-lime-400">Founders</span>, Not Just
            For Founders
          </h2>
          <p className="text-gray-400 text-base mt-6 max-w-sm">
            Befikra was built through continuous discussions with travel
            founders and their teams.
          </p>
          <div className="space-y-3 mt-8">
            {insights.map((text) => (
              <div
                key={text}
                className="bg-[#0D2B1A] border border-[#1A4030] rounded-full px-5 py-3 flex items-center gap-3 w-fit max-w-full"
              >
                <span className="w-3 h-3 rounded-full bg-emerald-500 shrink-0" />
                <span className="text-gray-300 text-sm">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-8 max-w-sm leading-relaxed">
            So we built a platform that connects everything — from inquiry to
            booking to payment — into one seamless system. A system designed
            specifically for trekking companies, travel operators, and
            experience-based businesses.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight}
          className="relative h-80 md:h-96 w-full"
        >
          <motion.div
            className="absolute bg-emerald-500 opacity-10 blur-3xl rounded-full w-48 h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {[
              { x1: 50, y1: 50, x2: 14, y2: 20 },
              { x1: 50, y1: 50, x2: 86, y2: 20 },
              { x1: 50, y1: 50, x2: 14, y2: 80 },
              { x1: 50, y1: 50, x2: 86, y2: 80 },
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#1A4030"
                strokeWidth="0.4"
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  inView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
            ))}
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0D2B1A] border border-emerald-800 rounded-2xl w-16 h-16 flex items-center justify-center shadow-lg shadow-emerald-900/50 z-10">
            <TrendingUp className="text-emerald-400 text-2xl" />
          </div>

          {corners.map((item) => (
            <div
              key={item.label}
              className={`absolute ${item.pos} bg-[#0D1F14] border border-[#1A3A25] rounded-xl px-4 py-2.5 flex items-center gap-2 z-10`}
            >
              <item.icon className="text-emerald-400 text-sm shrink-0" />
              <span className="text-white text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
