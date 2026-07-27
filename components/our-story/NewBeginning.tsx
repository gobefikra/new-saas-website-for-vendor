"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
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
    title: "Miscommunication",
    desc: "Teams talking past each other across channels.",
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

const milestones = [
  {
    id: "01",
    flag: "Base Camp",
    phase: "The Signal",
    title: "One problem, clearly seen",
    body: "June 2025. We started with a single question: why do travel agents run world-class experiences on scattered, broken tools? The idea was simple — an AI-powered back office where marketing, documents, customers, finance, and teams finally live in one place.",
    side: "left" as const,
  },
  {
    id: "02",
    flag: "Listening Ridge",
    phase: "Field Notes",
    title: "Three months, in the field",
    body: "We didn't build on assumptions. Over three months of deep research, we studied 30+ dashboards and tools to understand what travel businesses truly need — and where every existing system quietly fails them.",
    side: "right" as const,
  },
  {
    id: "03",
    flag: "Route Sketch",
    phase: "The Blueprint",
    title: "Designed to feel effortless",
    body: "Then we built. Clean, intuitive, uncluttered — an interface an operator can open and understand on day one. Not another heavy CRM, but a system shaped around how travel teams already work.",
    side: "left" as const,
  },
  {
    id: "04",
    flag: "Shared Camp",
    phase: "Co-Created",
    title: "Refined with real operators",
    body: "We put it in front of agency owners and listened hard. Their real struggles — payments, leads, integrations, customer experience — became our roadmap. Every rough edge we heard about, we solved.",
    side: "right" as const,
  },
  {
    id: "05",
    flag: "Open Trail",
    phase: "Onward",
    title: "Growing, together",
    body: "August 2026 — just over a year in — we launched. Travel partners are already onboard, our team has grown past 10, and we're in full growth mode. Befikra isn't a finished summit; it's a living trail we keep walking with the founders who trust us.",
    side: "left" as const,
  },
];

/** Tall snaking trail — viewBox coords map to the full journey height */
const TRAIL_PATH =
  "M 200 40 C 120 160, 280 280, 200 400 C 110 530, 300 650, 200 780 C 90 920, 310 1040, 200 1160 C 120 1280, 290 1400, 200 1520 C 130 1620, 260 1700, 200 1780";

function ContourBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="h-full w-full opacity-[0.22]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="befikra-topo"
            width="160"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 Q40 18 80 50 T160 50 M0 78 Q40 48 80 78 T160 78 M0 22 Q40 -6 80 22 T160 22"
              fill="none"
              stroke="#6EE7B7"
              strokeOpacity="0.35"
              strokeWidth="0.7"
            />
            <path
              d="M-20 64 Q20 36 60 64 T140 64 T220 64"
              fill="none"
              stroke="#A7D7BC"
              strokeOpacity="0.18"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="trail-vignette" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#befikra-topo)" />
        <rect width="100%" height="100%" fill="url(#trail-vignette)" />
      </svg>
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

function HexMarker({
  label,
  alignToPath = false,
}: {
  label: string;
  /** When true, hex center stays on the trail; badge floats above */
  alignToPath?: boolean;
}) {
  const badge = (
    <span className="whitespace-nowrap rounded-full border border-brand-green/55 bg-black/50 px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-brand-green shadow-[0_0_20px_rgba(45,106,79,0.15)] backdrop-blur-sm">
      {label}
    </span>
  );

  const hex = (
    <div className="relative">
      <span className="absolute -inset-5 rounded-full bg-brand-green/25 blur-2xl" />
      <svg
        width="40"
        height="44"
        viewBox="0 0 44 48"
        className="relative drop-shadow-[0_0_16px_rgba(45,106,79,0.55)]"
        aria-hidden
      >
        <path
          d="M22 2.5 L39.5 12.5 L39.5 35.5 L22 45.5 L4.5 35.5 L4.5 12.5 Z"
          fill="#07140f"
          stroke="#2D6A4F"
          strokeWidth="1.75"
        />
        <circle cx="22" cy="24" r="4.5" fill="#2D6A4F" />
      </svg>
    </div>
  );

  if (alignToPath) {
    return (
      <div className="relative flex h-11 w-11 items-center justify-center">
        <div className="absolute bottom-[calc(100%+0.75rem)] left-1/2 z-10 -translate-x-1/2">
          {badge}
        </div>
        {hex}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      {badge}
      {hex}
    </div>
  );
}

function MilestoneCard({
  mile,
  index,
}: {
  mile: (typeof milestones)[number];
  index: number;
}) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, {
    once: true,
    amount: 0.45,
    margin: "0px 0px -10% 0px",
  });
  const fromLeft = mile.side === "left";

  return (
    <div
      ref={ref}
      className="relative flex min-h-[88vh] items-center py-16 md:min-h-[92vh] md:py-24"
    >
      {/* Center marker — hex sits on the path; badge floats above */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <motion.div
          animate={
            inView && !reduceMotion ? { y: [0, -4, 0, 4, 0] } : undefined
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <HexMarker label={mile.flag} alignToPath />
        </motion.div>
      </motion.div>

      <div
        className={`relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 md:px-8 lg:grid-cols-2 lg:gap-24 ${
          fromLeft ? "" : "lg:[&>*:first-child]:order-2"
        }`}
      >
        <motion.article
          initial={
            reduceMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  x: fromLeft ? -56 : 56,
                  y: 40,
                  rotate: fromLeft ? -3.5 : 3.5,
                }
          }
          animate={
            inView
              ? reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, x: 0, y: 0, rotate: 0 }
              : undefined
          }
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.08,
          }}
          className={fromLeft ? "lg:pr-6" : "lg:pl-6"}
        >
          <motion.div
            animate={
              inView && !reduceMotion
                ? {
                    y: [0, fromLeft ? -5 : 5, 0, fromLeft ? 5 : -5, 0],
                  }
                : undefined
            }
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1 + index * 0.15,
            }}
            className={`w-full max-w-[26rem] ${fromLeft ? "lg:ml-auto" : ""}`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1510]/90 p-7 shadow-[0_28px_70px_-36px_rgba(0,0,0,0.95)] backdrop-blur-md md:p-8">
              {/* Soft emerald wash */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-brand-green/10 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/35 to-transparent"
              />

              {/* Header: phase + step */}
              <div className="relative flex items-center justify-between gap-4">
                <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-subtext">
                  {mile.phase}
                </span>
                <span className="font-mono text-sm font-semibold tracking-[0.12em] text-brand-green">
                  {mile.id}
                </span>
              </div>

              {/* Mobile trail marker */}
              <div className="relative mt-5 flex lg:hidden">
                <HexMarker label={mile.flag} />
              </div>

              <h3 className="relative mt-7 text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.035em] text-white md:text-[2rem]">
                {mile.title}
              </h3>

              <p className="font-sans relative mt-4 text-[15px] leading-relaxed text-gray-400">
                {mile.body}
              </p>
            </div>
          </motion.div>
        </motion.article>

        <div className="hidden lg:block" aria-hidden />
      </div>
    </div>
  );
}

function JourneyTrail() {
  const milestonesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: milestonesRef,
    // 0 = first card enters / reveals; 1 = last card leaves center
    offset: ["start 55%", "end 45%"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative mt-8 border-t border-white/5 md:mt-10">
      <ContourBackdrop />

      {/* Intro for the trail — path does not start here */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 pb-8 pt-12 text-center md:px-8 md:pt-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.55 }}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-brand-green"
        >
          The trail so far
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-5xl"
        >
          Our journey,{" "}
          <span className="text-brand-green">one camp at a time</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="font-sans mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-gray-400"
        >
          Scroll the path. Each milestone is a chapter in how Befikra grew from
          a single frustration into a platform built for the way adventure
          businesses actually run.
        </motion.p>
      </div>

      {/* Path + milestones: progress starts with card 01 */}
      <div ref={milestonesRef} className="relative z-10 pb-28 md:pb-36">
        {/* Winding track — same wavy path on mobile and desktop */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-[1] w-[min(100%,280px)] -translate-x-1/2 sm:w-[340px] lg:w-[400px]">
          <svg
            viewBox="0 0 400 1850"
            preserveAspectRatio="none"
            className="h-full w-full"
            aria-hidden
          >
            {/* Soft empty track */}
            <path
              d={TRAIL_PATH}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="22"
              strokeLinecap="round"
            />
            {/* Emerald progress — grows from first card */}
            <motion.path
              d={TRAIL_PATH}
              fill="none"
              stroke="#2D6A4F"
              strokeWidth="3.5"
              strokeLinecap="round"
              style={{ pathLength: pathLength as MotionValue<number> }}
            />
          </svg>
        </div>

        {milestones.map((mile, index) => (
          <MilestoneCard key={mile.id} mile={mile} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function NewBeginning() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-dark">
      <div className="px-6 pb-12 pt-24 md:px-8 md:pb-16 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="relative pt-14 md:pt-24"
          >
            <h2
              aria-label="A New Beginning"
              className="pointer-events-none absolute inset-x-0 top-0 z-20 whitespace-nowrap text-center text-[clamp(3rem,10vw,7.5rem)] font-display font-semibold leading-none tracking-[-0.055em] text-white"
            >
              A New <span className="text-brand-green">Beginning</span>
            </h2>

            <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10">
              <div className="relative aspect-[16/9] min-h-[310px] md:min-h-[460px]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&h=900&auto=format&fit=crop"
                  alt=""
                  fill
                  className="object-cover object-center opacity-75"
                  sizes="(max-width: 1200px) 100vw, 1152px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/15" />
              </div>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ delay: 0.15, duration: 0.55 }}
              className="relative z-30 mx-auto -mt-16 max-w-3xl md:-mt-20"
            >
              <div className="relative px-6 py-8 text-center md:px-8 md:py-10">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/60 to-transparent"
                />
                <p className="relative inline-block text-left text-lg font-medium leading-snug tracking-tight text-white md:text-2xl md:leading-snug">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-12 -top-8 select-none font-serif text-[7rem] leading-none text-brand-green/20 md:-left-14 md:-top-10 md:text-[8.5rem]"
                  >
                    &ldquo;
                  </span>
                  <span className="block">
                    We are good at running experiences.
                  </span>
                  <span className="block">
                    We are not good at{" "}
                    <span className="text-brand-green">managing systems.</span>
                  </span>
                </p>
              </div>
            </motion.blockquote>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="mx-auto mt-20 grid max-w-4xl gap-6 md:mt-24 md:grid-cols-2 md:gap-12"
          >
            <p className="text-xl font-semibold leading-snug tracking-tight text-white md:text-2xl">
              We spoke to multiple travel and adventure business owners who told
              us the same thing:
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-gray-400 md:text-base">
              It started with a simple observation: travel agencies were
              drowning in admin work while trying to deliver dream vacations. We
              saw passionate founders buried in spreadsheets, losing track of
              inquiries, and struggling to scale. We knew there had to be a
              better way.
            </p>
          </motion.div>

          {/* Pain-point cards */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {painCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeInUp}
                className="rounded-2xl border border-white/10 bg-dark/80 p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10">
                  <card.icon
                    className="h-5 w-5 text-brand-green"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-white">
                  {card.title}
                </h3>
                <p className="font-sans mt-2 text-[13px] leading-relaxed text-subtext">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <JourneyTrail />
    </section>
  );
}
