import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline";
type Tone = "light" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm md:text-base",
  lg: "px-8 py-3.5 text-base",
};

function variantClasses(variant: Variant, tone: Tone): string {
  if (variant === "primary") {
    return "bg-gradient-to-r from-[#10B981] to-[#059669] text-white shadow-[0_4px_16px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_22px_rgba(16,185,129,0.45)] hover:opacity-95";
  }
  // outline
  return tone === "dark"
    ? "border border-white/25 text-white hover:border-white/55 hover:bg-white/5"
    : "border border-gray-200 bg-white text-[#0F172A] hover:bg-gray-50 hover:border-gray-300";
}

type CommonProps = {
  variant?: Variant;
  tone?: Tone;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    tone = "light",
    size = "md",
    className = "",
    children,
  } = props;

  const classes = `${base} ${sizes[size]} ${variantClasses(variant, tone)} ${className}`;

  if (props.href !== undefined) {
    const { href, external, variant: _v, tone: _t, size: _s, className: _c, children: _ch, ...rest } =
      props as ButtonAsLink;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, tone: _t, size: _s, className: _c, children: _ch, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
