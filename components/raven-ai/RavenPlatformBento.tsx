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

const GREEN = brand.green;
const MINT = brand.accentMint;
const CARD = brand.darkElevated;
const PANEL = brand.darkCard;

const cardBase =
  "group relative flex h-full min-h-[170px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12281C] p-5 shadow-[0_8px_28px_rgba(0,0,0,0.22)] md:p-6";

const trustItems = [
  {
    title: "Secure & Reliable",
    desc: "Enterprise-grade security you can trust.",
    Icon: Shield,
  },
  {
    title: "Easy to Set Up",
    desc: "Get started in minutes and see results fast.",
    Icon: Zap,
  },
  {
    title: "Powered by Advanced AI",
    desc: "Smarter conversations, better results.",
    Icon: Sparkles,
  },
  {
    title: "Loved by Sales Teams",
    desc: "Helping teams close more deals, every day.",
    Icon: Heart,
  },
];

function AccentWord({ children }: { children: ReactNode }) {
  return <span className="text-[#A7D7BC]">{children}</span>;
}

function IconBadge({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-green/30 bg-brand-green/15 text-[#A7D7BC]">
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
          className="overflow-hidden rounded-xl border border-white/[0.07] px-3 py-2.5"
          style={{
            background:
              i === 0
                ? "linear-gradient(90deg, rgba(45,106,79,0.28), rgba(45,106,79,0.06))"
                : "rgba(255,255,255,0.03)",
          }}
        >
          <div className="flex items-center justify-between gap-3 text-[11px]">
            <span className="truncate font-medium text-white/85">{row.label}</span>
            <span className="shrink-0 font-semibold tabular-nums text-[#A7D7BC]">
              {row.value}
            </span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full origin-left rounded-full"
              style={{
                width: row.width,
                background: `linear-gradient(90deg, ${GREEN}, ${MINT})`,
                boxShadow: `0 0 12px ${MINT}55`,
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
  const channels = [
    { label: "WhatsApp", tone: "#25D366" },
    { label: "Instagram", tone: "#E1306C" },
    { label: "Website", tone: MINT },
    { label: "MyLinkr", tone: GREEN },
  ];
  return (
    <div className="relative z-10 mt-4 flex flex-wrap gap-2">
      {channels.map((c) => (
        <span
          key={c.label}
          className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-medium text-white/80"
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: c.tone }}
          />
          {c.label}
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
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.96 }}
      animate={
        show || reduceMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.96 }
      }
      transition={{
        duration: 0.5,
        delay: reduceMotion ? 0 : 0.04 + index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function RavenPlatformGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -8% 0px",
  });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="mt-2 md:mt-4">
      <motion.div
        className="text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={
          inView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/35 bg-brand-green/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#A7D7BC]">
          <Sparkles className="h-3.5 w-3.5" />
          All-in-one AI sales platform
        </span>
        <h3 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-4xl md:text-[2.75rem]">
          Everything you need to close more deals,{" "}
          <span className="text-[#A7D7BC]">on autopilot.</span>
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/55">
          From lead capture to conversion, Raven AI handles the conversations so
          you can focus on closing.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(4,minmax(168px,auto))] lg:gap-4">
        {/* 01 — Inbox / daily updates */}
        <BentoCard
          index={0}
          show={inView}
          reduceMotion={reduceMotion}
          className="sm:col-span-2 lg:col-span-5 lg:row-span-2 lg:min-h-[360px]"
          style={{
            background: `linear-gradient(160deg, rgba(45,106,79,0.22) 0%, ${PANEL} 42%, ${CARD} 100%)`,
          }}
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={Mail} />
            <IllusInbox accent={MINT} className="h-16 w-24 opacity-90 sm:h-20 sm:w-28" />
          </div>
          <h4 className="relative z-10 mt-5 text-xl font-semibold leading-snug text-white md:text-2xl">
            Daily updates, straight to your <AccentWord>inbox</AccentWord>
          </h4>
          <p className="relative z-10 mt-2 max-w-sm text-sm leading-relaxed text-white/55">
            See new leads, bookings, and follow-ups in one daily digest.
          </p>
          <InsightRows />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-brand-green/25 blur-3xl"
          />
        </BentoCard>

        {/* 02 — Automate conversations */}
        <BentoCard
          index={1}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-4"
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={Settings} />
            <IllusChatAuto accent={MINT} className="h-14 w-24 opacity-90" />
          </div>
          <h4 className="relative z-10 mt-4 text-base font-semibold leading-snug text-white md:text-lg">
            Automate your <AccentWord>lead</AccentWord> conversations
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-white/55 md:text-[13px]">
            AI engages, qualifies, and follows up while your team sleeps.
          </p>
        </BentoCard>

        {/* 03 — Smart QR */}
        <BentoCard
          index={2}
          show={inView}
          reduceMotion={reduceMotion}
          className="items-center text-center lg:col-span-3"
        >
          <IllusQrCapture
            accent={MINT}
            className="mx-auto h-16 w-28 opacity-95 sm:h-[72px] sm:w-32"
          />
          <div className="relative z-10 mt-3 inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-brand-green/10 px-3 py-1">
            <QrCode className="h-3.5 w-3.5 text-[#A7D7BC]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A7D7BC]">
              Smart QR
            </span>
          </div>
          <h4 className="relative z-10 mt-3 text-sm font-semibold leading-snug text-white md:text-base">
            24/7 lead capture <AccentWord>automation</AccentWord>
          </h4>
          <p className="relative z-10 mt-1.5 text-xs text-white/55">
            Scan → capture → CRM — anytime, anywhere.
          </p>
        </BentoCard>

        {/* 04 — Embed channels */}
        <BentoCard
          index={3}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-4"
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={Share2} />
            <IllusEmbed accent={MINT} className="h-14 w-24 opacity-90" />
          </div>
          <h4 className="relative z-10 mt-4 text-base font-semibold leading-snug text-white">
            Embed your favorite <AccentWord>content</AccentWord>
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-white/55">
            Put trek links where travelers already chat and browse.
          </p>
          <ChannelPills />
        </BentoCard>

        {/* 05 — Audience */}
        <BentoCard
          index={4}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-3"
        >
          <div className="relative z-10 flex items-start justify-between gap-2">
            <IconBadge Icon={Users} />
            <IllusAudience accent={MINT} className="h-14 w-24 opacity-90" />
          </div>
          <h4 className="relative z-10 mt-4 text-sm font-semibold leading-snug text-white md:text-base">
            <AccentWord>Subscribers</AccentWord> and prospect list
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-white/55">
            Segment audiences and nurture the right people next.
          </p>
        </BentoCard>

        {/* 06 — Speed */}
        <BentoCard
          index={5}
          show={inView}
          reduceMotion={reduceMotion}
          className="justify-between lg:col-span-4"
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={MessageCircle} />
            <IllusInstantReply accent={MINT} className="h-14 w-20 opacity-85" />
          </div>
          <div className="relative z-10 mt-3">
            <p className="text-sm font-semibold text-white">
              Replies in under <AccentWord>10 seconds</AccentWord>
            </p>
            <div className="mt-3 flex items-end gap-2">
              <span
                className="bg-clip-text font-display text-5xl font-semibold leading-none tracking-[-0.02em] text-transparent md:text-6xl"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${MINT}, ${GREEN})`,
                }}
              >
                10
              </span>
              <span className="pb-1 text-sm font-semibold uppercase tracking-wider text-[#A7D7BC]/90">
                sec
              </span>
              <Zap className="mb-1.5 h-6 w-6 text-[#A7D7BC]" />
            </div>
            <p className="mt-2 text-xs text-white/55">
              Instant AI replies keep every chat moving.
            </p>
          </div>
        </BentoCard>

        {/* 07 — Journey */}
        <BentoCard
          index={6}
          show={inView}
          reduceMotion={reduceMotion}
          className="sm:col-span-2 lg:col-span-5 lg:flex-row lg:items-center lg:gap-5"
        >
          <div className="relative z-10 min-w-0 flex-1">
            <IconBadge Icon={Zap} />
            <h4 className="mt-4 text-base font-semibold leading-snug text-white md:text-lg">
              Custom AI <AccentWord>follow-up journeys</AccentWord>
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-white/55 md:text-[13px]">
              Lead → AI → Nurture → Booked — automated end to end.
            </p>
          </div>
          <IllusJourney
            accent={MINT}
            className="relative z-10 mt-4 h-16 w-full max-w-[260px] opacity-95 lg:mt-0 lg:h-[72px] lg:shrink-0"
          />
        </BentoCard>

        {/* 08 — Booked */}
        <BentoCard
          index={7}
          show={inView}
          reduceMotion={reduceMotion}
          className="lg:col-span-3 lg:row-span-2 lg:min-h-[360px]"
          style={{
            background: `linear-gradient(180deg, rgba(45,106,79,0.18) 0%, ${PANEL} 55%, ${CARD} 100%)`,
          }}
        >
          <IconBadge Icon={MessageCircle} />
          <h4 className="relative z-10 mt-4 text-base font-semibold leading-snug text-white md:text-lg">
            Turn chats into <AccentWord>booked</AccentWord> customers
          </h4>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-white/55">
            Conversations that convert interest into confirmed seats.
          </p>
          <IllusBooked
            accent={MINT}
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
              <IconBadge Icon={Smartphone} />
              <h4 className="mt-4 text-base font-semibold leading-snug text-white">
                Mobile app for <AccentWord>iOS</AccentWord> and{" "}
                <AccentWord>Android</AccentWord>
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-white/55">
                Run leads and chats from your phone on trek day.
              </p>
            </div>
            <IllusMobile
              accent={MINT}
              className="mt-4 h-16 w-28 shrink-0 opacity-95 sm:mt-0 sm:h-20 sm:w-32"
            />
          </div>
        </BentoCard>

        {/* 10 — Conversion */}
        <BentoCard
          index={9}
          show={inView}
          reduceMotion={reduceMotion}
          className="justify-center border-[#A7D7BC]/25 lg:col-span-4"
        >
          <div className="relative z-10 flex items-start justify-between gap-3">
            <IconBadge Icon={BarChart3} />
            <IllusConversion accent={MINT} className="h-14 w-24 opacity-90" />
          </div>
          <h4
            className="relative z-10 mt-5 font-display text-2xl font-semibold leading-none tracking-[-0.02em] md:text-3xl"
            style={{
              WebkitTextStroke: `1.35px ${MINT}`,
              color: "transparent",
            }}
          >
            Conversion
          </h4>
          <p className="relative z-10 mt-1 text-lg font-semibold text-white">
            ready
          </p>
          <p className="relative z-10 mt-2 text-xs leading-relaxed text-white/55">
            Built to turn more inquiries into paid bookings.
          </p>
        </BentoCard>
      </div>

      {/* Trust strip */}
      <motion.div
        className="mt-6 grid grid-cols-1 gap-5 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-brand-green/[0.08] to-white/[0.02] px-5 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-7 lg:py-6"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={
          inView || reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
        }
        transition={{
          duration: 0.45,
          delay: reduceMotion ? 0 : 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {trustItems.map((item, i) => (
          <motion.div
            key={item.title}
            className="flex items-start gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={
              inView || reduceMotion
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 10 }
            }
            transition={{
              duration: 0.35,
              delay: reduceMotion ? 0 : 0.85 + i * 0.08,
            }}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-green/30 bg-brand-green/15 text-[#A7D7BC]">
              <item.Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-white/50">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
