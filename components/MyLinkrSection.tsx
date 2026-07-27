"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  Link2,
  Play,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import MyLinkrHomeVisual from "@/components/mylinkr/MyLinkrHomeVisual";
import { fadeInUp, staggerContainer } from "@/components/motion";
import ScriptAccent from "@/components/ui/ScriptAccent";

const GREEN = "#2D6A4F";
const NAVY = "#0A1E3B";
const BODY = "#6B7280";
const MINT = "#E8F3EE";

const features = [
  {
    Icon: Link2,
    title: "All-in-one link",
    desc: "Events, trips, payments & more - all in one place.",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: Zap,
    title: "Instant actions",
    desc: "Book, pay, and confirm in seconds.",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: BarChart3,
    title: "Built for growth",
    desc: "Capture leads, boost conversions, and grow faster.",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: Shield,
    title: "Secure & reliable",
    desc: "Safe payments, secure data, total peace of mind.",
    iconBg: "#E8F3EE",
    iconColor: "#1F4D38",
  },
];

const stats = [
  {
    Icon: Link2,
    value: "10K+",
    title: "Links Created",
    desc: "One link for all your bookings & leads",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: Calendar,
    value: "2M+",
    title: "Bookings Made",
    desc: "Turning visitors into happy customers",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: Users,
    value: "500+",
    title: "Businesses",
    desc: "From startups to scaleups, we've got you covered",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: BarChart3,
    value: "98%",
    title: "Conversion Boost",
    desc: "More bookings with smarter engagement",
    iconBg: "#E8F3EE",
    iconColor: "#1F4D38",
  },
  {
    Icon: Shield,
    value: "100%",
    title: "Secure Payments",
    desc: "Safe, secure & peace of mind",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
];

export default function MyLinkrSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="mylinkr"
      ref={ref}
      className="w-full overflow-hidden bg-white px-4 py-16 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-14">
          {/* Left - copy & CTAs */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="section-eyebrow"
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
              New feature
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-5xl lg:text-[3.25rem]"
              style={{ color: NAVY }}
            >
              One link.
            </motion.h2>
            <motion.div variants={fadeInUp} className="mt-2">
              <ScriptAccent size="lg">unlimited bookings</ScriptAccent>
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-md font-sans text-base leading-relaxed md:text-lg"
              style={{ color: BODY }}
            >
              Create a powerful booking page in minutes. All your events,
              payments, and more - in one smart link.
            </motion.p>

            <motion.ul
              variants={staggerContainer}
              className="mt-8 space-y-5"
            >
              {features.map(({ Icon, title, desc, iconBg, iconColor }) => (
                <motion.li
                  key={title}
                  variants={fadeInUp}
                  className="flex items-start gap-3.5"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: iconBg }}
                  >
                    <Icon
                      className="h-5 w-5"
                      style={{ color: iconColor }}
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: NAVY }}>
                      {title}
                    </p>
                    <p
                      className="font-sans mt-0.5 text-sm leading-relaxed"
                      style={{ color: BODY }}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeInUp}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/mylinkr"
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-cta-glow transition-all duration-200 ease-brand hover:bg-brand-green-dark active:scale-95"
              >
                Explore MyLinkr
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
              <Link
                href="/mylinkr"
                className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white px-6 py-3 text-sm font-semibold text-navy transition-all duration-200 ease-brand hover:border-brand-green hover:bg-off-white active:scale-95"
              >
                <Play className="h-4 w-4 fill-current" strokeWidth={0} />
                See how it works
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - visual */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.12 }}
            className="relative z-0 flex w-full items-center self-stretch overflow-visible lg:justify-self-end"
          >
            <MyLinkrHomeVisual />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="card-brand-static relative z-10 mt-8 overflow-hidden md:mt-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`flex flex-col items-center px-5 py-7 text-center ${
                  index < stats.length - 1
                    ? "border-b border-border-default sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: stat.iconBg }}
                >
                  <stat.Icon
                    className="h-5 w-5"
                    style={{ color: stat.iconColor }}
                    strokeWidth={2}
                  />
                </div>
                <p
                  className="mt-3 text-2xl font-display font-semibold tracking-[-0.02em] tracking-tight"
                  style={{ color: NAVY }}
                >
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm font-bold" style={{ color: NAVY }}>
                  {stat.title}
                </p>
                <p
                  className="font-sans mt-1 max-w-[160px] text-xs leading-relaxed"
                  style={{ color: BODY }}
                >
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
