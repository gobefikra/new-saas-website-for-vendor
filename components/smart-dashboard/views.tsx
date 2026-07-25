"use client";

import { useMemo, useState } from "react";
import { DualLineChart, GREEN, MetricCard, NAVY, PageHeader, SoftBadge } from "./shared";

type InteractProps = { onInteract?: () => void };

export function DashboardHomeView({
  dateLabel,
  dateOpen,
  setDateOpen,
  setDateLabel,
  onInteract,
}: {
  dateLabel: string;
  dateOpen: boolean;
  setDateOpen: (v: boolean | ((o: boolean) => boolean)) => void;
  setDateLabel: (v: string) => void;
  onInteract: () => void;
}) {
  const [activeStat, setActiveStat] = useState(0);
  const [showProfit, setShowProfit] = useState(true);
  const [showRevenue, setShowRevenue] = useState(true);
  const [hoverPoint, setHoverPoint] = useState<number | null>(null);

  const options = ["Today", "Last 7 Days", "This Month", "This Year"];
  const statsByRange: Record<string, { label: string; value: string }[]> = {
    Today: [
      { label: "Total Leads Count", value: "48" },
      { label: "Booking Count", value: "12" },
      { label: "New Customer Count", value: "7" },
      { label: "Revenue Count", value: "₹0.85 L" },
    ],
    "Last 7 Days": [
      { label: "Total Leads Count", value: "1,254" },
      { label: "Booking Count", value: "342" },
      { label: "New Customer Count", value: "128" },
      { label: "Revenue Count", value: "₹12.35 L" },
    ],
    "This Month": [
      { label: "Total Leads Count", value: "4,820" },
      { label: "Booking Count", value: "1,106" },
      { label: "New Customer Count", value: "512" },
      { label: "Revenue Count", value: "₹48.2 L" },
    ],
    "This Year": [
      { label: "Total Leads Count", value: "38,440" },
      { label: "Booking Count", value: "9,210" },
      { label: "New Customer Count", value: "3,880" },
      { label: "Revenue Count", value: "₹4.1 Cr" },
    ],
  };
  const stats = statsByRange[dateLabel] ?? statsByRange["Last 7 Days"];
  const tipValues = [
    { m: "Jan", r: 120, p: 80 },
    { m: "Feb", r: 145, p: 95 },
    { m: "Mar", r: 138, p: 90 },
    { m: "Apr", r: 190, p: 140 },
    { m: "May", r: 175, p: 130 },
    { m: "Jun", r: 260, p: 205 },
    { m: "Jul", r: 240, p: 180 },
    { m: "Aug", r: 310, p: 240 },
  ];
  const xLabels = tipValues.map((t) => t.m);

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold tracking-tight" style={{ color: NAVY }}>
            Good Afternoon
          </p>
          <p className="mt-0.5 text-[12px] text-gray-400">Saturday, July 25, 2026</p>
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setDateOpen((o) => !o);
              onInteract();
            }}
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-[13px] font-medium text-gray-600 ring-1 ring-gray-200 hover:ring-gray-300"
          >
            {dateLabel}
            <span className="text-gray-400">▾</span>
          </button>
          {dateOpen && (
            <div className="absolute right-0 z-20 mt-1.5 w-40 rounded-lg bg-white py-1 ring-1 ring-gray-100 shadow-md">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`block w-full px-3 py-1.5 text-left text-[13px] ${
                    dateLabel === opt
                      ? "bg-gray-50 font-medium text-emerald-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    setDateLabel(opt);
                    setDateOpen(false);
                    onInteract();
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => {
              setActiveStat(i);
              onInteract();
            }}
            className={`rounded-xl bg-white px-3.5 py-3 text-left transition ring-1 ${
              activeStat === i ? "ring-emerald-300" : "ring-gray-100 hover:ring-gray-200"
            }`}
          >
            <p className="text-[11px] text-gray-400">{s.label.replace(" Count", "")}</p>
            <p className="mt-1 text-base font-semibold tracking-tight" style={{ color: NAVY }}>
              {s.value}
            </p>
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold" style={{ color: NAVY }}>
            Revenue
          </p>
          <div className="flex gap-3 text-[11px]">
            <button
              type="button"
              onClick={() => {
                setShowRevenue((v) => !v);
                onInteract();
              }}
              className={`inline-flex items-center gap-1.5 ${
                showRevenue ? "text-gray-700" : "text-gray-300"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" /> Revenue
            </button>
            <button
              type="button"
              onClick={() => {
                setShowProfit((v) => !v);
                onInteract();
              }}
              className={`inline-flex items-center gap-1.5 ${
                showProfit ? "text-gray-700" : "text-gray-300"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Profit
            </button>
          </div>
        </div>
        <div className="relative mt-3">
          <DualLineChart
            xLabels={xLabels}
            yFormatter={(n) => `₹${n}`}
            activeIndex={hoverPoint}
            onPointHover={(i) => {
              setHoverPoint(i);
              if (i !== null) onInteract();
            }}
            series={[
              {
                label: "Revenue",
                color: "#065F46",
                values: tipValues.map((t) => t.r),
                visible: showRevenue,
              },
              {
                label: "Net Profit",
                color: "#34D399",
                values: tipValues.map((t) => t.p),
                visible: showProfit,
              },
            ]}
          />
          {hoverPoint !== null && (
            <div className="pointer-events-none absolute right-2 top-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] ring-1 ring-gray-100">
              <p className="font-medium text-gray-800">{tipValues[hoverPoint].m}</p>
              <p className="text-gray-500">Rev ₹{tipValues[hoverPoint].r}</p>
              <p className="text-gray-500">Profit ₹{tipValues[hoverPoint].p}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function RavenAIView({ onInteract }: InteractProps) {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showStarter, setShowStarter] = useState(true);
  const starters = [
    { title: "What's new in Raven AI", prompt: "What's new in Raven AI?" },
    { title: "Write meeting agenda", prompt: "Write a meeting agenda for today's ops sync" },
  ];

  const send = (text: string) => {
    const q = text.trim();
    if (!q) return;
    onInteract?.();
    setMessages((m) => [
      ...m,
      { role: "user", text: q },
      {
        role: "ai",
        text: "Got it. In the full CRM, Raven AI would use your leads, bookings, and payments to answer this.",
      },
    ]);
    setPrompt("");
    setShowStarter(false);
  };

  return (
    <div className="flex min-h-0 flex-col">
      <div className="mb-4 flex w-full justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            setMessages([]);
            setShowStarter(true);
            setShowHistory(false);
            onInteract?.();
          }}
          className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
        >
          New chat
        </button>
        <button
          type="button"
          onClick={() => {
            setShowHistory((v) => !v);
            onInteract?.();
          }}
          className={`rounded-md px-3 py-1.5 text-xs font-medium ring-1 ${
            showHistory
              ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
              : "bg-white text-gray-600 ring-gray-200"
          }`}
        >
          History
        </button>
      </div>

      {showHistory ? (
        <div className="space-y-0.5 rounded-xl bg-white p-2 ring-1 ring-gray-100">
          {["Lead summary for Kuari Pass", "Payment reminder draft", "Weekly revenue brief"].map(
            (h) => (
              <button
                key={h}
                type="button"
                onClick={() => {
                  setShowHistory(false);
                  send(h);
                }}
                className="block w-full rounded-md px-3 py-2 text-left text-xs text-gray-600 hover:bg-gray-50"
              >
                {h}
              </button>
            )
          )}
        </div>
      ) : messages.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center py-10 text-center">
          <p className="text-xl font-semibold tracking-tight" style={{ color: NAVY }}>
            What can Raven help with?
          </p>
          <p className="mt-1 text-xs text-gray-400">Ask about leads, bookings, or payments</p>
        </div>
      ) : (
        <div className="dashboard-scroll mb-3 max-h-48 flex-1 space-y-2 overflow-y-auto rounded-xl bg-white p-3 ring-1 ring-gray-100">
          {messages.map((m, i) => (
            <div
              key={`${m.role}-${i}`}
              className={`rounded-lg px-3 py-2 text-xs leading-relaxed ${
                m.role === "user"
                  ? "ml-10 bg-emerald-600 text-white"
                  : "mr-10 bg-gray-50 text-gray-600"
              }`}
            >
              {m.text}
            </div>
          ))}
        </div>
      )}

      <div className="relative mt-auto w-full">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send(prompt);
          }}
          placeholder="Ask Raven AI..."
          className="w-full rounded-xl bg-white px-4 py-3 pr-16 text-sm text-gray-700 outline-none ring-1 ring-gray-200 placeholder:text-gray-400 focus:ring-emerald-300"
        />
        <button
          type="button"
          onClick={() => send(prompt)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
        >
          Send
        </button>
      </div>

      {showStarter && (
        <div className="mt-4 w-full">
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">Suggested</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {starters.map((c) => (
              <button
                key={c.title}
                type="button"
                onClick={() => send(c.prompt)}
                className="rounded-xl bg-white px-3.5 py-3 text-left text-sm text-gray-700 ring-1 ring-gray-100 transition hover:ring-gray-200"
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function EventsView({ onInteract }: InteractProps) {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const [liveOnly, setLiveOnly] = useState<Record<string, boolean>>({
    "Kuari Pass Trek": true,
    "Valley of Flowers": true,
    "Roopkund Lake Trek": false,
  });

  const cards = [
    {
      title: "Kuari Pass Trek",
      tags: "Treks • Uttarakhand, India",
      category: "Trek",
      slots: "7 available / 6 booked",
    },
    {
      title: "Valley of Flowers",
      tags: "Adventure • Uttarakhand, India",
      category: "Thrill",
      slots: "12 available / 18 booked",
    },
    {
      title: "Roopkund Lake Trek",
      tags: "Treks • Uttarakhand, India",
      category: "Trek",
      slots: "4 available / 10 booked",
    },
  ];

  const filtered = cards.filter((c) => {
    const tabOk = tab === "All" || c.category === tab;
    const qOk = c.title.toLowerCase().includes(query.toLowerCase());
    return tabOk && qOk;
  });

  return (
    <div className="min-h-0">
      <PageHeader
        title="Events"
        crumb="Dashboard / Events"
        action={
          <button
            type="button"
            onClick={() => onInteract?.()}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
          >
            New event
          </button>
        }
      />
      <div className="mb-4 flex gap-4 border-b border-gray-100 text-xs">
        {["All", "Trek", "Thrill"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setTab(t);
              onInteract?.();
            }}
            className={`pb-2 ${
              tab === t
                ? "border-b-2 border-emerald-600 font-medium text-emerald-700"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MetricCard label="Events" value={String(filtered.length)} />
        <MetricCard label="Live" value="4" />
        <MetricCard label="Upcoming" value="6" />
        <MetricCard label="Completed" value="0" />
      </div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search events..."
        className="mt-3 w-full rounded-lg bg-white px-3 py-2 text-xs outline-none ring-1 ring-gray-200 focus:ring-emerald-300"
      />
      <div className="mt-3 space-y-2">
        {filtered.map((c) => (
          <div
            key={c.title}
            className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-gray-100"
          >
            <div className="h-12 w-16 shrink-0 rounded-lg bg-emerald-100" />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium" style={{ color: NAVY }}>
                  {c.title}
                </p>
                <SoftBadge
                  label={liveOnly[c.title] ? "Live" : "Paused"}
                  tone={liveOnly[c.title] ? "green" : "gray"}
                />
                <button
                  type="button"
                  onClick={() => {
                    setLiveOnly((s) => ({ ...s, [c.title]: !s[c.title] }));
                    onInteract?.();
                  }}
                  className={`relative h-4 w-7 rounded-full transition ${
                    liveOnly[c.title] ? "bg-emerald-500" : "bg-gray-300"
                  }`}
                  aria-label="Toggle live"
                >
                  <span
                    className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition ${
                      liveOnly[c.title] ? "left-3.5" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
              <p className="mt-0.5 text-[11px] text-gray-400">{c.tags}</p>
              <p className="mt-1 text-[11px] text-gray-500">{c.slots}</p>
            </div>
            <button
              type="button"
              onClick={() => onInteract?.()}
              className="shrink-0 rounded-md bg-emerald-600 px-2.5 py-1.5 text-[10px] font-medium text-white hover:bg-emerald-700"
            >
              Book
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-xs text-gray-400">No events match.</p>
        )}
      </div>
    </div>
  );
}

export function LeadsView({ onInteract }: InteractProps) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [statuses, setStatuses] = useState(["Contacted", "Qualified"]);
  const [assignees, setAssignees] = useState(["Priya", "Rohit"]);

  const rows = [
    {
      name: "Asha Mehra",
      event: "Kuari Pass Trek",
      type: "Hot",
      source: "WhatsApp",
    },
    {
      name: "Rajat Verma",
      event: "Valley of Flowers",
      type: "Warm",
      source: "Instagram",
    },
    {
      name: "Neha Kapoor",
      event: "Roopkund Lake Trek",
      type: "Cold",
      source: "Website",
    },
  ];

  const filtered = rows.filter((r, i) => {
    const fOk =
      filter === "All" ||
      r.type === filter ||
      r.source === filter ||
      (filter === "With Contact" && i < 2);
    const qOk =
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.event.toLowerCase().includes(query.toLowerCase());
    return fOk && qOk;
  });

  return (
    <div className="min-h-0">
      <PageHeader title="Leads" crumb="Dashboard / Leads" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MetricCard label="Leads" value={String(rows.length)} />
        <MetricCard label="Today" value="2" />
        <MetricCard label="Converted" value="1" />
        <MetricCard label="Missed" value="1" />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search leads..."
          className="min-w-[140px] flex-1 rounded-lg bg-white px-3 py-2 text-xs outline-none ring-1 ring-gray-200 focus:ring-emerald-300"
        />
        {["All", "Hot", "Warm", "Cold"].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              onInteract?.();
            }}
            className={`rounded-md px-2.5 py-1.5 text-[11px] ${
              filter === f
                ? "bg-emerald-600 font-medium text-white"
                : "bg-white text-gray-500 ring-1 ring-gray-200 hover:text-gray-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="mt-3 overflow-x-auto rounded-xl bg-white ring-1 ring-gray-100">
        <table className="min-w-full text-left text-[11px]">
          <thead className="border-b border-gray-100 text-gray-400">
            <tr>
              {["Lead", "Enquiry", "Status", "Type", "Assigned"].map((h) => (
                <th key={h} className="px-3 py-2.5 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => {
              const idx = rows.findIndex((x) => x.name === r.name);
              return (
                <tr
                  key={r.name}
                  onClick={() => {
                    setSelected(idx);
                    onInteract?.();
                  }}
                  className={`cursor-pointer border-t border-gray-50 ${
                    selected === idx ? "bg-emerald-50/50" : "hover:bg-gray-50/80"
                  }`}
                >
                  <td className="px-3 py-2.5 font-medium" style={{ color: NAVY }}>
                    {r.name}
                  </td>
                  <td className="px-3 py-2.5 text-gray-500">{r.event}</td>
                  <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={statuses[idx] ?? "Contacted"}
                      onChange={(e) => {
                        setStatuses((s) => {
                          const next = [...s];
                          next[idx] = e.target.value;
                          return next;
                        });
                        onInteract?.();
                      }}
                      className="rounded-md bg-gray-50 px-2 py-1 text-[10px] text-gray-700 outline-none ring-1 ring-gray-200"
                    >
                      {["New Enquiry", "Contacted", "Qualified", "Negotiating", "Booked"].map(
                        (o) => (
                          <option key={o}>{o}</option>
                        )
                      )}
                    </select>
                  </td>
                  <td className="px-3 py-2.5">
                    <SoftBadge
                      label={r.type}
                      tone={r.type === "Hot" ? "red" : r.type === "Warm" ? "orange" : "blue"}
                    />
                  </td>
                  <td className="px-3 py-2.5" onClick={(e) => e.stopPropagation()}>
                    <select
                      value={assignees[idx] ?? "Priya"}
                      onChange={(e) => {
                        setAssignees((a) => {
                          const next = [...a];
                          next[idx] = e.target.value;
                          return next;
                        });
                        onInteract?.();
                      }}
                      className="rounded-md bg-white px-2 py-1 text-[10px] outline-none ring-1 ring-gray-200"
                    >
                      {["Priya", "Rohit", "Aman", "Unassigned"].map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="py-6 text-center text-xs text-gray-400">No leads found.</p>
        )}
      </div>
    </div>
  );
}

export function BookingsView({ onInteract }: InteractProps) {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");

  const rows = [
    {
      id: "BK-001",
      type: "Online",
      event: "Himalayan Base Camp Trek",
      customer: "Alice Johnson",
      total: "₹5,000",
      paid: "₹5,000",
    },
    {
      id: "BK-002",
      type: "Manual",
      event: "Kuari Pass Trek",
      customer: "Rohit Sharma",
      total: "₹12,000",
      paid: "₹8,000",
    },
    {
      id: "BK-003",
      type: "Refunded",
      event: "Valley of Flowers",
      customer: "Neha Kapoor",
      total: "₹7,500",
      paid: "₹0",
    },
  ];

  const filtered = rows.filter((r) => {
    const fOk = filter === "All" || r.type === filter;
    const qOk =
      r.customer.toLowerCase().includes(query.toLowerCase()) ||
      r.id.toLowerCase().includes(query.toLowerCase()) ||
      r.event.toLowerCase().includes(query.toLowerCase());
    return fOk && qOk;
  });

  return (
    <div className="min-h-0">
      <PageHeader title="Bookings" crumb="Dashboard / Bookings" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MetricCard label="Revenue" value="₹20,500" />
        <MetricCard label="Bookings" value={String(filtered.length)} />
        <MetricCard label="Today" value="₹7,000" />
        <MetricCard label="Today count" value="2" />
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search bookings..."
          className="flex-1 rounded-lg bg-white px-3 py-2 text-xs outline-none ring-1 ring-gray-200 focus:ring-emerald-300"
        />
        <button
          type="button"
          onClick={() => {
            setToast("Exported CSV");
            onInteract?.();
            setTimeout(() => setToast(""), 1500);
          }}
          className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-gray-200 hover:bg-gray-50"
        >
          Export
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {["All", "Online", "Manual", "Refunded"].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => {
              setFilter(f);
              onInteract?.();
            }}
            className={`rounded-md px-2.5 py-1.5 text-[11px] ${
              filter === f
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-500 ring-1 ring-gray-200"
            }`}
          >
            {f}
          </button>
        ))}
        
      </div>
      {toast && (
        <p className="mt-2 text-[11px] text-emerald-600">
          {toast}
        </p>
      )}
      <div className="mt-3 overflow-x-auto rounded-xl bg-white ring-1 ring-gray-100">
        <table className="min-w-full text-left text-[11px]">
          <thead className="border-b border-gray-100 text-gray-400">
            <tr>
              {["Booking ID", "Event", "Customer", "Total", "Paid", ""].map((h) => (
                <th key={h || "action"} className="px-3 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="px-3 py-2.5">
                  <span className="font-semibold" style={{ color: NAVY }}>
                    {r.id}
                  </span>{" "}
                  <SoftBadge
                    label={r.type}
                    tone={r.type === "Online" ? "green" : r.type === "Manual" ? "blue" : "orange"}
                  />
                </td>
                <td className="px-3 py-2.5 text-gray-600">{r.event}</td>
                <td className="px-3 py-2.5 text-gray-600">{r.customer}</td>
                <td className="px-3 py-2.5 font-semibold">{r.total}</td>
                <td className="px-3 py-2.5 font-semibold text-emerald-600">{r.paid}</td>
                <td className="px-3 py-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setToast(`Opened details for ${r.id}`);
                      onInteract?.();
                      setTimeout(() => setToast(""), 1500);
                    }}
                    className="text-emerald-600 hover:underline"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function BatchesView({ onInteract }: InteractProps) {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  const rows = [
    {
      id: "b1",
      name: "Batch A / 01 Mar 2026",
      event: "Kuari Pass Trek",
      status: "Upcoming",
      revenue: "₹59,988",
    },
    {
      id: "b2",
      name: "Batch B • April",
      event: "Valley of Flowers",
      status: "Completed",
      revenue: "₹42,000",
    },
    {
      id: "b3",
      name: "Winter Expedition",
      event: "Roopkund Lake Trek",
      status: "Ongoing",
      revenue: "₹88,200",
    },
  ];

  const filtered = rows.filter((r) => {
    const sOk = statusFilter === "All" || r.status === statusFilter;
    const qOk =
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.event.toLowerCase().includes(query.toLowerCase());
    return sOk && qOk;
  });

  return (
    <div className="min-h-0">
      <PageHeader
        title="Batches"
        crumb="Dashboard / Batches"
        action={
          <button
            type="button"
            onClick={() => onInteract?.()}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
          >
            Create batch
          </button>
        }
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MetricCard label="Batches" value={String(filtered.length)} sub="Filtered" />
        <MetricCard label="Seat Occupancy" value="56 / 130" sub="43% filled" />
        <MetricCard label="Revenue Received" value="₹6.92 L" sub="Pending ₹4.59 L" />
        <MetricCard label="Best Batch" value="Winter Expedition" sub="100% filled" />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search batches..."
          className="min-w-[180px] flex-1 rounded-lg bg-white px-3 py-2 text-xs outline-none ring-1 ring-gray-200 focus:ring-emerald-300"
        />
        {["All", "Upcoming", "Ongoing", "Completed"].map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => {
              setStatusFilter(s);
              onInteract?.();
            }}
            className={`rounded-md px-2.5 py-1.5 text-[11px] ${
              statusFilter === s
                ? "bg-emerald-600 text-white"
                : "bg-white text-gray-500 ring-1 ring-gray-200"
            }`}
          >
            {s}
          </button>
        ))}
      </div>
      <div className="mt-3 overflow-x-auto rounded-xl bg-white ring-1 ring-gray-100">
        <table className="min-w-full text-left text-[11px]">
          <thead className="border-b border-gray-100 text-gray-400">
            <tr>
              {["Batch ID", "Batch Name", "Event", "Status", "Revenue", ""].map((h) => (
                <th key={h || "a"} className="px-3 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-gray-50">
                <td className="px-3 py-2.5 font-semibold" style={{ color: NAVY }}>
                  {r.id}
                </td>
                <td className="px-3 py-2.5 text-gray-600">{r.name}</td>
                <td className="px-3 py-2.5 text-gray-600">{r.event}</td>
                <td className="px-3 py-2.5">
                  <SoftBadge
                    label={r.status}
                    tone={
                      r.status === "Upcoming"
                        ? "blue"
                        : r.status === "Ongoing"
                          ? "green"
                          : "gray"
                    }
                  />
                </td>
                <td className="px-3 py-2.5 font-semibold">{r.revenue}</td>
                <td className="relative px-3 py-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen((m) => (m === r.id ? null : r.id));
                      onInteract?.();
                    }}
                    className="rounded px-2 py-1 hover:bg-gray-100"
                  >
                    ⋯
                  </button>
                  {menuOpen === r.id && (
                    <div className="absolute right-3 z-10 mt-1 w-28 rounded-lg bg-white py-1 ring-1 ring-gray-100 shadow-md">
                      {["Edit", "Duplicate", "Archive"].map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => {
                            setMenuOpen(null);
                            onInteract?.();
                          }}
                          className="block w-full px-3 py-1.5 text-left text-[11px] hover:bg-gray-50"
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function TransactionsView({ onInteract }: InteractProps) {
  const [tab, setTab] = useState("All payments");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");

  const rows = [
    {
      id: "UTX-1001",
      invoice: "INV-001",
      details: "Rohit Sharma • Kuari Pass",
      status: "Full amount received",
      amount: "₹12,000",
    },
    {
      id: "UTX-1002",
      invoice: "INV-002",
      details: "Alice Johnson • Base Camp",
      status: "Partial",
      amount: "₹8,000",
    },
    {
      id: "UTX-1003",
      invoice: "INV-003",
      details: "Neha Kapoor • Valley",
      status: "Refund / cancellation",
      amount: "₹7,500",
    },
  ];

  const filtered = rows.filter((r) => {
    const tOk = tab === "All payments" || r.status === tab || r.status.startsWith(tab);
    const qOk =
      r.id.toLowerCase().includes(query.toLowerCase()) ||
      r.details.toLowerCase().includes(query.toLowerCase()) ||
      r.invoice.toLowerCase().includes(query.toLowerCase());
    return tOk && qOk;
  });

  return (
    <div className="min-h-0">
      <PageHeader title="Transactions" crumb="Dashboard / Transactions • User" />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <MetricCard label="Revenue" value="₹1.61 L" />
        <MetricCard label="Net profit" value="₹0.99 L" />
        <MetricCard label="Refunds" value="₹22,000" />
        <MetricCard label="Pending amounts" value="₹26,000" />
      </div>
      <div className="mt-3 flex gap-4 overflow-x-auto border-b border-gray-100 text-xs font-semibold">
        {["All payments", "Full amount received", "Partial", "Refund / cancellation"].map(
          (t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setTab(t);
                onInteract?.();
              }}
              className={`whitespace-nowrap pb-2 ${
                tab === t
                  ? "border-b-2 border-emerald-600 text-emerald-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {t}
            </button>
          )
        )}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search transactions..."
          className="min-w-[180px] flex-1 rounded-lg bg-white px-3 py-2 text-xs outline-none ring-1 ring-gray-200 focus:ring-emerald-300"
        />
        <button
          type="button"
          onClick={() => {
            setToast("Payment recorded");
            onInteract?.();
            setTimeout(() => setToast(""), 1500);
          }}
          className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
        >
          Record payment
        </button>
        <button
          type="button"
          onClick={() => {
            setToast("Export started");
            onInteract?.();
            setTimeout(() => setToast(""), 1500);
          }}
          className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-600 ring-1 ring-gray-200"
        >
          Export
        </button>
      </div>
      {toast && (
        <p className="mt-2 text-[11px] text-emerald-600">
          {toast}
        </p>
      )}
      <div className="mt-3 overflow-x-auto rounded-xl bg-white ring-1 ring-gray-100">
        <table className="min-w-full text-left text-[11px]">
          <thead className="border-b border-gray-100 text-gray-400">
            <tr>
              {["Transaction ID", "Invoice", "Details", "Status", "Amount"].map((h) => (
                <th key={h} className="px-3 py-2 font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="px-3 py-2.5 font-semibold" style={{ color: NAVY }}>
                  {r.id}
                </td>
                <td className="px-3 py-2.5">
                  <button
                    type="button"
                    onClick={() => onInteract?.()}
                    className="text-emerald-600 hover:underline"
                  >
                    {r.invoice}
                  </button>
                </td>
                <td className="px-3 py-2.5 text-gray-600">{r.details}</td>
                <td className="px-3 py-2.5">
                  <SoftBadge
                    label={r.status}
                    tone={
                      r.status.includes("Full")
                        ? "green"
                        : r.status.includes("Partial")
                          ? "orange"
                          : "red"
                    }
                  />
                </td>
                <td className="px-3 py-2.5 font-semibold">{r.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function AnalyticsView({ onInteract }: InteractProps) {
  const [mode, setMode] = useState<"Bookings" | "Revenue">("Bookings");
  const [range, setRange] = useState("Last 30 Days");
  const [year, setYear] = useState("2025-2026");
  const [summary, setSummary] = useState("");
  const [hoverPoint, setHoverPoint] = useState<number | null>(null);

  const xLabels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7"];

  const chart = useMemo(() => {
    if (mode === "Bookings") {
      return {
        a: [180, 210, 195, 280, 250, 340, 310],
        b: [240, 220, 260, 245, 300, 290, 330],
        labelA: "Booking Count",
        labelB: "Leads Count",
        colorB: "#FB923C",
        yFormatter: (n: number) => String(n),
        tipA: (n: number) => `${n} bookings`,
        tipB: (n: number) => `${n} leads`,
      };
    }
    return {
      a: [90, 120, 140, 190, 210, 280, 300],
      b: [60, 75, 95, 120, 150, 190, 220],
      labelA: "Revenue (₹K)",
      labelB: "Net Profit (₹K)",
      colorB: "#34D399",
      yFormatter: (n: number) => `₹${n}K`,
      tipA: (n: number) => `₹${n}K revenue`,
      tipB: (n: number) => `₹${n}K profit`,
    };
  }, [mode]);

  return (
    <div className="min-h-0">
      <PageHeader
        title="Analytics"
        crumb="Dashboard / Analytics"
        action={
          <button
            type="button"
            onClick={() => {
              setSummary(
                "Bookings are up 12% vs last period. Lead conversion is 38%. Top event: Kuari Pass Trek."
              );
              onInteract?.();
            }}
            className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700"
          >
            AI summary
          </button>
        }
      />
      <div className="mb-3 flex flex-wrap gap-2">
        <select
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
            onInteract?.();
          }}
          className="rounded-lg bg-white px-2 py-1.5 text-[11px] outline-none ring-1 ring-gray-200"
        >
          <option>2025-2026</option>
          <option>2024-2025</option>
        </select>
        <select
          value={range}
          onChange={(e) => {
            setRange(e.target.value);
            onInteract?.();
          }}
          className="rounded-lg bg-white px-2 py-1.5 text-[11px] outline-none ring-1 ring-gray-200"
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Quarter</option>
        </select>
      </div>
      {summary && (
        <div className="mb-3 rounded-lg bg-emerald-50/80 px-3 py-2 text-[11px] text-emerald-800">
          {summary}
          <button
            type="button"
            onClick={() => setSummary("")}
            className="ml-2 font-semibold underline"
          >
            Dismiss
          </button>
        </div>
      )}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        <MetricCard label="Bookings" value="1,234" />
        <MetricCard label="Revenue" value="₹12.35 L" />
        <MetricCard label="Events" value="52" />
        <MetricCard label="Leads" value="3,210" />
        <MetricCard label="Conversion" value="38%" />
      </div>
      <div className="mt-4 rounded-xl bg-white p-4 ring-1 ring-gray-100">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold" style={{ color: NAVY }}>
            Trends
          </p>
          <div className="flex gap-3 text-[11px]">
            {(["Bookings", "Revenue"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => {
                  setMode(m);
                  onInteract?.();
                }}
                className={
                  mode === m ? "font-medium text-emerald-700" : "text-gray-400 hover:text-gray-600"
                }
              >
                {m}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-2 flex gap-3 text-[11px] text-gray-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GREEN }} />
            {chart.labelA}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: chart.colorB }} />
            {chart.labelB}
          </span>
        </div>
        <div className="relative mt-2">
          <DualLineChart
            xLabels={xLabels}
            yFormatter={chart.yFormatter}
            activeIndex={hoverPoint}
            onPointHover={(i) => {
              setHoverPoint(i);
              if (i !== null) onInteract?.();
            }}
            series={[
              { label: chart.labelA, color: GREEN, values: chart.a },
              { label: chart.labelB, color: chart.colorB, values: chart.b },
            ]}
          />
          {hoverPoint !== null && (
            <div className="pointer-events-none absolute right-2 top-2 rounded-md bg-white px-2.5 py-1.5 text-[11px] ring-1 ring-gray-100">
              <p className="font-medium text-gray-800">{xLabels[hoverPoint]}</p>
              <p style={{ color: GREEN }}>{chart.tipA(chart.a[hoverPoint])}</p>
              <p style={{ color: chart.colorB }}>{chart.tipB(chart.b[hoverPoint])}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function PlaceholderView({ title }: { title: string }) {
  return (
    <div className="flex min-h-0 flex-col items-center justify-center text-center">
      <PageHeader title={title} crumb={`Dashboard / ${title}`} />
      <div className="mt-8 max-w-sm rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/50 px-6 py-10">
        <p className="text-sm font-semibold" style={{ color: NAVY }}>
          {title} module preview
        </p>
      </div>
    </div>
  );
}
