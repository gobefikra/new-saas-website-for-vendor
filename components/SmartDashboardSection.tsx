"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Bot,
  CalendarDays,
  LayoutDashboard,
  Lock,
  Map,
  Ticket,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  DASHBOARD_NAV,
  type DashboardNavId,
  GREEN,
  NAVY,
} from "@/components/smart-dashboard/shared";
import {
  AnalyticsView,
  BatchesView,
  BookingsView,
  DashboardHomeView,
  EventsView,
  LeadsView,
  RavenAIView,
  TransactionsView,
} from "@/components/smart-dashboard/views";

const GREEN_DARK = "#059669";
const SIDEBAR_BG = "#0B1F17";

const NAV_ICONS: Record<
  "Dashboard" | "Raven AI" | "Events" | "Leads" | "Bookings" | "Batches" | "Transactions" | "Analytics",
  LucideIcon
> = {
  Dashboard: LayoutDashboard,
  "Raven AI": Bot,
  Events: Map,
  Leads: Users,
  Bookings: Ticket,
  Batches: CalendarDays,
  Transactions: Wallet,
  Analytics: BarChart3,
};

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

function DashboardRightPanel({ onInteract }: { onInteract: () => void }) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [taskTab, setTaskTab] = useState<"Pending" | "In-Progress">("Pending");
  const [doneReminders, setDoneReminders] = useState<string[]>([]);

  const reminders = [
    { text: "Call John about booking", meta: "Today · 11:00 AM" },
    { text: "Send invoice to Asha", meta: "Tomorrow · 3:00 PM" },
    { text: "Follow up: refund request", meta: "In 2 days" },
  ] as const;

  const pendingTasks = [
    { text: "Follow up: Lead L-001", meta: "Today" },
    { text: "Confirm payment: BKG-002", meta: "Tomorrow" },
  ] as const;

  const inProgressTasks = [
    { text: "Prepare trek kit checklist", meta: "Due today" },
    { text: "Sync WhatsApp inbox", meta: "In progress" },
  ] as const;

  const visibleReminders = reminders.filter((r) => !doneReminders.includes(r.text));
  const tasks = taskTab === "Pending" ? pendingTasks : inProgressTasks;

  return (
    <div className="dashboard-scroll w-full shrink-0 overflow-y-auto border-t border-gray-100 bg-white p-4 lg:w-[240px] lg:border-l lg:border-t-0">
      <button
        type="button"
        onClick={() => {
          onInteract();
          setPaymentSuccess(true);
          setTimeout(() => setPaymentSuccess(false), 2000);
        }}
        className="w-full rounded-lg bg-emerald-600 px-3 py-2.5 text-[13px] font-medium text-white transition hover:bg-emerald-700"
      >
        {paymentSuccess ? "Links generated" : "Generate payment links"}
      </button>

      <div className="mt-5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Summary</p>
        <p className="mt-2 text-xs leading-relaxed text-gray-500">
          Revenue ₹2.45L today · 12 bookings · conversion up 8%.{" "}
          {visibleReminders.length} follow-ups left.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Reminders</p>
        <ul className="mt-2 space-y-1">
          {visibleReminders.map((r) => (
            <li
              key={r.text}
              className="flex items-start justify-between gap-2 rounded-lg px-2 py-2 hover:bg-gray-50"
            >
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-800">{r.text}</p>
                <p className="mt-0.5 text-[10px] text-gray-400">{r.meta}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setDoneReminders((d) => [...d, r.text]);
                  onInteract();
                }}
                className="shrink-0 text-[10px] text-emerald-600 hover:text-emerald-700"
              >
                Done
              </button>
            </li>
          ))}
          {visibleReminders.length === 0 && (
            <li className="px-2 py-2 text-xs text-gray-400">All clear</li>
          )}
        </ul>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Tasks</p>
          <div className="flex gap-2 text-[10px]">
            {(["Pending", "In-Progress"] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => {
                  setTaskTab(t);
                  onInteract();
                }}
                className={
                  taskTab === t ? "font-medium text-emerald-700" : "text-gray-400 hover:text-gray-600"
                }
              >
                {t === "Pending" ? "Pending" : "Active"}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-2 space-y-1">
          {tasks.map((t) => (
            <li key={t.text} className="rounded-lg px-2 py-2 hover:bg-gray-50">
              <p className="text-xs font-medium text-gray-800">{t.text}</p>
              <p className="mt-0.5 text-[10px] text-gray-400">{t.meta}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ActiveView({
  activeNav,
  dateLabel,
  dateOpen,
  setDateOpen,
  setDateLabel,
  onInteract,
}: {
  activeNav: DashboardNavId;
  dateLabel: string;
  dateOpen: boolean;
  setDateOpen: (v: boolean | ((o: boolean) => boolean)) => void;
  setDateLabel: (v: string) => void;
  onInteract: () => void;
}) {
  switch (activeNav) {
    case "Dashboard":
      return (
        <DashboardHomeView
          dateLabel={dateLabel}
          dateOpen={dateOpen}
          setDateOpen={setDateOpen}
          setDateLabel={setDateLabel}
          onInteract={onInteract}
        />
      );
    case "Raven AI":
      return <RavenAIView onInteract={onInteract} />;
    case "Events":
      return <EventsView onInteract={onInteract} />;
    case "Leads":
      return <LeadsView onInteract={onInteract} />;
    case "Bookings":
      return <BookingsView onInteract={onInteract} />;
    case "Batches":
      return <BatchesView onInteract={onInteract} />;
    case "Transactions":
      return <TransactionsView onInteract={onInteract} />;
    case "Analytics":
      return <AnalyticsView onInteract={onInteract} />;
    default:
      return (
        <DashboardHomeView
          dateLabel={dateLabel}
          dateOpen={dateOpen}
          setDateOpen={setDateOpen}
          setDateLabel={setDateLabel}
          onInteract={onInteract}
        />
      );
  }
}

export default function SmartDashboardSection() {
  const section = useInViewOnce<HTMLElement>(0.12);
  const [interactions, setInteractions] = useState(0);
  const [gated, setGated] = useState(false);
  const [activeNav, setActiveNav] = useState<DashboardNavId>("Dashboard");
  const [navLoading, setNavLoading] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [dateLabel, setDateLabel] = useState("Last 7 Days");
  const [tiltSettled, setTiltSettled] = useState(false);

  const bumpInteraction = useCallback(() => {
    setInteractions((c) => {
      const next = c + 1;
      if (next >= 8) setGated(true);
      return next;
    });
  }, []);

  useEffect(() => {
    if (section.inView) {
      const t = setTimeout(() => setTiltSettled(true), 800);
      return () => clearTimeout(t);
    }
  }, [section.inView]);

  const handleNav = (item: DashboardNavId) => {
    if (item === activeNav) return;
    setActiveNav(item);
    setNavLoading(true);
    bumpInteraction();
    setTimeout(() => setNavLoading(false), 350);
  };

  const headlineWords = [
    { text: "Smarter Systems.", color: NAVY },
    { text: "Faster Growth.", color: GREEN },
    { text: "Better Decisions.", color: NAVY },
  ];

  const showRightPanel = activeNav === "Dashboard";

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
                  section.inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ color: w.color, transitionDelay: `${i * 60}ms` }}
              >
                {w.text}
              </span>
            ))}
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-gray-500">
            See how Befikra automates bookings, manages leads, and increases revenue for travel
            businesses. All from one intelligent dashboard built for scale.
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
              className={`relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-transform duration-[800ms] ease-out ${
                gated ? "pointer-events-none blur-[5px]" : ""
              }`}
              style={{
                transform: tiltSettled
                  ? "perspective(1400px) rotateX(0deg)"
                  : "perspective(1400px) rotateX(2deg)",
              }}
            >
              <div className="flex h-[560px] flex-col lg:h-[580px] lg:flex-row">
                {/* Sidebar */}
                <aside
                  className="flex w-full shrink-0 flex-col justify-between border-r border-emerald-950/40 p-3 lg:w-[188px]"
                  style={{ backgroundColor: SIDEBAR_BG }}
                >
                  <div>
                    <div className="mb-5 rounded-lg bg-white px-2.5 py-2">
                      <Image
                        src="/icons/Nav-logo.png"
                        alt="Befikra Partner"
                        width={140}
                        height={36}
                        className="h-7 w-auto object-contain object-left"
                      />
                    </div>
                    <nav className="space-y-0.5">
                      {DASHBOARD_NAV.map((item, i) => {
                        const Icon = NAV_ICONS[item.id as keyof typeof NAV_ICONS];
                        const active = activeNav === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleNav(item.id)}
                            className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[12px] transition-colors duration-200 ${
                              active
                                ? "bg-white/10 font-medium text-white"
                                : "text-emerald-100/60 hover:bg-white/5 hover:text-white"
                            } ${
                              section.inView
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-3 opacity-0"
                            }`}
                            style={{ transitionDelay: `${200 + i * 25}ms` }}
                          >
                            <Icon className="h-3.5 w-3.5 shrink-0 opacity-80" strokeWidth={2} />
                            <span className="min-w-0 flex-1 truncate">{item.id}</span>
                          </button>
                        );
                      })}
                    </nav>
                  </div>
                  <div className="mt-4 border-t border-white/10 px-1 pt-3">
                    <p className="truncate text-xs font-medium text-white/90">Jaydon Frankie</p>
                    <p className="truncate text-[11px] text-white/40">demo@befikra.com</p>
                  </div>
                </aside>

                {/* Main content switches with sidebar */}
                <div className="dashboard-scroll min-w-0 flex-1 overflow-y-auto bg-[#FAFBFC] p-4 sm:p-5">
                  {navLoading ? (
                    <div className="flex h-full min-h-[400px] items-center justify-center">
                      <div className="h-8 w-40 animate-pulse rounded-md bg-gray-100" />
                    </div>
                  ) : (
                    <ActiveView
                      activeNav={activeNav}
                      dateLabel={dateLabel}
                      dateOpen={dateOpen}
                      setDateOpen={setDateOpen}
                      setDateLabel={setDateLabel}
                      onInteract={bumpInteraction}
                    />
                  )}
                </div>

                {showRightPanel ? <DashboardRightPanel onInteract={bumpInteraction} /> : null}
              </div>
            </div>

            {gated && (
              <div className="dashboard-overlay-in absolute inset-0 z-50 flex items-center justify-center p-4">
                <div className="max-w-sm rounded-xl border border-gray-100 bg-white p-8 text-center shadow-lg">
                  <Lock className="mx-auto h-8 w-8 text-emerald-600" strokeWidth={1.75} />
                  <h3 className="mt-3 text-xl font-semibold" style={{ color: NAVY }}>
                    This is only a preview
                  </h3>
                  <p className="mx-auto mt-2 text-sm leading-relaxed text-gray-500">
                    Want to explore the actual dashboard? Sign in, or book a demo with our sales
                    team.
                  </p>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                      style={{ backgroundColor: GREEN_DARK }}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                    >
                      Book a Demo
                    </Link>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setGated(false);
                      setInteractions(0);
                    }}
                    className="mt-4 text-sm text-gray-400 hover:text-emerald-700"
                  >
                    Continue exploring
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-base font-medium text-white transition hover:opacity-90"
            style={{ backgroundColor: GREEN_DARK }}
          >
            Discover Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
