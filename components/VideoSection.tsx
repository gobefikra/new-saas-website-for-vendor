"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/components/motion";
import ProductVideo from "@/components/ProductVideo";
import {
  brandGradientTextClass,
  brandGradientTextStyle,
} from "@/lib/brand-gradient";

const greenPairs = [
  { first: "Faster", second: "Growth." },
  { first: "Bigger", second: "Revenue." },
  { first: "Smarter", second: "Leads." },
  { first: "Better", second: "Bookings." },
  { first: "Higher", second: "Conversions." },
  { first: "Deeper", second: "Insights." },
] as const;

const gradientWord = `inline-block pb-[0.15em] whitespace-nowrap ${brandGradientTextClass}`;

function RotatingGreenPair() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % greenPairs.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const pair = greenPairs[index];
  const wordTransition = { duration: 0.35, ease: "easeInOut" as const };

  return (
    <span
      className="inline-block max-w-full text-left leading-[1.25]"
      aria-live="polite"
    >
      <span className="block whitespace-normal sm:whitespace-nowrap">
        Smarter Systems.{" "}
        <span className="inline-block align-baseline text-left">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${index}-first`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={wordTransition}
              className={gradientWord}
              style={brandGradientTextStyle}
            >
              {pair.first}
            </motion.span>
          </AnimatePresence>
        </span>
      </span>
      <span className="block whitespace-normal sm:whitespace-nowrap">
        <span className="inline-block align-baseline text-left">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${index}-second`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={wordTransition}
              className={gradientWord}
              style={brandGradientTextStyle}
            >
              {pair.second}
            </motion.span>
          </AnimatePresence>
        </span>{" "}
        Better Decisions.
      </span>
    </span>
  );
}

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="product-video"
      ref={ref}
      className="w-full bg-white py-20 md:py-28 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.25] tracking-tight text-center px-1"
        >
          <RotatingGreenPair />
        </motion.h2>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="text-gray-900 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          See how Befikra automate bookings, manage leads, and increases revenue
          for travel businesses. All from one intelligent dashboard built for
          scale.
        </motion.p>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="mt-12 w-full max-w-5xl mx-auto"
        >
          <ProductVideo />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#products"
            className="bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold text-lg hover:bg-emerald-600 transition-colors"
          >
            Discover Our Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
