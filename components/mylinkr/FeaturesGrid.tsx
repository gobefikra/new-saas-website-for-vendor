"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";
import { fadeInUp, staggerContainer } from "@/components/motion";

export default function FeaturesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-[#F9FAFB] py-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-lime-400 font-bold text-xl">Next level Features:</p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-1">
          Everything Connected in
        </h2>
        <h2 className="text-4xl font-extrabold text-gray-900">One Place</h2>
      </div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
        >
          <p className="font-semibold text-gray-800 text-center mb-4">
            Build your central MyLinkr hub
          </p>
          <PhoneMockup
            screenSrc={MYLINKR_SCREENS.hero}
            className="w-44 mx-auto"
            frameWidth={176}
            frameHeight={360}
            alt="MyLinkr hub example"
          />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-5"
        >
          <div>
            <p className="font-semibold text-gray-800 text-sm mb-3">
              Customize layouts your way
            </p>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-4">
              <div className="shadow-sm rounded-full px-4 py-2 text-xs bg-white border border-gray-200 flex items-center justify-between">
                <span>Newsletter Signup</span>
                <span className="text-gray-400">≡</span>
              </div>
              <div className="flex gap-2 mt-3">
                <div className="bg-gray-100 rounded-lg h-8 w-24 flex items-center justify-center text-xs text-gray-400">
                  Bio
                </div>
                <div className="bg-gray-100 rounded-lg h-8 w-24 flex items-center justify-center text-xs text-gray-400">
                  Recent Posts
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm mb-3">
              See what&apos;s working instantly
            </p>
            <div className="bg-gray-50 rounded-2xl p-4 relative overflow-hidden min-h-[140px]">
              <Image
                src="/icons/mylinkr/feature-layout-analytics.png"
                alt="Analytics dashboard"
                fill
                className="object-contain object-center"
                sizes="300px"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
        >
          <p className="font-semibold text-gray-800 text-center mb-2">
            Keep every profile connected
          </p>
          <p className="text-xs text-gray-400 text-center mb-4">
            All-in-One Social Hub
          </p>
          <div className="relative min-h-[180px]">
            <Image
              src="/icons/mylinkr/feature-social.png"
              alt="Social hub"
              fill
              className="object-contain"
              sizes="280px"
            />
          </div>
          <span className="border border-gray-200 rounded-full px-4 py-2 text-xs font-medium text-gray-600 mx-auto mt-4 w-fit block text-center">
            View All Connected Profiles
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5 max-w-6xl mx-auto"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
        >
          <p className="font-semibold text-gray-800 text-center mb-4">
            Add event booking to your page
          </p>
          <div className="relative h-48">
            <Image
              src="/icons/mylinkr/feature-booking.png"
              alt="Event booking"
              fill
              className="object-contain"
              sizes="300px"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
        >
          <p className="font-semibold text-gray-800 text-center mb-4">
            Bring your content to life
          </p>
          <div className="relative h-44">
            <Image
              src="/icons/mylinkr/feature-content.png"
              alt="Content collage"
              fill
              className="object-contain"
              sizes="300px"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm"
        >
          <p className="font-semibold text-gray-800 text-center mb-4">
            share your QR code anywhere
          </p>
          <div className="relative h-48">
            <Image
              src="/icons/mylinkr/feature-qr.png"
              alt="QR code sharing"
              fill
              className="object-contain"
              sizes="300px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
