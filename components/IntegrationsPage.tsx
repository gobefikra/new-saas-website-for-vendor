"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaInstagram, FaLink, FaWhatsapp } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntegrationTabs from "@/components/IntegrationTabs";
import IntegrationFAQ from "@/components/IntegrationFAQ";
import IntegrationsCTA from "@/components/IntegrationsCTA";
import { fadeInUp, staggerContainer } from "@/components/motion";

const stats = [
  {
    icon: "⚡",
    iconBg: "bg-yellow-50",
    stat: "↓ 92%",
    label: "Response Time",
    desc: "From 15 mins to under 30s with AI replies",
  },
  {
    icon: "⚙️",
    iconBg: "bg-blue-50",
    stat: "↓ 75%",
    label: "Manual Work",
    desc: "Automated replies, follow-ups, and reminders",
  },
  {
    icon: "🎯",
    iconBg: "bg-teal-50",
    stat: "↑ 2.4×",
    label: "Conversion Rate",
    desc: "Faster replies convert more leads into bookings",
  },
  {
    icon: "📈",
    iconBg: "bg-green-50",
    stat: "↑ 3×",
    label: "Leads Captured",
    desc: "Capture leads from WA, IG, and website",
  },
];

const floatingIcons = [
  {
    key: "wa",
    className: "absolute top-8 left-[8%] hidden sm:flex",
    delay: 0,
    content: (
      <div className="bg-white rounded-2xl shadow-md p-4 w-16 h-16 flex items-center justify-center">
        <FaWhatsapp className="text-green-500 text-3xl" />
      </div>
    ),
  },
  {
    key: "ig",
    className: "absolute top-4 right-[8%] hidden sm:flex",
    delay: 0.5,
    content: (
      <div className="bg-white rounded-2xl shadow-md p-4 w-16 h-16 flex items-center justify-center">
        <FaInstagram className="text-pink-500 text-3xl" />
      </div>
    ),
  },
  {
    key: "ai",
    className: "absolute top-40 left-[5%] hidden md:flex",
    delay: 1,
    content: (
      <div className="bg-white rounded-2xl shadow-md p-4 w-16 h-16 flex items-center justify-center">
        <Image
          src="/icons/custom-ai.png"
          alt="AI"
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </div>
    ),
  },
  {
    key: "meta",
    className: "absolute top-24 right-[10%] hidden md:flex",
    delay: 1.5,
    content: (
      <div className="bg-white rounded-2xl shadow-md p-4 w-16 h-16 flex items-center justify-center">
        <FaMeta className="text-blue-600 text-3xl" />
      </div>
    ),
  },
  {
    key: "link",
    className: "absolute top-64 left-[12%] hidden lg:flex",
    delay: 2,
    content: (
      <div className="bg-blue-50 rounded-2xl shadow-md p-4 w-16 h-16 flex items-center justify-center">
        <FaLink className="text-blue-400 text-2xl" />
      </div>
    ),
  },
];

type Feature = { title: string; desc: string };

function FeatureCards({
  features,
  dark = false,
  align = "left",
}: {
  features: Feature[];
  dark?: boolean;
  align?: "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const slideX = align === "right" ? 24 : -24;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="space-y-4 max-w-md"
    >
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          variants={{
            hidden: { opacity: 0, x: slideX },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className={`rounded-2xl px-6 py-5 ${
            dark
              ? `bg-[#1A2B3C] ${i === 0 ? "border-l-4 border-emerald-400" : ""}`
              : `border border-gray-100 bg-gray-50 ${
                  i === 0
                    ? "border-l-4 border-emerald-400 bg-white shadow-sm"
                    : ""
                }`
          }`}
        >
          <h3
            className={`font-semibold text-base ${
              dark ? "text-white" : "text-gray-900"
            }`}
          >
            {f.title}
          </h3>
          <p
            className={`text-sm mt-1 ${
              dark ? "text-gray-400" : "text-gray-400"
            }`}
          >
            {f.desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}

const whatsappFeatures: Feature[] = [
  {
    title: "Capture WhatsApp Leads",
    desc: "Automatically save every WhatsApp inquiry.",
  },
  {
    title: "Instant Auto Replies",
    desc: "Send replies instantly using templates.",
  },
  {
    title: "Send Booking Links",
    desc: "Share payment and booking links easily.",
  },
  {
    title: "Sync Conversations",
    desc: "Chats linked directly to lead profiles.",
  },
];

const instagramFeatures: Feature[] = [
  {
    title: "Capture Instagram Leads",
    desc: "Convert DMs into CRM leads.",
  },
  {
    title: "Auto Reply with AI",
    desc: "Respond instantly using Raven AI.",
  },
  {
    title: "Track Lead Sources",
    desc: "Know which Instagram campaigns convert.",
  },
  {
    title: "Assign to Team",
    desc: "Route conversations to sales members.",
  },
];

const websiteFeatures: Feature[] = [
  {
    title: "Capture Website Leads",
    desc: "Save inquiries from Befikra pages.",
  },
  {
    title: "Accept Direct Bookings",
    desc: "Customers book from event pages.",
  },
  {
    title: "Share Event Pages",
    desc: "Send direct event booking links.",
  },
  {
    title: "Sync All Data",
    desc: "Bookings and leads update instantly.",
  },
];

export default function IntegrationsPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });
  const whatsappRef = useRef<HTMLElement>(null);
  const instagramRef = useRef<HTMLElement>(null);
  const websiteRef = useRef<HTMLElement>(null);
  const zoneRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-white py-20 overflow-visible px-4">
        <div className="relative max-w-4xl mx-auto min-h-[420px] md:min-h-[380px]">
          {floatingIcons.map((item) => (
            <motion.div
              key={item.key}
              className={item.className}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
            >
              {item.content}
            </motion.div>
          ))}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 text-center pt-8 md:pt-4"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Turn Every Inquiry.
              <br />
              Into a <span className="text-lime-400">Booking.</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed"
            >
              Save time, reduce manual work, and never miss a lead — Befikra
              helps you focus on what matters most: growing your business. Just
              connect, and you&apos;re all set.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="bg-emerald-500 text-white rounded-full pl-8 pr-3 py-3.5 font-semibold text-base hover:bg-emerald-600 transition flex items-center gap-3"
              >
                Book a Demo
                <span className="bg-emerald-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="bg-white py-16 px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto"
        >
          {stats.map((card) => (
            <motion.div
              key={card.label}
              variants={fadeInUp}
              className="border border-gray-200 rounded-3xl p-6 bg-white hover:shadow-md transition-shadow"
            >
              <div
                className={`${card.iconBg} rounded-xl p-2 w-12 h-12 flex items-center justify-center text-2xl`}
              >
                {card.icon}
              </div>
              <p className="text-3xl font-bold text-gray-900 mt-4">
                {card.stat}
              </p>
              <p className="font-semibold text-gray-800 mt-1">{card.label}</p>
              <p className="text-gray-400 text-sm mt-2">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Integration zone + sticky tabs */}
      <div ref={zoneRef} className="relative">
        <div className="px-4 pt-4 pb-2">
          <IntegrationTabs
            whatsappRef={whatsappRef}
            instagramRef={instagramRef}
            websiteRef={websiteRef}
            zoneRef={zoneRef}
          />
        </div>

        {/* WhatsApp */}
        <section
          id="whatsapp-section"
          ref={whatsappRef}
          className="bg-[#0F1B2D] text-white py-20 px-8 md:px-20 scroll-mt-28"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-lg">
              <h2 className="text-4xl font-extrabold text-white mb-10">
                WhatsApp Integration
              </h2>
              <FeatureCards features={whatsappFeatures} dark />
              <Link
                href="/contact"
                className="inline-block mt-8 border border-white text-white rounded-full px-6 py-2.5 font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                Book Demo
              </Link>
            </div>
            <div
              className="hidden lg:block min-h-[320px] rounded-3xl bg-[#1A2B3C]/30"
              aria-hidden
            >
              {/* Visual coming soon */}
            </div>
          </div>
        </section>

        {/* Instagram */}
        <section
          id="instagram-section"
          ref={instagramRef}
          className="bg-white py-20 px-8 md:px-20 scroll-mt-28"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div
              className="hidden lg:block min-h-[320px] rounded-3xl bg-gray-50 order-1"
              aria-hidden
            />
            <div className="max-w-lg ml-auto w-full order-2 lg:order-2">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-right">
                Instagram Integration
              </h2>
              <FeatureCards
                features={instagramFeatures}
                align="right"
              />
              <div className="mt-8 flex justify-end">
                <Link
                  href="/contact"
                  className="border border-emerald-500 text-emerald-500 rounded-full px-6 py-2.5 font-semibold hover:bg-emerald-500 hover:text-white transition"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Website */}
        <section
          id="website-section"
          ref={websiteRef}
          className="bg-[#0F1B2D] text-white py-20 px-8 md:px-20 scroll-mt-28"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-lg">
              <h2 className="text-4xl font-extrabold text-white mb-10">
                Website Integration
              </h2>
              <FeatureCards features={websiteFeatures} dark />
              <Link
                href="/contact"
                className="inline-block mt-8 border border-white text-white rounded-full px-6 py-2.5 font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                Book Demo
              </Link>
            </div>
            <div
              className="hidden lg:block min-h-[320px] rounded-3xl bg-[#1A2B3C]/30"
              aria-hidden
            >
              {/* Visual coming soon */}
            </div>
          </div>
        </section>
      </div>

      <IntegrationFAQ />
      <IntegrationsCTA />
      <Footer />
    </main>
  );
}
