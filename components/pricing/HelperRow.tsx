import { Check, Infinity } from "lucide-react";

const items = [
  {
    icon: (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#10B981] text-white">
        <Check className="h-3 w-3" strokeWidth={3} />
      </span>
    ),
    label: "Included",
  },
  {
    icon: (
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-400">
        -
      </span>
    ),
    label: "Not available",
  },
  {
    icon: (
      <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-700">
        value
      </span>
    ),
    label: "Specific limit",
  },
  {
    icon: <Infinity className="h-4 w-4 text-[#10B981]" strokeWidth={2.5} />,
    label: "Unlimited",
  },
];

export default function HelperRow() {
  return (
    <div className="mb-5 flex flex-wrap gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3.5 shadow-sm md:gap-5 md:px-5">
      {items.map(({ icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 text-[13px] text-gray-600"
        >
          {icon}
          <span className="font-dm-sans">{label}</span>
        </div>
      ))}
    </div>
  );
}
