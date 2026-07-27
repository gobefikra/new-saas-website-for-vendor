"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Heart,
  Mail,
  MessageCircle,
  QrCode,
  Settings,
  Share2,
  Shield,
  Smartphone,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import {
  IllusAudience,
  IllusBooked,
  IllusChatAuto,
  IllusConversion,
  IllusEmbed,
  IllusInbox,
  IllusInstantReply,
  IllusJourney,
  IllusMobile,
  IllusQrCapture,
} from "@/components/raven-ai/FeatureIllustrations";
import { brand } from "@/lib/brand-theme";

const GREEN = brand.primary;
const LIME = brand.lime;

const cardBase =
  "group relative flex h-full min-h-[170px] flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#0A120E] p-5 transition-all duration-300 hover:border-emerald-500/35 hover:bg-[#0C1812] md:p-6";

const trustItems = [
  {
    title: "Secure & Reliable",
    desc: "Enterprise-grade security you can trust.",
    Icon: Shield,
    color: GREEN,
  },
  {
    title: "Easy to Set Up",
    desc: "Get started in minutes and see results fast.",
    Icon: Zap,
    color: LIME,
  },
  {
    title: "Powered by Advanced AI",
    desc: "Smarter conversations, better results.",
    Icon: Sparkles,
    color: "#34D399",
  },
  {
    title: "Loved by Sales Teams",
    desc: "Helping teams close more deals, every day.",
    Icon: Heart,
    color: "#10B981",
  },
];

function AccentWord({ children, color = GREEN }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(90deg, ${color}, ${LIME})`,
      }}
    >
      {children}
    </span>
  );
}

function IconBadge({
  Icon,
  color,
}: {
  Icon: LucideIcon;
  color: string;
}) {
  return (
    <div
      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border"
      style={{
        backgroundColor: `${color}18`,
        borderColor: `${color}33`,
        color,
      }}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
    </div>
  );
}

function InsightRows() {
  const rows = [
    { label: "New WhatsApp leads", value: "48", width: "92%" },
    { label: "Bookings confirmed", value: "21", width: "68%" },
    { label: "Follow-ups sent", value: "116", width: "54%" },
  ];

  return (
    <div className="relative z-10 mt-auto space-y-2.5 pt-5">
      {rows.map((row, i) => (
        <div
          key={row.label}
          className="overflow-hidden rounded-xl border border-white/[0.06] px-3 py-2.5"
          style={{
            background:
              i === 0
                ? "linear-gradient(90deg, rgba(16, 185, 129,0.22), rgba(16, 185, 129,0.04))"
                : "rgba(255,255,255,0.03)",
          }}
        >
          <div className="flex items-center justify-between gap-3 text-[11px]">
            <span className="truncate font-medium text-white/85">{row.label}</span>
            <span className="shrink-0 font-semibold tabular-nums" style={{ color: GREEN }}>
              {row.value}
            </span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full origin-left rounded-full"
              style={{
                width: row.width,
                background: `linear-gradient(90deg, ${GREEN}, ${LIME})`,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.55 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ChannelPills() {
  const channels = ["WhatsApp", "Instagram", "Website", "MyLinkr"];
  return (
    <div className="relative z-10 mt-4 flex flex-wrap gap-2">
      {channels.map((c) => (
        <span
          key={c}
          className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-gray-300"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

function BentoCard({
  children,
  className = "",
  style,
  index,
  show,
  reduceMotion,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  index: number;
  show: boolean;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.div
      className={`${cardBase} ${className}`}
      style={style}
      initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.94 }}
      animate={
        show || reduceMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 32, scale: 0.94 }
      }
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : 0.05 + index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function RavenPlatformGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2, margin: "0px 0px -10% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="mt-4 md:mt-6">
      <motion.div
        className="text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={inView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest"
          style={{ borderColor: "rgba(16, 185, 129,0.4)", color: GREEN }}
        >
          <Sparkles className="h-3.5 w-3.5" />
          All-in-one AI sales platform
        </span>
        <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
          Everything you need to close more deals,{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-[#10B981] to-emerald-400 bg-clip-text text-transparent">
            on autopilot.
          </span>
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base text-gray-400">
          From lead capture to conversion, AI Copilot handles the conversations so
          you can focus on closing.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(4,minmax(168px,auto))] lg:gap-4">
        {/* 01 — Large stats-style inbox card */}
        <BentoCard
          index={0}
          show={inView}
          reduceMotion={reduceMotion}
          className="sm:col-span-2 lg:col-span-5 lg:row-span-2 lg:min-h-[360px]"
          style={{
            background:
              "linear-gradient(160deg, rgba(16, 185, 129,0.14) 0%, #0A120E 48%, rgba(0,0,0,0.25) 100%)",
          }}
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={Mail} color={GREEN} />
            <IllusInbox accent={GREEN} className="h-16 w-24 opacity-80 sm:h-20 sm:w-28" />
          </div>
          <h4 className="relative z-10 mt-5 text-xl font-bold leading-snug text-white md:text-2xl">
            Daily updates, straight to your{" "}
            <AccentWord>inbox</AccentWord>
          </h4>
          <p className="relative z-10 mt-2 max-w-sm text-sm leading-relaxed text-gray-400">
            Get curated leads and insights delivered to you every day.
          </p>
          <InsightRows />
          <div
            className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
            style={{ backgroundColor: GREEN }}
          />
        </BentoCard>

        {/* 02 — Automate */}
        <BentoCard
          index={1}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-4"
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={Settings} color={LIME} />
            <IllusChatAuto accent={LIME} className="h-14 w-24 opacity-85" />
          </div>
          <h4 className="relative z-10 mt-4 text-base font-bold leading-snug text-white md:text-lg">
            Automate your lead{" "}
            <AccentWord color={LIME}>conversations</AccentWord>
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-400 md:text-[13px]">
            Engage, qualify, and follow up automatically with AI.
          </p>
        </BentoCard>

        {/* 03 — QR / 24/7 */}
        <BentoCard
          index={2}
          show={inView}
          reduceMotion={reduceMotion}
          className="items-center text-center lg:col-span-3"
        >
          <IllusQrCapture
            accent="#34D399"
            className="mx-auto h-16 w-28 opacity-95 sm:h-[72px] sm:w-32"
          />
          <div className="relative z-10 mt-3 flex items-center justify-center gap-2">
            <QrCode className="h-4 w-4 text-emerald-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-400">
              Smart QR
            </span>
          </div>
          <h4 className="relative z-10 mt-2 text-sm font-bold leading-snug text-white md:text-base">
            24/7 lead capture{" "}
            <AccentWord color="#34D399">automation</AccentWord>
          </h4>
          <p className="relative z-10 mt-1.5 text-xs text-gray-400">
            Capture leads anytime, anywhere with smart QR.
          </p>
        </BentoCard>

        {/* 04 — Embed */}
        <BentoCard
          index={3}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-4"
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={Share2} color="#10B981" />
            <IllusEmbed accent="#10B981" className="h-14 w-24 opacity-85" />
          </div>
          <h4 className="relative z-10 mt-4 text-base font-bold leading-snug text-white">
            Embed your favorite{" "}
            <AccentWord color="#10B981">content</AccentWord>
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-400">
            Share and embed content from your favorite platforms.
          </p>
          <ChannelPills />
        </BentoCard>

        {/* 05 — Subscribers */}
        <BentoCard
          index={4}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-3"
        >
          <div className="relative z-10 flex items-start justify-between gap-2">
            <IconBadge Icon={Users} color={brand.primaryDark} />
            <IllusAudience
              accent={brand.primaryDark}
              className="h-14 w-24 opacity-85"
            />
          </div>
          <h4 className="relative z-10 mt-4 text-sm font-bold leading-snug text-white md:text-base">
            <AccentWord color={brand.primaryDark}>Subscribers</AccentWord> and
            prospect list
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-400">
            Organize, segment, and nurture your audience effortlessly.
          </p>
        </BentoCard>

        {/* 06 — Speed metric */}
        <BentoCard
          index={5}
          show={inView}
          reduceMotion={reduceMotion}
          className="justify-between lg:col-span-4"
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={MessageCircle} color={GREEN} />
            <IllusInstantReply accent={GREEN} className="h-14 w-20 opacity-80" />
          </div>
          <div className="relative z-10 mt-3">
            <p className="text-sm font-semibold text-white">
              Replies in under{" "}
              <AccentWord>10 seconds</AccentWord>
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span
                className="bg-clip-text text-5xl font-extrabold leading-none text-transparent md:text-6xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${LIME}, ${GREEN})`,
                }}
              >
                10
              </span>
              <span className="pb-1 text-sm font-semibold uppercase tracking-wider text-emerald-400/80">
                sec
              </span>
              <Zap className="mb-1.5 h-6 w-6 text-emerald-400" />
            </div>
            <p className="mt-2 text-xs text-gray-400">
              Instant AI replies keep conversations moving.
            </p>
          </div>
        </BentoCard>

        {/* 07 — Wide journey */}
        <BentoCard
          index={6}
          show={inView}
          reduceMotion={reduceMotion}
          className="sm:col-span-2 lg:col-span-5 lg:flex-row lg:items-center lg:gap-5"
        >
          <div className="relative z-10 min-w-0 flex-1">
            <IconBadge Icon={Zap} color={LIME} />
            <h4 className="mt-4 text-base font-bold leading-snug text-white md:text-lg">
              Custom AI follow-up{" "}
              <AccentWord color={LIME}>journeys</AccentWord>
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-gray-400 md:text-[13px]">
              Personalized follow-ups that convert more leads.
            </p>
          </div>
          <IllusJourney
            accent={LIME}
            className="relative z-10 mt-4 h-16 w-full max-w-[260px] opacity-90 lg:mt-0 lg:h-[72px] lg:shrink-0"
          />
        </BentoCard>

        {/* 08 — Tall booked */}
        <BentoCard
          index={7}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-3 lg:row-span-2 lg:min-h-[360px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(52,211,153,0.12) 0%, #0A120E 55%)",
          }}
        >
          <IconBadge Icon={MessageCircle} color="#34D399" />
          <h4 className="relative z-10 mt-4 text-base font-bold leading-snug text-white md:text-lg">
            Turn chats into{" "}
            <AccentWord color="#34D399">booked</AccentWord> customers
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-400">
            AI-powered conversations that turn interest into meetings.
          </p>
          <IllusBooked
            accent="#34D399"
            className="relative z-10 mx-auto mt-auto h-[160px] w-[140px] opacity-95 sm:h-[180px] sm:w-[150px]"
          />
        </BentoCard>

        {/* 09 — Mobile */}
        <BentoCard
          index={8}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-5"
        >
          <div className="relative z-10 flex h-full flex-col sm:flex-row sm:items-center sm:gap-5">
            <div className="min-w-0 flex-1">
              <IconBadge Icon={Smartphone} color="#6EE7B7" />
              <h4 className="mt-4 text-base font-bold leading-snug text-white">
                Mobile app for{" "}
                <span className="font-extrabold text-white">iOS</span> and{" "}
                <AccentWord color="#6EE7B7">Android</AccentWord>
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-gray-400">
                Manage leads and chats on the go, from any device.
              </p>
            </div>
            <IllusMobile
              accent="#6EE7B7"
              className="mt-4 h-16 w-28 shrink-0 opacity-90 sm:mt-0 sm:h-20 sm:w-32"
            />
          </div>
        </BentoCard>

        {/* 10 — Conversion ready */}
        <BentoCard
          index={9}
          show={inView}
          reduceMotion={reduceMotion}
          className="justify-center border-emerald-500/20 lg:col-span-4"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(74,222,128,0.12)",
          }}
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={BarChart3} color="#4ADE80" />
            <IllusConversion accent="#4ADE80" className="h-14 w-24 opacity-85" />
          </div>
          <h4
            className="relative z-10 mt-5 text-2xl font-extrabold leading-none tracking-tight md:text-3xl"
            style={{
              WebkitTextStroke: "1.4px #4ADE80",
              color: "transparent",
            }}
          >
            Conversion
          </h4>
          <p className="relative z-10 mt-1 text-lg font-bold text-white">ready</p>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-gray-400">
            Built to convert more leads into paying customers.
          </p>
        </BentoCard>
      </div>

      {/* Trust strip */}
      <motion.div
        className="mt-6 grid grid-cols-1 gap-5 rounded-[1.5rem] border px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-7 lg:py-6"
        style={{
          background:
            "linear-gradient(180deg, rgba(16, 185, 129,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          borderColor: "rgba(255,255,255,0.07)",
        }}
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={
          inView || reduceMotion
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 24 }
        }
        transition={{
          duration: 0.5,
          delay: reduceMotion ? 0 : 0.05 + 10 * 0.14,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            className="flex items-start gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={
              inView || reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
            }
            transition={{
              duration: 0.4,
              delay: reduceMotion ? 0 : 1.5 + i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border"
              style={{
                backgroundColor: `${item.color}18`,
                borderColor: `${item.color}33`,
                color: item.color,
              }}
            >
              <item.Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-gray-500">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
