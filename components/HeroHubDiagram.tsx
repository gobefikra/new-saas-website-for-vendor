"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  MessageCircle,
  PieChart,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const GREEN = "#10B981";
const NAVY = "#0F172A";

/** Hub center — midpoint between left/right card columns */
const CENTER_X = 50;
const CENTER_Y = 50;

/**
 * Approximate card width as % of the stage for ribbon endpoints.
 * Updated at runtime to match responsive card sizes.
 */
const CARD_WIDTH_PCT_MOBILE = 36;
const CARD_WIDTH_PCT_TABLET = 32;
const CARD_WIDTH_PCT_DESKTOP = 28;

type HubNode = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  side: "left" | "right";
  /** Left cards: left edge %. Right cards: right edge %. */
  x: number;
  y: number;
  /** Vertical bend for the ribbon curve */
  cy: number;
  /** Push this card farther from the hub (hex stagger) */
  outward?: boolean;
};

/**
 * Uniform two-column layout — every left card shares LEFT_X,
 * every right card shares RIGHT_X. Middle-row cards nudge
 * outward for a hex-style stagger on all breakpoints.
 */
const LEFT_X = 1.5;
const RIGHT_X = 98.5;
const CARD_SHIFT_Y = 6;
/** Extra % the middle left/right cards move away from the hub */
const MIDDLE_OUTWARD_MOBILE = 7;
const MIDDLE_OUTWARD_TABLET = 5;
const MIDDLE_OUTWARD_DESKTOP = 8;

const hubNodes: HubNode[] = [
  {
    id: "automate",
    title: "Automate & Engage",
    description: "Automate conversations and follow-ups across all channels.",
    Icon: Users,
    side: "left",
    x: LEFT_X,
    y: 14 + CARD_SHIFT_Y,
    cy: 32 + CARD_SHIFT_Y,
  },
  {
    id: "leads",
    title: "Capture Quality Leads",
    description: "Capture, qualify & organize leads from multiple platforms.",
    Icon: MessageCircle,
    side: "left",
    x: LEFT_X,
    y: 42 + CARD_SHIFT_Y,
    cy: 50 + CARD_SHIFT_Y,
    outward: true,
  },
  {
    id: "relationships",
    title: "Build Strong Relationships",
    description:
      "Stay connected and build lasting relationships with your travelers.",
    Icon: ShieldCheck,
    side: "left",
    x: LEFT_X,
    y: 70 + CARD_SHIFT_Y,
    cy: 66 + CARD_SHIFT_Y,
  },
  {
    id: "insights",
    title: "AI-Powered Insights",
    description: "Get real-time insights to make smarter, faster decisions.",
    Icon: BarChart3,
    side: "right",
    x: RIGHT_X,
    y: 14 + CARD_SHIFT_Y,
    cy: 32 + CARD_SHIFT_Y,
  },
  {
    id: "conversions",
    title: "Increase Conversions",
    description: "Nurture leads with personalized journeys that convert.",
    Icon: Zap,
    side: "right",
    x: RIGHT_X,
    y: 42 + CARD_SHIFT_Y,
    cy: 50 + CARD_SHIFT_Y,
    outward: true,
  },
  {
    id: "growth",
    title: "Drive Growth",
    description:
      "Track performance, measure results and grow your travel business.",
    Icon: PieChart,
    side: "right",
    x: RIGHT_X,
    y: 70 + CARD_SHIFT_Y,
    cy: 66 + CARD_SHIFT_Y,
  },
];

type Viewport = "mobile" | "tablet" | "desktop";

function nodeX(node: HubNode, viewport: Viewport) {
  if (!node.outward) return node.x;
  const outward =
    viewport === "mobile"
      ? MIDDLE_OUTWARD_MOBILE
      : viewport === "tablet"
        ? MIDDLE_OUTWARD_TABLET
        : MIDDLE_OUTWARD_DESKTOP;
  return node.side === "left" ? node.x - outward : node.x + outward;
}

export default function HeroHubDiagram() {
  const reduceMotion = useReducedMotion();
  const [activeId, setActiveId] = useState(hubNodes[0].id);
  const [hovered, setHovered] = useState(false);
  const [cardWidthPct, setCardWidthPct] = useState(CARD_WIDTH_PCT_MOBILE);
  const [viewport, setViewport] = useState<Viewport>("mobile");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) {
        setViewport("desktop");
        setCardWidthPct(CARD_WIDTH_PCT_DESKTOP);
      } else if (w >= 640) {
        setViewport("tablet");
        setCardWidthPct(CARD_WIDTH_PCT_TABLET);
      } else {
        setViewport("mobile");
        setCardWidthPct(CARD_WIDTH_PCT_MOBILE);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (hovered || reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveId((prev) => {
        const i = hubNodes.findIndex((n) => n.id === prev);
        return hubNodes[(i + 1) % hubNodes.length].id;
      });
    }, 3200);
    return () => window.clearInterval(id);
  }, [hovered, reduceMotion]);

  const active = hubNodes.find((n) => n.id === activeId) ?? hubNodes[0];

  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[680px]">
      <div
        className="relative isolate w-full overflow-visible"
        style={{ aspectRatio: "1 / 1.08" }}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Atmosphere */}
        <div
          className="pointer-events-none absolute h-[84%] w-[84%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(16, 185, 129,0.14),rgba(226,236,244,0.55)_42%,transparent_70%)]"
          style={{ left: `${CENTER_X}%`, top: `${CENTER_Y}%` }}
        />
        <div
          className="pointer-events-none absolute h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200/40"
          style={{ left: `${CENTER_X}%`, top: `${CENTER_Y}%` }}
        />
        <div
          className="pointer-events-none absolute h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-300/50"
          style={{ left: `${CENTER_X}%`, top: `${CENTER_Y}%` }}
        />

        {/* Radar sweep */}
        {!reduceMotion && (
          <div
            className="pointer-events-none absolute h-[64%] w-[64%] -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${CENTER_X}%`,
              top: `${CENTER_Y}%`,
            }}
          >
            <motion.div
              className="h-full w-full rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(16, 185, 129,0.12) 40deg, transparent 70deg)",
                transformOrigin: "50% 50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )}

        {/* Curved ribbons + traveling spark */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="ribbon-active" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={GREEN} stopOpacity="0.15" />
              <stop offset="50%" stopColor={GREEN} stopOpacity="0.9" />
              <stop offset="100%" stopColor={GREEN} stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {hubNodes.map((node) => {
            const isActive = node.id === activeId;
            const x = nodeX(node, viewport);
            // Meet the card on the edge that faces the hub
            const endX =
              node.side === "left"
                ? x + cardWidthPct - 2
                : x - cardWidthPct + 2;
            const endY = node.y;
            const cx =
              node.side === "left"
                ? CENTER_X - (CENTER_X - endX) * 0.5
                : CENTER_X + (endX - CENTER_X) * 0.5;
            const cy = node.cy;
            const d = `M ${CENTER_X} ${CENTER_Y} Q ${cx} ${cy} ${endX} ${endY}`;
            return (
              <g key={`path-${node.id}`}>
                <path
                  d={d}
                  fill="none"
                  stroke={isActive ? "url(#ribbon-active)" : "#A7F3D0"}
                  strokeWidth={isActive ? 0.55 : 0.28}
                  strokeLinecap="round"
                  opacity={isActive ? 1 : 0.35}
                  vectorEffect="non-scaling-stroke"
                  style={{
                    strokeWidth: isActive ? 2.2 : 1.2,
                    transition: "opacity 0.35s ease, stroke 0.35s ease",
                  }}
                />
                {isActive && !reduceMotion && (
                  <circle r="1.1" fill={GREEN}>
                    <animateMotion dur="2.4s" repeatCount="indefinite" path={d} />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>

        {/* Feature cards */}
        {hubNodes.map((node, i) => {
          const isActive = node.id === activeId;
          const x = nodeX(node, viewport);
          return (
            <div
              key={node.id}
              className="absolute z-20 w-[min(38%,136px)] -translate-y-1/2 sm:w-[min(34%,148px)] md:w-[min(36%,160px)] lg:w-[min(42%,190px)]"
              style={{
                left: node.side === "left" ? `${x}%` : "auto",
                right: node.side === "right" ? `${100 - x}%` : "auto",
                top: `${node.y}%`,
                zIndex: isActive ? 30 : 20,
              }}
            >
              <motion.button
                type="button"
                className="w-full text-left outline-none"
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{
                  opacity: isActive ? 1 : 0.72,
                  y: isActive ? -3 : 0,
                  scale: isActive ? 1.03 : 1,
                }}
                transition={{
                  opacity: {
                    duration: 0.4,
                    delay: reduceMotion ? 0 : 0.15 + i * 0.06,
                  },
                  y: { duration: 0.35 },
                  scale: { duration: 0.35 },
                }}
                onMouseEnter={() => {
                  setHovered(true);
                  setActiveId(node.id);
                }}
                onFocus={() => {
                  setHovered(true);
                  setActiveId(node.id);
                }}
              >
                <div
                  className="rounded-xl bg-white/90 px-2.5 py-2 backdrop-blur-md sm:rounded-2xl sm:px-3.5 sm:py-3 lg:px-4 lg:py-3.5"
                  style={{
                    border: isActive
                      ? "1px solid rgba(16, 185, 129,0.4)"
                      : "1px solid rgba(15,23,42,0.06)",
                    boxShadow: isActive
                      ? "0 20px 44px rgba(16, 185, 129,0.16), 0 6px 16px rgba(15,23,42,0.05)"
                      : "0 10px 28px rgba(15,23,42,0.06)",
                  }}
                >
                  <div className="flex gap-1.5 sm:gap-2.5">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:h-8 sm:w-8 lg:h-9 lg:w-9"
                      style={{
                        background: `linear-gradient(145deg, #34D399, ${GREEN})`,
                        boxShadow: "0 6px 14px rgba(16, 185, 129,0.3)",
                      }}
                    >
                      <node.Icon
                        className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4"
                        strokeWidth={2.25}
                      />
                    </span>
                    <span className="min-w-0">
                      <span
                        className="block text-[10px] font-semibold leading-snug tracking-tight sm:text-[12px] lg:text-[13px]"
                        style={{ color: NAVY }}
                      >
                        {node.title}
                      </span>
                      <span className="font-dm-sans mt-0.5 block text-[8.5px] leading-relaxed text-slate-500 sm:mt-1 sm:text-[10px] lg:text-[11px]">
                        {node.description}
                      </span>
                    </span>
                  </div>
                </div>
              </motion.button>
            </div>
          );
        })}

        {/* Center emblem */}
        <div
          className="pointer-events-none absolute z-40 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${CENTER_X}%`, top: `${CENTER_Y}%` }}
        >
          {!reduceMotion && (
            <>
              <motion.span
                className="absolute left-1/2 top-1/2 h-[108px] w-[108px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/50 sm:h-[120px] sm:w-[120px] md:h-[140px] md:w-[140px] lg:h-[186px] lg:w-[186px]"
                animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.15, 0.45] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute left-1/2 top-1/2 h-[122px] w-[122px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30 sm:h-[136px] sm:w-[136px] md:h-[156px] md:w-[156px] lg:h-[208px] lg:w-[208px]"
                animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.08, 0.35] }}
                transition={{
                  duration: 3.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
              />
            </>
          )}

          <motion.div
            className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full border-[3px] border-white bg-white sm:h-[110px] sm:w-[110px] sm:border-[4px] md:h-[128px] md:w-[128px] lg:h-[168px] lg:w-[168px] lg:border-[5px]"
            style={{
              boxShadow:
                "0 18px 50px rgba(15,23,42,0.1), 0 0 0 1px rgba(15,23,42,0.03)",
            }}
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mt-2 flex w-[78%] flex-col items-center justify-center sm:mt-3 md:mt-3.5 lg:mt-5">
              <Image
                src="/icons/Nav-logo.png"
                alt="Befikra Partner"
                width={160}
                height={52}
                className="!relative h-6 w-auto object-contain sm:h-7 md:h-8 lg:h-11"
                style={{ marginLeft: "auto", marginRight: "auto" }}
                priority
              />
              <p
                className="mt-1 w-full text-center text-[9px] font-bold uppercase sm:mt-1 sm:text-[10px] md:text-[11px] lg:mt-2 lg:text-[13px]"
                style={{
                  color: GREEN,
                  letterSpacing: "0.22em",
                  // Tracking adds space after letters — nudge so CRM looks centered
                  paddingLeft: "0.22em",
                }}
              >
                CRM
              </p>
            </div>
          </motion.div>
        </div>

        {/* Active label chip under center (tablet+) */}
        <div
          className="pointer-events-none absolute bottom-[6%] z-30 hidden -translate-x-1/2 md:block"
          style={{ left: `${CENTER_X}%` }}
        >
          <motion.p
            key={active.id}
            className="whitespace-nowrap rounded-full bg-white/80 px-4 py-1.5 text-center text-[11px] font-medium text-slate-500 shadow-sm backdrop-blur-sm ring-1 ring-slate-200/80"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {active.title}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
