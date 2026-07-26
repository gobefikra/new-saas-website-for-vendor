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

const GREEN = "#10B981";
const NAVY = "#0F172A";
const BODY = "#6B7280";
const MINT = "#ECFDF5";

const features = [
  {
    Icon: Link2,
    title: "All-in-one link",
    desc: "Events, trips, payments & more - all in one place.",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    Icon: Zap,
    title: "Instant actions",
    desc: "Book, pay, and confirm in seconds.",
    iconBg: "#F7FEE7",
    iconColor: "#10B981",
  },
  {
    Icon: BarChart3,
    title: "Built for growth",
    desc: "Capture leads, boost conversions, and grow faster.",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    Icon: Shield,
    title: "Secure & reliable",
    desc: "Safe payments, secure data, total peace of mind.",
    iconBg: "#F7FEE7",
    iconColor: "#059669",
  },
];

const stats = [
  {
    Icon: Link2,
    value: "10K+",
    title: "Links Created",
    desc: "One link for all your bookings & leads",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    Icon: Calendar,
    value: "2M+",
    title: "Bookings Made",
    desc: "Turning visitors into happy customers",
    iconBg: "#F7FEE7",
    iconColor: "#10B981",
  },
  {
    Icon: Users,
    value: "500+",
    title: "Businesses",
    desc: "From startups to scaleups, we've got you covered",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    Icon: BarChart3,
    value: "98%",
    title: "Conversion Boost",
    desc: "More bookings with smarter engagement",
    iconBg: "#F7FEE7",
    iconColor: "#059669",
  },
  {
    Icon: Shield,
    value: "100%",
    title: "Secure Payments",
    desc: "Safe, secure & peace of mind",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
];

export default function MyLinkrSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="mylinkr"
      ref={ref}
      className="w-full overflow-hidden bg-white px-4 py-20 md:py-24 lg:px-8"
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
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide"
              style={{ borderColor: "#A7F3D0", backgroundColor: MINT, color: "#10B981" }}
            >
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2.25} />
              NEW FEATURE
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]"
              style={{ color: NAVY }}
            >
              One link.
              <br />
              <span style={{ color: GREEN }}>Unlimited bookings.</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-dm-sans mt-5 max-w-md text-base leading-relaxed md:text-lg"
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
                      className="font-dm-sans mt-0.5 text-sm leading-relaxed"
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
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: NAVY }}
              >
                Explore MyLinkr
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
              <Link
                href="/mylinkr"
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-gray-50"
                style={{ color: NAVY }}
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
          className="relative z-10 mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_40px_rgba(13,27,42,0.06)] md:mt-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`flex flex-col items-center px-5 py-7 text-center ${
                  index < stats.length - 1
                    ? "border-b border-gray-100 sm:border-b-0 sm:border-r"
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
                  className="mt-3 text-2xl font-extrabold tracking-tight"
                  style={{ color: NAVY }}
                >
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm font-bold" style={{ color: NAVY }}>
                  {stat.title}
                </p>
                <p
                  className="font-dm-sans mt-1 max-w-[160px] text-xs leading-relaxed"
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
