"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  User,
  MapPin,
  ShieldCheck,
  Zap,
  TrendingUp,
  Star,
  type LucideIcon,
} from "lucide-react";
import { fadeInUp } from "@/components/motion";
import { ValuesIllustration } from "@/components/our-story/illustrations";

const values: {
  icon: LucideIcon;
  label: string;
  desc: string;
}[] = [
  {
    icon: User,
    label: "Customer First",
    desc: "Every workflow starts with the traveler experience.",
  },
  {
    icon: MapPin,
    label: "Passion for Exploration",
    desc: "Built by people who understand the outdoors.",
  },
  {
    icon: ShieldCheck,
    label: "Reliability & Trust",
    desc: "Stable systems partners can run peak season on.",
  },
  {
    icon: Zap,
    label: "Speed & Simplicity",
    desc: "Less admin, clearer tools, faster decisions.",
  },
  {
    icon: TrendingUp,
    label: "Innovation & Growth",
    desc: "Ship what founders ask for — then keep improving.",
  },
  {
    icon: Star,
    label: "Quality",
    desc: "Craft details that make daily ops feel premium.",
  },
];

export default function CoreValues() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

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
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl">
              Core <span className="text-brand-green">Values</span>
            </h2>
            <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-white/55 md:text-[15px]">
              The principles behind every product decision we ship for travel
              and adventure teams.
            </p>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
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
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.07,
              },
            },
          }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#12281C] to-[#0A1510] p-6 shadow-[0_8px_28px_rgba(0,0,0,0.25)] md:min-h-[220px] md:p-7"
            >
              {/* Soft corner glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-brand-green/[0.07] blur-2xl"
              />
              {/* Top accent line */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/45 to-transparent"
              />

              <div className="relative flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-green/30 bg-brand-green/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <item.icon
                    className="h-5 w-5 text-[#A7D7BC]"
                    strokeWidth={1.85}
                  />
                </div>
                <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-brand-green/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-6 font-display text-lg font-semibold tracking-[-0.02em] text-white md:text-xl">
                {item.label}
              </h3>
              <p className="relative mt-2.5 flex-1 font-sans text-[13px] leading-relaxed text-white/50 md:text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
