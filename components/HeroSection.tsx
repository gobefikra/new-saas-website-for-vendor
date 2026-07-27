"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import HeroHubDiagram from "@/components/HeroHubDiagram";
import { fadeInUp, staggerContainer } from "@/components/motion";
import ScriptAccent from "@/components/ui/ScriptAccent";
import { brand } from "@/lib/brand-theme";

const HERO_BG = brand.surfaceHover;
const GREEN = brand.green;
const GREEN_DARK = brand.greenDark;
const NAVY = brand.navy;
const BODY_GRAY = brand.muted;

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

const letterEase = [0.16, 1, 0.3, 1] as const;

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
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand-green" />
            <span className="section-eyebrow normal-case tracking-[0.14em]">
              Intelligent CRM for Travel Businesses
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="mt-5 font-display text-[2.25rem] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]"
            style={{ color: NAVY }}
          >
            <span className="whitespace-nowrap">Simplify&nbsp;Operations.</span>
            <br />
            Strengthen Relationships.
            <br />
            <RotatingHeadlineLine />
          </motion.h1>

          <motion.div variants={fadeInUp} className="mt-3">
            <ScriptAccent size="lg">without worry</ScriptAccent>
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mt-5 max-w-[420px] font-sans text-base leading-relaxed"
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
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-cta-glow transition-all duration-200 ease-brand hover:bg-brand-green-dark active:scale-95"
            >
              Get a demo →
            </Link>
            <Link
              href="/#smart-dashboard"
              className="inline-flex items-center gap-2.5 rounded-full border border-brand-green-dark bg-white px-5 py-3 text-sm font-semibold text-navy transition-all duration-200 ease-brand hover:border-brand-green hover:bg-off-white active:scale-95"
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
