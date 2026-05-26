"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/motion";
import { BLOG_HERO_IMAGE } from "@/lib/blog-images";

export default function HeroBanner() {
  return (
    <section className="mx-6 md:mx-10 mt-6 rounded-3xl overflow-hidden relative h-72 md:h-96">
      <div className="absolute inset-0 overflow-hidden">
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
            alt="Snow-capped Himalayan mountain range at sunrise"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-black/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/60 via-[#2d4a3e]/40 to-[#1a3a2a]/60 pointer-events-none"
          aria-hidden
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-white text-3xl md:text-5xl font-extrabold leading-tight drop-shadow-lg"
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
          className="text-white/80 text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Practical Guides, Strategies, And Real-World Insights On Using AI To
          Streamline Bookings, Manage Logistics, And Scale Your Trekking
          Business Efficiently.
        </motion.p>
      </div>
    </section>
  );
}
