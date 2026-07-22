"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CircleHelp,
  Headphones,
  HelpCircle,
  MessageCircle,
  Minus,
  Plus,
} from "lucide-react";
import { fadeInUp } from "@/components/motion";

const GREEN = "#22C55E";
const GREEN_DARK = "#16A34A";
const NAVY = "#0D1B2A";
const BODY = "#6B7280";
const MINT = "#E8F5E9";
const SECTION_BG = "#F4F6F8";

const faqs = [
  {
    question: "What is Befikra Partner?",
    answer:
      "Befikra Partner is an AI-powered platform that helps travel businesses manage leads, bookings, payments, and operations in one dashboard.",
  },
  {
    question: "How is this different from other CRM tools?",
    answer:
      "Unlike generic CRMs, Befikra is purpose-built for travel brands with native WhatsApp, Instagram, and booking integrations, plus AI-powered lead qualification.",
  },
  {
    question: "What is Raven AI?",
    answer:
      "Raven AI is Befikra's intelligent assistant that automates conversations, qualifies leads, generates itineraries, and provides real-time business insights.",
  },
  {
    question: "Can I connect WhatsApp and my website?",
    answer:
      "Yes. Befikra integrates directly with WhatsApp Business and your website to capture leads, reply automatically, and sync everything into your CRM.",
  },
  {
    question: "Will this help me increase bookings?",
    answer:
      "Absolutely. Partners using Befikra report significant increases in lead conversion through automation, faster response times, and data-driven decision making.",
  },
  {
    question: "Is it suitable for small and large travel businesses?",
    answer:
      "Yes, Befikra scales from solo operators to large travel companies. Our plans are designed to grow with your business.",
  },
];

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`rounded-2xl bg-white shadow-[0_4px_20px_rgba(13,27,42,0.05)] transition-shadow ${
        isOpen ? "p-5 sm:p-6" : "px-5 py-4 sm:px-6 sm:py-4"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-3 text-left sm:gap-4"
        aria-expanded={isOpen}
      >
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10"
          style={{ backgroundColor: MINT }}
        >
          {isOpen ? (
            <MessageCircle
              className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
              style={{ color: GREEN_DARK }}
              strokeWidth={2}
            />
          ) : (
            <HelpCircle
              className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
              style={{ color: GREEN_DARK }}
              strokeWidth={2}
            />
          )}
        </span>

        <span
          className="min-w-0 flex-1 text-sm font-bold leading-snug sm:text-base"
          style={{ color: NAVY }}
        >
          {faq.question}
        </span>

        <span className="shrink-0" style={{ color: GREEN }}>
          {isOpen ? (
            <Minus className="h-5 w-5" strokeWidth={2.25} />
          ) : (
            <Plus className="h-5 w-5" strokeWidth={2.25} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-xl bg-gray-50 px-4 py-3.5 sm:ml-14 sm:px-5 sm:py-4">
              <p
                className="font-dm-sans text-sm leading-relaxed"
                style={{ color: BODY }}
              >
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="w-full overflow-hidden px-4 py-20 md:py-24"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide"
            style={{ borderColor: "#A5D6A7", backgroundColor: MINT, color: GREEN_DARK }}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: GREEN }}
            >
              <CircleHelp className="h-3 w-3" strokeWidth={2.5} />
            </span>
            FAQ
          </span>

          <h2
            className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl lg:text-[2.75rem]"
            style={{ color: NAVY }}
          >
            Common Questions.
            <br />
            <span style={{ color: GREEN }}>Clear Answers.</span>
          </h2>

          <p
            className="font-dm-sans mx-auto mt-4 max-w-md text-base"
            style={{ color: BODY }}
          >
            Everything you need to know about Befikra Partner.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-10 space-y-4"
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-white px-5 py-5 shadow-[0_4px_20px_rgba(13,27,42,0.05)] sm:flex-row sm:items-center sm:justify-between sm:px-6"
        >
          <div className="flex items-center gap-3.5">
            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: MINT }}
            >
              <Headphones
                className="h-5 w-5"
                style={{ color: GREEN_DARK }}
                strokeWidth={2}
              />
            </span>
            <div>
              <p className="text-sm font-bold sm:text-base" style={{ color: NAVY }}>
                Still have questions?
              </p>
              <p className="font-dm-sans text-sm" style={{ color: BODY }}>
                We&apos;re here to help you succeed.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50 sm:w-auto"
            style={{ borderColor: GREEN, color: GREEN_DARK }}
          >
            Contact Support
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
