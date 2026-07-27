"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Calendar,
  CalendarCheck,
  Globe,
  Network,
  Star,
  Users,
  Zap,
} from "lucide-react";
import PowerfulToolsPreview from "@/components/powerful-tools/PowerfulToolsPreview";
import { fadeInUp, staggerContainer } from "@/components/motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { brand } from "@/lib/brand-theme";

const NAVY = brand.navy;
const BODY = brand.muted;
const MINT = brand.greenLight;
const GREEN_DARK = brand.greenDark;

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
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: Users,
    value: "50K+",
    label: "Happy Customers",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: Calendar,
    value: "2.5M+",
    label: "Bookings Managed",
    iconBg: "#E8F3EE",
    iconColor: "#2D6A4F",
  },
  {
    Icon: Star,
    value: "4.8/5",
    label: "User Rating",
    iconBg: "#E8F3EE",
    iconColor: "#1F4D38",
  },
];

export default function PowerfulToolsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="powerful-tools"
      ref={ref}
      className="w-full overflow-hidden bg-white px-4 py-16 md:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Left - copy & features */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SectionHeading
                align="left"
                eyebrow="Everything you need. All in one place."
                eyebrowIcon={<Zap className="h-3.5 w-3.5" strokeWidth={2.25} />}
                title="Powerful Tools to Run and"
                script="grow your business"
                description="Manage leads, bookings, payments, customers, and operations in one unified platform built for modern travel businesses."
              />
            </motion.div>

            <motion.ul variants={staggerContainer} className="mt-8 divide-y divide-border-default">
              {features.map(({ Icon, title, desc }) => (
                <motion.li key={title} variants={fadeInUp}>
                  <button
                    type="button"
                    className="group flex w-full items-start gap-4 py-5 text-left transition-colors hover:bg-off-white/60"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: MINT }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: "#2D6A4F" }}
                        strokeWidth={2}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold md:text-base" style={{ color: NAVY }}>
                        {title}
                      </p>
                      <p
                        className="font-sans mt-1 text-sm leading-relaxed"
                        style={{ color: BODY }}
                      >
                        {desc}
                      </p>
                    </div>
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
            className="lg:mt-14"
          >
            <div className="lg:hidden">
              <p
                className="mb-2 text-center text-base font-semibold italic"
                style={{ color: "#2D6A4F", fontFamily: "cursive" }}
              >
                See Befikra in action
              </p>
              <p className="font-sans mb-4 text-center text-xs text-subtext">
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
          className="card-brand-static mt-14 overflow-hidden"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center px-5 py-7 text-center ${
                  index % 2 === 0 ? "border-r border-border-default" : ""
                } ${index < 2 ? "border-b border-border-default lg:border-b-0" : ""} ${
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
                  className="mt-3 text-2xl font-display font-semibold tracking-[-0.02em] tracking-tight"
                  style={{ color: NAVY }}
                >
                  {stat.value}
                </p>
                <p
                  className="font-sans mt-0.5 text-sm"
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
