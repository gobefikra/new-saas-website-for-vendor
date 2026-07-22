"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import { PRICING_FAQS } from "@/lib/pricing-data";

const GREEN = "#22C55E";
const NAVY = "#0D1B2A";
const BODY = "#6B7280";

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof PRICING_FAQS)[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold md:text-lg" style={{ color: NAVY }}>
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
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              className="font-dm-sans pt-4 text-sm leading-relaxed md:text-base"
              style={{ color: BODY }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white px-4 py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: BODY }}
          >
            Frequently Asked Questions
          </p>
          <h2
            className="mt-3 text-3xl font-extrabold md:text-4xl"
            style={{ color: NAVY }}
          >
            Everything you want to know
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          {PRICING_FAQS.map((faq, index) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="font-dm-sans mt-8 text-center text-sm"
          style={{ color: BODY }}
        >
          Still have questions?{" "}
          <Link href="/contact" className="font-semibold hover:underline" style={{ color: GREEN }}>
            Talk to our team
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
