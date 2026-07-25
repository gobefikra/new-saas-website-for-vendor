"use client";

import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Globe,
  Link2,
  MessageCircle,
  RefreshCw,
  Settings2,
  Share2,
  Target,
  TrendingUp,
  UserPlus,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Footer from "@/components/Footer";
import StickyTabNav from "@/components/StickyTabNav";
import IntegrationFAQ from "@/components/IntegrationFAQ";
import IntegrationsCTA from "@/components/IntegrationsCTA";
import {
  GmailLogo,
  GoogleAdsLogo,
  HubSpotLogo,
  InstagramLogo,
  MetaLogo,
  MyLinkrLogo,
  WebhooksLogo,
  WebsiteLogo,
  WhatsAppLogo,
  ZohoLogo,
} from "@/components/integrations/BrandLogos";
import { fadeInUp, staggerContainer } from "@/components/motion";

const GREEN = "#10B981";
const GREEN_DARK = "#059669";
const NAVY = "#0F172A";
const BODY = "#6B7280";
const HERO_BG = "#F7F8F4";

type StatCard = {
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  stat: string;
  label: string;
  desc: string;
  className: string;
  delay: number;
};

/** Compact metric chips — scattered like the logo tiles */
const stats: StatCard[] = [
  {
    Icon: Zap,
    iconColor: "#F97316",
    iconBg: "#ECFDF5",
    stat: "↓ 92%",
    label: "Response Time",
    desc: "From 15 mins to under 30s with AI replies",
    className: "left-[8%] top-[27%] xl:left-[9%]",
    delay: 0.25,
  },
  {
    Icon: Settings2,
    iconColor: "#8B5CF6",
    iconBg: "#F7FEE7",
    stat: "↓ 75%",
    label: "Manual Work",
    desc: "Automated replies, follow-ups, and reminders",
    className: "right-[8%] top-[27%] xl:right-[9%]",
    delay: 0.4,
  },
  {
    Icon: Target,
    iconColor: "#F43F5E",
    iconBg: "#F0F9FF",
    stat: "↑ 2.4×",
    label: "Conversion Rate",
    desc: "Faster replies convert more leads into bookings",
    className: "left-[9%] top-[66%] xl:left-[10%]",
    delay: 0.6,
  },
  {
    Icon: TrendingUp,
    iconColor: "#3B82F6",
    iconBg: "#FFFBEB",
    stat: "↑ 3×",
    label: "Leads Captured",
    desc: "Capture leads from WA, IG, and website",
    className: "right-[9%] top-[66%] xl:right-[10%]",
    delay: 0.75,
  },
];

type BadgeLogo = ComponentType<{ className?: string; id?: string }>;

type FloatingBadge = {
  key: string;
  label: string;
  Logo: BadgeLogo;
  className: string;
  delay: number;
  size?: "lg" | "md" | "sm";
  logoId?: string;
};

/**
 * Full-width spacious scatter — icons reach both edges of the section.
 */
const floatingBadges: FloatingBadge[] = [
  {
    key: "whatsapp",
    label: "WhatsApp Business",
    Logo: WhatsAppLogo,
    className: "absolute left-[3%] top-[5%] hidden lg:flex xl:left-[4%]",
    delay: 0,
    size: "lg",
  },
  {
    key: "gmail",
    label: "Gmail",
    Logo: GmailLogo,
    className: "absolute left-[18%] top-[12%] hidden lg:flex xl:left-[19%]",
    delay: 0.15,
    size: "md",
  },
  {
    key: "website",
    label: "Website",
    Logo: WebsiteLogo,
    className: "absolute left-[3%] top-[45%] hidden lg:flex xl:left-[4%]",
    delay: 0.35,
    size: "lg",
  },
  {
    key: "mylinkr",
    label: "MyLinkr",
    Logo: MyLinkrLogo,
    className: "absolute left-[21%] top-[48%] hidden lg:flex xl:left-[22%]",
    delay: 0.45,
    size: "sm",
  },
  {
    key: "hubspot",
    label: "HubSpot",
    Logo: HubSpotLogo,
    className: "absolute left-[28%] top-[62%] hidden lg:flex xl:left-[30%]",
    delay: 0.65,
    size: "lg",
  },
  {
    key: "webhooks",
    label: "Webhooks",
    Logo: WebhooksLogo,
    className: "absolute right-[28%] top-[62%] hidden lg:flex xl:right-[30%]",
    delay: 0.8,
    size: "md",
  },
  {
    key: "instagram",
    label: "Instagram",
    Logo: InstagramLogo,
    className: "absolute right-[3%] top-[5%] hidden lg:flex xl:right-[4%]",
    delay: 0.1,
    size: "lg",
    logoId: "int-hero-ig",
  },
  {
    key: "googleads",
    label: "Google Ads",
    Logo: GoogleAdsLogo,
    className: "absolute right-[18%] top-[12%] hidden lg:flex xl:right-[19%]",
    delay: 0.25,
    size: "md",
  },
  {
    key: "meta",
    label: "Meta Ads",
    Logo: MetaLogo,
    className: "absolute right-[3%] top-[45%] hidden lg:flex xl:right-[4%]",
    delay: 0.4,
    size: "lg",
  },
  {
    key: "zoho",
    label: "Zoho",
    Logo: ZohoLogo,
    className: "absolute right-[21%] top-[48%] hidden lg:flex xl:right-[22%]",
    delay: 0.55,
    size: "md",
  },
];

function FloatBadge({ badge }: { badge: FloatingBadge }) {
  const { Logo, label, className, delay, logoId, size = "lg" } = badge;
  const tile =
    size === "lg"
      ? "h-[88px] w-[88px] rounded-[22px] xl:h-24 xl:w-24 xl:rounded-[26px]"
      : size === "md"
        ? "h-[76px] w-[76px] rounded-[20px] xl:h-[84px] xl:w-[84px]"
        : "h-[68px] w-[68px] rounded-[18px] xl:h-[76px] xl:w-[76px]";
  const icon =
    size === "lg"
      ? "h-11 w-11 xl:h-12 xl:w-12"
      : size === "md"
        ? "h-9 w-9 xl:h-10 xl:w-10"
        : "h-8 w-8 xl:h-9 xl:w-9";

  return (
    <motion.div
      className={`pointer-events-none z-[5] ${className}`}
      title={label}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 3.6 + delay * 0.25,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
    >
      <div
        className={`flex items-center justify-center bg-white shadow-[0_12px_34px_rgba(15,23,42,0.1)] ring-1 ring-black/[0.05] ${tile}`}
      >
        <Logo className={icon} id={logoId} />
      </div>
    </motion.div>
  );
}

function StatFloatCard({ card }: { card: StatCard }) {
  return (
    <motion.div
      className={`pointer-events-none absolute z-20 hidden lg:block ${card.className}`}
      title={card.desc}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.45, delay: card.delay },
        scale: { duration: 0.45, delay: card.delay },
        y: {
          duration: 4 + card.delay * 0.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: card.delay,
        },
      }}
    >
      <div className="flex h-[64px] w-[164px] items-center gap-3 rounded-2xl border border-gray-200/80 bg-white px-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] xl:h-[68px] xl:w-[178px] xl:px-4">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl xl:h-10 xl:w-10"
          style={{ backgroundColor: card.iconBg }}
        >
          <card.Icon
            className="h-4 w-4 xl:h-[18px] xl:w-[18px]"
            style={{ color: card.iconColor }}
            strokeWidth={2.25}
            aria-hidden
          />
        </div>
        <div className="min-w-0">
          <p
            className="text-lg font-bold leading-none tracking-tight xl:text-xl"
            style={{ color: NAVY }}
          >
            {card.stat}
          </p>
          <p className="mt-1 whitespace-nowrap text-xs font-semibold leading-tight text-gray-600">
            {card.label}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

type Feature = {
  title: string;
  desc: string;
  previewLabel: string;
  previewValue: string;
  previewNote: string;
};

type IntegrationKind = "whatsapp" | "instagram" | "website";

const INTEGRATION_THEME: Record<
  IntegrationKind,
  {
    label: string;
    accent: string;
    soft: string;
    Icon: LucideIcon;
  }
> = {
  whatsapp: {
    label: "WhatsApp Business",
    accent: "#25D366",
    soft: "#E9FBF0",
    Icon: MessageCircle,
  },
  instagram: {
    label: "Instagram",
    accent: "#E1306C",
    soft: "#FFF0F5",
    Icon: UserPlus,
  },
  website: {
    label: "Befikra Website",
    accent: "#10B981",
    soft: "#ECFDF5",
    Icon: BarChart3,
  },
};

function PreviewShell({
  children,
  ariaLabel,
  chrome = "dashboard",
}: {
  children: ReactNode;
  ariaLabel: string;
  chrome?: "dashboard" | "browser" | "phone" | "sync";
}) {
  return (
    <motion.div
      role="img"
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.985 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 p-4 sm:p-6"
    >
      {chrome === "phone" ? (
        <div className="mx-auto flex h-full w-full items-center justify-center">
          <div className="relative h-full max-h-full w-auto max-w-[min(100%,280px)] aspect-[9/19.2]">
            {/* Hardware buttons */}
            <span
              className="absolute -left-[3px] top-[16%] z-10 h-7 w-[3px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-700"
              aria-hidden
            />
            <span
              className="absolute -left-[3px] top-[26%] z-10 h-11 w-[3px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-700"
              aria-hidden
            />
            <span
              className="absolute -left-[3px] top-[36%] z-10 h-11 w-[3px] rounded-l-sm bg-gradient-to-b from-slate-500 to-slate-700"
              aria-hidden
            />
            <span
              className="absolute -right-[3px] top-[28%] z-10 h-14 w-[3px] rounded-r-sm bg-gradient-to-b from-slate-500 to-slate-700"
              aria-hidden
            />

            {/* Chassis */}
            <div
              className="relative h-full w-full overflow-hidden rounded-[2.65rem] p-[11px] shadow-[0_28px_80px_rgba(2,6,23,0.45),inset_0_1px_0_rgba(255,255,255,0.18)]"
              style={{
                background:
                  "linear-gradient(160deg, #3f4654 0%, #1e2430 38%, #0b0f16 100%)",
              }}
            >
              {/* Outer rim highlight */}
              <div
                className="pointer-events-none absolute inset-[3px] rounded-[2.4rem] border border-white/10"
                aria-hidden
              />

              {/* Screen bezel */}
              <div className="relative h-full w-full overflow-hidden rounded-[2.15rem] bg-black shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                {/* Dynamic Island */}
                <div
                  className="absolute left-1/2 top-3 z-30 flex h-[26px] w-[96px] -translate-x-1/2 items-center justify-center rounded-full bg-black shadow-[0_0_0_2px_rgba(0,0,0,0.55)]"
                  aria-hidden
                >
                  <span className="absolute right-3 h-2 w-2 rounded-full bg-[#1a1f2a] ring-1 ring-slate-700/80" />
                  <span className="h-1.5 w-10 rounded-full bg-[#12151c]" />
                </div>

                {/* Status bar */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex h-11 items-end justify-between px-5 pb-1.5 text-[10px] font-semibold text-white/95">
                  <span>9:41</span>
                  <span className="flex items-center gap-1.5 opacity-90" aria-hidden>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                      <rect x="0" y="3" width="2.2" height="7" rx="0.5" />
                      <rect x="3.5" y="2" width="2.2" height="8" rx="0.5" />
                      <rect x="7" y="0.5" width="2.2" height="9.5" rx="0.5" />
                      <rect x="10.5" y="0" width="2.2" height="10" rx="0.5" opacity="0.35" />
                    </svg>
                    <span className="inline-flex h-[9px] w-[20px] items-center rounded-[2.5px] border border-white/85 p-[1px]">
                      <span className="h-full w-[70%] rounded-[1px] bg-white" />
                    </span>
                  </span>
                </div>

                <div className="h-full min-h-0 overflow-hidden">{children}</div>

                {/* Home indicator */}
                <div
                  className="absolute bottom-2 left-1/2 z-30 h-[4px] w-[108px] -translate-x-1/2 rounded-full bg-black/35"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/70 bg-[#F8FAFC] shadow-[0_24px_70px_rgba(2,6,23,0.18)]">
          {chrome !== "sync" && (
            <div className="flex h-12 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4">
              <div className="flex items-center gap-1.5" aria-hidden>
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
              </div>
              <div className="rounded-full bg-slate-100 px-4 py-1 text-[10px] font-medium text-slate-400">
                {chrome === "browser"
                  ? "befikra.com/events/manali-trek"
                  : "app.befikra.com/integrations"}
              </div>
              <span className="h-7 w-7 rounded-full bg-slate-100" aria-hidden />
            </div>
          )}
          <div className="min-h-0 flex-1 overflow-hidden">{children}</div>
        </div>
      )}
    </motion.div>
  );
}

function WebsiteCaptureLeadsMock() {
  return (
    <PreviewShell ariaLabel="Website lead capture demo" chrome="browser">
      <div className="grid h-full gap-4 p-4 sm:grid-cols-2 sm:p-5">
        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
            Website form
          </p>
          <h3 className="mt-2 text-base font-bold text-slate-900">
            Plan your next trek
          </h3>
          <div className="mt-4 space-y-3">
            {["Full name", "Phone / WhatsApp", "Destination"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5"
              >
                <p className="text-[10px] font-medium text-slate-400">{label}</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-700">
                  {["Aarav Mehta", "+91 98765 43210", "Manali Base Camp"][i]}
                </p>
              </motion.div>
            ))}
            <motion.button
              type="button"
              initial={{ scale: 0.96 }}
              animate={{ scale: [0.96, 1.02, 1] }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="w-full rounded-xl bg-emerald-500 py-2.5 text-sm font-semibold text-white"
            >
              Submit inquiry
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              New lead captured
            </span>
            <p className="mt-3 text-2xl font-extrabold text-slate-900">+1 CRM lead</p>
            <p className="mt-1 text-sm text-slate-500">
              Form data synced to Befikra instantly
            </p>
          </div>
          <div className="mt-5 space-y-2">
            {["Source: Website form", "Owner: Sales inbox", "Status: New"].map(
              (row, i) => (
                <motion.div
                  key={row}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + i * 0.1 }}
                  className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm"
                >
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  {row}
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function WebsiteBookingsMock() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <PreviewShell ariaLabel="Direct booking calendar demo">
      <div className="flex h-full flex-col p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
              Direct bookings
            </p>
            <h3 className="text-lg font-bold text-slate-900">April availability</h3>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <CalendarCheck className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1.5 text-center text-[10px] font-semibold text-slate-400">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="mt-2 grid flex-1 grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }, (_, i) => {
            const day = i + 1;
            const selected = day === 18;
            const booked = [5, 12, 19, 26].includes(day);
            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.01 }}
                className={`flex items-center justify-center rounded-xl text-xs font-semibold ${
                  selected
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                    : booked
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-white text-slate-600 ring-1 ring-slate-100"
                }`}
              >
                {day}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-4 flex items-center justify-between rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-sm"
        >
          <div>
            <p className="text-sm font-semibold text-slate-800">Booking confirmed</p>
            <p className="text-xs text-slate-400">Manali Trek · Apr 18 · 2 guests</p>
          </div>
          <span className="rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-bold text-white">
            Paid
          </span>
        </motion.div>
      </div>
    </PreviewShell>
  );
}

function WebsiteEventShareMock() {
  return (
    <PreviewShell ariaLabel="Event page sharing demo" chrome="phone">
      <div className="relative flex h-full flex-col bg-gradient-to-b from-emerald-600 to-emerald-800 text-white">
        <div className="relative h-[42%] min-h-[140px] overflow-hidden pt-11">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, #fff 0, transparent 45%), radial-gradient(circle at 80% 20%, #86efac 0, transparent 35%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-900/85 to-transparent p-4 pb-3">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-100">
              Featured event
            </p>
            <h3 className="text-[17px] font-extrabold leading-snug">
              Manali Base Camp Trek
            </h3>
          </div>
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-3 bg-white px-4 pb-7 pt-4 text-slate-800">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-slate-500">Starts Apr 18</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-700">
              12 seats left
            </span>
          </div>
          <p className="text-[13px] leading-relaxed text-slate-500">
            5-day guided trek with stay, meals, and pickup from Delhi.
          </p>
          <div className="mt-auto space-y-2">
            <motion.button
              type="button"
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-2.5 text-sm font-semibold text-white"
            >
              <Share2 className="h-4 w-4" />
              Share event page
            </motion.button>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-emerald-200 bg-emerald-50 px-3 py-2 text-[11px] font-medium text-emerald-700"
            >
              <Link2 className="h-3.5 w-3.5" />
              befikra.com/e/manali-trek
            </motion.div>
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function WebsiteSyncMock() {
  const sources = [
    { name: "Website forms", status: "Synced", Icon: Globe },
    { name: "Event bookings", status: "Synced", Icon: CalendarCheck },
    { name: "Payment links", status: "Synced", Icon: Link2 },
    { name: "CRM profiles", status: "Live", Icon: RefreshCw },
  ];

  return (
    <PreviewShell ariaLabel="Website data sync demo" chrome="sync">
      <div className="flex h-full flex-col bg-[#071912] p-5 text-white">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              Data sync
            </p>
            <h3 className="text-xl font-bold">Everything stays in sync</h3>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
          >
            <RefreshCw className="h-5 w-5" />
          </motion.div>
        </div>

        <div className="grid flex-1 gap-3 sm:grid-cols-2">
          {sources.map((source, i) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                  <source.Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">{source.name}</p>
                  <p className="text-[11px] text-emerald-300/80">{source.status}</p>
                </div>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  className="h-full rounded-full bg-emerald-400"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-center text-xs text-emerald-200/70"
        >
          Bookings and leads update across channels in real time
        </motion.p>
      </div>
    </PreviewShell>
  );
}

function WebsiteFeaturePreview({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <WebsiteCaptureLeadsMock />;
    case 1:
      return <WebsiteBookingsMock />;
    case 2:
      return <WebsiteEventShareMock />;
    default:
      return <WebsiteSyncMock />;
  }
}

function IntegrationPreview({
  feature,
  kind,
  index,
}: {
  feature: Feature;
  kind: IntegrationKind;
  index: number;
}) {
  if (kind === "website") {
    return <WebsiteFeaturePreview index={index} />;
  }

  const theme = INTEGRATION_THEME[kind];
  const PreviewIcon = [UserPlus, Bot, TrendingUp, Check][index] ?? Check;

  return (
    <PreviewShell ariaLabel={`${feature.title} integration demo`}>
      <div className="grid h-full min-h-0 grid-cols-[58px_1fr] sm:grid-cols-[72px_1fr]">
        <div className="flex flex-col items-center gap-4 border-r border-slate-200 bg-white py-5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ backgroundColor: theme.accent }}
          >
            <theme.Icon className="h-5 w-5 text-white" aria-hidden />
          </div>
          {[0, 1, 2, 3].map((item) => (
            <span
              key={item}
              className={`h-7 w-7 rounded-lg ${
                item === index ? "bg-slate-200" : "bg-slate-100"
              }`}
              aria-hidden
            />
          ))}
        </div>

        <div className="min-w-0 overflow-hidden p-4 sm:p-6">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold"
                style={{ backgroundColor: theme.soft, color: theme.accent }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {theme.label} connected
              </span>
              <h3 className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                {feature.previewLabel}
              </h3>
            </div>
            <span className="hidden items-center gap-1 text-[11px] text-slate-400 sm:flex">
              <Clock3 className="h-3.5 w-3.5" />
              Live
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1fr_0.72fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{ backgroundColor: theme.soft, color: theme.accent }}
                >
                  <PreviewIcon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-slate-800">
                    {feature.title}
                  </p>
                  <p className="truncate text-xs text-slate-400">{feature.desc}</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {[82, 64, 74].map((width, item) => (
                  <motion.div
                    key={`${feature.title}-${item}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 0.45, delay: 0.12 + item * 0.08 }}
                    className="h-2 rounded-full bg-slate-100"
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                <span className="text-xs font-medium text-slate-500">
                  Automation status
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  <Check className="h-3.5 w-3.5" />
                  Active
                </span>
              </div>
            </div>

            <div
              className="flex min-h-[150px] flex-col justify-between rounded-2xl p-4"
              style={{
                background: `linear-gradient(145deg, ${theme.soft}, #ffffff)`,
              }}
            >
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {feature.previewNote}
                </p>
                <p
                  className="mt-2 text-3xl font-extrabold tracking-tight"
                  style={{ color: theme.accent }}
                >
                  {feature.previewValue}
                </p>
              </div>
              <div className="mt-5 flex items-end gap-1.5" aria-hidden>
                {[34, 52, 45, 72, 62, 88].map((height, item) => (
                  <motion.span
                    key={item}
                    initial={{ height: 8 }}
                    animate={{ height }}
                    transition={{ duration: 0.35, delay: item * 0.05 }}
                    className="flex-1 rounded-t-md"
                    style={{
                      backgroundColor: theme.accent,
                      opacity: 0.28 + item * 0.1,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-3 hidden grid-cols-3 gap-3 sm:grid">
            {["Lead saved", "Team notified", "Follow-up ready"].map(
              (label, item) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3"
                >
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full"
                    style={{ backgroundColor: theme.soft, color: theme.accent }}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    {item <= index ? label : "Waiting…"}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </PreviewShell>
  );
}

function IntegrationShowcase({
  title,
  features,
  kind,
  dark = false,
  reverse = false,
  whatsappTopSpacing = false,
}: {
  title: string;
  features: Feature[];
  kind: IntegrationKind;
  dark?: boolean;
  reverse?: boolean;
  whatsappTopSpacing?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px", amount: 0.25 });
  const theme = INTEGRATION_THEME[kind];

  useEffect(() => {
    if (!inView || shouldReduceMotion) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [features.length, inView, shouldReduceMotion]);

  useEffect(() => {
    if (!inView) setActiveIndex(0);
  }, [inView]);

  const activeFeature = features[activeIndex];
  const Chevron = reverse ? ChevronLeft : ChevronRight;

  const featureColumn = (
    <div className="flex min-h-[590px] flex-col">
      <div className={reverse ? "text-right" : undefined}>
        <span
          className={`text-sm font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-emerald-400" : "text-emerald-600"
          }`}
        >
          Connected workflow
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p
          className={`mt-4 max-w-lg text-base leading-relaxed ${
            reverse ? "ml-auto" : ""
          } ${dark ? "text-slate-400" : "text-slate-500"}`}
        >
          Select a feature to preview it, or watch the workflow advance
          automatically.
        </p>
      </div>

      <div className="mt-8 flex-1 space-y-3">
        {features.map((feature, index) => {
          const active = activeIndex === index;
  return (
            <button
              key={feature.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative w-full overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                active
                  ? dark
                    ? "border-emerald-400/50 bg-[#102A20] shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                    : "border-pink-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
                  : dark
                    ? "border-white/[0.06] bg-[#0F1F18] hover:border-white/15"
                    : "border-slate-200 bg-slate-50 hover:border-slate-300"
              }`}
              aria-pressed={active}
            >
              <div
                className={`flex items-center justify-between gap-4 ${
                  reverse ? "flex-row-reverse text-right" : ""
                }`}
              >
                <div>
                  <h3
                    className={`font-semibold ${
                      dark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {feature.title}
          </h3>
          <p
                    className={`mt-1 text-sm ${
                      dark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {feature.desc}
                  </p>
                </div>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${
                    active
                      ? "text-white"
                      : dark
                        ? "text-slate-500 group-hover:text-white"
                        : "text-slate-400 group-hover:text-slate-700"
                  }`}
                  style={active ? { backgroundColor: theme.accent } : undefined}
                >
                  <Chevron className="h-4 w-4" />
                </span>
              </div>

              {active && !shouldReduceMotion && (
                <motion.span
                  key={`${kind}-${activeIndex}`}
                  className={`absolute bottom-0 h-0.5 rounded-full ${
                    reverse ? "right-0" : "left-0"
                  }`}
                  style={{ backgroundColor: theme.accent }}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4.2, ease: "linear" }}
                />
              )}
            </button>
          );
        })}
      </div>

      <Link
        href="/contact"
        className={`mt-8 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 font-semibold transition-colors ${
          reverse ? "ml-auto" : ""
        } ${
          dark
            ? "border border-white/60 text-white hover:bg-white hover:text-slate-900"
            : "bg-emerald-600 text-white hover:bg-emerald-700"
        }`}
      >
        Book Demo
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );

  const previewColumn = (
    <div
      className={`relative min-h-[510px] overflow-hidden rounded-[2rem] lg:min-h-[590px] ${
        dark
          ? "bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_42%),#0A2118]"
          : "bg-[radial-gradient(circle_at_top_right,rgba(225,48,108,0.12),transparent_42%),#F1F5F9]"
      }`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(rgba(148,163,184,0.45) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <AnimatePresence mode="wait">
        <IntegrationPreview
          key={`${kind}-${activeIndex}`}
          feature={activeFeature}
          kind={kind}
          index={activeIndex}
        />
      </AnimatePresence>
    </div>
  );

  return (
    <section
      ref={ref}
      id={kind}
      className={`scroll-mt-[9.5rem] px-5 pb-28 md:px-10 md:pb-36 lg:px-16 xl:px-20 ${
        whatsappTopSpacing ? "pt-36 md:pt-44" : "pt-28 md:pt-36"
      } ${dark ? "bg-[#0D2B1F] text-white" : "bg-white text-slate-900"}`}
    >
      <div
        className={`mx-auto grid max-w-7xl items-stretch gap-10 lg:gap-14 ${
          reverse
            ? "lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]"
            : "lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]"
        }`}
      >
        {reverse ? (
          <>
            {previewColumn}
            {featureColumn}
          </>
        ) : (
          <>
            {featureColumn}
            {previewColumn}
          </>
        )}
      </div>
    </section>
  );
}

const whatsappFeatures: Feature[] = [
  {
    title: "Capture WhatsApp Leads",
    desc: "Automatically save every WhatsApp inquiry.",
    previewLabel: "New inquiry captured",
    previewValue: "24",
    previewNote: "Leads captured today",
  },
  {
    title: "Instant Auto Replies",
    desc: "Send replies instantly using templates.",
    previewLabel: "AI reply delivered",
    previewValue: "8 sec",
    previewNote: "Average response time",
  },
  {
    title: "Send Booking Links",
    desc: "Share payment and booking links easily.",
    previewLabel: "Booking link activity",
    previewValue: "68%",
    previewNote: "Link conversion rate",
  },
  {
    title: "Sync Conversations",
    desc: "Chats linked directly to lead profiles.",
    previewLabel: "Conversation synced",
    previewValue: "100%",
    previewNote: "CRM sync health",
  },
];

const instagramFeatures: Feature[] = [
  {
    title: "Capture Instagram Leads",
    desc: "Convert DMs into CRM leads.",
    previewLabel: "DM converted to lead",
    previewValue: "31",
    previewNote: "Leads from Instagram",
  },
  {
    title: "Auto Reply with AI",
    desc: "Respond instantly using Raven AI.",
    previewLabel: "Raven AI is replying",
    previewValue: "94%",
    previewNote: "Reply accuracy",
  },
  {
    title: "Track Lead Sources",
    desc: "Know which Instagram campaigns convert.",
    previewLabel: "Campaign attribution",
    previewValue: "3.4×",
    previewNote: "Campaign ROI",
  },
  {
    title: "Assign to Team",
    desc: "Route conversations to sales members.",
    previewLabel: "Lead assigned to sales",
    previewValue: "2 min",
    previewNote: "Assignment time",
  },
];

const websiteFeatures: Feature[] = [
  {
    title: "Capture Website Leads",
    desc: "Save inquiries from Befikra pages.",
    previewLabel: "Form submission received",
    previewValue: "42",
    previewNote: "Website leads today",
  },
  {
    title: "Accept Direct Bookings",
    desc: "Customers book from event pages.",
    previewLabel: "Direct booking confirmed",
    previewValue: "17",
    previewNote: "Bookings this week",
  },
  {
    title: "Share Event Pages",
    desc: "Send direct event booking links.",
    previewLabel: "Event page performance",
    previewValue: "72%",
    previewNote: "Visitor engagement",
  },
  {
    title: "Sync All Data",
    desc: "Bookings and leads update instantly.",
    previewLabel: "Workspace data synced",
    previewValue: "Live",
    previewNote: "Sync status",
  },
];

export default function IntegrationsPage() {
  const zoneRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky parent spans hero + integrations so the secondary nav
          can sit in the hero and remain sticky through the sections */}
      <div ref={zoneRef} className="relative">
        {/* Hero — full-width icon scatter + compact metric chips */}
        <section
          className="relative px-3 pb-8 pt-14 sm:px-4 sm:pb-10 sm:pt-16 md:px-5 lg:pb-12 lg:pt-14"
          style={{ backgroundColor: HERO_BG }}
        >
          <div className="relative mx-auto w-full max-w-[1500px] overflow-x-clip">
            <div className="relative mx-auto w-full lg:min-h-[620px] xl:min-h-[660px]">
              {stats.map((card) => (
                <StatFloatCard key={card.label} card={card} />
              ))}

          {floatingBadges.map((badge) => (
            <FloatBadge key={badge.key} badge={badge} />
          ))}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
                className="relative z-10 mx-auto flex max-w-lg flex-col items-center justify-start px-3 py-10 text-center lg:min-h-[620px] lg:max-w-xl lg:pb-0 lg:pt-[5%] xl:min-h-[660px] xl:pt-[6%]"
              >
            <motion.h1
              variants={fadeInUp}
                className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl md:text-[3.15rem] lg:text-[3.35rem]"
              style={{ color: NAVY }}
            >
              Turn Every Inquiry.
              <br />
              Into a <span style={{ color: GREEN }}>Booking.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
                className="font-dm-sans mx-auto mt-5 max-w-md text-base leading-relaxed md:mt-6 md:text-lg"
              style={{ color: BODY }}
            >
              Save time, reduce manual work, and never miss a lead — Befikra
              helps you focus on what matters most: growing your business. Just
              connect, and you&apos;re all set.
            </motion.p>

              <motion.div
                variants={fadeInUp}
                className="mt-7 flex justify-center md:mt-8"
              >
              <Link
                href="/contact"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: GREEN_DARK }}
              >
                Book a Demo
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>
            </motion.div>
            </motion.div>
          </div>

          {/* Mobile / tablet fallback */}
          <div className="mt-6 space-y-8 lg:hidden">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {floatingBadges.map(({ key, label, Logo, logoId }) => (
                <div
                  key={key}
                  title={label}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_10px_28px_rgba(15,23,42,0.1)] ring-1 ring-black/[0.04] sm:h-[72px] sm:w-[72px]"
                >
                  <Logo
                    className="h-8 w-8 sm:h-9 sm:w-9"
                    id={logoId ? `${logoId}-m` : undefined}
                  />
                </div>
              ))}
        </div>

            <div className="grid grid-cols-2 gap-3">
          {stats.map((card) => (
                <div
                  key={`m-${card.label}`}
                  title={card.desc}
                  className="flex items-start gap-2.5 rounded-2xl border border-gray-200/90 bg-white px-3 py-3 shadow-sm"
            >
              <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <card.Icon
                      className="h-4 w-4"
                      style={{ color: card.iconColor }}
                      strokeWidth={2.25}
                      aria-hidden
                    />
              </div>
                  <div className="min-w-0 pt-0.5">
                    <p
                      className="text-lg font-bold leading-none tracking-tight"
                      style={{ color: NAVY }}
                    >
                {card.stat}
              </p>
                    <p className="mt-1 text-[11px] font-semibold leading-tight text-gray-600">
                      {card.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* Must be a direct sticky child of zoneRef (tall parent) */}
        {/* Half overlaps the hero and half overlaps the dark section. */}
        <StickyTabNav className="-mb-7 -mt-7 sm:-mb-[30px] sm:-mt-[30px]" />

        <IntegrationShowcase
          title="WhatsApp Integration"
          features={whatsappFeatures}
          kind="whatsapp"
          dark
          whatsappTopSpacing
        />

        <IntegrationShowcase
          title="Instagram Integration"
                features={instagramFeatures}
          kind="instagram"
          reverse
        />

        <IntegrationShowcase
          title="Website Integration"
          features={websiteFeatures}
          kind="website"
          dark
        />
      </div>

      <IntegrationFAQ />
      <IntegrationsCTA />
      <Footer />
    </main>
  );
}
