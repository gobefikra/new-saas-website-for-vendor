"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  MessageCircle,
  PieChart,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const GREEN = "#2E7D32";
const GREEN_LIGHT = "#4CAF50";
const NAVY = "#0D1B2A";
const BODY_GRAY = "#6B7280";
const RING_INNER = "#E3ECF3";
const RING_MID = "#D6E4EF";

const SIZE = 720;
const CX = SIZE / 2;
const CY = SIZE / 2;
const ICON_RING_R = 122;
const OUTER_RING_R = 228;

type HubNode = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  side: "left" | "right";
  /** Inner edge anchor (where line meets card) */
  anchor: { x: number; y: number };
};

const hubNodes: HubNode[] = [
  {
    id: "automate",
    title: "Automate & Engage",
    description:
      "Automate conversations and follow-ups across all channels.",
    Icon: Users,
    side: "left",
    anchor: { x: 200, y: 128 },
  },
  {
    id: "leads",
    title: "Capture Quality Leads",
    description:
      "Capture, qualify & organize leads from multiple platforms.",
    Icon: MessageCircle,
    side: "left",
    anchor: { x: 172, y: CY },
  },
  {
    id: "relationships",
    title: "Build Strong Relationships",
    description:
      "Stay connected and build lasting relationships with your travelers.",
    Icon: ShieldCheck,
    side: "left",
    anchor: { x: 200, y: 592 },
  },
  {
    id: "insights",
    title: "AI-Powered Insights",
    description:
      "Get real-time insights to make smarter, faster decisions.",
    Icon: BarChart3,
    side: "right",
    anchor: { x: 520, y: 128 },
  },
  {
    id: "conversions",
    title: "Increase Conversions",
    description:
      "Nurture leads with personalized journeys that convert.",
    Icon: Zap,
    side: "right",
    anchor: { x: 548, y: CY },
  },
  {
    id: "growth",
    title: "Drive Growth",
    description:
      "Track performance, measure results and grow your travel business.",
    Icon: PieChart,
    side: "right",
    anchor: { x: 520, y: 592 },
  },
];

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function pct(n: number) {
  return `${(n / SIZE) * 100}%`;
}

function angleToPoint(x: number, y: number) {
  return (Math.atan2(y - CY, x - CX) * 180) / Math.PI;
}

export default function HeroHubDiagram() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[700px] overflow-visible px-1 sm:px-0">
      <div
        className="relative mx-auto w-full overflow-visible"
        style={{ aspectRatio: "1 / 1", maxHeight: "min(92vw, 700px)" }}
      >
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden
        >
          <circle cx={CX} cy={CY} r={104} fill={RING_INNER} />
          <circle cx={CX} cy={CY} r={146} fill={RING_MID} />

          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`0 ${CX} ${CY}`}
              to={`360 ${CX} ${CY}`}
              dur="56s"
              repeatCount="indefinite"
            />
            <circle
              cx={CX}
              cy={CY}
              r={OUTER_RING_R}
              fill="none"
              stroke={GREEN}
              strokeWidth="1.5"
              strokeDasharray="6 8"
              opacity={0.45}
            />
          </g>

          {hubNodes.map((node, i) => {
            const deg = angleToPoint(node.anchor.x, node.anchor.y);
            const iconPt = polar(CX, CY, ICON_RING_R, deg);
            const isActive = activeId === node.id;
            const d = `M ${CX} ${CY} L ${iconPt.x} ${iconPt.y} L ${node.anchor.x} ${node.anchor.y}`;

            return (
              <motion.path
                key={`line-${node.id}`}
                d={d}
                fill="none"
                stroke={isActive ? GREEN : GREEN_LIGHT}
                strokeWidth={isActive ? 2 : 1.5}
                strokeDasharray="5 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={isActive ? 0.9 : 0.5}
                initial={false}
                animate={{ pathLength: 1, opacity: isActive ? 0.9 : 0.5 }}
                transition={{
                  pathLength: { duration: 0.7, delay: 0.3 + i * 0.07, ease: "easeOut" },
                  opacity: { duration: 0.3, delay: 0.3 + i * 0.07 },
                }}
              />
            );
          })}
        </svg>

        {hubNodes.map((node, i) => {
          const deg = angleToPoint(node.anchor.x, node.anchor.y);
          const hub = polar(CX, CY, ICON_RING_R, deg);
          const isActive = activeId === node.id;

          return (
            <motion.div
              key={`hub-icon-${node.id}`}
              className="absolute z-[15] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-[0_2px_12px_rgba(46,125,50,0.35)] sm:h-10 sm:w-10"
              style={{
                left: pct(hub.x),
                top: pct(hub.y),
                backgroundColor: GREEN,
              }}
              initial={false}
              animate={{
                scale: isActive ? 1.15 : [1, 1.06, 1],
                opacity: 1,
              }}
              transition={{
                scale: isActive
                  ? { duration: 0.2 }
                  : { duration: 2.8, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" },
              }}
            >
              <node.Icon
                className="h-4 w-4 text-white sm:h-[18px] sm:w-[18px]"
                strokeWidth={2.25}
              />
            </motion.div>
          );
        })}

        {hubNodes.map((node, i) => (
          <FeatureCard
            key={node.id}
            node={node}
            index={i}
            isActive={activeId === node.id}
            onHover={() => setActiveId(node.id)}
            onLeave={() => setActiveId(null)}
          />
        ))}

        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-[40] flex h-[118px] w-[118px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[5px] border-white bg-white shadow-[0_12px_48px_rgba(13,27,42,0.12)] sm:h-[132px] sm:w-[132px]"
          initial={false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/icons/Nav-logo.png"
            alt="Befikra"
            width={72}
            height={72}
            className="h-11 w-11 object-contain sm:h-[52px] sm:w-[52px]"
            priority
          />
          <p
            className="mt-0.5 font-serif text-[15px] font-bold leading-none sm:text-[17px]"
            style={{ color: NAVY }}
          >
            Befikra
          </p>
          <p
            className="mt-0.5 text-[10px] font-bold tracking-wide sm:text-[11px]"
            style={{ color: GREEN }}
          >
            CRM
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({
  node,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  node: HubNode;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { title, description, Icon, side, anchor } = node;
  const transform = side === "left" ? "translate(-100%, -50%)" : "translate(0%, -50%)";

  return (
    <div
      className="absolute z-[25] w-[max(148px,38vw)] max-w-[178px] sm:w-[178px]"
      style={{
        left: pct(anchor.x),
        top: pct(anchor.y),
        transform,
      }}
    >
      <motion.div
        className="cursor-default rounded-2xl border bg-white px-3 py-2.5 shadow-lg sm:px-3.5 sm:py-3"
        style={{
          borderColor: isActive ? GREEN : "#E5E7EB",
          boxShadow: isActive
            ? "0 14px 40px rgba(46, 125, 50, 0.2)"
            : "0 8px 28px rgba(13, 27, 42, 0.08)",
        }}
        initial={false}
        animate={{ opacity: 1, x: 0, scale: isActive ? 1.04 : 1 }}
        transition={{
          scale: { duration: 0.2 },
        }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="flex gap-2.5">
          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10"
            style={{ backgroundColor: GREEN }}
          >
            <Icon className="h-4 w-4 text-white sm:h-[17px] sm:w-[17px]" strokeWidth={2.25} />
          </div>
          <div className="min-w-0 flex-1">
            <p
              className="text-[11.5px] font-bold leading-snug sm:text-[13px]"
              style={{ color: NAVY }}
            >
              {title}
            </p>
            <p
              className="font-dm-sans mt-0.5 text-[10px] leading-snug text-[#6B7280] sm:text-[11px]"
            >
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
