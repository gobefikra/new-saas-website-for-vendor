"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";
import { FaSpotify, FaWhatsapp } from "react-icons/fa";
import { MousePointerClick, Star, Users } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";
import Eyebrow from "@/components/ui/Eyebrow";
import ScriptAccent from "@/components/ui/ScriptAccent";

function RevealCard({
  progress,
  startX,
  startY,
  finalX,
  finalY,
  rotate,
  children,
  className = "",
}: {
  progress: MotionValue<number>;
  startX: string;
  startY: string;
  finalX: string;
  finalY: string;
  rotate: number;
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  // Match reference: cards start clearly readable with only a soft blur,
  // then expand outward and go fully sharp on scroll.
  const x = useTransform(progress, [0, 0.55], [startX, finalX]);
  const y = useTransform(progress, [0, 0.55], [startY, finalY]);
  const opacity = useTransform(progress, [0, 0.55], [0.92, 1]);
  const scale = useTransform(progress, [0, 0.55], [0.94, 1]);
  const blur = useTransform(
    progress,
    [0, 0.3, 0.55],
    ["blur(2px)", "blur(0.75px)", "blur(0px)"],
  );
  const cardRotate = useTransform(progress, [0, 0.55], [rotate * 0.55, rotate]);

  return (
    <motion.div
      className={`absolute left-1/2 top-1/2 z-[1] -translate-y-1/2 will-change-transform ${className}`}
      style={{
        x: reduceMotion ? finalX : x,
        y: reduceMotion ? finalY : y,
        opacity: reduceMotion ? 1 : opacity,
        scale: reduceMotion ? 1 : scale,
        filter: reduceMotion ? "blur(0px)" : blur,
        rotate: reduceMotion ? rotate : cardRotate,
      }}
    >
      {children}
    </motion.div>
  );
}

const cardShell =
  "card-brand-static p-3.5 text-left sm:p-4";

export default function MyLinkrHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const reduceMotion = useReducedMotion();
  const phoneScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.02, 1.01]);
  const phoneY = useTransform(scrollYProgress, [0, 0.55, 1], [0, -2, -4]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.55], [0.22, 0.34]);

  return (
    <section
      ref={sectionRef}
      className="relative z-0 h-[118svh] overflow-x-clip bg-gradient-to-b from-[#F9FAFB] via-white to-white pb-6 sm:h-[160svh] sm:pb-16 md:h-[165svh] md:pb-20 lg:h-[185svh] lg:pb-28"
    >
      <div className="sticky top-16 z-0 flex h-auto min-h-0 flex-col items-center justify-start bg-gradient-to-b from-[#F9FAFB] via-white to-white px-3 pb-5 pt-8 text-center sm:h-[calc(100svh-4rem)] sm:min-h-[500px] sm:justify-center sm:px-4 sm:pb-6 sm:pt-3 md:top-[4.5rem] md:h-[calc(100svh-4.5rem)] md:min-h-[520px] md:px-6 md:pb-8 lg:min-h-[680px] lg:justify-start lg:px-8 lg:pb-16 lg:pt-6">
        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto w-full max-w-4xl shrink-0"
        >
          <motion.div variants={fadeInUp} className="mb-1.5 flex justify-center sm:mb-2 md:mb-2.5">
            <Eyebrow uppercase={false}>Introducing MyLinkr by Befikra</Eyebrow>
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            className="mx-auto max-w-4xl font-display text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.02em] text-navy sm:text-[2rem] md:text-[2.35rem] lg:text-5xl xl:text-[4rem]"
          >
            <motion.span variants={fadeInUp} className="block">
              Create Your Own
            </motion.span>
            <motion.span variants={fadeInUp} className="mt-0.5 block text-brand-green">
              Booking-Ready Mini Website
            </motion.span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="mt-3 flex justify-center">
            <ScriptAccent size="lg">launch it freely</ScriptAccent>
          </motion.div>
        </motion.div>

        {/* Fixed-height stage on tablet so phone + cards share one cluster */}
        <div className="relative mx-auto mt-10 h-[360px] w-full max-w-6xl sm:mt-8 sm:h-[420px] md:mt-10 md:h-[460px] lg:mt-14 lg:h-auto lg:min-h-[520px] lg:flex-1">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/45 blur-3xl sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-72 lg:w-72"
            style={{ opacity: reduceMotion ? 0.28 : haloOpacity }}
          />

          {/* Top-left — New inquiry */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(7rem, 28vw, 14rem))"
            startY="calc(-50% - clamp(5.5rem, 11vh, 7.5rem))"
            finalX="calc(-50% - clamp(9.5rem, 32vw, 23.5rem))"
            finalY="calc(-50% - clamp(7rem, 14vh, 11rem))"
            rotate={-11}
            className="w-[clamp(7rem,30vw,13rem)] origin-center scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className={cardShell}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-green-dark">
                New inquiry
              </p>
              <div className="mt-2 flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-xs font-bold text-brand-green-dark">
                  AK
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold leading-snug text-slate-800 sm:text-sm">
                    A brand wants to collaborate with you!
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">Let&apos;s talk · May 18</p>
                </div>
              </div>
            </div>
          </RevealCard>

          {/* Top-right — Booking live / Trek Progress */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% + clamp(7rem, 28vw, 14rem))"
            startY="calc(-50% - clamp(3.5rem, 8vh, 5.5rem))"
            finalX="calc(-50% + clamp(9.5rem, 32vw, 23.5rem))"
            finalY="calc(-50% - clamp(4.5rem, 10vh, 7rem))"
            rotate={5}
            className="w-[clamp(6.75rem,28vw,12.5rem)] origin-center scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className={`${cardShell} border-brand-green/25`}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-green-dark">
                Booking live
              </p>
              <p className="mt-2 text-xs font-bold text-slate-800 sm:text-sm">
                Manali Weekend Trek
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-brand-green to-brand-green" />
              </div>
              <p className="mt-1.5 text-[10px] text-slate-400">16 of 20 spots filled</p>
            </div>
          </RevealCard>

          {/* Bottom-left — Travel Stories / Spotify */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(6.75rem, 27vw, 13.5rem))"
            startY="calc(-50% + clamp(4.75rem, 10vh, 7rem))"
            finalX="calc(-50% - clamp(9rem, 30vw, 22rem))"
            finalY="calc(-50% + clamp(6.5rem, 13vh, 10rem))"
            rotate={11}
            className="w-[clamp(6.75rem,28vw,12rem)] origin-center scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className={cardShell}>
              <div className="flex items-center gap-2.5">
                <FaSpotify className="shrink-0 text-lg text-brand-green sm:text-xl" />
                <div>
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">Travel Stories</p>
                  <p className="text-[10px] text-slate-400">Latest episode</p>
                </div>
              </div>
              <div className="mt-3 flex items-end gap-1" aria-hidden>
                {[45, 72, 55, 90, 62, 78, 48, 68].map((height, index) => (
                  <span
                    key={index}
                    className="w-1 flex-1 rounded-full bg-brand-green"
                    style={{ height: `${height / 4}px` }}
                  />
                ))}
              </div>
            </div>
          </RevealCard>

          {/* Bottom-right — Earnings */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% + clamp(6.75rem, 27vw, 13.5rem))"
            startY="calc(-50% + clamp(4.75rem, 10vh, 7rem))"
            finalX="calc(-50% + clamp(9rem, 30vw, 22rem))"
            finalY="calc(-50% + clamp(6.5rem, 13vh, 10rem))"
            rotate={-9}
            className="w-[clamp(6.75rem,28vw,12rem)] origin-center scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className={`${cardShell} border-brand-green/25`}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Earnings
                </p>
                <span className="rounded-full bg-brand-green-light px-2 py-0.5 text-[9px] font-bold text-brand-green-dark">
                  +24%
                </span>
              </div>
              <p className="mt-1 text-lg font-display font-semibold tracking-[-0.02em] text-navy sm:text-xl">
                ₹1,26,202
              </p>
              <svg className="mt-2 h-8 w-full" viewBox="0 0 120 32" fill="none" aria-hidden>
                <path
                  d="M2 27C15 25 18 17 30 20C43 23 48 10 60 14C73 18 78 5 91 9C102 12 107 3 118 4"
                  stroke="#2D6A4F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </RevealCard>

          {/* Mid-left — 5-star review */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(7.5rem, 30vw, 15rem))"
            startY="calc(-50% + clamp(0.25rem, 1vh, 1.25rem))"
            finalX="calc(-50% - clamp(10.5rem, 34vw, 26.5rem))"
            finalY="calc(-50% + clamp(0.75rem, 2vh, 2.25rem))"
            rotate={-3}
            className="w-[clamp(6.5rem,28vw,11.5rem)] origin-center scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className={cardShell}>
              <div className="flex items-center gap-1" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-1.5 text-xs font-bold leading-snug text-slate-800">
                &ldquo;Best trek of my life. Booking was so easy!&rdquo;
              </p>
              <p className="mt-1 text-[10px] text-slate-400">Priya · Kedarnath Trek</p>
            </div>
          </RevealCard>

          {/* Mid-right — WhatsApp payment received */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% + clamp(7.5rem, 30vw, 15rem))"
            startY="calc(-50% + clamp(1rem, 2.5vh, 2.75rem))"
            finalX="calc(-50% + clamp(10.5rem, 34vw, 26.5rem))"
            finalY="calc(-50% + clamp(2rem, 4.5vh, 4.5rem))"
            rotate={3}
            className="w-[clamp(6.5rem,28vw,11.5rem)] origin-center scale-[0.8] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className={`${cardShell} border-brand-green/25`}>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                  <FaWhatsapp className="text-base text-[#25D366]" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-800">Payment received</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">₹4,999 · Spiti Valley Trip</p>
                </div>
              </div>
            </div>
          </RevealCard>

          {/* Top chip — new followers */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% + clamp(5rem, 22vw, 11.5rem))"
            startY="calc(-50% - clamp(7rem, 13vh, 10rem))"
            finalX="calc(-50% + clamp(7rem, 24vw, 16rem))"
            finalY="calc(-50% - clamp(8.5rem, 16vh, 13rem))"
            rotate={11}
            className="origin-center scale-[0.82] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className="flex items-center gap-2 rounded-full border border-border-default bg-white py-2 pl-2.5 pr-4 shadow-card">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green-light">
                <Users className="h-3.5 w-3.5 text-brand-green-dark" strokeWidth={2.25} />
              </span>
              <div className="text-left">
                <p className="text-[11px] font-bold leading-none text-slate-800">+128 followers</p>
                <p className="mt-0.5 text-[9px] text-slate-400">this week</p>
              </div>
            </div>
          </RevealCard>

          {/* Bottom chip — link clicks */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(5rem, 22vw, 10rem))"
            startY="calc(-50% + clamp(3.5rem, 8vh, 5.5rem))"
            finalX="calc(-50% - clamp(7rem, 24vw, 13.5rem))"
            finalY="calc(-50% + clamp(5rem, 11vh, 7.5rem))"
            rotate={-3}
            className="origin-center scale-[0.82] sm:scale-90 md:scale-95 lg:scale-100"
          >
            <div className="flex items-center gap-2 rounded-full border border-border-default bg-white py-2 pl-2.5 pr-4 shadow-card">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-green-light">
                <MousePointerClick className="h-3.5 w-3.5 text-brand-green-dark" strokeWidth={2.25} />
              </span>
              <div className="text-left">
                <p className="text-[11px] font-bold leading-none text-slate-800">1.2k link clicks</p>
                <p className="mt-0.5 text-[9px] text-slate-400">last 7 days</p>
              </div>
            </div>
          </RevealCard>

          {/* Phone — same center as floating cards */}
          <motion.div
            style={{
              scale: reduceMotion ? 1 : phoneScale,
              y: reduceMotion ? 0 : phoneY,
            }}
            className="absolute inset-0 z-[1] flex items-center justify-center will-change-transform"
          >
            <PhoneMockup
              screenSrc={MYLINKR_SCREENS.hero}
              className="w-[11.5rem] sm:w-[12.75rem] md:w-[13.5rem] lg:w-[15.25rem]"
              priority
              alt="MyLinkr booking-ready mini website preview"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
