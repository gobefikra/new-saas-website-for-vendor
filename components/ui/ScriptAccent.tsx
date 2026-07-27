import type { ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl";

const sizeClass: Record<Size, string> = {
  sm: "text-[1.35rem] md:text-[1.5rem]",
  md: "text-[1.75rem] md:text-[2.15rem]",
  lg: "text-[2.1rem] md:text-[2.65rem]",
  xl: "text-[2.4rem] md:text-[3.1rem]",
};

const trailClass: Record<Size, string> = {
  sm: "h-7 w-9 -right-6 -top-2",
  md: "h-8 w-11 -right-7 -top-2.5 md:-right-8",
  lg: "h-9 w-12 -right-8 -top-3 md:h-10 md:w-14 md:-right-10 md:-top-3.5",
  xl: "h-10 w-14 -right-9 -top-3.5 md:h-11 md:w-16 md:-right-11",
};

/** Curved dashed trail + solid green arrowhead (GoBefikra Escape accent). */
function ScriptTrailArrow() {
  return (
    <svg
      viewBox="0 0 56 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full overflow-visible"
      aria-hidden
    >
      {/* Soft dashed arc: bottom-left → upper-right */}
      <path
        d="M3 34C10 28 18 18 28 12C36 7.2 44 5.2 49.5 6.5"
        stroke="#C5CDD6"
        strokeWidth="1.75"
        strokeDasharray="2.4 3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Solid forest-green arrowhead, pointing upper-right */}
      <path
        d="M46.2 3.1L53.8 5.05L48.95 11.35L46.2 3.1Z"
        fill="#2D6A4F"
      />
    </svg>
  );
}

/**
 * GoBefikra "Escape"-style script accent:
 * forest-green Kaushan script + gold hand underline + dashed trail arrow.
 */
export default function ScriptAccent({
  children,
  size = "md",
  kite = true,
  underline = true,
  className = "",
  as: Tag = "span",
}: {
  children: ReactNode;
  size?: Size;
  /** Show the dashed trail + arrow (kept as `kite` for API compatibility). */
  kite?: boolean;
  underline?: boolean;
  className?: string;
  as?: "span" | "em" | "strong" | "p";
}) {
  return (
    <Tag
      className={`script-lockup relative inline-flex items-end ${sizeClass[size]} ${className}`}
    >
      <span
        className={`relative z-[1] font-script text-[1em] font-normal leading-[1.05] text-brand-green [font-synthesis:none] ${
          underline ? "script-gold-underline" : ""
        }`}
      >
        {children}
      </span>

      {kite ? (
        <span
          className={`script-trail pointer-events-none absolute z-0 ${trailClass[size]}`}
          aria-hidden
        >
          <ScriptTrailArrow />
        </span>
      ) : null}
    </Tag>
  );
}
