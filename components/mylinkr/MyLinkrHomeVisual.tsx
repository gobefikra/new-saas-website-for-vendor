"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Calendar,
  CreditCard,
  Palette,
  Share2,
} from "lucide-react";

const GREEN = "#22C55E";

const CANVAS_W = 680;
const CANVAS_H = 480;
const PHONE_CX = 400;
const PHONE_CY = 240;

type ChipDef = {
  id: string;
  label: string;
  Icon: typeof Calendar;
  iconBg: string;
  iconColor: string;
  x: number;
  y: number;
  align: "left" | "right";
  delay: number;
};

const floatChips: ChipDef[] = [
  {
    id: "event",
    label: "Event Booking",
    Icon: Calendar,
    iconBg: "#E8F5E9",
    iconColor: GREEN,
    x: 248,
    y: 72,
    align: "right",
    delay: 0,
  },
  {
    id: "themes",
    label: "Custom Themes",
    Icon: Palette,
    iconBg: "#F3E5F5",
    iconColor: "#9333EA",
    x: 168,
    y: 228,
    align: "right",
    delay: 0.35,
  },
  {
    id: "payments",
    label: "Instant Payments",
    Icon: CreditCard,
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
    x: 452,
    y: 68,
    align: "left",
    delay: 0.15,
  },
  {
    id: "share",
    label: "Share Anywhere",
    Icon: Share2,
    iconBg: "#FFEDD5",
    iconColor: "#EA580C",
    x: 468,
    y: 210,
    align: "left",
    delay: 0.5,
  },
  {
    id: "track",
    label: "Track Everything",
    Icon: BarChart3,
    iconBg: "#E8F5E9",
    iconColor: GREEN,
    x: 438,
    y: 352,
    align: "left",
    delay: 0.7,
  },
];

function pctX(n: number) {
  return `${(n / CANVAS_W) * 100}%`;
}

function pctY(n: number) {
  return `${(n / CANVAS_H) * 100}%`;
}

function MiniSparkline({ color = GREEN }: { color?: string }) {
  return (
    <svg viewBox="0 0 48 16" className="h-3 w-12" aria-hidden>
      <path
        d="M0 12 L8 10 L16 11 L24 6 L32 7 L40 3 L48 4"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LiveOverviewCard() {
  const rows = [
    { label: "Total Bookings", value: "1,248", change: "+24%", color: GREEN },
    { label: "Revenue", value: "$96,430", change: "+21%", color: "#3B82F6" },
    { label: "New Leads", value: "842", change: "+18%", color: "#A855F7" },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute z-20 w-[158px] rounded-2xl border border-gray-100 bg-white p-3.5 shadow-[0_8px_32px_rgba(13,27,42,0.08)]"
      style={{
        left: pctX(8),
        top: pctY(PHONE_CY),
        transform: "translateY(-50%)",
      }}
    >
      <div className="mb-2.5 flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span className="text-[11px] font-bold text-gray-800">Live Overview</span>
      </div>
      <div className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.label}>
            <p className="text-[9px] text-gray-500">{row.label}</p>
            <div className="mt-0.5 flex items-end justify-between gap-1">
              <p className="text-xs font-bold text-gray-900">{row.value}</p>
              <span className="text-[9px] font-semibold" style={{ color: row.color }}>
                {row.change}
              </span>
            </div>
            <MiniSparkline color={row.color} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function PhonePreview({ embedded = false }: { embedded?: boolean }) {
  const tabs = ["Trips", "Experiences", "Stays", "More"];
  const events = [
    { title: "Bali Getaway", price: "$699", tag: "7 Days" },
    { title: "Swiss Alps Trek", price: "$1,299", tag: "5 Days" },
  ];

  const phone = (
    <div className="overflow-hidden rounded-[2.25rem] border-[5px] border-gray-900 bg-white shadow-[0_24px_64px_rgba(13,27,42,0.14)]">
        <div className="bg-gray-900 px-4 pb-1 pt-2">
          <div className="mx-auto h-3.5 w-14 rounded-full bg-black" />
        </div>
        <div className="bg-[#F8FAFC] px-3 pb-3.5 pt-2">
          <div className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-center">
            <p className="truncate text-[9px] font-medium text-gray-500">
              mylinkr.co/wanderlust
            </p>
          </div>

          <div className="mt-2.5 flex flex-col items-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-base font-bold text-white">
              W
            </div>
            <p className="mt-1 text-[11px] font-bold text-gray-900">Wanderlust Travels</p>
            <p className="text-[9px] text-gray-500">Adventure & Experiences</p>
            <div className="mt-1.5 flex gap-1.5">
              {["IG", "WA", "YT"].map((s) => (
                <span
                  key={s}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-[7px] font-bold text-gray-600"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-2 flex gap-1 overflow-x-auto">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                  i === 0 ? "bg-gray-900 text-white" : "bg-white text-gray-500"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="mt-2 space-y-1.5">
            {events.map((ev) => (
              <div
                key={ev.title}
                className="overflow-hidden rounded-lg border border-gray-100 bg-white"
              >
                <div className="h-12 bg-gradient-to-r from-teal-400 via-emerald-400 to-green-500" />
                <div className="p-1.5">
                  <div className="flex items-start justify-between gap-1">
                    <p className="text-[9px] font-bold text-gray-900">{ev.title}</p>
                    <span className="rounded bg-gray-100 px-1 py-0.5 text-[7px] text-gray-500">
                      {ev.tag}
                    </span>
                  </div>
                  <div className="mt-0.5 flex items-center justify-between">
                    <p className="text-[9px] font-bold text-gray-900">{ev.price}</p>
                    <span
                      className="rounded px-1.5 py-0.5 text-[7px] font-bold text-white"
                      style={{ backgroundColor: GREEN }}
                    >
                      Book Now
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-2 text-center text-[7px] text-gray-400">Powered by Befikra ❤️</p>
        </div>
      </div>
  );

  if (embedded) {
    return (
      <motion.div
        initial={false}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-[210px]"
      >
        {phone}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={false}
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute z-10 w-[210px] sm:w-[228px]"
      style={{
        left: pctX(PHONE_CX),
        top: pctY(PHONE_CY),
        transform: "translate(-50%, -50%)",
      }}
    >
      {phone}
    </motion.div>
  );
}

function ConnectorLines() {
  const phoneEdge = { x: PHONE_CX, y: PHONE_CY };
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
      viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      {floatChips.map((chip) => (
        <path
          key={chip.id}
          d={`M ${phoneEdge.x} ${phoneEdge.y} Q ${(phoneEdge.x + chip.x) / 2} ${(phoneEdge.y + chip.y) / 2 - 12} ${chip.x} ${chip.y}`}
          fill="none"
          stroke={chip.iconColor}
          strokeWidth="1.25"
          strokeDasharray="4 4"
          opacity="0.35"
        />
      ))}
    </svg>
  );
}

function FloatChipCard({ chip }: { chip: ChipDef }) {
  const { Icon, label, iconBg, iconColor, x, y, align, delay } = chip;
  const transform = align === "right" ? "translate(-100%, -50%)" : "translate(0, -50%)";

  return (
    <div
      className="absolute z-20"
      style={{ left: pctX(x), top: pctY(y), transform }}
    >
      <motion.div
        initial={false}
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 3.2,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center gap-2 rounded-xl border border-gray-100 bg-white px-2.5 py-2 shadow-[0_4px_16px_rgba(13,27,42,0.08)]"
      >
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: iconBg }}
        >
          <Icon className="h-3.5 w-3.5" style={{ color: iconColor }} strokeWidth={2.25} />
        </div>
        <span className="whitespace-nowrap text-[11px] font-semibold text-gray-800">
          {label}
        </span>
      </motion.div>
    </div>
  );
}

function ScribbleArrow() {
  return (
    <svg
      className="absolute z-20 hidden h-14 w-14 text-green-500 lg:block"
      style={{ right: "2%", top: "2%" }}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <path
        d="M8 52 C20 40 28 28 36 18 C40 12 44 8 48 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M42 6 L50 8 L48 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MyLinkrHomeVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      {/* Desktop / tablet orbit layout */}
      <div
        className="relative mx-auto hidden md:block"
        style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}`, maxHeight: 500 }}
      >
        <ScribbleArrow />
        <ConnectorLines />
        <LiveOverviewCard />
        <PhonePreview />
        {floatChips.map((chip) => (
          <FloatChipCard key={chip.id} chip={chip} />
        ))}
      </div>

      {/* Mobile — stacked */}
      <div className="md:hidden">
        <div className="flex justify-center py-4">
          <PhonePreview embedded />
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-2 px-1">
          {floatChips.map(({ id, label, Icon, iconBg, iconColor }) => (
            <span
              key={id}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm"
            >
              <span
                className="flex h-5 w-5 items-center justify-center rounded-md"
                style={{ backgroundColor: iconBg }}
              >
                <Icon className="h-3 w-3" style={{ color: iconColor }} strokeWidth={2.25} />
              </span>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
