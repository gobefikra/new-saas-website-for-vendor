"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Command,
  Instagram,
  Map,
  MessageCircle,
  PieChart,
  UserCheck,
} from "lucide-react";

const GREEN = "#10B981";
const DARK_PANEL = "#0a120e";
const CARD_BG = "#0f1f18";
const CARD_BORDER = "#1a3328";

type OrbitFeature = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  side: "left" | "right";
  row: number;
  anchor: { x: number; y: number };
};

const SIZE = 900;
const VIEW_H = 648;
const CX = SIZE / 2;
const CY = VIEW_H / 2;
const ORBIT_R = 140;

/** Row centers aligned with flex justify-between slots in VIEW_H */
const ROW_Y = [102, 250, 398, 546] as const;
/** Top/bottom hug the hub; middle two sit slightly farther out */
const LEFT_ANCHOR_X = [242, 190, 190, 242] as const;
const RIGHT_ANCHOR_X = [658, 710, 710, 658] as const;

const orbitFeatureDefs = [
  { id: "replies", title: "Instant Replies", description: "Respond to leads instantly with AI-powered conversations.", Icon: MessageCircle, side: "left" as const, row: 0 },
  { id: "command", title: "AI Command Center", description: "Control and automate your CRM workflows with ease.", Icon: Command, side: "left" as const, row: 1 },
  { id: "insights", title: "Smart Insights", description: "Get AI-driven insights to make smarter decisions.", Icon: BarChart3, side: "left" as const, row: 2 },
  { id: "qualify", title: "Lead Qualification", description: "Qualify leads automatically and focus on what matters.", Icon: UserCheck, side: "left" as const, row: 3 },
  { id: "revenue", title: "Revenue Insights", description: "Track performance and uncover revenue-driving opportunities.", Icon: PieChart, side: "right" as const, row: 0 },
  { id: "instagram", title: "Instagram Automation", description: "Engage, reply, and grow your Instagram audience on autopilot.", Icon: Instagram, side: "right" as const, row: 1 },
  { id: "itineraries", title: "AI Itineraries", description: "Create personalized itineraries in seconds using AI.", Icon: Map, side: "right" as const, row: 2 },
  { id: "whatsapp", title: "WhatsApp Automation", description: "Automate chats and follow-ups on WhatsApp seamlessly.", Icon: MessageCircle, side: "right" as const, row: 3 },
];

const orbitFeatures: OrbitFeature[] = orbitFeatureDefs.map((f) => ({
  ...f,
  anchor: {
    x: f.side === "left" ? LEFT_ANCHOR_X[f.row] : RIGHT_ANCHOR_X[f.row],
    y: ROW_Y[f.row],
  },
}));

function isOuterRow(row: number) {
  return row === 1 || row === 2;
}

const leftFeatures = orbitFeatures.filter((f) => f.side === "left");
const rightFeatures = orbitFeatures.filter((f) => f.side === "right");

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function angleTo(x: number, y: number) {
  return (Math.atan2(y - CY, x - CX) * 180) / Math.PI;
}

function CentralOrb() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: `radial-gradient(circle, ${GREEN} 0%, transparent 70%)` }}
        animate={{ opacity: [0.3, 0.55, 0.3], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.svg
        viewBox="0 0 200 200"
        className="relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px]"
        aria-hidden
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.g
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="100" cy="100" r="92" fill="none" stroke={GREEN} strokeOpacity="0.2" strokeWidth="1" strokeDasharray="6 8" />
        </motion.g>
        <motion.g
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="100" cy="100" r="72" fill="none" stroke={GREEN} strokeOpacity="0.45" strokeWidth="1" strokeDasharray="4 6" />
          {[0, 60, 120, 180, 240, 300].map((deg) => {
            const p = polar(100, 100, 72, deg - 90);
            return (
              <circle key={deg} cx={p.x} cy={p.y} r="3" fill={GREEN} opacity="0.85" />
            );
          })}
        </motion.g>
        <defs>
          <radialGradient id="orb-core" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#10B981" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#052e16" stopOpacity="0.2" />
          </radialGradient>
          <pattern id="orb-mesh" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M0 8 L8 0" stroke="#86efac" strokeWidth="0.35" opacity="0.35" />
          </pattern>
        </defs>
        <motion.circle
          cx="100"
          cy="100"
          r="58"
          fill="url(#orb-core)"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.g
          style={{ transformOrigin: "100px 100px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="100" cy="100" r="58" fill="url(#orb-mesh)" />
        </motion.g>
        <ellipse cx="100" cy="100" rx="58" ry="58" fill="none" stroke="#86efac" strokeOpacity="0.35" strokeWidth="0.75" />
      </motion.svg>
    </div>
  );
}

function OrbitFeatureCard({
  feature,
  active,
  inView,
  align,
  onHover,
  onLeave,
}: {
  feature: OrbitFeature;
  active: boolean;
  inView: boolean;
  align: "left" | "right";
  onHover: () => void;
  onLeave: () => void;
}) {
  const { title, description, Icon, row } = feature;
  const floatDelay = row * 0.4;
  const outer = isOuterRow(row);

  return (
    <motion.div
      className={`w-[232px] shrink-0 ${
        align === "left"
          ? outer
            ? "mr-auto"
            : "ml-auto"
          : outer
            ? "ml-auto"
            : "mr-auto"
      }`}
      initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
      transition={{ duration: 0.5, delay: row * 0.08 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        }}
      >
        <div
          className="flex h-[84px] items-start gap-3 rounded-2xl border px-3.5 py-3 transition-colors duration-300"
          style={{
            backgroundColor: active ? "#122820" : CARD_BG,
            borderColor: active ? GREEN : CARD_BORDER,
            boxShadow: active ? `0 0 28px rgba(16, 185, 129,0.22)` : "none",
            transform: active ? "scale(1.02)" : "scale(1)",
          }}
        >
          <motion.div
            className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: "rgba(16, 185, 129,0.15)" }}
            animate={active ? { scale: [1, 1.08, 1] } : { scale: 1 }}
            transition={{ duration: 1.2, repeat: active ? Infinity : 0 }}
          >
            <Icon className="h-4 w-4" style={{ color: GREEN }} strokeWidth={2} />
          </motion.div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-semibold leading-tight text-white">
              {title}
            </p>
            <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-gray-400">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function FlowParticle({
  x1,
  y1,
  x2,
  y2,
  delay,
  reverse,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  reverse?: boolean;
}) {
  return (
    <motion.circle
      r="3"
      fill={GREEN}
      opacity={0.9}
      animate={{
        cx: reverse ? [x2, x1, x2] : [x1, x2, x1],
        cy: reverse ? [y2, y1, y2] : [y1, y2, y1],
        opacity: [0.35, 1, 0.35],
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    />
  );
}

export function RavenOrbitPanel() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const panelRef = useRef(null);
  const inView = useInView(panelRef, { once: true, margin: "-60px" });

  return (
    <div
      ref={panelRef}
      className="relative mx-auto mt-10 max-w-[1100px] overflow-hidden rounded-[28px] border px-2 py-8 sm:px-4 sm:py-10 md:py-12"
      style={{
        backgroundColor: DARK_PANEL,
        borderColor: CARD_BORDER,
        boxShadow: "0 40px 100px rgba(0,0,0,0.35)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 45%, rgba(16, 185, 129,0.14), transparent 70%)",
        }}
      />

      <div
        className="relative mx-auto hidden w-full lg:block"
        style={{ aspectRatio: `${SIZE} / ${VIEW_H}`, maxHeight: 620 }}
      >
        <svg viewBox={`0 0 ${SIZE} ${VIEW_H}`} className="absolute inset-0 z-0 h-full w-full" aria-hidden>
          <motion.g
            style={{ transformOrigin: `${CX}px ${CY}px` }}
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx={CX}
              cy={CY}
              r={ORBIT_R + 18}
              fill="none"
              stroke={GREEN}
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="3 10"
            />
          </motion.g>

          {orbitFeatures.map((f, i) => {
            const deg = angleTo(f.anchor.x, f.anchor.y);
            const orbitPt = polar(CX, CY, ORBIT_R, deg);
            const active = activeId === f.id;
            return (
              <g key={f.id}>
                <motion.line
                  x1={orbitPt.x}
                  y1={orbitPt.y}
                  x2={f.anchor.x}
                  y2={f.anchor.y}
                  stroke={active ? GREEN : "rgba(16, 185, 129,0.35)"}
                  strokeWidth={active ? 2 : 1.5}
                  animate={{ strokeOpacity: active ? [0.7, 1, 0.7] : [0.25, 0.45, 0.25] }}
                  transition={{
                    duration: active ? 1.2 : 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle
                  cx={orbitPt.x}
                  cy={orbitPt.y}
                  r="4"
                  fill={GREEN}
                  animate={{ opacity: active ? 1 : [0.45, 0.85, 0.45] }}
                  transition={{
                    duration: active ? 1 : 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: f.row * 0.15,
                  }}
                />
                <FlowParticle
                  x1={orbitPt.x}
                  y1={orbitPt.y}
                  x2={f.anchor.x}
                  y2={f.anchor.y}
                  delay={f.row * 0.35}
                  reverse={f.side === "right"}
                />
                <FlowParticle
                  x1={orbitPt.x}
                  y1={orbitPt.y}
                  x2={f.anchor.x}
                  y2={f.anchor.y}
                  delay={f.row * 0.35 + 1.2}
                  reverse={f.side !== "right"}
                />
              </g>
            );
          })}
        </svg>

        <div className="relative z-10 grid h-full grid-cols-[1fr_minmax(180px,220px)_1fr] items-stretch">
          <div className="flex flex-col justify-between py-4 pl-1 pr-2">
            {leftFeatures.map((f) => (
              <div
                key={f.id}
                className={`flex items-center ${isOuterRow(f.row) ? "justify-start pl-8" : "justify-end"}`}
                style={{ minHeight: 0, flex: "1 1 0" }}
              >
                <OrbitFeatureCard
                  feature={f}
                  align="left"
                  inView={inView}
                  active={activeId === f.id}
                  onHover={() => setActiveId(f.id)}
                  onLeave={() => setActiveId(null)}
                />
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            <CentralOrb />
          </div>

          <div className="flex flex-col justify-between py-4 pl-2 pr-1">
            {rightFeatures.map((f) => (
              <div
                key={f.id}
                className={`flex items-center ${isOuterRow(f.row) ? "justify-end pr-8" : "justify-start"}`}
                style={{ minHeight: 0, flex: "1 1 0" }}
              >
                <OrbitFeatureCard
                  feature={f}
                  align="right"
                  inView={inView}
                  active={activeId === f.id}
                  onHover={() => setActiveId(f.id)}
                  onLeave={() => setActiveId(null)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet grid */}
      <div className="relative z-10 mx-auto max-w-md px-2 lg:hidden">
        <CentralOrb />
        <div className="mt-[220px] grid grid-cols-1 gap-3 sm:grid-cols-2">
          {orbitFeatures.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: [0, -4, 0] } : { opacity: 0, y: 16 }}
              transition={{
                opacity: { duration: 0.45, delay: i * 0.06 },
                y: {
                  duration: 3 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                },
              }}
              className="flex h-[84px] items-start gap-3 rounded-2xl border px-3.5 py-3"
              style={{ backgroundColor: CARD_BG, borderColor: CARD_BORDER }}
            >
              <div
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(16, 185, 129,0.15)" }}
              >
                <f.Icon className="h-4 w-4" style={{ color: GREEN }} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold leading-tight text-white">
                  {f.title}
                </p>
                <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-gray-400">
                  {f.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
