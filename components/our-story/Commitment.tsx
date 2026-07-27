"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/motion";
import { CompassIllustration } from "@/components/our-story/illustrations";

export default function Commitment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 bg-[#070b09] px-6 py-16 md:px-8 md:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-[2rem] border border-white/10"
        >
          <div className="relative aspect-[4/5] min-h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&h=1250&auto=format&fit=crop"
              alt=""
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />

            {/* Deep bottom blend so the half-compass melts into the photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-emerald-950/50 via-emerald-950/15 to-transparent"
            />

            {/* Half-visible compass — oversized, flush to bottom edge */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
              <div className="w-[125%] max-w-none translate-y-[52%] opacity-45 mix-blend-soft-light md:w-[120%] md:translate-y-[54%] md:opacity-50">
                <CompassIllustration className="w-full" />
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="text-3xl font-semibold tracking-[-0.03em] md:text-5xl"
          >
            <span className="text-emerald-400">Our Commitment</span>
            <span className="text-white"> to the Industry</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="font-dm-sans mt-8 text-[15px] leading-relaxed text-gray-400 md:text-base"
          >
            Befikra is not a finished product. It is an evolving platform. We
            continuously work on improving workflows, adding new features, and
            solving deeper operational challenges faced by travel businesses.{" "}
            <span className="text-emerald-400">
              We are committed to listening. We are committed to improving.
            </span>{" "}
            And most importantly, we are committed to helping travel businesses
            grow. Because we don&apos;t just build software. We build solutions
            for the industry we deeply understand. And we are proud to be part
            of your journey.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mt-12 space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-white/10 bg-black/30 p-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-400">
                Our Mission
              </p>
              <p className="mt-3 text-lg font-medium leading-snug text-white md:text-xl">
                To give businesses the tools they need to reach more people and
                succeed.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl border border-white/10 bg-black/30 p-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-emerald-400">
                Our Vision
              </p>
              <p className="mt-3 text-lg font-medium leading-snug text-white md:text-xl">
                To make exploration easy, exciting, and accessible.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
