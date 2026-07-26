"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import Button from "@/components/ui/Button";

export default function StoryCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&h=1080&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover object-center opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/25" />
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-start justify-center px-6 py-28 md:px-8 md:py-36"
      >
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-emerald-400">
          Ready when you are
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white md:text-5xl lg:text-[3.25rem]">
          Join the Travel
          <br />
          Businesses Building
          <br />
          Smarter Systems
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary" size="lg">
            Book a demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
          <Button href="/contact" variant="outline" tone="dark" size="lg">
            Get Started
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
