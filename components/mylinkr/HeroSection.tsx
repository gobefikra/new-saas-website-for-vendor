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
      className={`absolute left-1/2 top-[70%] z-10 will-change-transform ${className}`}
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
  "rounded-2xl border border-gray-100 bg-white p-3.5 text-left shadow-[0_14px_40px_rgba(15,23,42,0.1)] sm:p-4";

export default function MyLinkrHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const reduceMotion = useReducedMotion();
  const phoneScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.025, 1.01]);
  const phoneY = useTransform(scrollYProgress, [0, 0.55, 1], [88, 76, 64]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.55], [0.22, 0.34]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[185svh] overflow-x-clip bg-gradient-to-b from-[#F9FAFB] via-white to-white pb-28 md:pb-36"
    >
      <div className="sticky top-16 flex h-[calc(100svh-4rem)] min-h-[620px] flex-col items-center px-4 pb-16 pt-5 text-center md:top-[4.5rem] md:h-[calc(100svh-4.5rem)] md:min-h-[680px] md:px-8 md:pb-20 md:pt-6">
        {/* Copy — kept above the stage so it never overlaps the phone */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 mx-auto w-full max-w-4xl shrink-0"
        >
          <motion.div variants={fadeInUp} className="mb-3 flex justify-center md:mb-4">
            <Eyebrow uppercase={false}>Introducing MyLinkr by Befikra</Eyebrow>
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            className="mx-auto max-w-4xl text-[2.2rem] font-extrabold leading-[1.08] tracking-tight text-[#0F172A] sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            <motion.span variants={fadeInUp} className="block">
              Create Your Own
            </motion.span>
            <motion.span
              variants={fadeInUp}
              className="mt-1 block bg-gradient-to-r from-emerald-500 to-emerald-500 bg-clip-text pb-2 text-transparent"
            >
              Booking-Ready Mini Website
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Stage sits fully below the heading */}
        <div className="relative mx-auto mt-10 w-full max-w-6xl flex-1 sm:mt-12 md:mt-14">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[70%] h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/45 blur-3xl md:h-72 md:w-72"
            style={{ opacity: reduceMotion ? 0.28 : haloOpacity }}
          />

          {/* Top-left — New inquiry */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(7.5rem, 20vw, 13rem))"
            startY="calc(-50% - clamp(6rem, 13vh, 8.5rem))"
            finalX="calc(-50% - clamp(11rem, 32vw, 23.5rem))"
            finalY="calc(-50% - clamp(8.5rem, 18vh, 12rem))"
            rotate={-11}
            className="w-[clamp(9rem,19vw,13rem)]"
          >
            <div className={cardShell}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                New inquiry
              </p>
              <div className="mt-2 flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600">
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
            startX="calc(-50% + clamp(7.5rem, 20vw, 13rem))"
            startY="calc(-50% - clamp(3.5rem, 8vh, 5.5rem))"
            finalX="calc(-50% + clamp(11rem, 32vw, 23.5rem))"
            finalY="calc(-50% - clamp(4.5rem, 10vh, 7rem))"
            rotate={5}
            className="w-[clamp(8.5rem,18vw,12.5rem)]"
          >
            <div className={`${cardShell} border-emerald-100`}>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-600">
                Booking live
              </p>
              <p className="mt-2 text-xs font-bold text-slate-800 sm:text-sm">
                Manali Weekend Trek
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500" />
              </div>
              <p className="mt-1.5 text-[10px] text-slate-400">16 of 20 spots filled</p>
            </div>
          </RevealCard>

          {/* Bottom-left — Travel Stories / Spotify */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(7rem, 19vw, 12.5rem))"
            startY="calc(-50% + clamp(5.5rem, 13vh, 8.5rem))"
            finalX="calc(-50% - clamp(10.5rem, 30vw, 22rem))"
            finalY="calc(-50% + clamp(8.5rem, 18vh, 12rem))"
            rotate={11}
            className="w-[clamp(8.5rem,18vw,12rem)]"
          >
            <div className={cardShell}>
              <div className="flex items-center gap-2.5">
                <FaSpotify className="shrink-0 text-lg text-emerald-500 sm:text-xl" />
                <div>
                  <p className="text-xs font-bold text-slate-800 sm:text-sm">Travel Stories</p>
                  <p className="text-[10px] text-slate-400">Latest episode</p>
                </div>
              </div>
              <div className="mt-3 flex items-end gap-1" aria-hidden>
                {[45, 72, 55, 90, 62, 78, 48, 68].map((height, index) => (
                  <span
                    key={index}
                    className="w-1 flex-1 rounded-full bg-emerald-400"
                    style={{ height: `${height / 4}px` }}
                  />
                ))}
              </div>
            </div>
          </RevealCard>

          {/* Bottom-right — Earnings */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% + clamp(7rem, 19vw, 12.5rem))"
            startY="calc(-50% + clamp(5.5rem, 13vh, 8.5rem))"
            finalX="calc(-50% + clamp(10.5rem, 30vw, 22rem))"
            finalY="calc(-50% + clamp(8.5rem, 18vh, 12rem))"
            rotate={-9}
            className="w-[clamp(8.5rem,18vw,12rem)]"
          >
            <div className={`${cardShell} border-emerald-100`}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                  Earnings
                </p>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-600">
                  +24%
                </span>
              </div>
              <p className="mt-1 text-lg font-extrabold tracking-tight text-slate-900 sm:text-xl">
                ₹1,26,202
              </p>
              <svg className="mt-2 h-8 w-full" viewBox="0 0 120 32" fill="none" aria-hidden>
                <path
                  d="M2 27C15 25 18 17 30 20C43 23 48 10 60 14C73 18 78 5 91 9C102 12 107 3 118 4"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </RevealCard>

          {/* Mid-left — 5-star review (tablet and up) */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(8.5rem, 23vw, 15rem))"
            startY="calc(-50% + clamp(0.75rem, 2vh, 1.75rem))"
            finalX="calc(-50% - clamp(12rem, 35vw, 26.5rem))"
            finalY="calc(-50% + clamp(1.25rem, 3vh, 2.5rem))"
            rotate={-3}
            className="hidden w-[clamp(8rem,16vw,11.5rem)] sm:block"
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

          {/* Mid-right — WhatsApp payment received (tablet and up) */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% + clamp(8.5rem, 23vw, 15rem))"
            startY="calc(-50% + clamp(2rem, 4.5vh, 3.5rem))"
            finalX="calc(-50% + clamp(12rem, 35vw, 26.5rem))"
            finalY="calc(-50% + clamp(3rem, 6.5vh, 5rem))"
            rotate={3}
            className="hidden w-[clamp(8rem,16vw,11.5rem)] sm:block"
          >
            <div className={`${cardShell} border-emerald-100`}>
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

          {/* Top chip — new followers (desktop) */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% + clamp(6.5rem, 17vw, 11.5rem))"
            startY="calc(-50% - clamp(8.5rem, 18vh, 11.5rem))"
            finalX="calc(-50% + clamp(9rem, 24vw, 16rem))"
            finalY="calc(-50% - clamp(10.5rem, 22vh, 14rem))"
            rotate={11}
            className="hidden md:block"
          >
            <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-white py-2 pl-2.5 pr-4 shadow-[0_14px_40px_rgba(15,23,42,0.1)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                <Users className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.25} />
              </span>
              <div className="text-left">
                <p className="text-[11px] font-bold leading-none text-slate-800">+128 followers</p>
                <p className="mt-0.5 text-[9px] text-slate-400">this week</p>
              </div>
            </div>
          </RevealCard>

          {/* Bottom chip — link clicks (desktop) */}
          <RevealCard
            progress={scrollYProgress}
            startX="calc(-50% - clamp(5.5rem, 15vw, 10rem))"
            startY="calc(-50% + clamp(4rem, 10vh, 6.5rem))"
            finalX="calc(-50% - clamp(7.5rem, 20vw, 13.5rem))"
            finalY="calc(-50% + clamp(5.5rem, 13vh, 8.5rem))"
            rotate={-3}
            className="hidden md:block"
          >
            <div className="flex items-center gap-2 rounded-full border border-gray-100 bg-white py-2 pl-2.5 pr-4 shadow-[0_14px_40px_rgba(15,23,42,0.1)]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50">
                <MousePointerClick className="h-3.5 w-3.5 text-emerald-600" strokeWidth={2.25} />
              </span>
              <div className="text-left">
                <p className="text-[11px] font-bold leading-none text-slate-800">1.2k link clicks</p>
                <p className="mt-0.5 text-[9px] text-slate-400">last 7 days</p>
              </div>
            </div>
          </RevealCard>

          {/* Phone — centred, no upward overlap into the heading */}
          <motion.div
            style={{
              scale: reduceMotion ? 1 : phoneScale,
              y: reduceMotion ? 88 : phoneY,
            }}
            className="absolute inset-0 z-20 flex items-center justify-center will-change-transform"
          >
            <PhoneMockup
              screenSrc={MYLINKR_SCREENS.hero}
              className="w-[11rem] sm:w-52 md:w-56 lg:w-[15.25rem]"
              priority
              alt="MyLinkr booking-ready mini website preview"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
