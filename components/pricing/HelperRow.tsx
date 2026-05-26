import { Check } from "lucide-react";

export default function HelperRow() {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 items-center text-[13px] text-gray-500 mb-4">
      <div className="flex items-center gap-2">
        <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={2.5} />
        Included
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-400 text-xs font-bold">
          —
        </span>
        Not available
      </div>
      <div className="flex items-center gap-2">
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold">
          value
        </span>
        Specific limit or feature
      </div>
      <div className="flex items-center gap-2">
        <span className="text-emerald-600 font-bold text-xl leading-none">
          ∞
        </span>
        Unlimited
      </div>
    </div>
  );
}
