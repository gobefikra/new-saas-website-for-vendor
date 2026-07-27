"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import HeroHubDiagram from "@/components/HeroHubDiagram";
import { fadeInUp, staggerContainer } from "@/components/motion";

const HERO_BG = "#F9FAFB";
const GREEN = "#10B981";
const GREEN_DARK = "#10B981";
const NAVY = "#0F172A";
const BODY_GRAY = "#6B7280";

const ROTATING_LINES = [
  "Scale Effortlessly.",
  "Grow Faster.",
  "Convert More.",
  "Automate Smarter.",
  "Book Confidently.",
];

const LONGEST_LINE = ROTATING_LINES.reduce((a, b) =>
  a.length >= b.length ? a : b,
);

const letterEase = [0.22, 1, 0.36, 1] as const;

const letterContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.04,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.018,
      staggerDirection: -1,
    },
  },
};

const letterItem = {
  hidden: { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.38, ease: letterEase },
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(3px)",
    transition: { duration: 0.22, ease: letterEase },
  },
};

function RotatingHeadlineLine() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_LINES.length);
    }, 3400);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const text = ROTATING_LINES[reduceMotion ? 0 : index];

  return (
    <span
      className="relative inline-grid align-bottom"
      style={{ color: GREEN }}
      aria-live="polite"
    >
      <span className="invisible col-start-1 row-start-1 whitespace-nowrap" aria-hidden>
        {LONGEST_LINE}
      </span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={text}
          className="col-start-1 row-start-1 inline-flex whitespace-nowrap"
          variants={letterContainer}
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          exit={reduceMotion ? undefined : "exit"}
          aria-label={text}
        >
          {text.split("").map((char, i) => (
            <motion.span
              key={`${text}-${i}`}
              variants={letterItem}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      className="w-full overflow-x-hidden px-4 pt-1 pb-14 sm:px-8 sm:pt-2 sm:pb-16 lg:px-16 lg:pt-3 lg:pb-20"
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
            <RotatingHeadlineLine />
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
