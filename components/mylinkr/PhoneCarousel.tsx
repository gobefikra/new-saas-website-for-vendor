"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";
import Button from "@/components/ui/Button";

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

// Breathing room left between the last mockup and the viewport's right edge
const END_GUTTER = 48;

export default function PhoneCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstPhoneRef = useRef<HTMLDivElement>(null);
  const lastPhoneRef = useRef<HTMLDivElement>(null);

  const startX = useMotionValue(0);
  const endX = useMotionValue(0);
  const [sectionHeight, setSectionHeight] = useState("300vh");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // startX → first phone centered; endX → last phone flush with viewport right
  const x = useTransform(
    [scrollYProgress, startX, endX],
    ([progress, start, end]) =>
      (start as number) +
      ((end as number) - (start as number)) * (progress as number)
  );

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const first = firstPhoneRef.current;
      const last = lastPhoneRef.current;
      const viewport = track?.parentElement;
      if (!track || !first || !last || !viewport) return;

      const viewportWidth = viewport.clientWidth;
      const firstCenter = first.offsetLeft + first.offsetWidth / 2;
      const lastRight = last.offsetLeft + last.offsetWidth;

      const nextStart = viewportWidth / 2 - firstCenter;
      const nextEnd = viewportWidth - lastRight - END_GUTTER;

      startX.set(nextStart);
      endX.set(nextEnd);

      // Travel distance drives section height so motion feels paced, not rushed
      const travel = Math.abs(nextStart - nextEnd);
      const vh = window.innerHeight;
      const heightPx = Math.max(vh * 2.5, travel * 1.35 + vh);
      setSectionHeight(`${Math.round(heightPx)}px`);
    };

    measure();

    const ro = new ResizeObserver(measure);
    const track = trackRef.current;
    const viewport = track?.parentElement;
    if (track) ro.observe(track);
    if (viewport) ro.observe(viewport);

    const images = track?.querySelectorAll("img") ?? [];
    images.forEach((img) => img.addEventListener("load", measure));
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      images.forEach((img) => img.removeEventListener("load", measure));
      window.removeEventListener("resize", measure);
    };
  }, [startX, endX]);

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
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Get Started for Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </div>
        <p className="mt-12 mb-6 text-gray-500 font-medium text-sm text-center">
          Social Hub
        </p>
      </div>

      <div
        ref={sectionRef}
        className="relative"
        style={{ height: sectionHeight }}
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 w-max will-change-transform"
          >
            {carouselPhones.map((phone, i) => (
              <div
                key={`${phone.screen}-${i}`}
                ref={
                  i === 0
                    ? firstPhoneRef
                    : i === carouselPhones.length - 1
                      ? lastPhoneRef
                      : undefined
                }
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
