"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  LayoutDashboard,
  Magnet,
  Sparkles,
  TicketCheck,
  TrendingUp,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";

const GREEN = "#22C55E";
const GREEN_DARK = "#16A34A";
const NAVY = "#0D1B2A";
const BODY = "#6B7280";
const MINT = "#E8F5E9";

const steps = [
  {
    num: "01",
    Icon: Magnet,
    title: "Capture Leads from Multiple Sources",
    desc: "Funnel inquiries automatically from WhatsApp, Instagram, and web forms directly into your dashboard.",
  },
  {
    num: "02",
    Icon: LayoutDashboard,
    title: "Track and Manage Leads in CRM",
    desc: "Organize prospects in a visual pipeline. Use AI to qualify them and automate initial responses seamlessly.",
  },
  {
    num: "03",
    Icon: TicketCheck,
    title: "Convert Leads into Bookings",
    desc: "Share personalized itineraries, collect payments via secure links, and confirm slots instantly.",
  },
  {
    num: "04",
    Icon: TrendingUp,
    title: "Analyze Performance and Grow",
    desc: "Review revenue trends, track team efficiency, and optimize marketing spend using clear insights.",
  },
];

function WavyConnector({ animate }: { animate: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute left-[8%] right-[8%] top-[3.25rem] z-0 hidden h-16 lg:block"
      viewBox="0 0 900 64"
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M 0 40 C 90 8 140 8 225 40 S 360 72 450 40 S 540 8 675 40 S 810 72 900 40"
        fill="none"
        stroke={GREEN}
        strokeWidth="2"
        strokeDasharray="8 6"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={animate ? { pathLength: 1, opacity: 0.55 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      {[112, 337, 562, 787].map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={i % 2 === 0 ? 40 : 24}
          r="5"
          fill={GREEN}
          initial={{ scale: 0, opacity: 0 }}
          animate={animate ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.35 }}
        />
      ))}
      <motion.path
        d="M 888 36 L 900 40 L 888 44"
        fill="none"
        stroke={GREEN}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ opacity: 0 }}
        animate={animate ? { opacity: 0.55 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.3 }}
      />
    </svg>
  );
}

function StepColumn({ step }: { step: (typeof steps)[number] }) {
  const { Icon, num, title, desc } = step;

  return (
    <motion.div variants={fadeInUp} className="relative flex flex-col items-center">
      {/* Glow */}
      <div
        className="pointer-events-none absolute top-0 h-28 w-28 rounded-full opacity-60 blur-2xl"
        style={{
          background: `radial-gradient(circle, ${GREEN}33 0%, transparent 70%)`,
        }}
      />

      {/* Icon bubble */}
      <div className="relative z-10 flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-gray-100 bg-white shadow-[0_8px_32px_rgba(34,197,94,0.12)] sm:h-24 sm:w-24">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl shadow-sm sm:h-[3.75rem] sm:w-[3.75rem]"
          style={{ backgroundColor: GREEN }}
        >
          <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" strokeWidth={2} />
        </div>
      </div>

      {/* Step number */}
      <span
        className="relative z-20 -mt-3 rounded-md px-2.5 py-0.5 text-xs font-bold text-white shadow-sm"
        style={{ backgroundColor: GREEN_DARK }}
      >
        {num}
      </span>

      {/* Card */}
      <article className="relative z-10 mt-3 flex w-full flex-1 flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_4px_24px_rgba(13,27,42,0.05)] sm:p-6">
        <h3
          className="text-sm font-bold leading-snug sm:text-base"
          style={{ color: NAVY }}
        >
          {title}
        </h3>
        <span
          className="mt-2.5 block h-1 w-8 rounded-full"
          style={{ backgroundColor: GREEN }}
        />
        <p
          className="font-dm-sans mt-3 flex-1 text-sm leading-relaxed"
          style={{ color: BODY }}
        >
          {desc}
        </p>
        <div
          className="mt-5 flex h-8 w-8 items-center justify-center rounded-full"
          style={{ backgroundColor: MINT }}
        >
          <ArrowRight
            className="h-4 w-4"
            style={{ color: GREEN_DARK }}
            strokeWidth={2.25}
          />
        </div>
      </article>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative w-full overflow-hidden bg-white px-4 py-20 md:py-24 lg:px-8"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 45%, rgba(34,197,94,0.07), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 45%, rgba(34,197,94,0.07), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{ borderColor: "#A5D6A7", backgroundColor: MINT, color: GREEN_DARK }}
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
            Our Process
          </span>

          <h2
            className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-[2.75rem]"
            style={{ color: NAVY }}
          >
            How{" "}
            <span style={{ color: GREEN }}>Befikra Powers</span> Your Growth
          </h2>

          <p
            className="font-dm-sans mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: BODY }}
          >
            Run your entire travel business in 4 simple steps. Capture leads,
            convert bookings, and manage operations — all from one powerful
            platform.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-14 md:mt-16">
          <WavyConnector animate={inView} />

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-5"
          >
            {steps.map((step) => (
              <StepColumn key={step.num} step={step} />
            ))}
          </motion.div>
        </div>

        {/* Footer badge */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.35 }}
          className="mt-12 flex justify-center md:mt-14"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold"
            style={{ borderColor: "#A5D6A7", backgroundColor: MINT, color: GREEN_DARK }}
          >
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
            One Platform. Endless Possibilities.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
