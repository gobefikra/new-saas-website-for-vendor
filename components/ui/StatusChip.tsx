import type { ReactNode } from "react";

type ChipStatus = "open" | "progress" | "awaiting";

const statusClass: Record<ChipStatus, string> = {
  open: "chip-open",
  progress: "chip-progress",
  awaiting: "chip-awaiting",
};

const dotClass: Record<ChipStatus, string> = {
  open: "bg-brand-green",
  progress: "bg-blue-600",
  awaiting: "bg-amber-500",
};

export default function StatusChip({
  status,
  children,
  className = "",
}: {
  status: ChipStatus;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`${statusClass[status]} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dotClass[status]}`} aria-hidden />
      {children}
    </span>
  );
}
