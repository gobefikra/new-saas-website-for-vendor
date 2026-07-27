"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Database,
  CalendarCheck,
  UserCheck,
  Settings,
  Sparkles,
} from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "@/components/motion";

const insights = [
  "How manual work slows down growth.",
  "How follow-ups directly impact conversion.",
  "How batches and bookings work differently in travel.",
  "We understood how leads arrive from multiple platforms.",
];

const pillars = [
  {
    label: "Lead Management",
    caption: "Capture every inquiry",
    icon: Database,
  },
  {
    label: "Booking System",
    caption: "Batches, dates & seats",
    icon: CalendarCheck,
  },
  {
    label: "Account Management",
    caption: "Teams & permissions",
    icon: UserCheck,
  },
  {
    label: "Automation & AI",
    caption: "Workflows that run themselves",
    icon: Settings,
  },
];

export default function BuiltWithFounders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 bg-dark px-6 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInLeft}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-brand-green">
            CO-CREATED ECOSYSTEM
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-white md:text-5xl">
            Built With <span className="text-brand-green">Founders</span>, Not Just
            For Founders
          </h2>
          <p className="font-sans mt-6 max-w-md text-[15px] leading-relaxed text-gray-400">
            Befikra was built through continuous discussions with travel
            founders and their teams.
          </p>

          <motion.ul
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-10 space-y-3"
          >
            {insights.map((text, i) => (
              <motion.li
                key={text}
                variants={fadeInUp}
                className="flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5 transition-colors hover:border-brand-green/25 hover:bg-white/[0.04]"
              >
                <span className="font-mono text-[11px] font-semibold text-brand-green">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-sm leading-snug text-gray-300">
                  {text}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <p className="font-sans mt-8 max-w-md text-sm leading-relaxed text-subtext">
            So we built a platform that connects everything - from inquiry to
            booking to payment - into one seamless system. A system designed
            specifically for trekking companies, travel operators, and
            experience-based businesses.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInRight}
          className="relative mx-auto w-full max-w-md"
        >
          {/* ambient */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-green/10 via-transparent to-brand-green/10 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-dark/80 p-5 md:p-6">
            {/* crown */}
            <div className="mb-5 flex items-center justify-between rounded-2xl border border-brand-green/20 bg-gradient-to-r from-brand-green/15 to-brand-green/10 px-4 py-3.5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-black">
                  <Sparkles className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    One seamless system
                  </p>
                  <p className="font-sans text-[12px] text-gray-400">
                    Inquiry → booking → payment
                  </p>
                </div>
              </div>
              <span className="hidden rounded-full bg-black/30 px-2.5 py-1 font-mono text-[10px] text-brand-green sm:inline">
                LIVE
              </span>
            </div>

            {/* stacked layers */}
            <div className="relative space-y-2.5">
              <div
                aria-hidden
                className="absolute bottom-7 left-[34px] top-7 w-px bg-gradient-to-b from-brand-green/80 via-brand-green/40 to-brand-green/10"
              />

              {pillars.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 18 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }
                  }
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className="group relative flex items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-black/35 py-3.5 pl-3.5 pr-4 transition-all duration-300 hover:border-brand-green/30 hover:bg-black/50"
                >
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-green/30 bg-dark text-brand-green shadow-[0_0_0_4px_rgba(10,21,16,1)]">
                    <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="font-sans mt-0.5 text-[12px] text-subtext">
                      {item.caption}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-white/20 transition-colors group-hover:text-brand-green/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
              ))}
            </div>

            <p className="font-sans mt-5 text-center text-[11px] tracking-wide text-subtext">
              Four layers · One platform · Founder-shaped
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
