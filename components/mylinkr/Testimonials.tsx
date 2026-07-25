"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/components/motion";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  body: string;
  date?: string;
};

const col1: Testimonial[] = [
  {
    name: "Rahul Mehta",
    role: "Founder, Himalayan Treks Co.",
    quote: "Befikra completely transformed how we manage our bookings.",
    body: "Befikra completely transformed how we manage our bookings. Before Befikra, we were handling everything on WhatsApp and spreadsheets. Now all leads, bookings, and payments are organized in one place. Our team saves hours every day.",
    date: "March 18, 2026",
  },
  {
    name: "Sneha Kapoor",
    role: "Sales Manager, Adventure Nation",
    quote: "The WhatsApp and Instagram integration is a game changer.",
    body: "All messages automatically become leads in the CRM. We can respond faster and manage everything from one dashboard without switching between apps.",
    date: "March 18, 2026",
  },
  {
    name: "Karan Malhotra",
    role: "Director, Trek India",
    quote: "The analytics help us understand our business clearly.",
    body: "We can now see which events perform best, which channels bring leads, and where revenue comes from. It helps us make smarter decisions.",
    date: "March 18, 2026",
  },
];

const col2: Testimonial[] = [
  {
    name: "Priya Sharma",
    role: "Operations Head, Escape Adventures",
    quote: "We increased our conversions by more than 40%.",
    body: "We increased our conversions by more than 40%. With automated replies and instant lead capture, we never miss an inquiry anymore. The system makes it easy to track and convert leads into confirmed bookings.",
    date: "March 18, 2026",
  },
  {
    name: "Neha Joshi",
    role: "Founder, Wander Tribe",
    quote: "Befikra helped us scale without increasing our team.",
    body: "Automation, reminders, and centralized booking management allow us to handle more customers efficiently. It's become essential to our daily operations.",
    date: "March 18, 2026",
  },
  {
    name: "Neha Joshi",
    role: "Founder, Wander Tribe",
    quote: "Befikra helped us scale without increasing our team.",
    body: "Automation, reminders, and centralized booking management allow us to handle more customers efficiently. It's become essential to our daily operations.",
    date: "March 18, 2026",
  },
];

const col3: Testimonial[] = [
  {
    name: "Arjun Verma",
    role: "Owner, ThrillSeekers Travel",
    quote: "MyLinkr made sharing and booking incredibly simple.",
    body: "We now share one MyLinkr page with customers, and they can view events, see details, and book instantly. It looks professional and saves a lot of manual effort.",
    date: "Feb 7, 2023",
  },
  {
    name: "Rob H.",
    role: "Founder",
    quote: "Butters' LEGENDAIRY Product",
    body: "Butter will forever change how you approach online or remote workshop collaboration - from the facilitator or the participant; this unique tool will add flavour, fun and discipline for more engaging digital workshops.",
    date: "March 18, 2026",
  },
  {
    name: "Rob H.",
    role: "Founder",
    quote: "Butters' LEGENDAIRY Product",
    body: "Butter will forever change how you approach online or remote workshop collaboration - from the facilitator or the participant; this unique tool will add flavour, fun and discipline for more engaging digital workshops.",
    date: "March 18, 2026",
  },
];

function Avatar() {
  return (
    <div className="relative shrink-0">
      <div className="w-10 h-10 rounded-full bg-gray-700" />
      <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-white rounded-full border border-gray-200 text-[10px] text-emerald-600 font-bold flex items-center justify-center">
        G
      </span>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <Avatar />
        <div className="text-left">
          <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
          <p className="text-xs text-gray-400">{t.role}</p>
        </div>
      </div>
      <p className="font-semibold text-gray-900 text-sm mb-2">{t.quote}</p>
      <p className="text-gray-500 text-sm leading-relaxed">{t.body}</p>
      {t.date && (
        <p className="text-xs text-gray-300 mt-3">{t.date}</p>
      )}
    </div>
  );
}

function TestimonialColumn({
  items,
  delay,
}: {
  items: Testimonial[];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
      className="flex flex-col gap-5"
    >
      {items.map((t, i) => (
        <motion.div key={`${t.name}-${i}`} variants={fadeInUp}>
          <TestimonialCard t={t} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <p className="text-lime-400 font-bold text-xl">Next level Features:</p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-1">
          Everything Connected in
        </h2>
        <h2 className="text-4xl font-extrabold text-gray-900">One Place</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-6xl mx-auto">
        <TestimonialColumn items={col1} delay={0} />
        <TestimonialColumn items={col2} delay={0.15} />
        <TestimonialColumn items={col3} delay={0.3} />
      </div>
    </section>
  );
}
