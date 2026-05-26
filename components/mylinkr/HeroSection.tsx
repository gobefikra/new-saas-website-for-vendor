"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";
import { FaTwitter, FaSpotify, FaBookmark } from "react-icons/fa";
import { fadeInUp, staggerContainer } from "@/components/motion";

function FloatingCard({
  className,
  children,
  duration,
  delay = 0,
}: {
  className: string;
  children: React.ReactNode;
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, duration > 4 ? -8 : -7, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function MyLinkrHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-[#EEF0FF] to-white py-20 px-6 text-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="mx-auto mb-6 w-fit rounded-full border border-emerald-300 bg-white px-5 py-1.5 text-sm font-medium text-gray-700"
        >
          Introducing MyLinkr by{" "}
          <span className="font-bold text-gray-900">Befikra</span>
        </motion.div>

        <motion.h1
          variants={staggerContainer}
          className="text-6xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight"
        >
          <motion.span variants={fadeInUp} className="block">
            Create Your Own
          </motion.span>
          <motion.span variants={fadeInUp} className="block text-lime-400">
            Booking–Ready
          </motion.span>
          <motion.span variants={fadeInUp} className="block">
            Mini Website
          </motion.span>
        </motion.h1>
      </motion.div>

      <div className="relative mt-16 flex justify-center min-h-[420px] md:min-h-[480px]">
        <FloatingCard
          className="absolute top-0 left-[4%] md:left-[12%] z-20 hidden sm:block"
          duration={4}
        >
          <div className="w-36 rounded-2xl bg-white p-3 shadow-lg">
            <div className="flex items-center gap-2">
              <FaTwitter className="text-blue-400 text-lg shrink-0" />
              <div className="text-left min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  My Tweets
                </p>
                <p className="text-xs text-gray-400">@chloez</p>
              </div>
            </div>
            <span className="mt-2 inline-block rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white">
              Follow 12k
            </span>
          </div>
        </FloatingCard>

        <FloatingCard
          className="absolute top-2 right-[4%] md:right-[12%] z-20 hidden sm:block"
          duration={3.5}
          delay={0.5}
        >
          <div className="w-32 rounded-2xl bg-white p-3 shadow-lg">
            <div className="rounded-xl bg-purple-600 p-2 text-white">
              <p className="text-xs font-bold">Vergecast</p>
              <p className="text-[10px] opacity-80 mt-0.5">Podcast</p>
            </div>
          </div>
        </FloatingCard>

        <FloatingCard
          className="absolute bottom-16 left-[2%] md:left-[8%] z-20 hidden md:block"
          duration={5}
          delay={1}
        >
          <div className="w-40 rounded-2xl bg-white p-3 shadow-lg">
            <div className="flex gap-2">
              <FaSpotify className="text-green-500 text-xl shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-xs text-gray-600 leading-snug">
                  Mike Matas speaks about his solo career as a designer
                </p>
                <p className="text-xs text-gray-400 mt-1">The Vergecast</p>
              </div>
            </div>
          </div>
        </FloatingCard>

        <motion.div
          className="absolute bottom-8 left-[18%] md:left-[22%] z-10 hidden md:block"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 4.5,
            delay: 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-28 rounded-xl bg-purple-600 p-2 shadow-lg text-white -rotate-6">
            <p className="text-xs font-bold">Vergecast</p>
          </div>
        </motion.div>

        <FloatingCard
          className="absolute bottom-12 right-[4%] md:right-[10%] z-20 hidden sm:block"
          duration={3.8}
          delay={0.8}
        >
          <div className="w-32 rounded-xl bg-white p-3 shadow-lg">
            <div className="flex items-center gap-2">
              <FaBookmark className="text-orange-500 text-lg" />
              <p className="text-xs font-semibold text-gray-800">
                Very Long Press
              </p>
            </div>
            <span className="mt-2 inline-block rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-semibold text-white">
              Subscribe
            </span>
          </div>
        </FloatingCard>

        <motion.div
          style={{ scale: phoneScale, y: phoneY }}
          className="relative z-10"
        >
          <PhoneMockup
            screenSrc={MYLINKR_SCREENS.hero}
            priority
            alt="MyLinkr hero preview"
          />
        </motion.div>
      </div>
    </section>
  );
}
