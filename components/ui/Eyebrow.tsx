import type { ReactNode } from "react";

type Tone = "light" | "dark";
type Variant = "text" | "pill";

/**
 * Section eyebrow — board recipe: 11px uppercase, tracking ~0.22em, brand green.
 * `pill` keeps the soft mint badge used in denser UI chrome.
 */
export default function Eyebrow({
  children,
  icon,
  tone = "light",
  uppercase = true,
  variant = "text",
  className = "",
}: {
  children: ReactNode;
  icon?: ReactNode;
  tone?: Tone;
  uppercase?: boolean;
  variant?: Variant;
  className?: string;
}) {
  const isDark = tone === "dark";

  if (variant === "pill") {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold ${
          uppercase ? "uppercase tracking-wider" : ""
        } ${
          isDark
            ? "border-brand-green/35 bg-brand-green/12 text-brand-green"
            : "border-[#A7D7BC] bg-brand-green-light text-brand-green-dark"
        } ${className}`}
      >
        {icon ? (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-white">
            {icon}
          </span>
        ) : null}
        {children}
      </span>
    );
  }

  return (
    <span
      className={`section-eyebrow ${uppercase ? "" : "normal-case tracking-normal"} ${
        isDark ? "text-brand-green" : ""
      } ${className}`}
    >
      {icon ? (
        <span className="inline-flex h-4 w-4 items-center justify-center [&>svg]:h-3.5 [&>svg]:w-3.5">
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  );
}
