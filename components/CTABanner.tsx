"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Link2,
  RefreshCw,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { OrbitSide } from "@/components/cta/CTABannerOrbit";
import { fadeInUp } from "@/components/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { brand } from "@/lib/brand-theme";

const GREEN = brand.green;
const GREEN_DARK = brand.greenDark;
const NAVY = brand.navy;
const BODY = brand.muted;
const MINT = brand.greenLight;
const SECTION_BG = brand.surfaceHover;
const CARD_BG = brand.white;

const features = [
  {
    Icon: Link2,
    title: "Integrations",
    desc: "Connect the tools you already use.",
    iconBg: MINT,
    iconColor: GREEN_DARK,
  },
  {
    Icon: Shield,
    title: "Secure & Reliable",
    desc: "Enterprise-grade security you can trust.",
    iconBg: MINT,
    iconColor: GREEN_DARK,
  },
  {
    Icon: Zap,
    title: "No Code Setup",
    desc: "Connect in minutes without writing code.",
    iconBg: MINT,
    iconColor: GREEN_DARK,
  },
  {
    Icon: RefreshCw,
    title: "Always in Sync",
    desc: "Real-time data sync across all your tools.",
    iconBg: MINT,
    iconColor: GREEN_DARK,
  },
];

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden px-4 py-14 md:py-16 lg:px-8"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div
        className="relative mx-auto max-w-6xl overflow-hidden rounded-hero border border-border-default px-4 py-12 shadow-card md:px-8 md:py-14"
        style={{ backgroundColor: CARD_BG }}
      >
        {/* Background glows */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 18% 45%, rgba(45, 106, 79,0.10), transparent 60%), radial-gradient(ellipse 40% 50% at 82% 45%, rgba(5, 150, 105,0.08), transparent 60%)",
          }}
        />

        <div className="relative">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-[1fr_minmax(0,520px)_1fr] md:gap-4">
            <OrbitSide side="left" animate={inView} />

            {/* Center content */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="relative z-10 mx-auto w-full max-w-2xl text-center"
            >
            <SectionHeading
              eyebrow="All-in-one platform"
              eyebrowIcon={<Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />}
              title={
                <>
                  One CRM. Fully Connected.
                </>
              }
              script="all your integrations"
              description="Connect your favorite tools, streamline your workflows, and grow your business - all from one place."
            />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white shadow-cta-glow transition-all duration-200 ease-brand hover:bg-brand-green-dark active:scale-95"
              >
                Book a demo
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
              <Link
                href="/integrations"
                className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white px-7 py-3 text-sm font-semibold text-navy transition-all duration-200 ease-brand hover:border-brand-green hover:bg-off-white active:scale-95"
              >
                Learn more
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </div>
            </motion.div>

            <OrbitSide side="right" animate={inView} />
          </div>

          {/* Features strip */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.15 }}
            className="relative z-10 mt-12 overflow-hidden rounded-2xl border border-border-default bg-white shadow-card md:mt-14"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex flex-col items-center px-5 py-6 text-center ${
                    index % 2 === 0 ? "sm:border-r sm:border-border-default" : ""
                  } ${index < 2 ? "border-b border-border-default sm:border-b-0" : ""} ${
                    index < 3 ? "lg:border-r lg:border-border-default" : ""
                  }`}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    <item.Icon
                      className="h-5 w-5"
                      style={{ color: item.iconColor }}
                      strokeWidth={2}
                    />
                  </div>
                  <p
                    className="mt-3 text-sm font-bold"
                    style={{ color: NAVY }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-sans mt-1 text-xs leading-relaxed"
                    style={{ color: BODY }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
