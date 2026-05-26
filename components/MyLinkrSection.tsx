"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/components/motion";

const floatingChips = [
  { label: "Event Booking", className: "top-4 left-0 md:-left-4" },
  { label: "Instant Payments", className: "top-4 right-0 md:-right-4" },
  { label: "Custom Themes", className: "top-1/2 -translate-y-1/2 left-0 md:-left-8" },
  { label: "Share Anywhere", className: "top-1/2 -translate-y-1/2 right-0 md:-right-8" },
  { label: "AI-Powered Replies", className: "bottom-8 left-0 md:-left-4" },
  { label: "Track Clicks & Bookings", className: "bottom-8 right-0 md:-right-4" },
];

export default function MyLinkrSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="mylinkr"
      ref={ref}
      className="w-full overflow-hidden bg-emerald-500 py-20 md:py-28 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-white"
        >
          <span className="bg-white/20 text-white text-sm px-4 py-1 rounded-full inline-block mb-6">
            🚀 New Feature
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            One link.
            <br />
            Unlimited bookings.
          </h2>
          <p className="font-semibold text-xl mt-4">
            Turn Every Visitor Into a Booking With MyLinkr
          </p>
          <p className="text-white/80 text-base mt-4 max-w-md">
            MyLinkr gives you a powerful personalized booking page where
            customers can explore events, view details, and book instantly.
            Share one link across WhatsApp, Instagram, and your website to
            capture leads, accept payments, and grow your business faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-white text-emerald-600 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition-colors"
            >
              Book a demo
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white rounded-full px-6 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="relative flex justify-center min-h-[420px] items-center"
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 md:w-72"
          >
            <Image
              src="/icons/iPhone_17.png"
              alt="MyLinkr on iPhone"
              width={288}
              height={580}
              className="w-full h-auto relative z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="relative w-[78%] h-[92%] mt-[-2%] overflow-hidden rounded-[2rem]">
                <Image
                  src="/icons/Mobile-screen.png"
                  alt="MyLinkr booking page"
                  fill
                  className="object-cover object-top"
                  sizes="220px"
                />
              </div>
            </div>
          </motion.div>

          {floatingChips.map((chip, i) => (
            <motion.span
              key={chip.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className={`absolute hidden sm:inline-block bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap ${chip.className}`}
            >
              {chip.label}
            </motion.span>
          ))}

          <div className="flex flex-wrap justify-center gap-2 mt-6 sm:hidden absolute -bottom-2 left-0 right-0">
            {floatingChips.map((chip) => (
              <span
                key={chip.label}
                className="bg-white text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md"
              >
                {chip.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
