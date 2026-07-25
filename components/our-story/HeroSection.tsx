"use client";

import { motion } from "framer-motion";

const particles = [
  { top: "18%", left: "22%", delay: 0 },
  { top: "28%", left: "78%", delay: 0.4 },
  { top: "62%", left: "15%", delay: 0.8 },
  { top: "72%", left: "85%", delay: 1.2 },
  { top: "45%", left: "10%", delay: 0.6 },
  { top: "55%", left: "90%", delay: 1 },
  { top: "35%", left: "50%", delay: 0.2 },
  { top: "80%", left: "45%", delay: 1.4 },
];

export default function StoryHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #0D2B1F 0%, #000000 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-emerald-400 rounded-full"
          style={{ top: p.top, left: p.left }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3 + (i % 3),
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-6xl md:text-8xl font-extrabold tracking-[0.2em] text-[#84CC16]"
      >
        OUR STORY
      </motion.h1>
    </section>
  );
}
