"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import Button from "@/components/ui/Button";
import { brand } from "@/lib/brand-theme";

type CtaAction = {
  label: string;
  href: string;
};

export default function CtaBand({
  title,
  subtitle,
  primary,
  secondary,
  className = "",
}: {
  title: ReactNode;
  subtitle?: string;
  primary: CtaAction;
  secondary?: CtaAction;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden px-4 py-16 text-center md:px-8 md:py-20 ${className}`}
      style={{
        background: `radial-gradient(ellipse 70% 80% at 50% 45%, ${brand.forest} 0%, ${brand.ravenDark} 52%, ${brand.dark} 100%)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={
          inView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 24, scale: 0.96 }
        }
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-3xl"
      >
        <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mx-auto mt-5 max-w-lg font-sans text-base leading-relaxed text-gray-300 md:text-lg">
            {subtitle}
          </p>
        ) : null}

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
          }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.div variants={fadeInUp}>
            <Button href={primary.href} variant="primary" size="lg">
              {primary.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </motion.div>
          {secondary ? (
            <motion.div variants={fadeInUp}>
              <Button
                href={secondary.href}
                variant="outline"
                tone="dark"
                size="lg"
              >
                {secondary.label}
              </Button>
            </motion.div>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  );
}
