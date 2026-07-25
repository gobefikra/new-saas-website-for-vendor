"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Calendar,
  CalendarCheck,
  ChevronRight,
  Globe,
  Network,
  Star,
  Users,
  Zap,
} from "lucide-react";
import PowerfulToolsPreview from "@/components/powerful-tools/PowerfulToolsPreview";
import { fadeInUp, staggerContainer } from "@/components/motion";

const NAVY = "#0F172A";
const BODY = "#6B7280";
const MINT = "#ECFDF5";
const GREEN_DARK = "#059669";

const features = [
  {
    Icon: Network,
    title: "Unified Lead-to-Booking Pipeline",
    desc: "Every inquiry automatically enters the CRM, where you can track progress, assign leads, convert bookings, and manage payments without switching tools.",
  },
  {
    Icon: CalendarCheck,
    title: "Integrated Booking & Batch Management",
    desc: "Create events, manage batches, slots, pricing, and bookings effortlessly.",
  },
  {
    Icon: Globe,
    title: "Website Visibility & Direct Booking",
    desc: "Show your events on Befikra and allow customers to book instantly.",
  },
];

const stats = [
  {
    Icon: BarChart3,
    value: "500+",
    label: "Travel Businesses",
    iconBg: "#ECFDF5",
    iconColor: "#10B981",
  },
  {
    Icon: Users,
    value: "50K+",
    label: "Happy Customers",
    iconBg: "#F7FEE7",
    iconColor: "#84CC16",
  },
  {
    Icon: Calendar,
    value: "2.5M+",
    label: "Bookings Managed",
    iconBg: "#ECFDF5",
    iconColor: "#059669",
  },
  {
    Icon: Star,
    value: "4.8/5",
    label: "User Rating",
    iconBg: "#F7FEE7",
    iconColor: "#65A30D",
  },
];

export default function PowerfulToolsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="powerful-tools"
      ref={ref}
      className="w-full overflow-hidden bg-white px-4 py-20 md:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left - copy & features */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold"
              style={{ borderColor: "#A7F3D0", backgroundColor: MINT, color: GREEN_DARK }}
            >
              <Zap className="h-3.5 w-3.5" strokeWidth={2.25} />
              Everything you need. All in one place.
            </motion.span>

            <motion.h2
              variants={fadeInUp}
              className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight md:text-4xl lg:text-[2.75rem]"
              style={{ color: NAVY }}
            >
              Powerful Tools to Run and
              <br />
              <span className="bg-gradient-to-r from-lime-400 via-[#84CC16] to-emerald-500 bg-clip-text text-transparent">
                Grow Your Travel Business
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="font-dm-sans mt-4 max-w-lg text-base leading-relaxed"
              style={{ color: BODY }}
            >
              Manage leads, bookings, payments, customers, and operations in one
              unified platform built for modern travel businesses.
            </motion.p>

            <motion.ul variants={staggerContainer} className="mt-8 divide-y divide-gray-100">
              {features.map(({ Icon, title, desc }) => (
                <motion.li key={title} variants={fadeInUp}>
                  <button
                    type="button"
                    className="group flex w-full items-start gap-4 py-5 text-left transition-colors hover:bg-gray-50/60"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: MINT }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: "#10B981" }}
                        strokeWidth={2}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold md:text-base" style={{ color: NAVY }}>
                        {title}
                      </p>
                      <p
                        className="font-dm-sans mt-1 text-sm leading-relaxed"
                        style={{ color: BODY }}
                      >
                        {desc}
                      </p>
                    </div>
                    <ChevronRight
                      className="mt-1 h-5 w-5 shrink-0 text-gray-300 transition-colors group-hover:text-gray-500"
                      strokeWidth={2}
                    />
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right - dashboard preview */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.12 }}
          >
            <div className="lg:hidden">
              <p
                className="mb-2 text-center text-base font-semibold italic"
                style={{ color: "#10B981", fontFamily: "cursive" }}
              >
                See Befikra in action
              </p>
              <p className="font-dm-sans mb-4 text-center text-xs text-gray-500">
                A quick overview of how everything works together.
              </p>
            </div>
            <PowerfulToolsPreview />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_8px_40px_rgba(13,27,42,0.06)]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-5 py-7 text-center ${
                  index % 2 === 0 ? "border-r border-gray-100" : ""
                } ${index < 2 ? "border-b border-gray-100 lg:border-b-0" : ""} ${
                  index < 3 ? "lg:border-r lg:border-b-0" : ""
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
                <p
                  className="font-dm-sans mt-0.5 text-sm"
                  style={{ color: BODY }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
