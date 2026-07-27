"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Sparkles } from "lucide-react";
import {
  GmailLogo,
  InstagramLogo,
  MetaLogo,
  MyLinkrLogo,
  WebhooksLogo,
  WebsiteLogo,
  WhatsAppLogo,
} from "@/components/integrations/BrandLogos";

const GREEN = "#2D6A4F";

type OrbitApp = {
  id: string;
  label: string;
  className: string;
  delay?: number;
  node: ReactNode;
};

function HubCircle({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-border-default bg-white shadow-[0_12px_40px_rgba(45, 106, 79,0.15)] sm:h-20 sm:w-20">
      <div
        className="absolute inset-0 rounded-full opacity-40 blur-xl"
        style={{
          background: `radial-gradient(circle, ${GREEN}44 0%, transparent 70%)`,
        }}
      />
      <div
        className="relative flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
        style={{ backgroundColor: "#E8F3EE" }}
      >
        {children}
      </div>
    </div>
  );
}

function AppBubble({ app, animate }: { app: OrbitApp; animate: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        animate
          ? { opacity: 1, scale: 1, y: [0, -4, 0] }
          : { opacity: 0, scale: 0.85 }
      }
      transition={{
        opacity: { duration: 0.4, delay: app.delay ?? 0 },
        scale: { duration: 0.4, delay: app.delay ?? 0 },
        y: {
          duration: 3 + (app.delay ?? 0),
          repeat: Infinity,
          ease: "easeInOut",
          delay: app.delay ?? 0,
        },
      }}
      className={`absolute flex h-10 w-10 items-center justify-center rounded-full border border-border-default bg-white shadow-[0_4px_16px_rgba(13,27,42,0.08)] sm:h-11 sm:w-11 ${app.className}`}
      title={app.label}
    >
      {app.node}
    </motion.div>
  );
}

function OrbitLines({ side, animate }: { side: "left" | "right"; animate: boolean }) {
  const paths =
    side === "left"
      ? [
          "M 150 110 Q 95 48 35 35",
          "M 150 110 Q 90 110 30 110",
          "M 150 110 Q 100 172 45 185",
        ]
      : [
          "M 70 110 Q 125 42 185 25",
          "M 70 110 Q 130 76 190 80",
          "M 70 110 Q 130 140 185 140",
          "M 70 110 Q 125 180 180 195",
        ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 220 220"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {paths.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={animate ? { pathLength: 1, opacity: 0.7 } : { pathLength: 0, opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
        />
      ))}
    </svg>
  );
}

/** Same 7 platforms as Connect Your Business — no filler brands */
const leftApps: OrbitApp[] = [
  {
    id: "wa",
    label: "WhatsApp Business",
    className: "left-[6%] top-[7%]",
    delay: 0.1,
    node: <WhatsAppLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "ig",
    label: "Instagram",
    // Use top calc (not -translate-y-1/2) — Framer Motion y float overrides CSS translate
    className: "left-[4%] top-[calc(50%-1.25rem)] sm:top-[calc(50%-1.375rem)]",
    delay: 0.25,
    node: <InstagramLogo className="h-5 w-5 sm:h-6 sm:w-6" id="cta-ig" />,
  },
  {
    id: "gmail",
    label: "Gmail",
    className: "bottom-[7%] left-[10%]",
    delay: 0.4,
    node: <GmailLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
];

const rightApps: OrbitApp[] = [
  {
    id: "mylinkr",
    label: "MyLinkr",
    className: "right-[6%] top-[2%]",
    delay: 0.15,
    node: <MyLinkrLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "website",
    label: "Website",
    className: "right-[3%] top-[27%]",
    delay: 0.3,
    node: <WebsiteLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "webhooks",
    label: "Webhooks",
    className: "right-[6%] top-[55%]",
    delay: 0.45,
    node: <WebhooksLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "meta",
    label: "Meta Ads",
    className: "bottom-[2%] right-[8%]",
    delay: 0.55,
    node: <MetaLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
];

export function OrbitSide({
  side,
  animate,
}: {
  side: "left" | "right";
  animate: boolean;
}) {
  const apps = side === "left" ? leftApps : rightApps;

  return (
    <div className="relative mx-auto hidden h-[220px] w-[220px] shrink-0 md:block">
      <OrbitLines side={side} animate={animate} />
      <div
        className={`absolute top-1/2 z-10 -translate-y-1/2 ${
          side === "left" ? "left-[52%]" : "right-[52%]"
        }`}
      >
        <HubCircle>
          {side === "left" ? (
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: GREEN }} strokeWidth={2} />
          ) : (
            <LayoutGrid className="h-5 w-5 sm:h-6 sm:w-6" style={{ color: GREEN }} strokeWidth={2} />
          )}
        </HubCircle>
      </div>
      {apps.map((app) => (
        <AppBubble key={app.id} app={app} animate={animate} />
      ))}
    </div>
  );
}
