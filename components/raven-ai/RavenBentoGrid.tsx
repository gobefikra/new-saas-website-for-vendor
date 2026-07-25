"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Pin,
  ShoppingBag,
  Twitter,
  Zap,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";

const cardBase =
  "group relative rounded-[20px] md:rounded-3xl border border-[#1a2e25] bg-[#0a1410]/90 p-4 md:p-5 flex flex-col gap-3 text-white overflow-hidden transition-colors duration-300 hover:border-emerald-500/45 hover:bg-[#0c1812]";

const socialLinks = [
  { Icon: Facebook, label: "Facebook", hover: "hover:text-blue-400 hover:border-blue-400/40" },
  { Icon: Instagram, label: "Instagram", hover: "hover:text-pink-400 hover:border-pink-400/40" },
  { Icon: Pin, label: "Pinterest", hover: "hover:text-red-400 hover:border-red-400/40" },
  { Icon: Twitter, label: "X", hover: "hover:text-sky-400 hover:border-sky-400/40" },
  { Icon: MessageCircle, label: "WhatsApp", hover: "hover:text-emerald-400 hover:border-emerald-400/40" },
  { Icon: ShoppingBag, label: "MyLinkr", hover: "hover:text-lime-400 hover:border-lime-400/40" },
];

function BentoShell({
  children,
  className = "",
  glow = "emerald",
}: {
  children: React.ReactNode;
  className?: string;
  glow?: "emerald" | "lime" | "purple";
}) {
  const glowMap = {
    emerald: "from-emerald-500/15",
    lime: "from-lime-400/15",
    purple: "from-purple-500/15",
  };

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      className={`${cardBase} ${className}`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${glowMap[glow]} via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
      />
      <div className="relative z-10 flex h-full flex-col gap-3">{children}</div>
    </motion.div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 rounded-full bg-[#1a2e25] px-3 py-2 w-fit border border-[#243d32]">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-emerald-400"
          animate={{ opacity: [0.25, 1, 0.25], y: [0, -2, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function AnimatedLeadCount() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);
  const target = 2400;

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    let start: number | null = null;
    const duration = 1400;

    const tick = (ts: number) => {
      if (start === null) start = ts;
      const t = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView]);

  return (
    <p ref={ref} className="text-2xl md:text-3xl font-bold text-emerald-400 tabular-nums">
      {value.toLocaleString("en-IN")}+
    </p>
  );
}

function LivePulse() {
  return (
    <span className="inline-flex items-center gap-2 text-lime-400 font-bold text-base md:text-lg leading-snug">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime-400" />
      </span>
      24/7 lead capture
    </span>
  );
}

function QRTile() {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      className="flex flex-col items-center gap-2 w-full text-left"
      aria-label="Toggle QR preview"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-16 w-16 md:h-20 md:w-20"
      >
        <div
          className="absolute inset-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-lime-400 via-emerald-500 to-emerald-700 text-xs font-bold text-white shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          QR
        </div>
        <div
          className="absolute inset-0 rounded-lg border border-emerald-500/40 bg-[#0a1410] p-1.5 grid grid-cols-4 grid-rows-4 gap-0.5"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className={`rounded-[1px] ${[0, 1, 2, 4, 7, 8, 11, 13, 14, 15].includes(i) ? "bg-emerald-400" : "bg-[#1a2e25]"}`}
            />
          ))}
        </div>
      </motion.div>
      <span className="text-xs text-lime-400/90 group-hover:text-lime-300 transition-colors">
        {flipped ? "Scan to book" : "Event QR · tap to flip"}
      </span>
    </button>
  );
}

function ReplySpeedMeter() {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s <= 3 ? 10 : s - 1));
    }, 800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-end justify-between gap-2">
      <div>
        <p className="text-sm font-semibold leading-snug">
          Replies in under{" "}
          <motion.span
            key={seconds}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-emerald-400"
          >
            {seconds}s
          </motion.span>
        </p>
        <p className="text-[11px] text-gray-500 mt-1">WhatsApp · Instagram · Web</p>
      </div>
      <div className="relative h-12 w-12 shrink-0">
        <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
          <circle cx="18" cy="18" r="15" fill="none" stroke="#1a2e25" strokeWidth="3" />
          <motion.circle
            cx="18"
            cy="18"
            r="15"
            fill="none"
            stroke="#10B981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={`${((10 - seconds) / 10) * 94} 94`}
          />
        </svg>
        <Zap className="absolute inset-0 m-auto h-4 w-4 text-emerald-400" />
      </div>
    </div>
  );
}

export default function RavenBentoGrid() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <div
      id="ai-features-section"
      className="bg-[#050d0a] py-12 md:py-16 px-4 md:px-6"
    >
      <motion.div
        ref={gridRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 auto-rows-min"
      >
        <BentoShell glow="lime" className="md:col-span-2 lg:col-span-2 min-h-[110px]">
          <motion.div
            whileHover={{ rotate: [-2, 2, -2, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="w-8 h-8 text-cyan-400 stroke-[1.5]" />
          </motion.div>
          <div>
            <p className="text-sm md:text-base font-semibold leading-snug">
              Daily trek insights, straight to your inbox
            </p>
            <p className="text-[11px] text-gray-500 mt-1.5">
              Bookings · leads · batch alerts · revenue snapshots
            </p>
          </div>
        </BentoShell>

        <BentoShell className="md:col-span-1 lg:col-span-1">
          <Image
            src="/icons/settings.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 transition-transform duration-300 group-hover:rotate-90"
          />
          <p className="text-sm font-semibold leading-snug">
            Automate WhatsApp & Instagram replies
          </p>
        </BentoShell>

        <BentoShell glow="lime" className="md:col-span-1 lg:col-span-1 items-center">
          <QRTile />
        </BentoShell>

        <BentoShell glow="emerald" className="md:col-span-1 lg:col-span-1 md:row-span-2 justify-center">
          <LivePulse />
          <p className="text-xs text-gray-400 leading-relaxed mt-2">
            Capture leads from MyLinkr, event pages & DMs - even at 2 AM before a trek.
          </p>
          <motion.div
            className="mt-auto h-1 w-full rounded-full bg-[#1a2e25] overflow-hidden"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-500"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              style={{ width: "40%" }}
            />
          </motion.div>
        </BentoShell>

        <BentoShell className="md:col-span-1 lg:col-span-1 md:row-span-2">
          <div className="flex items-center gap-2 text-2xl">
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden
            >
              🍎
            </motion.span>
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              aria-hidden
            >
              🤖
            </motion.span>
          </div>
          <p className="text-sm font-semibold leading-snug">
            Manage batches & bookings on mobile
          </p>
          <p className="text-[11px] text-gray-500">iOS & Android · ops on the go</p>
        </BentoShell>

        <BentoShell glow="emerald" className="md:col-span-1 lg:col-span-1 justify-center">
          <motion.p
            className="text-lime-400 font-bold italic text-sm leading-snug"
            animate={{ opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AI that sells treks while you&apos;re on the trail
          </motion.p>
        </BentoShell>

        <BentoShell glow="purple" className="md:col-span-1 lg:col-span-1 md:row-span-2">
          <Image
            src="/icons/custom-ai.png"
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
          />
          <p className="text-sm font-semibold leading-snug">
            <span className="text-gradient-custom-ai font-bold">Custom AI</span>{" "}
            follow-up journeys
          </p>
          <ul className="text-[11px] text-gray-500 space-y-1 mt-1">
            <li>· Post-inquiry nurture</li>
            <li>· Payment reminders</li>
            <li>· Pre-trek prep sequences</li>
          </ul>
        </BentoShell>

        <BentoShell className="md:col-span-1 lg:col-span-1">
          <Image
            src="/icons/msgs.png"
            alt=""
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <ReplySpeedMeter />
        </BentoShell>

        <BentoShell className="md:col-span-1 lg:col-span-1 justify-center">
          <AnimatedLeadCount />
          <p className="text-sm font-semibold leading-snug text-gray-300">
            Leads organized & tagged by source
          </p>
        </BentoShell>

        <BentoShell className="md:col-span-2 lg:col-span-2">
          <p className="text-sm md:text-base font-semibold">
            Connect every channel you sell on
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {socialLinks.map(({ Icon, label, hover }) => (
              <motion.span
                key={label}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-[#243d32] bg-[#1a2e25] text-gray-400 transition-colors duration-200 ${hover}`}
                title={label}
              >
                <Icon className="h-3.5 w-3.5" />
              </motion.span>
            ))}
          </div>
        </BentoShell>

        <BentoShell className="md:col-span-1 lg:col-span-1 justify-center">
          <TypingDots />
          <p className="text-sm font-semibold leading-snug mt-1">
            Turn chats into confirmed bookings
          </p>
        </BentoShell>

        <BentoShell glow="emerald" className="md:col-span-1 lg:col-span-1 justify-center">
          <motion.p
            className="text-sm md:text-base font-bold leading-snug"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1.5px #84CC16" }}
            >
              Conversion
            </span>{" "}
            <span className="text-white">ready</span>
          </motion.p>
          <p className="text-[10px] text-gray-500 uppercase tracking-wider">
            Pay · waiver · confirm
          </p>
        </BentoShell>
      </motion.div>
    </div>
  );
}
