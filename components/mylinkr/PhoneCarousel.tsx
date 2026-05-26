"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";

const carouselPhones = [
  { screen: MYLINKR_SCREENS.carousel[0], scale: "scale-95" },
  { screen: MYLINKR_SCREENS.carousel[1], scale: "scale-100" },
  { screen: MYLINKR_SCREENS.carousel[2], scale: "scale-105" },
  { screen: MYLINKR_SCREENS.carousel[3], scale: "scale-95" },
  { screen: MYLINKR_SCREENS.carousel[4], scale: "scale-100" },
  { screen: MYLINKR_SCREENS.carousel[5], scale: "scale-105" },
  { screen: MYLINKR_SCREENS.carousel[6], scale: "scale-95" },
  { screen: MYLINKR_SCREENS.carousel[7], scale: "scale-100" },
];

export default function PhoneCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section className="w-full bg-white">
      <div className="py-20 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Templates Built to Convert
          <br />
          Visitors into Customers
        </h2>
        <p className="text-gray-400 text-base mt-4 max-w-xl mx-auto">
          Pick a template, customize your branding, and create a powerful link
          hub for your business.
        </p>
        <Link
          href="/contact"
          className="mt-8 mx-auto w-fit flex items-center gap-2 bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-emerald-600 transition-colors"
        >
          Get Started for Free ›
        </Link>
        <p className="mt-12 mb-6 text-gray-500 font-medium text-sm text-center">
          Social Hub
        </p>
      </div>

      <div ref={sectionRef} className="relative h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-6 md:pl-12 w-max">
            {carouselPhones.map((phone, i) => (
              <div
                key={`${phone.screen}-${i}`}
                className={`flex-shrink-0 ${phone.scale}`}
              >
                <PhoneMockup
                  screenSrc={phone.screen}
                  className="w-48 md:w-56"
                  frameWidth={224}
                  frameHeight={450}
                  alt={`MyLinkr template ${i + 1}`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
