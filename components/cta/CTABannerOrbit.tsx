"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Sparkles } from "lucide-react";
import {
  GmailLogo,
  InstagramLogo,
  WhatsAppLogo,
} from "@/components/integrations/BrandLogos";

const GREEN = "#22C55E";

type OrbitApp = {
  id: string;
  label: string;
  className: string;
  delay?: number;
  node: ReactNode;
};

function HubCircle({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-gray-100 bg-white shadow-[0_12px_40px_rgba(34,197,94,0.15)] sm:h-20 sm:w-20">
      <div
        className="absolute inset-0 rounded-full opacity-40 blur-xl"
        style={{
          background: `radial-gradient(circle, ${GREEN}44 0%, transparent 70%)`,
        }}
      />
      <div
        className="relative flex h-11 w-11 items-center justify-center rounded-full sm:h-12 sm:w-12"
        style={{ backgroundColor: "#E8F5E9" }}
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
      className={`absolute flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white shadow-[0_4px_16px_rgba(13,27,42,0.08)] sm:h-11 sm:w-11 ${app.className}`}
      title={app.label}
    >
      {app.node}
    </motion.div>
  );
}

function FacebookLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

function GoogleDriveLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M8.5 2L1 14h6.5L15 2H8.5z" />
      <path fill="#FBBC04" d="M1 14l3.5 6H22l-3.5-6H1z" />
      <path fill="#34A853" d="M15 2l7 12h-6.5L8.5 2H15z" />
    </svg>
  );
}

function MailchimpLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <rect width="24" height="24" rx="6" fill="#FFE01B" />
      <path
        fill="#241C15"
        d="M7 14c.5-2 2-3.5 4-3.5h2c1.5 0 2.5.8 2.5 2.2 0 1.8-1.2 3.3-3.5 3.3-2 0-3.5-1-5-2z"
      />
    </svg>
  );
}

function ShopifyLogo({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#95BF47"
        d="M15.34 3.5c-.05 0-.12.02-.2.04-.08-.75-.55-1.1-1.05-1.12-.5-.02-1.05.28-1.35.95-.3.67-.75 1.85-.95 2.45-.2.6-.55.65-.95.55-.4-.1-1.65-.45-2.55-.65-1.05-.25-1.85.05-2.15.75-.3.7-.85 2.15-1.15 3-.85-.25-1.55-.4-1.65-.4-.25 0-.35.15-.35.35 0 .2.05.45.1.75L3 21.5h18l-1.2-8.55c.05-.35.1-.65.1-.9 0-.55-.25-.85-.65-.85-.15 0-.35.05-.55.1-.25-.85-.65-1.55-1.25-1.95-.6-.4-1.35-.45-2.05-.15-.35-.95-.85-1.85-1.45-2.15-.6-.3-1.35-.15-1.85.35-.5.5-1.15 1.45-1.55 2.15-.15-.05-.3-.1-.45-.15-.55-.15-1.05-.05-1.35.25-.35.35-.55 1-.65 1.65-.35-.1-.65-.15-.85-.15-.45 0-.75.25-.75.75 0 .35.05.75.15 1.15L3 21.5"
      />
    </svg>
  );
}

function OrbitLines({ side, animate }: { side: "left" | "right"; animate: boolean }) {
  const paths =
    side === "left"
      ? [
          "M 120 80 Q 80 50 40 30",
          "M 120 80 Q 70 100 30 120",
          "M 120 80 Q 90 110 50 140",
          "M 120 80 Q 140 40 170 20",
        ]
      : [
          "M 20 80 Q 60 50 100 30",
          "M 20 80 Q 70 100 110 120",
          "M 20 80 Q 50 30 80 15",
          "M 20 80 Q 40 120 70 145",
        ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 180 160"
      preserveAspectRatio="none"
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
      {[
        { cx: side === "left" ? 40 : 100, cy: 30, color: "#A855F7" },
        { cx: side === "left" ? 30 : 110, cy: 120, color: GREEN },
        { cx: side === "left" ? 170 : 80, cy: 15, color: "#3B82F6" },
      ].map((dot) => (
        <circle
          key={`${dot.cx}-${dot.cy}`}
          cx={dot.cx}
          cy={dot.cy}
          r="3"
          fill={dot.color}
          opacity="0.8"
        />
      ))}
    </svg>
  );
}

const leftApps: OrbitApp[] = [
  {
    id: "wa",
    label: "WhatsApp",
    className: "left-[8%] top-[8%] sm:left-[4%] sm:top-[6%]",
    delay: 0.1,
    node: <WhatsAppLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "ig",
    label: "Instagram",
    className: "left-[2%] top-[42%] sm:left-0 sm:top-[40%]",
    delay: 0.25,
    node: <InstagramLogo className="h-5 w-5 sm:h-6 sm:w-6" id="cta-ig" />,
  },
  {
    id: "gmail",
    label: "Gmail",
    className: "left-[12%] bottom-[12%] sm:left-[8%] sm:bottom-[10%]",
    delay: 0.4,
    node: <GmailLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
];

const rightApps: OrbitApp[] = [
  {
    id: "fb",
    label: "Facebook",
    className: "right-[8%] top-[8%] sm:right-[4%] sm:top-[6%]",
    delay: 0.15,
    node: <FacebookLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "drive",
    label: "Google Drive",
    className: "right-[2%] top-[38%] sm:right-0 sm:top-[36%]",
    delay: 0.3,
    node: <GoogleDriveLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "mailchimp",
    label: "Mailchimp",
    className: "right-[14%] bottom-[22%] sm:right-[10%] sm:bottom-[20%]",
    delay: 0.45,
    node: <MailchimpLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: "shopify",
    label: "Shopify",
    className: "right-[6%] bottom-[4%] sm:right-[2%] sm:bottom-[2%]",
    delay: 0.55,
    node: <ShopifyLogo className="h-5 w-5 sm:h-6 sm:w-6" />,
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
    <div className="relative mx-auto hidden h-[200px] w-full max-w-[220px] md:block md:h-[220px]">
      <OrbitLines side={side} animate={animate} />
      <div
        className={`absolute top-1/2 z-10 -translate-y-1/2 ${
          side === "left" ? "right-[18%]" : "left-[18%]"
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
