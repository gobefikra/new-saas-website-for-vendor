"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/motion";
import { BLOG_HERO_IMAGE } from "@/lib/blog-images";

const NAVY = "#0F172A";

export default function HeroBanner() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative mx-4 mt-4 h-72 overflow-hidden rounded-3xl md:mx-8 md:h-96">
      <div className="absolute inset-0 overflow-hidden">
        {!imgError ? (
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <Image
              src={BLOG_HERO_IMAGE}
              alt="Mountain landscape"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              onError={() => setImgError(true)}
            />
          </motion.div>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${NAVY} 0%, #1a3a2a 50%, #0f2418 100%)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/35" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0F172A]/70 via-transparent to-[#0F172A]/40"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg md:text-5xl"
        >
          Insights to Scale Your
          <br />
          Trekking Business
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base"
        >
          Practical guides, strategies, and real-world insights on using AI to
          streamline bookings, manage logistics, and scale your trekking business.
        </motion.p>
      </div>
    </section>
  );
}
