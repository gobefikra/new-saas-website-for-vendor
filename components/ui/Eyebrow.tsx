import type { ReactNode } from "react";
import { brand } from "@/lib/brand-theme";

type Tone = "light" | "dark";

export default function Eyebrow({
  children,
  icon,
  tone = "light",
  uppercase = true,
  className = "",
}: {
  children: ReactNode;
  icon?: ReactNode;
  tone?: Tone;
  uppercase?: boolean;
  className?: string;
}) {
  const isDark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide ${
        uppercase ? "uppercase tracking-wider" : ""
      } ${className}`}
      style={{
        borderColor: isDark ? "rgba(16, 185, 129,0.35)" : brand.mintBorder,
        backgroundColor: isDark ? "rgba(16, 185, 129,0.12)" : brand.mint,
        color: isDark ? brand.primary : brand.primaryDark,
      }}
    >
      {icon ? (
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full text-white"
          style={{ backgroundColor: brand.primary }}
        >
          {icon}
        </span>
      ) : null}
      {children}
    </span>
  );
}
