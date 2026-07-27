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
import { HOME_FAQS as faqs } from "@/lib/faq-data";
import SectionHeading from "@/components/ui/SectionHeading";
import { brand } from "@/lib/brand-theme";

const GREEN = brand.green;
const GREEN_DARK = brand.greenDark;
const NAVY = brand.navy;
const BODY = brand.muted;
const MINT = brand.greenLight;
const SECTION_BG = brand.surfaceHover;

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
      className={`border border-border-default bg-white shadow-card transition-all duration-200 ease-brand hover:border-brand-green hover:shadow-card-hover ${
        isOpen ? "rounded-2xl p-5 sm:p-6" : "rounded-2xl px-5 py-4 sm:px-6 sm:py-4"
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-xl bg-off-white px-4 py-3.5 sm:ml-14 sm:px-5 sm:py-4">
              <p
                className="font-sans text-sm leading-relaxed"
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
      className="w-full overflow-hidden px-4 py-14 md:py-16"
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
          <SectionHeading
            eyebrow="FAQ"
            eyebrowIcon={<CircleHelp className="h-3.5 w-3.5" strokeWidth={2.25} />}
            title="Common Questions."
            script="clear answers"
            description="Everything you need to know about Befikra Partner."
          />
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
          className="card-brand-static mt-8 flex flex-col items-start gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6"
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
              <p className="text-sm font-semibold sm:text-base" style={{ color: NAVY }}>
                Still have questions?
              </p>
              <p className="font-sans text-sm" style={{ color: BODY }}>
                We&apos;re here to help you succeed.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-off-white sm:w-auto"
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
