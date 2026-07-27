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
      className="relative overflow-hidden border-t border-white/5 bg-dark px-6 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-brand-green">
              What guides us
            </p>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-brand-green md:text-5xl">
              Core Values
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
              className="card-brand-dark relative overflow-hidden p-6 md:p-8"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-green/20 bg-brand-green/10">
                <item.icon className="h-5 w-5 text-brand-green" strokeWidth={1.75} />
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
