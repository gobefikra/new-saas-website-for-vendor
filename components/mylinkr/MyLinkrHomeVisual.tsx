"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Calendar,
  CreditCard,
  Palette,
  Share2,
} from "lucide-react";
import PhoneMockup, { MYLINKR_SCREENS } from "@/components/mylinkr/PhoneMockup";

const GREEN = "#10B981";

type ChipDef = {
  id: string;
  label: string;
  Icon: typeof Calendar;
  iconBg: string;
  iconColor: string;
  side: "left" | "right";
  /** 0 = top, 1 = mid, 2 = bottom */
  row: 0 | 1 | 2;
  delay: number;
};

const floatChips: ChipDef[] = [
  {
    id: "event",
    label: "Event Booking",
    Icon: Calendar,
    iconBg: "#ECFDF5",
    iconColor: GREEN,
    side: "left",
    row: 0,
    delay: 0,
  },
  {
    id: "themes",
    label: "Custom Themes",
    Icon: Palette,
    iconBg: "#F7FEE7",
    iconColor: "#84CC16",
    side: "left",
    row: 1,
    delay: 0.3,
  },
  {
    id: "live",
    label: "Live Overview",
    Icon: Activity,
    iconBg: "#ECFDF5",
    iconColor: GREEN,
    side: "left",
    row: 2,
    delay: 0.5,
  },
  {
    id: "payments",
    label: "Instant Payments",
    Icon: CreditCard,
    iconBg: "#ECFDF5",
    iconColor: "#059669",
    side: "right",
    row: 0,
    delay: 0.1,
  },
  {
    id: "share",
    label: "Share Anywhere",
    Icon: Share2,
    iconBg: "#F7FEE7",
    iconColor: "#65A30D",
    side: "right",
    row: 1,
    delay: 0.4,
  },
  {
    id: "track",
    label: "Track Everything",
    Icon: BarChart3,
    iconBg: "#ECFDF5",
    iconColor: GREEN,
    side: "right",
    row: 2,
    delay: 0.6,
  },
];

/** Spread badges across the full stage height so nothing hangs empty below */
const ROW_TOP = ["10%", "50%", "90%"] as const;

function FloatChipCard({ chip }: { chip: ChipDef }) {
  const { Icon, label, iconBg, iconColor, side, row, delay } = chip;

  return (
    <motion.div
      initial={false}
      animate={{ y: [0, -4, 0] }}
      transition={{
        duration: 3.2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-20 flex -translate-y-1/2 items-center gap-2 rounded-xl border border-gray-100 bg-white px-2.5 py-2 shadow-[0_4px_16px_rgba(13,27,42,0.08)] ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{ top: ROW_TOP[row] }}
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
  );
}

export default function MyLinkrHomeVisual() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-[560px] flex-col justify-center">
      {/* Stage height hugs phone + badges — no dead space under the composition */}
      <div className="relative mx-auto hidden aspect-[560/580] w-full md:block lg:aspect-[560/600]">
        <svg
          className="pointer-events-none absolute inset-0 z-[5] h-full w-full"
          viewBox="0 0 560 600"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M280 300 Q200 140 90 60" fill="none" stroke="#10B981" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
          <path d="M280 300 Q190 300 90 300" fill="none" stroke="#84CC16" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
          <path d="M280 300 Q190 460 100 540" fill="none" stroke="#10B981" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
          <path d="M280 300 Q360 140 470 60" fill="none" stroke="#059669" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
          <path d="M280 300 Q370 300 470 300" fill="none" stroke="#65A30D" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
          <path d="M280 300 Q370 460 470 540" fill="none" stroke="#10B981" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.3" />
        </svg>

        <div className="absolute left-1/2 top-1/2 z-10 w-[min(42%,220px)] -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={false}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <PhoneMockup
              screenSrc={MYLINKR_SCREENS.hero}
              className="w-full drop-shadow-[0_24px_48px_rgba(15,23,42,0.18)]"
              frameWidth={220}
              frameHeight={456}
              priority
              alt="MyLinkr booking page on phone"
            />
          </motion.div>
        </div>

        {floatChips.map((chip) => (
          <FloatChipCard key={chip.id} chip={chip} />
        ))}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex justify-center py-2">
          <motion.div
            initial={false}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[200px]"
          >
            <PhoneMockup
              screenSrc={MYLINKR_SCREENS.hero}
              className="w-full"
              frameWidth={200}
              frameHeight={415}
              priority
              alt="MyLinkr booking page on phone"
            />
          </motion.div>
        </div>
        <div className="relative mt-3 flex flex-wrap justify-center gap-2 px-1">
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
