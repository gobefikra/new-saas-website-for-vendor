"use client";

import type { LucideIcon } from "lucide-react";

type CategoryRowProps = {
  icon: LucideIcon;
  name: string;
};

export default function CategoryRow({ icon: Icon, name }: CategoryRowProps) {
  return (
    <div className="grid grid-cols-1 bg-gray-900 text-white">
      <div className="col-span-full flex items-center gap-3 px-5 md:px-[22px] py-3.5 font-mono text-xs tracking-widest uppercase font-semibold">
        <Icon className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
        {name}
      </div>
    </div>
  );
}
