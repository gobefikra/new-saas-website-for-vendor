"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Globe,
  Instagram,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { OrbitSide } from "@/components/cta/CTABannerOrbit";
import { fadeInUp } from "@/components/motion";
import { brand } from "@/lib/brand-theme";

const highlights = [
  {
    Icon: MessageCircle,
    title: "WhatsApp",
    desc: "Reply to travelers in one inbox.",
  },
  {
    Icon: Instagram,
    title: "Instagram",
    desc: "Turn DMs and comments into leads.",
  },
  {
    Icon: Globe,
    title: "Website",
    desc: "Capture bookings and sync live.",
  },
];

export default function IntegrationsCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden px-4 py-16 md:px-8 md:py-20 lg:px-10"
      style={{
        background: `radial-gradient(ellipse 70% 80% at 50% 0%, ${brand.forest} 0%, ${brand.footerDark} 55%, ${brand.navy} 100%)`,
      }}
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_minmax(0,520px)_1fr] md:gap-4">
          <OrbitSide side="left" animate={inView} />

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            className="relative z-10 mx-auto w-full max-w-2xl text-center"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
              style={{
                borderColor: "rgba(16, 185, 129,0.35)",
                backgroundColor: "rgba(16, 185, 129,0.12)",
                color: brand.primary,
              }}
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
              Ready when you are
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Connect Your Customer{" "}
              <span style={{ color: brand.primary }}>Channels</span>
            </h2>

            <p className="font-dm-sans mx-auto mt-4 max-w-lg text-base leading-relaxed text-gray-300 md:text-lg">
              Capture leads, reply instantly, and manage bookings from WhatsApp,
              Instagram, and your website — all in one CRM.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] px-7 py-3 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(16, 185, 129,0.35)] transition-opacity hover:opacity-90"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
              <Link
                href="#whatsapp"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Learn more
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </div>
          </motion.div>

          <OrbitSide side="right" animate={inView} />
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="relative z-10 mt-12 border-t border-white/10 md:mt-14"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col items-center px-5 py-6 text-center ${
                  index < 2
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(16, 185, 129,0.15)" }}
                >
                  <item.Icon
                    className="h-5 w-5"
                    style={{ color: brand.primary }}
                    strokeWidth={2}
                  />
                </div>
                <p className="mt-3 text-sm font-bold text-white">{item.title}</p>
                <p className="font-dm-sans mt-1 text-xs leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
