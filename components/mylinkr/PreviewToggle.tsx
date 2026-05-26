"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";

export default function PreviewToggle() {
  const [activeView, setActiveView] = useState<"app" | "website">("app");

  return (
    <section className="w-full bg-white py-20 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        See It. Adjust It.{" "}
        <span className="text-lime-400">Launch It.</span>
      </h2>
      <p className="text-gray-400 text-base mt-4 max-w-lg mx-auto">
        Experience your MyLinkr exactly how your audience will see it, perfectly
        responsive on every device.
      </p>
      <Link
        href="/contact"
        className="mt-8 mx-auto w-fit flex items-center gap-2 bg-emerald-500 text-white rounded-full px-8 py-3.5 font-semibold hover:bg-emerald-600 transition-colors"
      >
        Get Started for Free ›
      </Link>

      <div className="mt-10 mx-auto w-fit flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-2 shadow-sm">
        <button
          type="button"
          onClick={() => setActiveView("app")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
            activeView === "app"
              ? "bg-emerald-500 text-white"
              : "text-gray-600 font-medium hover:bg-gray-50"
          }`}
        >
          App
        </button>
        <button
          type="button"
          onClick={() => setActiveView("website")}
          className={`rounded-full px-6 py-2 text-sm transition-colors ${
            activeView === "website"
              ? "bg-emerald-500 text-white font-semibold"
              : "text-gray-600 font-medium hover:bg-gray-50"
          }`}
        >
          Website
        </button>
      </div>

      <div className="mt-10 flex justify-center items-center min-h-[600px] relative">
        <AnimatePresence mode="wait">
          {activeView === "app" ? (
            <motion.div
              key="app"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative flex justify-center"
            >
              <div className="absolute bg-emerald-300 opacity-20 blur-3xl rounded-full w-80 h-80 -z-10" />
              <PhoneMockup
                screenSrc={MYLINKR_SCREENS.previewApp}
                className="w-64"
                frameWidth={256}
                frameHeight={520}
                alt="MyLinkr mobile app preview"
              />
            </motion.div>
          ) : (
            <motion.div
              key="website"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="rounded-xl bg-gray-900 p-3 w-full max-w-[560px] shadow-2xl">
                <div className="relative aspect-[16/10] bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src={MYLINKR_SCREENS.previewWebsite}
                    alt="MyLinkr website preview"
                    fill
                    className="object-cover object-top"
                    sizes="560px"
                  />
                </div>
              </div>
              <div
                className="w-48 h-3 bg-gray-700 rounded-b-lg mt-0"
                style={{
                  clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
