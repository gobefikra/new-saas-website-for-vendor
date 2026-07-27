import type { ReactNode } from "react";

export const NAVY = "#0A1E3B";
export const GREEN = "#2D6A4F";

export type DashboardNavId =
  | "Dashboard"
  | "Raven AI"
  | "Events"
  | "Drafts"
  | "Leads"
  | "Bookings"
  | "Batches"
  | "Transactions"
  | "Invoices"
  | "Customers"
  | "Vendors"
  | "Calendar"
  | "Planner"
  | "Analytics"
  | "Unibox";

export const DASHBOARD_NAV: { id: DashboardNavId }[] = [
  { id: "Dashboard" },
  { id: "Raven AI" },
  { id: "Events" },
  { id: "Leads" },
  { id: "Bookings" },
  { id: "Batches" },
  { id: "Transactions" },
  { id: "Analytics" },
];

export function PageHeader({
  title,
  crumb,
  action,
}: {
  title: string;
  crumb: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold tracking-tight" style={{ color: NAVY }}>
          {title}
        </h3>
        <p className="mt-0.5 text-[12px] text-gray-400">{crumb}</p>
      </div>
      {action}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl bg-white px-3.5 py-3 ring-1 ring-gray-100">
      <p className="text-[11px] text-gray-400">{label}</p>
      <p className="mt-1 text-base font-semibold tracking-tight" style={{ color: NAVY }}>
        {value}
      </p>
      {sub ? <p className="mt-0.5 text-[10px] text-gray-400">{sub}</p> : null}
    </div>
  );
}

export function SoftBadge({
  label,
  tone = "green",
}: {
  label: string;
  tone?: "green" | "red" | "orange" | "blue" | "gray" | "purple";
}) {
  const map = {
    green: "bg-brand-green-light text-brand-green-dark",
    red: "bg-red-50 text-red-600",
    orange: "bg-orange-50 text-orange-600",
    blue: "bg-sky-50 text-sky-700",
    gray: "bg-gray-100 text-subtext",
    purple: "bg-violet-50 text-violet-700",
  };
  return (
    <span className={`inline-flex rounded-md px-1.5 py-0.5 text-[10px] font-medium ${map[tone]}`}>
      {label}
    </span>
  );
}

type ChartSeries = {
  label: string;
  color: string;
  values: number[];
  visible?: boolean;
};

type DualLineChartProps = {
  xLabels: string[];
  series: ChartSeries[];
  yFormatter?: (n: number) => string;
  height?: number;
  onPointHover?: (index: number | null) => void;
  activeIndex?: number | null;
};

/** Line chart with labeled X/Y axes, grid, and interactive points */
export function DualLineChart({
  xLabels,
  series,
  yFormatter = (n) => String(n),
  height = 168,
  onPointHover,
  activeIndex = null,
}: DualLineChartProps) {
  const pad = { top: 12, right: 12, bottom: 28, left: 40 };
  const width = 420;
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const allValues = series.filter((s) => s.visible !== false).flatMap((s) => s.values);
  const rawMax = Math.max(...allValues, 1);
  const yMax = Math.ceil(rawMax / 50) * 50 || 100;
  const yTicks = [0, 0.5, 1].map((t) => Math.round(yMax * t));

  const xAt = (i: number) =>
    pad.left + (xLabels.length <= 1 ? plotW / 2 : (i / (xLabels.length - 1)) * plotW);
  const yAt = (v: number) => pad.top + plotH - (v / yMax) * plotH;

  const toPoints = (values: number[]) =>
    values.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ");

  return (
    <div className="relative w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img">
        {yTicks.map((tick) => {
          const y = yAt(tick);
          return (
            <g key={`y-${tick}`}>
              <line
                x1={pad.left}
                y1={y}
                x2={width - pad.right}
                y2={y}
                stroke="#F3F4F6"
                strokeWidth="1"
              />
              <text
                x={pad.left - 6}
                y={y + 3}
                textAnchor="end"
                fontSize="9"
                fill="#9CA3AF"
              >
                {yFormatter(tick)}
              </text>
            </g>
          );
        })}

        <line
          x1={pad.left}
          y1={pad.top + plotH}
          x2={width - pad.right}
          y2={pad.top + plotH}
          stroke="#E5E7EB"
          strokeWidth="1"
        />

        {xLabels.map((label, i) => (
          <text
            key={label}
            x={xAt(i)}
            y={height - 8}
            textAnchor="middle"
            fontSize="9"
            fill="#9CA3AF"
          >
            {label}
          </text>
        ))}

        {series.map((s) =>
          s.visible === false ? null : (
            <g key={s.label}>
              <polyline
                fill="none"
                stroke={s.color}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                points={toPoints(s.values)}
              />
              {s.values.map((v, i) => (
                <circle
                  key={`${s.label}-${i}`}
                  cx={xAt(i)}
                  cy={yAt(v)}
                  r={activeIndex === i ? 3.5 : 2.5}
                  fill="#fff"
                  stroke={s.color}
                  strokeWidth="1.75"
                />
              ))}
            </g>
          )
        )}

        {xLabels.map((label, i) => (
          <rect
            key={`hit-${label}`}
            x={xAt(i) - plotW / xLabels.length / 2}
            y={pad.top}
            width={plotW / Math.max(xLabels.length - 1, 1)}
            height={plotH}
            fill="transparent"
            className="cursor-pointer"
            onMouseEnter={() => onPointHover?.(i)}
            onMouseLeave={() => onPointHover?.(null)}
          />
        ))}

        {activeIndex !== null && (
          <line
            x1={xAt(activeIndex)}
            y1={pad.top}
            x2={xAt(activeIndex)}
            y2={pad.top + plotH}
            stroke="#D1D5DB"
            strokeWidth="1"
            strokeDasharray="2 3"
          />
        )}
      </svg>
    </div>
  );
}
