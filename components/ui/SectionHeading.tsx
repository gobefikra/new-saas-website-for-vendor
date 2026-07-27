import type { ReactNode } from "react";
import Eyebrow from "@/components/ui/Eyebrow";
import ScriptAccent from "@/components/ui/ScriptAccent";

type Align = "left" | "center";

/**
 * Brand section heading recipe (GoBefikra board + staging site):
 * 1) Eyebrow — 11px uppercase, brand green
 * 2) Display title — Brice / Georgia, navy
 * 3) Optional Escape-style script line + gold underline + kite
 */
export default function SectionHeading({
  eyebrow,
  eyebrowIcon,
  title,
  script,
  scriptKite = true,
  description,
  align = "center",
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: ReactNode;
  eyebrowIcon?: ReactNode;
  title: ReactNode;
  script?: ReactNode;
  scriptKite?: boolean;
  description?: ReactNode;
  align?: Align;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow ? (
        <Eyebrow icon={eyebrowIcon} className="mb-4">
          {eyebrow}
        </Eyebrow>
      ) : null}

      <Tag className="section-title">{title}</Tag>

      {script ? (
        <ScriptAccent size="lg" kite={scriptKite} className="mt-2">
          {script}
        </ScriptAccent>
      ) : null}

      {description ? (
        <p className="mt-4 max-w-2xl font-sans text-[15px] leading-relaxed text-subtext md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
