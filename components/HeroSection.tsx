"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import HeroHubDiagram from "@/components/HeroHubDiagram";
import { fadeInUp, staggerContainer } from "@/components/motion";

const HERO_BG = "#F1F4F7";
const GREEN = "#2E7D32";
const GREEN_DARK = "#1B5E20";
const NAVY = "#0D1B2A";
const BODY_GRAY = "#6B7280";

export default function HeroSection() {
  return (
    <section
      className="w-full overflow-x-hidden px-4 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20"
      style={{ backgroundColor: HERO_BG }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        <motion.div
          initial={false}
          animate="visible"
          variants={staggerContainer}
          className="text-left"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-3.5 py-1.5 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0" style={{ color: GREEN }} />
            <span
              className="font-dm-sans text-xs font-medium sm:text-[13px]"
              style={{ color: NAVY }}
            >
              Intelligent CRM for Travel Businesses
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-5 text-[2.25rem] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            style={{ color: NAVY }}
          >
            Simplify Operations.
            <br />
            Strengthen Relationships.
            <br />
            <span style={{ color: GREEN }}>Scale Effortlessly.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-dm-sans mt-5 max-w-[420px] text-base leading-relaxed"
            style={{ color: BODY_GRAY }}
          >
            Befikra CRM helps travel businesses automate tasks, understand their
            customers, and grow revenue with AI-powered insights.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: GREEN_DARK }}
            >
              Get a demo →
            </Link>
            <Link
              href="/#smart-dashboard"
              className="inline-flex items-center gap-2.5 rounded-full border bg-white px-5 py-3 text-sm font-semibold transition-colors hover:bg-gray-50"
              style={{ borderColor: GREEN_DARK, color: NAVY }}
            >
              Explore features
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full"
                style={{ backgroundColor: GREEN }}
              >
                <Play className="h-3 w-3 fill-white text-white" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="relative w-full overflow-visible lg:justify-self-end"
        >
          <HeroHubDiagram />
        </motion.div>
      </div>
    </section>
  );
}
