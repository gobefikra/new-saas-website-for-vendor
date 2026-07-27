import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Tone = "light" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 active:scale-95";

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm md:text-base",
  lg: "px-8 py-3.5 text-base",
};

function variantClasses(variant: Variant, tone: Tone): string {
  if (variant === "primary") {
    return "rounded-full bg-brand-green text-white shadow-cta-glow hover:bg-brand-green-dark";
  }
  if (variant === "ghost") {
    return tone === "dark"
      ? "rounded-full text-white/90 underline-offset-4 hover:text-white hover:underline"
      : "rounded-full text-brand-green-dark underline-offset-4 hover:text-brand-green hover:underline";
  }
  // outline / secondary
  return tone === "dark"
    ? "rounded-full border border-white/25 text-white hover:border-white/55 hover:bg-white/5"
    : "rounded-full border border-border-default bg-white text-navy hover:border-brand-green hover:bg-off-white";
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

  const sizeClass = variant === "ghost" ? "px-1 py-1 text-sm" : sizes[size];
  const classes = `${base} ${sizeClass} ${variantClasses(variant, tone)} ${className}`;

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
