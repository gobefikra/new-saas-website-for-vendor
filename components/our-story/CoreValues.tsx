"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  User,
  MapPin,
  ShieldCheck,
  Zap,
  TrendingUp,
  Star,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";

const values = [
  {
    icon: User,
    label: "Customer First",
    iconBg: "bg-emerald-900/50",
    iconColor: "text-emerald-400",
    border: "border-[#1A4A30]",
  },
  {
    icon: MapPin,
    label: "Passion for Exploration",
    iconBg: "bg-lime-900/40",
    iconColor: "text-lime-400",
    border: "border-[#1A3A25]",
  },
  {
    icon: ShieldCheck,
    label: "Reliability & Trust",
    iconBg: "bg-emerald-900/50",
    iconColor: "text-emerald-300",
    border: "border-[#1A3A25]",
  },
  {
    icon: Zap,
    label: "Speed & Simplicity",
    iconBg: "bg-lime-900/40",
    iconColor: "text-lime-300",
    border: "border-[#1A3A25]",
  },
  {
    icon: TrendingUp,
    label: "Innovation & Growth",
    iconBg: "bg-emerald-900/40",
    iconColor: "text-emerald-400",
    border: "border-[#1A3A25]",
  },
  {
    icon: Star,
    label: "Quality",
    iconBg: "bg-lime-900/50",
    iconColor: "text-lime-400",
    border: "border-[#1A3A25]",
  },
];

export default function CoreValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black py-24 px-6">
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-center text-4xl md:text-5xl font-extrabold"
      >
        <span className="text-lime-400">Core Values</span>
        <span className="text-white"> Section</span>
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
        className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-14 max-w-5xl mx-auto"
      >
        {values.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            className={`bg-[#0D1F14] border ${item.border} rounded-3xl p-8 flex flex-col items-center text-center hover:border-emerald-600 hover:bg-[#0D2B1A] transition-colors duration-300 cursor-default`}
          >
            <div
              className={`${item.iconBg} rounded-2xl p-4 w-14 h-14 flex items-center justify-center mb-5`}
            >
              <item.icon className={`${item.iconColor} text-2xl`} />
            </div>
            <p className="text-white font-semibold text-base">{item.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
