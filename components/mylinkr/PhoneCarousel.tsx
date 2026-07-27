"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
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
  const reduceMotion = useReducedMotion();

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

      if (reduceMotion) {
        setSectionHeight("auto");
        return;
      }

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
  }, [startX, endX, reduceMotion]);

  const phones = carouselPhones.map((phone, i) => (
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
  ));

  return (
    <section className="relative z-10 w-full bg-white">
      <div className="relative z-10 bg-white px-6 pb-6 pt-16 text-center md:pb-8 md:pt-20">
        <h2 className="text-4xl font-display font-semibold leading-tight tracking-[-0.02em] text-navy md:text-5xl">
          Templates Built to Convert
          <br />
          Visitors into Customers
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-subtext">
          Pick a template, customize your branding, and create a powerful link
          hub for your business.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Get Started for Free
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
          </Button>
        </div>
        <p className="mb-2 mt-14 text-center text-sm font-medium text-subtext md:mt-16">
          Social Hub
        </p>
      </div>

      {reduceMotion ? (
        <div className="overflow-x-auto bg-white px-6 pb-16 pt-4">
          <div ref={trackRef} className="mx-auto flex w-max gap-6">
            {phones}
          </div>
        </div>
      ) : (
        <div
          ref={sectionRef}
          className="relative z-0"
          style={{ height: sectionHeight }}
        >
          <div className="sticky top-16 flex h-[calc(100svh-4rem)] items-center overflow-hidden bg-white md:top-[4.5rem] md:h-[calc(100svh-4.5rem)]">
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max gap-6 will-change-transform"
            >
              {phones}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
