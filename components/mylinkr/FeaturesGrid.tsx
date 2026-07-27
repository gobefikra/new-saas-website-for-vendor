"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  ExternalLink,
  GripVertical,
  Image as ImageIcon,
  Link2,
  MousePointerClick,
  Play,
  QrCode,
  Share2,
  Sparkles,
} from "lucide-react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";
import { IllusQrCapture } from "@/components/raven-ai/FeatureIllustrations";
import { brand } from "@/lib/brand-theme";

const GREEN = brand.primary;
const LIME = brand.lime;
const LIME_DARK = "#059669";

const cardBase =
  "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white p-5 shadow-[0_18px_55px_-34px_rgba(15,23,42,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-[0_24px_65px_-32px_rgba(16, 185, 129,0.28)] md:p-6";

function AccentWord({
  children,
  color = GREEN,
}: {
  children: ReactNode;
  color?: string;
}) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: `linear-gradient(90deg, ${color}, ${LIME_DARK})`,
      }}
    >
      {children}
    </span>
  );
}

function IconBadge({ Icon, color }: { Icon: LucideIcon; color: string }) {
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
        duration: 0.45,
        delay: reduceMotion ? 0 : 0.04 + index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/** Live hub link rows + overlapping phone peek */
function HubLinkBoard({ reduceMotion }: { reduceMotion: boolean | null }) {
  const links = [
    { title: "Kedarnath Trek", meta: "Book · PDF", hot: true },
    { title: "Hidden Waterfall", meta: "Book", hot: false },
    { title: "Weekend Camp", meta: "Waitlist", hot: false },
  ];

  return (
    <div className="relative z-10 mt-auto flex items-end gap-3 pt-5">
      <div className="min-w-0 flex-1 space-y-2">
        {links.map((link, i) => (
          <motion.div
            key={link.title}
            className="flex items-center gap-2.5 rounded-xl border px-3 py-2.5"
            style={{
              borderColor: link.hot
                ? "rgba(16, 185, 129,0.4)"
                : "rgba(148,163,184,0.25)",
              background: link.hot
                ? "linear-gradient(90deg, rgba(16, 185, 129,0.14), rgba(236,253,245,0.5))"
                : "rgba(248,250,252,0.9)",
            }}
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{
                backgroundColor: link.hot ? `${GREEN}20` : "rgba(226,232,240,0.7)",
                color: link.hot ? GREEN : "#64748B",
              }}
            >
              <ExternalLink className="h-3.5 w-3.5" strokeWidth={2.2} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-semibold text-slate-900">
                {link.title}
              </span>
              <span className="block text-[9px] text-gray-500">{link.meta}</span>
            </span>
            <ArrowUpRight
              className="h-3.5 w-3.5 shrink-0"
              style={{ color: link.hot ? GREEN : "#94A3B8" }}
            />
          </motion.div>
        ))}

        <div className="flex gap-2 pt-1">
          {[
            { value: "2.4k", label: "views" },
            { value: "612", label: "clicks" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
            >
              <p
                className="bg-clip-text text-lg font-extrabold leading-none text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${LIME}, ${GREEN})`,
                }}
              >
                {stat.value}
              </p>
              <p className="mt-0.5 text-[9px] uppercase tracking-wide text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="relative -mb-2 shrink-0"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -inset-3 rounded-[2rem] bg-emerald-300/25 blur-xl" />
        <PhoneMockup
          screenSrc={MYLINKR_SCREENS.hero}
          className="relative w-[108px] md:w-[118px]"
          frameWidth={118}
          frameHeight={240}
          alt="MyLinkr hub example"
        />
      </motion.div>
    </div>
  );
}

/** Draggable block list for the layouts card */
function LayoutBlocks({ reduceMotion }: { reduceMotion: boolean | null }) {
  const blocks = [
    { label: "Newsletter Signup", active: true },
    { label: "Bio", active: false },
    { label: "Recent Posts", active: false },
  ];

  return (
    <div className="relative z-10 mt-4 space-y-2">
      {blocks.map((block, i) => (
        <motion.div
          key={block.label}
          className="flex items-center gap-2 rounded-xl border px-3 py-2 text-[11px]"
          style={{
            borderColor: block.active
              ? "rgba(16,185,129,0.35)"
              : "rgba(148,163,184,0.25)",
            background: block.active
              ? "linear-gradient(90deg, rgba(16,185,129,0.13), rgba(236,253,245,0.7))"
              : "rgba(248,250,252,0.9)",
          }}
          animate={
            reduceMotion || !block.active ? undefined : { x: [0, 5, 0] }
          }
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <GripVertical
            className="h-3.5 w-3.5 shrink-0"
            style={{ color: block.active ? "#059669" : "#94A3B8" }}
          />
          <span className={block.active ? "text-slate-900" : "text-slate-500"}>
            {block.label}
          </span>
          {block.active ? (
            <MousePointerClick className="ml-auto h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <span className="ml-auto h-1.5 w-8 rounded-full bg-slate-200" />
          )}
          {i === 0 && block.active ? (
            <span className="pointer-events-none absolute -right-1 h-full" />
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}

/** Connected social avatars with a live counter */
function SocialCluster({ reduceMotion }: { reduceMotion: boolean | null }) {
  const socials = [
    { Icon: FaInstagram, color: "#E1306C" },
    { Icon: FaXTwitter, color: "#111827" },
    { Icon: FaWhatsapp, color: "#25D366" },
    { Icon: FaLinkedinIn, color: "#0A66C2" },
    { Icon: FaYoutube, color: "#FF0000" },
  ];

  return (
    <div className="relative z-10 mt-auto pt-5">
      <div className="flex items-center -space-x-2">
        {socials.map(({ Icon, color }, i) => (
          <motion.span
            key={i}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm"
            style={{ color }}
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={{
              duration: 2.8,
              delay: i * 0.12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="h-3.5 w-3.5" />
          </motion.span>
        ))}
        <span className="flex h-8 items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 text-[10px] font-semibold text-emerald-400">
          +6
        </span>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[10px] text-slate-500">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        11 profiles synced
      </div>
    </div>
  );
}

/** Mini booking calendar + slot pills */
function BookingWidget() {
  const days = [8, 9, 10, 11, 12, 13, 14];
  const slots = ["9:00 AM", "9:30 AM", "3:00 PM"];

  return (
    <div className="relative z-10 w-full rounded-2xl border border-emerald-100 bg-white/85 p-3.5 shadow-sm">
      <div className="flex items-center justify-between text-[10px] text-slate-500">
        <span className="font-semibold text-slate-700">March</span>
        <span>Book an event</span>
      </div>
      <div className="mt-2.5 grid grid-cols-7 gap-1">
        {days.map((d) => {
          const selected = d === 11;
          return (
            <span
              key={d}
              className="flex h-7 items-center justify-center rounded-lg text-[10px] font-medium"
              style={{
                backgroundColor: selected ? GREEN : "#F1F5F9",
                color: selected ? "#FFFFFF" : "#64748B",
              }}
            >
              {d}
            </span>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        {slots.map((slot, i) => (
          <span
            key={slot}
            className="rounded-full border px-2.5 py-1 text-[10px]"
            style={{
              borderColor:
                i === 1 ? "rgba(16, 185, 129,0.4)" : "rgba(148,163,184,0.25)",
              backgroundColor:
                i === 1 ? "rgba(16, 185, 129,0.1)" : "#F8FAFC",
              color: i === 1 ? "#059669" : "#64748B",
            }}
          >
            {slot}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-1 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold text-white">
          <Check className="h-3 w-3" strokeWidth={3} />
          Book
        </span>
      </div>
    </div>
  );
}

/** Fanned reel stack for the content card */
function ContentReelFan({ reduceMotion }: { reduceMotion: boolean | null }) {
  const reels = [
    {
      src: MYLINKR_SCREENS.carousel[0],
      handle: "@manchalatrekkers",
      rotate: -8,
      x: 0,
      z: 1,
    },
    {
      src: MYLINKR_SCREENS.carousel[2],
      handle: "@lostsoulcamps",
      rotate: 0,
      x: 0,
      z: 3,
    },
    {
      src: MYLINKR_SCREENS.carousel[4],
      handle: "@trailstories",
      rotate: 8,
      x: 0,
      z: 2,
    },
  ];

  return (
    <div className="relative z-10 mt-auto pt-4">
      <div className="mb-3 flex items-center gap-2.5">
        {["Reels", "Photos", "Stories"].map((tab, i) => (
          <span
            key={tab}
            className="rounded-full border px-2.5 py-1 text-[10px] font-medium"
            style={{
              borderColor:
                i === 0 ? "rgba(16, 185, 129,0.4)" : "rgba(148,163,184,0.25)",
              backgroundColor:
                i === 0 ? "rgba(16, 185, 129,0.1)" : "#F8FAFC",
              color: i === 0 ? "#059669" : "#64748B",
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="relative mx-auto flex h-[150px] w-full max-w-[280px] items-end justify-center">
        {reels.map((reel, i) => (
          <motion.div
            key={reel.handle}
            className="absolute bottom-0 w-[96px] overflow-hidden rounded-2xl border border-white shadow-[0_18px_35px_-14px_rgba(15,23,42,0.35)]"
            style={{
              zIndex: reel.z,
              left: `calc(50% + ${(i - 1) * 58}px)`,
              marginLeft: "-48px",
            }}
            initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: 0 }}
            animate={{
              opacity: 1,
              y: reduceMotion ? 0 : [0, -5, 0],
              rotate: reel.rotate,
            }}
            transition={{
              opacity: { delay: 0.1 + i * 0.08, duration: 0.35 },
              rotate: { delay: 0.1 + i * 0.08, duration: 0.45 },
              y: {
                duration: 3.4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative aspect-[9/14] bg-slate-100">
              <Image
                src={reel.src}
                alt=""
                fill
                className="object-cover object-top"
                sizes="96px"
                aria-hidden
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              {i === 1 ? (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-lg">
                    <Play className="h-3.5 w-3.5 fill-[#052e1a] text-[#052e1a]" />
                  </span>
                </span>
              ) : null}
              <span className="absolute bottom-2 left-2 right-2 truncate text-[9px] font-medium text-white/90">
                {reel.handle}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function FeaturesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.12,
    margin: "0px 0px -6% 0px",
  });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden px-4 py-14 md:px-8 md:py-16"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(16, 185, 129,0.08), transparent 65%), #F8FAF9",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={
            inView || reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border bg-emerald-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest"
            style={{ borderColor: "rgba(16, 185, 129,0.25)", color: brand.primaryDark }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Next level features
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            Everything Connected in{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-[#059669] to-emerald-600 bg-clip-text text-transparent">
              One Place
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
            Hub, layouts, socials, bookings, content, and QR — all built into one
            MyLinkr page.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-flow-dense lg:auto-rows-[minmax(190px,auto)] lg:gap-4">
          {/* Hub — link board + phone peek */}
          <BentoCard
            index={0}
            show={inView}
            reduceMotion={reduceMotion}
            className="min-h-[380px] sm:col-span-2 lg:col-span-5 lg:row-span-2 lg:min-h-[440px]"
            style={{
              background:
                "linear-gradient(145deg, #ECFDF5 0%, #FFFFFF 48%, #ECFDF5 100%)",
            }}
          >
            <div className="relative z-10 flex items-start justify-between gap-3">
              <IconBadge Icon={Link2} color={GREEN} />
              <span className="flex items-center gap-1.5 rounded-full border border-emerald-100 bg-white px-2.5 py-1 text-[10px] font-medium text-slate-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                befikra.link/manchala
              </span>
            </div>
            <h3 className="relative z-10 mt-4 text-xl font-bold leading-snug text-slate-900 md:text-2xl">
              Build your central <AccentWord>MyLinkr hub</AccentWord>
            </h3>
            <p className="relative z-10 mt-2 max-w-sm text-sm leading-relaxed text-slate-500">
              One branded page for every trek, booking, and social link.
            </p>
            <HubLinkBoard reduceMotion={reduceMotion} />
            <div
              className="pointer-events-none absolute -bottom-16 -right-10 h-44 w-44 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
              style={{ backgroundColor: GREEN }}
            />
          </BentoCard>

          {/* Layouts — draggable blocks */}
          <BentoCard
            index={1}
            show={inView}
            reduceMotion={reduceMotion}
            className="min-h-[190px] lg:col-span-4"
          >
            <div className="relative z-10 flex items-start justify-between gap-3">
              <IconBadge Icon={GripVertical} color={LIME} />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-600">
                Drag &amp; drop
              </span>
            </div>
            <h3 className="relative z-10 mt-4 text-base font-bold leading-snug text-slate-900 md:text-lg">
              Customize layouts{" "}
              <AccentWord color={LIME_DARK}>your way</AccentWord>
            </h3>
            <LayoutBlocks reduceMotion={reduceMotion} />
          </BentoCard>

          {/* Social — connected avatars */}
          <BentoCard
            index={2}
            show={inView}
            reduceMotion={reduceMotion}
            className="min-h-[190px] lg:col-span-3"
          >
            <IconBadge Icon={Share2} color="#10B981" />
            <h3 className="relative z-10 mt-4 text-sm font-bold leading-snug text-slate-900 md:text-base">
              Keep every profile{" "}
              <AccentWord color={LIME_DARK}>connected</AccentWord>
            </h3>
            <SocialCluster reduceMotion={reduceMotion} />
          </BentoCard>

          {/* Booking — live calendar widget */}
          <BentoCard
            index={3}
            show={inView}
            reduceMotion={reduceMotion}
            className="min-h-[220px] sm:col-span-2 lg:col-span-7 lg:flex-row lg:items-center lg:gap-6"
            style={{
              background:
                "linear-gradient(105deg, #ECFDF5 0%, #FFFFFF 68%)",
            }}
          >
            <div className="relative z-10 min-w-0 flex-1">
              <IconBadge Icon={CalendarCheck} color="#34D399" />
              <h3 className="mt-4 text-base font-bold leading-snug text-slate-900 md:text-lg">
                Add event booking to your{" "}
                <AccentWord color={brand.primaryDark}>page</AccentWord>
              </h3>
              <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-500 md:text-[13px]">
                Visitors pick a date and slot, then confirm — without ever
                leaving your link.
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-700">
                <Check className="h-3 w-3" strokeWidth={3} />
                21 bookings confirmed this week
              </div>
            </div>
            <div className="mt-4 w-full lg:mt-0 lg:w-[280px] lg:shrink-0">
              <BookingWidget />
            </div>
          </BentoCard>

          {/* Content — fanned reel stack */}
          <BentoCard
            index={4}
            show={inView}
            reduceMotion={reduceMotion}
            className="min-h-[280px] lg:col-span-6"
          >
            <div className="relative z-10 flex items-start justify-between gap-3">
              <IconBadge Icon={ImageIcon} color="#6EE7B7" />
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600">
                Media embed
              </span>
            </div>
            <h3 className="relative z-10 mt-4 text-base font-bold leading-snug text-slate-900 md:text-lg">
              Bring your content to{" "}
              <AccentWord color={brand.primaryDark}>life</AccentWord>
            </h3>
            <p className="relative z-10 mt-2 text-xs leading-relaxed text-slate-500">
              Embed media that turns browsers into bookers.
            </p>
            <ContentReelFan reduceMotion={reduceMotion} />
          </BentoCard>

          {/* QR — animated scanner */}
          <BentoCard
            index={5}
            show={inView}
            reduceMotion={reduceMotion}
            className="min-h-[240px] lg:col-span-6"
            style={{
              background:
                "linear-gradient(145deg, #ECFDF5 0%, #FFFFFF 65%)",
            }}
          >
            <div className="relative z-10 flex items-start justify-between gap-3">
              <IconBadge Icon={QrCode} color={LIME} />
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                Smart QR
              </span>
            </div>
            <h3 className="relative z-10 mt-4 text-base font-bold leading-snug text-slate-900 md:text-lg">
              Share your QR code{" "}
              <AccentWord color={LIME_DARK}>anywhere</AccentWord>
            </h3>
            <p className="relative z-10 mt-2 max-w-xs text-xs leading-relaxed text-slate-500">
              Print it, post it, or stick it on gear — one scan, full funnel.
            </p>

            <div className="relative z-10 mt-auto flex items-end justify-between gap-4 pt-4">
              <div className="space-y-2">
                {[
                  { label: "Scans this month", value: "1,284" },
                  { label: "Booked from QR", value: "96" },
                ].map((row) => (
                  <div key={row.label}>
                    <p
                      className="bg-clip-text text-2xl font-extrabold leading-none text-transparent"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${LIME}, ${GREEN})`,
                      }}
                    >
                      {row.value}
                    </p>
                    <p className="mt-0.5 text-[10px] text-gray-500">
                      {row.label}
                    </p>
                  </div>
                ))}
              </div>
              <IllusQrCapture
                accent={LIME}
                className="h-24 w-32 shrink-0 opacity-95"
              />
            </div>

            <div
              className="pointer-events-none absolute -left-10 bottom-6 h-36 w-36 rounded-full opacity-15 blur-3xl transition-opacity group-hover:opacity-35"
              style={{ backgroundColor: LIME }}
            />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
