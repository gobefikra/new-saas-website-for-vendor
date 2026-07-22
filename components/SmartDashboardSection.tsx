"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Lock,
} from "lucide-react";

const NAVY = "#0D1B2A";
const GREEN = "#22C55E";
const GREEN_DARK = "#15803d";
const SIDEBAR_BG = "#052e16";

const NAV_ITEMS = [
  "Dashboard",
  "Raven AI",
  "Events",
  "Leads",
  "Bookings",
  "Batches",
  "Transactions",
  "Analytics",
] as const;

const STATS = [
  { label: "Total Leads Count", value: 1254, display: (n: number) => n.toLocaleString("en-IN") },
  { label: "Booking Count", value: 342, display: (n: number) => n.toLocaleString("en-IN") },
  { label: "New Customer Count", value: 128, display: (n: number) => n.toLocaleString("en-IN") },
  {
    label: "Revenue Count",
    value: 12.35,
    display: (n: number) => `₹${n.toFixed(2)} L`,
    isDecimal: true,
  },
] as const;

const DATE_OPTIONS = ["Today", "Last 7 Days", "This Month", "This Year"] as const;

const REMINDERS = [
  { text: "Call John about booking", meta: "Lead • Today • 11:00 AM", badge: "High", tone: "red" },
  { text: "Send invoice to Asha", meta: "Booking • Tomorrow • 3:00 PM", badge: "Medium", tone: "orange" },
  { text: "Follow up: refund request", meta: "Booking • In 2 days", badge: "Low", tone: "gray" },
  { text: "Overdue task example", meta: "Booking • Overdue • 1 day", badge: "High", tone: "red" },
] as const;

const TASKS = [
  { text: "Follow up: Lead L-001", meta: "Today 11:00 AM", badge: "High" },
  { text: "Confirm payment: BKG-002", meta: "Tomorrow 3:00 PM", badge: "Medium" },
] as const;

function useInViewOnce<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(target: number, active: boolean, duration = 1500, decimal = false) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(decimal ? eased * target : Math.round(eased * target));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, decimal]);

  return val;
}

function Sparkline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 24" className={`h-6 w-full ${className}`} aria-hidden>
      <path
        d="M0 18 L12 14 L24 16 L36 10 L48 12 L60 6 L72 8 L80 4"
        fill="none"
        stroke={GREEN}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RevenueChart({
  draw,
  onHover,
}: {
  draw: boolean;
  onHover: () => void;
}) {
  const revenuePath =
    "M 40 200 C 80 190, 120 170, 160 150 S 240 120, 280 100 S 360 70, 400 55 L 400 220 L 40 220 Z";
  const revenueLine = "M 40 200 C 80 190, 120 170, 160 150 S 240 120, 280 100 S 360 70, 400 55";
  const profitLine =
    "M 40 210 C 90 200, 130 185, 170 170 S 250 145, 290 125 S 370 95, 400 80";

  return (
    <div
      className="relative rounded-xl border border-gray-100 bg-white p-4"
      onMouseEnter={onHover}
    >
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-bold" style={{ color: NAVY }}>
            Revenue Insights
          </p>
          <p className="text-xs text-gray-500">Revenue & Net Profit</p>
        </div>
        <div className="flex gap-3 text-[11px] text-gray-600">
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            Revenue
          </span>
          <span className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-green-300" />
            Net Profit
          </span>
        </div>
      </div>
      <svg viewBox="0 0 440 230" className="w-full h-[200px]" aria-hidden>
        {[50, 100, 150, 200, 250, 300].map((y) => (
          <line
            key={y}
            x1={40}
            y1={220 - y * 0.65}
            x2={400}
            y2={220 - y * 0.65}
            stroke="#f3f4f6"
            strokeWidth="1"
          />
        ))}
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((m, i) => (
          <text
            key={m}
            x={40 + i * 60}
            y={228}
            fontSize="10"
            fill="#9ca3af"
            textAnchor="middle"
          >
            {m}
          </text>
        ))}
        <path d={revenuePath} fill={GREEN} fillOpacity={0.08} />
        <AnimatedPath
          d={revenueLine}
          stroke="#16a34a"
          strokeWidth="2.5"
          fill="none"
          draw={draw}
          delay={0}
        />
        <AnimatedPath
          d={profitLine}
          stroke="#86efac"
          strokeWidth="2.5"
          fill="none"
          draw={draw}
          delay={0.25}
        />
      </svg>
    </div>
  );
}

function AnimatedPath({
  d,
  stroke,
  strokeWidth,
  fill,
  draw,
  delay,
}: {
  d: string;
  stroke: string;
  strokeWidth: string;
  fill: string;
  draw: boolean;
  delay: number;
}) {
  const ref = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(1000);

  useEffect(() => {
    if (ref.current) setLen(ref.current.getTotalLength());
  }, [d]);

  useEffect(() => {
    if (!ref.current || !draw) return;
    const el = ref.current;
    el.style.transition = `stroke-dashoffset 2s ease ${delay}s`;
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len}`;
    requestAnimationFrame(() => {
      el.style.strokeDashoffset = "0";
    });
  }, [draw, len, delay]);

  return (
    <path
      ref={ref}
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill={fill}
      strokeLinecap="round"
    />
  );
}

export default function SmartDashboardSection() {
  const section = useInViewOnce<HTMLElement>(0.12);
  const statsView = useInViewOnce<HTMLDivElement>(0.2);
  const chartView = useInViewOnce<HTMLDivElement>(0.25);

  const [interactions, setInteractions] = useState(0);
  const [gated, setGated] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("Dashboard");
  const [navLoading, setNavLoading] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [dateLabel, setDateLabel] = useState<string>("Last 7 Days");
  const [remindersExpanded, setRemindersExpanded] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [tiltSettled, setTiltSettled] = useState(false);
  const chartHovered = useRef(false);

  const bumpInteraction = useCallback(() => {
    setInteractions((c) => {
      const next = c + 1;
      if (next >= 5) setGated(true);
      return next;
    });
  }, []);

  useEffect(() => {
    if (section.inView) {
      const t = setTimeout(() => setTiltSettled(true), 800);
      return () => clearTimeout(t);
    }
  }, [section.inView]);

  const handleNav = (item: string) => {
    setActiveNav(item);
    setNavLoading(true);
    bumpInteraction();
    setTimeout(() => setNavLoading(false), 600);
  };

  const handleChartHover = () => {
    if (chartHovered.current) return;
    chartHovered.current = true;
    bumpInteraction();
  };

  const headlineWords = [
    { text: "Smarter Systems.", color: NAVY },
    { text: "Faster Growth.", color: GREEN },
    { text: "Better Decisions.", color: NAVY },
  ];

  return (
    <section
      id="smart-dashboard"
      ref={section.ref}
      className="relative w-full overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-gray-500">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
            All-in-one platform for travel businesses
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.25rem]">
            {headlineWords.map((w, i) => (
              <span
                key={w.text}
                className={`block transition-all duration-700 ${
                  section.inView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  color: w.color,
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                {w.text}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-gray-500">
            See how Befikra automates bookings, manages leads, and increases revenue
            for travel businesses. All from one intelligent dashboard built for scale.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16">
          <div
            className={`relative mx-auto w-full max-w-[1100px] transition-all duration-1000 ease-out ${
              section.inView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ perspective: "1400px" }}
          >
            <div
              className="dashboard-glow pointer-events-none absolute left-1/2 bottom-0 h-24 w-[70%] -translate-x-1/2 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(34,197,94,0.2)" }}
            />

            <div
              className={`relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl transition-transform duration-[800ms] ease-out ${
                gated ? "pointer-events-none blur-[6px]" : ""
              }`}
              style={{
                transform: tiltSettled
                  ? "perspective(1400px) rotateX(0deg)"
                  : "perspective(1400px) rotateX(3deg)",
                boxShadow: "0 60px 140px rgba(34,197,94,0.15), 0 25px 50px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex min-h-[520px] flex-col lg:flex-row">
                {/* Sidebar */}
                <aside
                  className="flex w-full shrink-0 flex-col justify-between p-4 lg:w-[180px]"
                  style={{ backgroundColor: SIDEBAR_BG }}
                >
                  <div>
                    <div className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-white">
                      M.
                    </div>
                    <nav className="space-y-1">
                      {NAV_ITEMS.map((item, i) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => handleNav(item)}
                          className={`block w-full rounded-lg px-3 py-2 text-left text-[13px] transition-all duration-300 ${
                            activeNav === item
                              ? "bg-green-600 font-medium text-white"
                              : "text-green-100/80 hover:bg-white/5 hover:text-white"
                          } ${
                            section.inView
                              ? "translate-x-0 opacity-100"
                              : "-translate-x-4 opacity-0"
                          }`}
                          style={{ transitionDelay: `${300 + i * 50}ms` }}
                        >
                          {item}
                        </button>
                      ))}
                    </nav>
                  </div>
                  <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                    <div className="h-8 w-8 rounded-full bg-green-500/30" />
                    <div>
                      <p className="text-xs font-medium text-white">Jaydon Frankie</p>
                      <p className="text-[11px] text-gray-400">demo@befikra.com</p>
                    </div>
                  </div>
                </aside>

                {/* Main */}
                <div className="min-w-0 flex-1 bg-[#f9fafb] p-4 sm:p-5">
                  {navLoading ? (
                    <div className="flex h-full min-h-[400px] items-center justify-center">
                      <div className="h-10 w-48 animate-pulse rounded-lg bg-gray-200" />
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <p className="text-xl font-bold" style={{ color: NAVY }}>
                            Good Afternoon 👋
                          </p>
                          <p className="text-[13px] text-gray-500">Monday, June 1, 2026</p>
                        </div>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => {
                              setDateOpen((o) => !o);
                              bumpInteraction();
                            }}
                            className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-green-300"
                          >
                            {dateLabel}
                            <ChevronDown className="h-4 w-4" />
                          </button>
                          {dateOpen && (
                            <div className="absolute right-0 z-20 mt-2 w-44 rounded-xl border border-gray-100 bg-white py-1 shadow-xl">
                              {DATE_OPTIONS.map((opt) => (
                                <button
                                  key={opt}
                                  type="button"
                                  className="block w-full px-4 py-2 text-left text-sm hover:bg-green-50"
                                  onClick={() => {
                                    setDateLabel(opt);
                                    setDateOpen(false);
                                  }}
                                >
                                  {opt}
                                  {dateLabel === opt ? " ✓" : ""}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      <div
                        ref={statsView.ref}
                        className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4"
                      >
                        {STATS.map((stat, i) => (
                          <StatCard
                            key={stat.label}
                            stat={stat}
                            index={i}
                            animate={statsView.inView}
                            onInteract={bumpInteraction}
                          />
                        ))}
                      </div>

                      <div ref={chartView.ref} className="mt-4">
                        <RevenueChart draw={chartView.inView} onHover={handleChartHover} />
                      </div>
                    </>
                  )}
                </div>

                {/* Right panel */}
                <div className="w-full shrink-0 border-t border-gray-100 bg-white p-4 lg:w-[260px] lg:border-l lg:border-t-0">
                  <button
                    type="button"
                    onClick={() => {
                      bumpInteraction();
                      setPaymentSuccess(true);
                      setTimeout(() => setPaymentSuccess(false), 2000);
                    }}
                    className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-green-700 active:scale-95"
                  >
                    {paymentSuccess ? "✓ 3 Links Generated!" : "Generate Pending Payment Links"}
                  </button>

                  <div className="mt-4 rounded-lg border border-green-100 bg-green-50/80 p-3">
                    <p className="text-[13px] font-bold" style={{ color: NAVY }}>
                      AI-Powered Dashboard Summary
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      Today&apos;s revenue is ₹2,45,000 with 12 new bookings. Lead conversion
                      is up 8% compared to yesterday. You have 3 pending follow-ups and 2
                      payments due for confirmation.
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold" style={{ color: NAVY }}>
                        Reminders
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setRemindersExpanded((e) => !e);
                          bumpInteraction();
                        }}
                        className="text-xs font-medium text-green-600 hover:underline"
                      >
                        View All Reminders
                      </button>
                    </div>
                    <ul
                      className={`mt-2 space-y-2 overflow-hidden transition-all duration-500 ${
                        remindersExpanded ? "max-h-[280px]" : "max-h-[200px]"
                      }`}
                    >
                      {REMINDERS.map((r) => (
                        <li
                          key={r.text}
                          className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2 text-xs"
                        >
                          <p className="font-medium text-gray-800">{r.text}</p>
                          <div className="mt-1 flex items-center justify-between gap-2">
                            <span className="text-gray-500">{r.meta}</span>
                            <Badge label={r.badge} tone={r.tone} />
                          </div>
                        </li>
                      ))}
                      {remindersExpanded &&
                        ["Review Q2 targets", "Sync with ops team"].map((t) => (
                          <li
                            key={t}
                            className="rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2 text-xs opacity-90"
                          >
                            <p className="font-medium text-gray-800">{t}</p>
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold" style={{ color: NAVY }}>
                        Tasks
                      </p>
                      <span className="text-xs font-medium text-green-600">View All Tasks</span>
                    </div>
                    <div className="mt-2 flex gap-1 rounded-lg bg-gray-100 p-1">
                      <span className="flex-1 rounded-md bg-gray-900 px-2 py-1 text-center text-[11px] font-medium text-white">
                        Pending Tasks
                      </span>
                      <span className="flex-1 rounded-md px-2 py-1 text-center text-[11px] text-gray-500">
                        In-Progress
                      </span>
                    </div>
                    <ul className="mt-2 space-y-2">
                      {TASKS.map((t) => (
                        <li
                          key={t.text}
                          className="rounded-lg border border-gray-100 px-3 py-2 text-xs"
                        >
                          <p className="font-medium text-gray-800">{t.text}</p>
                          <div className="mt-1 flex justify-between">
                            <span className="text-gray-500">{t.meta}</span>
                            <Badge label={t.badge} tone="red" />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {gated && (
              <div className="absolute inset-0 z-50 flex items-center justify-center p-4 dashboard-overlay-in">
                <div className="max-w-md rounded-2xl bg-white p-10 text-center shadow-2xl">
                  <Lock className="mx-auto h-10 w-10 text-green-600" strokeWidth={2} />
                  <h3 className="mt-4 text-2xl font-bold" style={{ color: NAVY }}>
                    You&apos;ve explored Befikra CRM
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-gray-500">
                    This is just a preview. The real dashboard has 40+ features built
                    specifically for travel businesses.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                      style={{ backgroundColor: GREEN_DARK }}
                    >
                      Sign In →
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border-2 px-6 py-3 text-sm font-semibold transition hover:bg-gray-50"
                      style={{ borderColor: GREEN_DARK, color: NAVY }}
                    >
                      Contact Sales
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-gray-400">
                    Join 500+ travel businesses already growing with Befikra
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setGated(false);
                      setInteractions(0);
                      chartHovered.current = false;
                    }}
                    className="mt-4 text-sm text-gray-500 underline-offset-2 hover:text-green-700 hover:underline"
                  >
                    Continue exploring ↩
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-green-200/50"
            style={{ backgroundColor: GREEN_DARK }}
          >
            Discover Our Products →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Badge({
  label,
  tone,
}: {
  label: string;
  tone: string;
}) {
  const colors: Record<string, string> = {
    red: "bg-red-100 text-red-700",
    orange: "bg-orange-100 text-orange-700",
    gray: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold ${colors[tone] ?? colors.gray}`}>
      {label}
    </span>
  );
}

function StatCard({
  stat,
  index,
  animate,
  onInteract,
}: {
  stat: (typeof STATS)[number];
  index: number;
  animate: boolean;
  onInteract: () => void;
}) {
  const isDecimal = "isDecimal" in stat && stat.isDecimal;
  const count = useCountUp(stat.value, animate, 1500, isDecimal);

  return (
    <button
      type="button"
      onClick={onInteract}
      className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:bg-green-50/30 sm:p-4"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <span className="absolute left-0 top-0 h-full w-1 scale-y-0 bg-green-500 transition-transform duration-300 group-hover:scale-y-100" />
      <p className="text-[11px] font-medium uppercase tracking-wide text-gray-500">
        {stat.label}
      </p>
      <p className="mt-1 text-2xl font-bold sm:text-[28px]" style={{ color: NAVY }}>
        {stat.display(count)}
      </p>
      <Sparkline className="mt-2 opacity-60" />
    </button>
  );
}
