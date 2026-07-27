"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import { brand } from "@/lib/brand-theme";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  body: string;
  date: string;
  accent: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Founder, Himalayan Treks Co.",
    quote: "Befikra completely transformed how we manage our bookings.",
    body: "Before Befikra, we were handling everything on WhatsApp and spreadsheets. Now all leads, bookings, and payments are organized in one place. Our team saves hours every day.",
    date: "March 18, 2026",
    accent: brand.primary,
  },
  {
    name: "Priya Sharma",
    role: "Operations Head, Escape Adventures",
    quote: "We increased our conversions by more than 40%.",
    body: "With automated replies and instant lead capture, we never miss an inquiry anymore. Tracking and converting leads into confirmed bookings is finally simple.",
    date: "March 12, 2026",
    accent: brand.lime,
  },
  {
    name: "Arjun Verma",
    role: "Owner, ThrillSeekers Travel",
    quote: "MyLinkr made sharing and booking incredibly simple.",
    body: "We share one MyLinkr page with customers, and they can view events, see details, and book instantly. It looks professional and saves a lot of manual effort.",
    date: "Feb 28, 2026",
    accent: "#10B981",
  },
  {
    name: "Sneha Kapoor",
    role: "Sales Manager, Adventure Nation",
    quote: "The WhatsApp and Instagram integration is a game changer.",
    body: "All messages automatically become leads in the CRM. We respond faster and manage everything from one dashboard without switching between apps.",
    date: "March 5, 2026",
    accent: "#059669",
  },
  {
    name: "Neha Joshi",
    role: "Founder, Wander Tribe",
    quote: "Befikra helped us scale without increasing our team.",
    body: "Automation, reminders, and centralized booking management let us handle more customers efficiently. It has become essential to our daily operations.",
    date: "March 1, 2026",
    accent: brand.primary,
  },
  {
    name: "Karan Malhotra",
    role: "Director, Trek India",
    quote: "The analytics help us understand our business clearly.",
    body: "We can now see which events perform best, which channels bring leads, and where revenue comes from. It helps us make smarter decisions every week.",
    date: "Feb 20, 2026",
    accent: "#10B981",
  },
];

const columns: Testimonial[][] = [
  [testimonials[0], testimonials[3]],
  [testimonials[1], testimonials[4]],
  [testimonials[2], testimonials[5]],
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="group flex flex-col">
      <div className="relative flex flex-col rounded-[1.5rem] border border-slate-200/80 bg-white p-6 transition-colors duration-300 group-hover:border-emerald-200">
        <Quote className="h-7 w-7 text-slate-200" strokeWidth={2.5} />

        <p className="mt-3 text-[15px] font-semibold leading-snug text-slate-900">
          {t.quote}
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{t.body}</p>

        <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-[11px] text-slate-400">
          <span
            className="flex items-center gap-1 rounded-full px-2 py-0.5 font-bold"
            style={{
              backgroundColor: `${t.accent}14`,
              color: t.accent,
            }}
          >
            <Star className="h-3 w-3 fill-current" />
            5.0
          </span>
          <span className="ml-auto">{t.date}</span>
        </div>

        <span className="absolute -bottom-[9px] left-9 h-4 w-4 rotate-45 border-b border-r border-slate-200/80 bg-white transition-colors duration-300 group-hover:border-emerald-200" />
      </div>

      <div className="mt-5 flex items-center gap-3 pl-2">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-sm"
          style={{
            background: `linear-gradient(145deg, ${t.accent}, ${brand.primaryDark})`,
          }}
        >
          {initials(t.name)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-900">
            {t.name}
          </p>
          <p className="truncate text-xs text-slate-500">{t.role}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeColumn({
  items,
  direction,
  animate,
}: {
  items: Testimonial[];
  direction: "down" | "up";
  animate: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="relative h-[640px] overflow-hidden md:h-[700px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-white to-transparent"
      />

      <div
        className={`testimonials-marquee-track ${
          animate
            ? direction === "down"
              ? "testimonials-marquee-down"
              : "testimonials-marquee-up"
            : ""
        }`}
      >
        {loop.map((t, i) => (
          <div key={`${t.name}-${i}`} className="shrink-0">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const animate = Boolean(inView && !reduceMotion);

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden px-4 py-14 md:px-8 md:py-16"
      style={{
        background:
          "radial-gradient(ellipse 65% 45% at 50% 0%, rgba(16, 185, 129,0.07), transparent 60%), #FFFFFF",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border bg-emerald-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest"
            style={{
              borderColor: "rgba(16, 185, 129,0.25)",
              color: brand.primaryDark,
            }}
          >
            <Star className="h-3.5 w-3.5 fill-current" />
            Customer stories
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
            Trusted by travel teams{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-[#059669] to-emerald-600 bg-clip-text text-transparent">
              growing with Befikra
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
            Real operators share how MyLinkr, CRM, and automations help them
            book more trips with less chaos.
          </p>
        </motion.div>

        {/* Mobile: static 6-card list */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>

        {/* Desktop: 3 scrolling columns */}
        <div className="group/testimonials mt-12 hidden gap-5 md:grid md:grid-cols-3">
          <MarqueeColumn
            items={columns[0]}
            direction="down"
            animate={animate}
          />
          <MarqueeColumn
            items={columns[1]}
            direction="up"
            animate={animate}
          />
          <MarqueeColumn
            items={columns[2]}
            direction="down"
            animate={animate}
          />
        </div>
      </div>
    </section>
  );
}
