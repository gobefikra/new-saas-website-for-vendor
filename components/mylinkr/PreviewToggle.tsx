"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";
import Button from "@/components/ui/Button";
import ScriptAccent from "@/components/ui/ScriptAccent";

export default function PreviewToggle() {
  const [activeView, setActiveView] = useState<"app" | "website">("app");

  return (
    <section className="w-full bg-white py-14 px-6 text-center md:py-16">
      <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-navy md:text-5xl">
        See It. Adjust It.
      </h2>
      <div className="mt-2 flex justify-center">
        <ScriptAccent size="lg">Launch It.</ScriptAccent>
      </div>
      <p className="mx-auto mt-4 max-w-lg text-base text-subtext">
        Experience your MyLinkr exactly how your audience will see it, perfectly
        responsive on every device.
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/contact" variant="primary" size="lg">
          Get Started for Free
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Button>
      </div>

      <div className="mx-auto mt-10 flex w-fit items-center gap-1 rounded-full border border-border-default bg-white px-2 py-2 shadow-card">
        <button
          type="button"
          onClick={() => setActiveView("app")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ease-brand ${
            activeView === "app"
              ? "bg-brand-green text-white shadow-cta-glow"
              : "font-medium text-subtext hover:bg-off-white"
          }`}
        >
          App
        </button>
        <button
          type="button"
          onClick={() => setActiveView("website")}
          className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ease-brand ${
            activeView === "website"
              ? "bg-brand-green text-white shadow-cta-glow"
              : "font-medium text-subtext hover:bg-off-white"
          }`}
        >
          Website
        </button>
      </div>

      <div className="mt-10 flex justify-center items-center min-h-[520px] md:min-h-[680px] relative">
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
              <div className="absolute bg-brand-green opacity-20 blur-3xl rounded-full w-80 h-80 -z-10" />
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
              className="relative flex w-full max-w-5xl flex-col items-center px-2"
            >
              <div className="absolute bg-brand-green/25 opacity-80 blur-3xl rounded-full w-[70%] h-[55%] -z-10 top-[12%]" />

              {/* Large black monitor frame */}
              <div className="w-full rounded-[1.25rem] md:rounded-2xl bg-[#111827] p-2.5 md:p-3.5 shadow-[0_28px_80px_-24px_rgba(10,30,59,0.55)] ring-1 ring-black/40">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[0.85rem] md:rounded-[1.15rem] bg-dark-elevated">
                  <Image
                    src={MYLINKR_SCREENS.previewWebsite}
                    alt="MyLinkr website preview"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 94vw, 1024px"
                    priority
                  />
                </div>
              </div>

              {/* Chin + stand */}
              <div className="mt-1 h-2.5 w-[18%] rounded-b-md bg-[#1f2937]" />
              <div
                className="h-3 w-28 md:w-40 bg-[#374151]"
                style={{
                  clipPath: "polygon(18% 0%, 82% 0%, 100% 100%, 0% 100%)",
                }}
              />
              <div className="h-1.5 w-36 md:w-52 rounded-full bg-[#1f2937]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
