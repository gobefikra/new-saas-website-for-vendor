"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Home,
  LayoutGrid,
  Play,
  Sparkles,
  Users,
  Wallet,
} from "lucide-react";

const GREEN = "#2D6A4F";
const NAVY = "#0A1E3B";
const MINT = "#E8F3EE";

const statCards = [
  { label: "New Leads", value: "128", change: "+18%" },
  { label: "Bookings", value: "84", change: "+12%" },
  { label: "Revenue", value: "₹12,45,000", change: "+24%" },
  { label: "Customers", value: "532", change: "+8%" },
];

const pipelineColumns = [
  {
    title: "New",
    count: 3,
    cards: [{ name: "Rahul Mehta", trip: "Goa Trip" }],
  },
  {
    title: "Contacted",
    count: 2,
    cards: [{ name: "Neha Iyer", trip: "Ladakh Trek" }],
  },
  {
    title: "Qualified",
    count: 2,
    cards: [{ name: "Arjun Patel", trip: "Bali Getaway" }],
  },
  {
    title: "Converted",
    count: 1,
    cards: [{ name: "Priya Shah", trip: "Swiss Alps" }],
  },
];

const sidebarIcons = [
  { Icon: Home, active: true },
  { Icon: Users, active: false },
  { Icon: Calendar, active: false },
  { Icon: LayoutGrid, active: false },
  { Icon: Wallet, active: false },
];

function ScribbleLabel() {
  return (
    <div className="relative mb-4 hidden text-center lg:block">
      <p
        className="text-lg font-semibold italic"
        style={{ color: GREEN, fontFamily: "cursive" }}
      >
        See Befikra in action
      </p>
      <svg
        className="mx-auto mt-1 h-8 w-12"
        viewBox="0 0 48 32"
        fill="none"
        aria-hidden
      >
        <path
          d="M24 4 C28 12 32 18 20 24"
          stroke={GREEN}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M18 22 L20 26 L24 24"
          stroke={GREEN}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="font-sans mt-1 text-xs text-subtext">
        A quick overview of how everything works together.
      </p>
    </div>
  );
}

export default function PowerfulToolsPreview() {
  return (
    <div className="w-full">
      <ScribbleLabel />

      <div className="card-brand-static overflow-hidden">
        <div className="relative flex min-h-[320px] sm:min-h-[360px]">
          {/* Sidebar */}
          <div className="flex w-10 shrink-0 flex-col items-center gap-3 border-r border-border-default bg-off-white py-4 sm:w-12">
            {sidebarIcons.map(({ Icon, active }, i) => (
              <div
                key={i}
                className={`flex h-7 w-7 items-center justify-center rounded-lg sm:h-8 sm:w-8 ${
                  active ? "text-white" : "text-gray-400"
                }`}
                style={active ? { backgroundColor: GREEN } : undefined}
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
              </div>
            ))}
          </div>

          {/* Main dashboard */}
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            <p className="text-xs font-bold sm:text-sm" style={{ color: NAVY }}>
              Dashboard
            </p>

            <div className="mt-2 grid grid-cols-2 gap-2 lg:grid-cols-4">
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-border-default bg-white p-2"
                >
                  <p className="text-[9px] text-subtext sm:text-[10px]">
                    {stat.label}
                  </p>
                  <p
                    className="mt-0.5 text-[11px] font-bold sm:text-xs"
                    style={{ color: NAVY }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[9px] font-semibold sm:text-[10px]"
                    style={{ color: GREEN }}
                  >
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-3">
              <p
                className="mb-2 text-[10px] font-bold sm:text-xs"
                style={{ color: NAVY }}
              >
                Leads Pipeline
              </p>
              <div className="grid grid-cols-4 gap-1.5">
                {pipelineColumns.map((col) => (
                  <div
                    key={col.title}
                    className="rounded-lg bg-off-white p-1.5"
                  >
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[8px] font-semibold text-subtext sm:text-[9px]">
                        {col.title}
                      </span>
                      <span className="rounded bg-gray-200 px-1 text-[7px] font-bold text-subtext">
                        {col.count}
                      </span>
                    </div>
                    {col.cards.map((card) => (
                      <div
                        key={card.name}
                        className="rounded border border-border-default bg-white p-1.5"
                      >
                        <p className="truncate text-[8px] font-bold text-gray-800 sm:text-[9px]">
                          {card.name}
                        </p>
                        <p className="truncate text-[7px] text-subtext sm:text-[8px]">
                          {card.trip}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Play overlay */}
          <button
            type="button"
            className="absolute inset-0 z-10 flex items-center justify-center bg-white/10 transition-colors hover:bg-white/20"
            aria-label="Watch product tour"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_8px_32px_rgba(13,27,42,0.15)] sm:h-16 sm:w-16"
            >
              <Play
                className="ml-1 h-6 w-6 sm:h-7 sm:w-7"
                style={{ color: GREEN }}
                fill={GREEN}
                strokeWidth={0}
              />
            </motion.span>
          </button>
        </div>

        {/* Footer CTA */}
        <button
          type="button"
          className="flex w-full items-center justify-between px-4 py-3 text-left transition-opacity hover:opacity-90 sm:px-5"
          style={{ backgroundColor: MINT }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold sm:text-sm" style={{ color: "#2D6A4F" }}>
            <Sparkles className="h-4 w-4" strokeWidth={2.25} />
            Watch 1-min product tour
          </span>
          <ArrowRight className="h-4 w-4" style={{ color: "#2D6A4F" }} strokeWidth={2.25} />
        </button>
      </div>
    </div>
  );
}
