"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop";

export default function HeroBanner() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative isolate overflow-hidden bg-[#070b09]">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0">
        {!imgError ? (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              onError={() => setImgError(true)}
            />
          </motion.div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1510] via-[#07140f] to-black" />
        )}

        {/* Atmospheric washes — keep type readable without boxing the image */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.4)_100%)]"
        />

        {/* Soft blurred dissolve into the white page below */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[16%] md:h-[18%]"
        >
          {/* Frost: very soft mask so blur eases in with no visible band */}
          <div
            className="absolute inset-0 backdrop-blur-[10px]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
              maskImage:
                "linear-gradient(to top, black 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 70%, transparent 100%)",
            }}
          />
          {/* Multi-stop white dissolve — gentler ramp, fully faded by the top */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #fff 0%, rgba(255,255,255,0.85) 28%, rgba(255,255,255,0.5) 52%, rgba(255,255,255,0.22) 74%, rgba(255,255,255,0.08) 88%, transparent 100%)",
            }}
          />
        </div>
      </div>

      {/* Soft contour lines for adventure atmosphere */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="blog-topo"
            width="140"
            height="90"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 45 Q35 18 70 45 T140 45 M0 70 Q35 48 70 70 T140 70"
              fill="none"
              stroke="#6EE7B7"
              strokeWidth="0.7"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blog-topo)" />
      </svg>

      {/* Emerald glow accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25], y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-1/4 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2], y: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100vh] max-w-4xl flex-col items-center justify-center px-6 pb-36 pt-28 text-center md:min-h-[100vh] md:px-8 md:pb-44 md:pt-32">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-[11px] font-medium uppercase tracking-[0.35em] text-emerald-300"
        >
          Befikra Insights
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.08 }}
          className="mt-5 text-[clamp(2.25rem,6vw,4.25rem)] font-extrabold leading-[1.05] tracking-[-0.045em] text-white"
        >
          Insights to scale your
          <br />
          <span className="text-emerald-400">trekking business</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.16 }}
          className="font-dm-sans mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base"
        >
          Practical guides on AI, bookings, and operations — written for
          founders building adventure brands that run cleaner and grow faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
        >
          <a
            href="#featured-reads"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(16,185,129,0.7)] transition hover:bg-emerald-400"
          >
            Browse articles
            <span aria-hidden className="text-base leading-none">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
