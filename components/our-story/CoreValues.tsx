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
import { fadeInUp } from "@/components/motion";
import { ValuesIllustration } from "@/components/our-story/illustrations";

const values = [
  { icon: User, label: "Customer First" },
  { icon: MapPin, label: "Passion for Exploration" },
  { icon: ShieldCheck, label: "Reliability & Trust" },
  { icon: Zap, label: "Speed & Simplicity" },
  { icon: TrendingUp, label: "Innovation & Growth" },
  { icon: Star, label: "Quality" },
];

export default function CoreValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 bg-black px-6 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-emerald-400">
              What guides us
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              <span className="text-emerald-400">Core Values</span>
              <span className="text-white"> Section</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.55 }}
            className="hidden lg:block"
          >
            <ValuesIllustration className="w-full" />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
        >
          {values.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1510] p-6 md:p-8"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-400/5 transition-colors group-hover:bg-emerald-400/10"
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                <item.icon className="h-5 w-5 text-emerald-400" strokeWidth={1.75} />
              </div>
              <p className="relative mt-5 text-sm font-semibold text-white md:text-[15px]">
                {item.label}
              </p>
              <span className="relative mt-3 block font-mono text-[10px] text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
