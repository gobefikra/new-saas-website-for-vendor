"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Clock,
  Code2,
  Globe,
  Headphones,
  Link2,
  ShieldCheck,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { InstagramLogo } from "@/components/integrations/BrandLogos";
import { fadeInUp, staggerContainer } from "@/components/motion";
import { brand } from "@/lib/brand-theme";

const GREEN = brand.primary;
const GREEN_DARK = brand.primaryDark;
const NAVY = brand.navy;
const MINT = brand.mint;
const BODY = brand.subtext;

const topFeatures = [
  {
    Icon: Zap,
    title: "Capture Instantly",
    desc: "Never miss a lead",
  },
  {
    Icon: Bot,
    title: "Automate Effortlessly",
    desc: "Save time with smart automation",
  },
  {
    Icon: TrendingUp,
    title: "Grow Consistently",
    desc: "Turn leads into loyal customers",
  },
];

const integrationCards = [
  {
    id: "whatsapp",
    badge: { label: "Most Used", variant: "light" as const, icon: Star },
    title: "WhatsApp Integration",
    desc: "Manage all WhatsApp inquiries and bookings directly inside your CRM.",
    items: [
      "Capture leads automatically from WhatsApp chats",
      "Reply instantly using templates and automation",
      "Send booking confirmations and reminders",
      "Share payment links and event details easily",
      "Sync conversations with leads and bookings",
    ],
    cta: "Connect WhatsApp",
    featured: false,
    icon: "whatsapp" as const,
  },
  {
    id: "instagram",
    badge: { label: "Recommended", variant: "solid" as const },
    title: "Instagram Integration",
    desc: "Convert Instagram messages into leads and bookings automatically.",
    items: [
      "Capture leads from Instagram DMs and comments",
      "Auto-reply using AI and saved templates",
      "Track source and conversion from Instagram",
      "Assign conversations to your sales team",
      "Sync chats directly with CRM records",
    ],
    cta: "Connect Instagram",
    featured: true,
    icon: "instagram" as const,
  },
  {
    id: "website",
    badge: null,
    title: "Website Integration",
    desc: "Capture bookings and leads from Befikra event and MyLinkr pages.",
    items: [
      "Capture leads from Befikra event pages",
      "Accept bookings through MyLinkr pages",
      "Share direct event booking links",
      "Track performance of Befikra listings",
      "Sync all data automatically with CRM",
    ],
    cta: "Connect Website",
    featured: false,
    icon: "website" as const,
  },
];

const brandLogos = ["WanderPro", "TrailHive", "tripoto", "PeakGo", "Roameo"];

function WhatsAppSquareIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]">
      <svg className="h-7 w-7" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="#fff"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        />
      </svg>
    </div>
  );
}

export default function ChannelsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="customer-channels"
      ref={ref}
      className="w-full overflow-hidden bg-white px-4 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex justify-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "#A7F3D0", backgroundColor: MINT, color: GREEN_DARK }}
          >
            <Link2 className="h-4 w-4" strokeWidth={2.25} />
            All your channels. One smart CRM.
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-3xl text-center text-3xl font-extrabold leading-tight md:text-4xl lg:text-[2.75rem]"
          style={{ color: NAVY }}
        >
          Connect Your{" "}
          <span style={{ color: GREEN }}>Customer Channels</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-4 max-w-2xl text-center font-dm-sans text-base md:text-lg"
          style={{ color: BODY }}
        >
          Capture leads, reply instantly, and manage bookings from WhatsApp,
          Instagram, and Befikra - all in one CRM.
        </motion.p>

        {/* Top 3 features */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {topFeatures.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="flex flex-col items-center text-center"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: MINT }}
              >
                <Icon className="h-6 w-6" style={{ color: GREEN }} strokeWidth={2} />
              </div>
              <p className="mt-3 text-sm font-bold" style={{ color: NAVY }}>
                {title}
              </p>
              <p className="mt-0.5 font-dm-sans text-sm" style={{ color: BODY }}>
                {desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Integration cards */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3"
        >
          {integrationCards.map((card) => (
            <motion.article
              key={card.id}
              variants={fadeInUp}
              className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(13,27,42,0.06)] ${
                card.featured ? "border-2 z-10 lg:-mt-1 lg:mb-1" : "border border-gray-100"
              }`}
              style={card.featured ? { borderColor: GREEN } : undefined}
            >
              {card.badge && (
                <span
                  className={`absolute right-4 top-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    card.badge.variant === "solid"
                      ? "text-white"
                      : ""
                  }`}
                  style={
                    card.badge.variant === "solid"
                      ? { backgroundColor: GREEN_DARK }
                      : { backgroundColor: MINT, color: GREEN_DARK }
                  }
                >
                  {"icon" in card.badge && card.badge.icon ? (
                    <card.badge.icon className="h-3 w-3 fill-current" />
                  ) : null}
                  {card.badge.label}
                </span>
              )}

              <div className="flex flex-1 flex-col p-6 pb-0 md:p-7 md:pb-0">
                <div className="mb-4">
                  {card.icon === "whatsapp" && <WhatsAppSquareIcon />}
                  {card.icon === "instagram" && (
                    <div className="overflow-hidden rounded-xl">
                      <InstagramLogo className="h-12 w-12" id="channels-ig" />
                    </div>
                  )}
                  {card.icon === "website" && (
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: MINT }}
                    >
                      <Globe className="h-7 w-7" style={{ color: GREEN }} strokeWidth={2} />
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-bold" style={{ color: NAVY }}>
                  {card.title}
                </h3>
                <p className="mt-2 font-dm-sans text-sm leading-relaxed" style={{ color: BODY }}>
                  {card.desc}
                </p>

                <ul className="mt-5 flex-1 space-y-2.5 pb-6">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-dm-sans text-sm" style={{ color: BODY }}>
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: GREEN }}
                        strokeWidth={2.5}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/integrations"
                className={`flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-opacity hover:opacity-90 ${
                  card.featured ? "text-white" : ""
                }`}
                style={
                  card.featured
                    ? { backgroundColor: GREEN_DARK }
                    : { backgroundColor: MINT, color: GREEN_DARK }
                }
              >
                {card.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-8 grid grid-cols-2 items-start gap-x-3 gap-y-6 border-t border-gray-100 pt-8 sm:mt-10 sm:gap-x-6 sm:pt-10 lg:mt-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8"
        >
          <div className="order-1 flex items-start gap-2.5 sm:items-center sm:gap-3 lg:justify-start">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
              style={{ backgroundColor: MINT }}
            >
              <ShieldCheck
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: GREEN }}
                strokeWidth={2}
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold leading-snug sm:text-sm" style={{ color: NAVY }}>
                Secure & Reliable
              </p>
              <p className="font-dm-sans mt-0.5 text-[10px] leading-snug sm:text-xs" style={{ color: BODY }}>
                Your data is safe with enterprise-grade security.
              </p>
            </div>
          </div>

          <div className="order-3 col-span-2 text-center lg:order-2 lg:col-span-1">
            <p className="font-dm-sans text-xs font-medium sm:text-sm" style={{ color: BODY }}>
              Trusted by 500+ travel brands and startups
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 opacity-50 grayscale sm:mt-4 sm:gap-5">
              {brandLogos.map((name) => (
                <span
                  key={name}
                  className={`font-dm-sans text-[9px] font-bold uppercase tracking-wider text-gray-500 sm:text-[11px] ${
                    name === "tripoto" ? "normal-case tracking-normal" : ""
                  }`}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="order-2 flex items-start gap-2.5 sm:items-center sm:gap-3 lg:order-3 lg:justify-end">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11"
              style={{ backgroundColor: MINT }}
            >
              <Zap
                className="h-4 w-4 sm:h-5 sm:w-5"
                style={{ color: GREEN }}
                strokeWidth={2}
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold leading-snug sm:text-sm" style={{ color: NAVY }}>
                Quick & Easy Setup
              </p>
              <p className="font-dm-sans mt-0.5 text-[10px] leading-snug sm:text-xs" style={{ color: BODY }}>
                Connect your channels in just a few clicks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.25 }}
          className="mt-6 grid grid-cols-3 gap-2 border-t border-gray-50 pt-5 font-dm-sans text-[10px] sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4 sm:gap-y-2 sm:border-0 sm:pt-0 sm:text-sm"
          style={{ color: BODY }}
        >
          <span className="inline-flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-2 sm:text-left">
            <Code2 className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} />
            No coding required
          </span>
          <span className="hidden text-gray-300 sm:inline">|</span>
          <span className="inline-flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-2 sm:text-left">
            <Clock className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} />
            5-min setup
          </span>
          <span className="hidden text-gray-300 sm:inline">|</span>
          <span className="inline-flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-2 sm:text-left">
            <Headphones className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" strokeWidth={2} />
            24/7 support
          </span>
        </motion.div>
      </div>
    </section>
  );
}
