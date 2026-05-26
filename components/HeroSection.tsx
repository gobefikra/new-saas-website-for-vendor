"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/motion";

const platformIcons = [
  { src: "/icons/whatsapp.png", alt: "WhatsApp" },
  { src: "/icons/link.png", alt: "Link" },
  { src: "/icons/instagram.png", alt: "Instagram", gradientBorder: true },
  { src: "/icons/ai.png", alt: "Custom AI" },
  { src: "/icons/meta.png", alt: "Meta" },
];

const insightBubbles = [
  {
    text: "Which event generated the highest revenue this month?",
    width: "w-full",
    bg: "bg-[#E5E9EF]",
  },
  {
    text: "Instagram is bringing the most leads this week.",
    width: "w-[92%]",
    bg: "bg-[#E8EDF3]",
  },
  {
    text: "3 upcoming batches still have unsold slots.",
    width: "w-[85%]",
    bg: "bg-white border border-gray-100",
  },
];

const cardShell =
  "rounded-3xl border border-[#E0F2F1] bg-white shadow-[0_8px_32px_rgba(16,185,129,0.1)]";

function MiniChart() {
  return (
    <div className="relative flex-1 flex items-end min-h-[100px] sm:min-h-[120px] -mx-1 mt-3">
      <svg
        viewBox="0 0 280 100"
        className="w-full h-full min-h-[100px]"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D1FAE5" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D1FAE5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 78 C 30 72, 60 62, 90 50 S 160 28, 280 18 L 280 100 L 0 100 Z"
          fill="url(#heroChartFill)"
        />
        <path
          d="M0 78 C 30 72, 60 62, 90 50 S 160 28, 280 18"
          fill="none"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function PlatformIconRow() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-8 md:mt-10 px-2">
      {platformIcons.map((icon) =>
        // icon.gradientBorder ? (
        //   <div
        //     key={icon.alt}
        //     className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-sm shrink-0"
        //     title={icon.alt}
        //   >
        //     <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
        //       <Image
        //         src={icon.src}
        //         alt={icon.alt}
        //         width={36}
        //         height={36}
        //         className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
        //       />
        //     </div>
        //   </div>
        // ) : (
          <div
            key={icon.alt}
            title={icon.alt}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={36}
              height={36}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
          </div>
        // )
      )}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight px-1"
          >
            Introducing New Travel CRM
            <br />
            Dashboard with{" "}
            <span className="bg-gradient-to-r from-lime-400 via-[#84CC16] to-emerald-400 bg-clip-text text-transparent">
              Intelligence
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-gray-500 text-base sm:text-lg mt-4 max-md:whitespace-normal md:whitespace-nowrap mx-auto px-2"
          >
            India&apos;s intelligent CRM for travel brands, combining automation,
            analytics, and AI to power faster growth.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <PlatformIconRow />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-10 md:mt-14"
        >
          {/* Three cards — center taller/wider */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.28fr)_minmax(0,1fr)] gap-5 md:gap-6 max-w-5xl mx-auto items-end">
            {/* Left card */}
            <motion.div
              variants={fadeInUp}
              className={`${cardShell} flex flex-col text-left p-5 md:p-6 min-h-[340px] lg:min-h-[380px]`}
            >
              <h3 className="font-bold text-gray-900 text-[15px] md:text-base">
                Your Business Overview
              </h3>
              <p className="text-2xl md:text-[1.75rem] font-bold text-gray-900 mt-3 leading-tight">
                ₹8,45,000
              </p>
              <p className="text-emerald-500 font-medium text-sm mt-2">
                ↑ +18% from last month
              </p>
              <p className="text-gray-500 text-sm mt-1">
                124 bookings completed
              </p>
              <MiniChart />
              <div className="flex justify-between items-center mt-3 pt-2">
                <Image
                  src="/icons/icon-revenue.png"
                  alt="Revenue growth"
                  width={44}
                  height={44}
                  className="w-10 h-10 md:w-11 md:h-11 object-contain"
                />
                <Image
                  src="/icons/icon-ticket.png"
                  alt="Travel bookings"
                  width={44}
                  height={44}
                  className="w-10 h-10 md:w-11 md:h-11 object-contain"
                />
                <Image
                  src="/icons/icon-calendar.png"
                  alt="Calendar bookings"
                  width={44}
                  height={44}
                  className="w-10 h-10 md:w-11 md:h-11 object-contain"
                />
              </div>
            </motion.div>

            {/* Center card — larger */}
            <motion.div
              variants={fadeInUp}
              className={`${cardShell} flex flex-col text-center p-5 md:p-7 min-h-[380px] lg:min-h-[420px]`}
            >
              <h3 className="font-bold text-base md:text-lg text-gray-900">
                Connect Your Lead Sources
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Capture leads automatically from all platforms
              </p>

              <div className="relative flex-1 flex items-center justify-center w-full my-3 md:my-4 min-h-[200px]">
                <Image
                  src="/icons/middle-card.png"
                  alt="Lead sources: WhatsApp, Web, Link, Gmail, Instagram"
                  width={448}
                  height={430}
                  className="w-full max-w-[320px] h-auto object-contain"
                  priority
                />
              </div>

              <button
                type="button"
                className="bg-[#1e293b] text-white rounded-full px-6 py-3 text-sm font-semibold w-full hover:bg-gray-900 transition-colors mt-auto"
              >
                Manage integrations
              </button>
            </motion.div>

            {/* Right card */}
            <motion.div
              variants={fadeInUp}
              className={`${cardShell} flex flex-col text-left p-5 md:p-6 min-h-[340px] lg:min-h-[380px]`}
            >
              <h3 className="font-bold text-gray-900 text-[15px] md:text-base mb-4 relative z-10">
                AI Business Insights
              </h3>

              <div className="relative flex-1">
                <div
                  className="absolute top-6 left-0 w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-gray-100 pointer-events-none"
                  aria-hidden
                />
                <div
                  className="absolute top-10 left-4 w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-gray-50 pointer-events-none"
                  aria-hidden
                />

                <div className="relative z-10 flex flex-col items-start">
                  {insightBubbles.map((bubble, i) => (
                    <div
                      key={bubble.text}
                      className={`${bubble.width} ${bubble.bg} rounded-2xl px-4 py-3 text-sm text-gray-700 leading-snug shadow-sm ${
                        i > 0 ? "-mt-1" : ""
                      }`}
                    >
                      {bubble.text}
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="#analytics"
                className="text-emerald-500 font-semibold text-sm leading-snug mt-5 hover:text-emerald-600 transition-colors block relative z-10"
              >
                Make smarter decisions with real-time analytics →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
