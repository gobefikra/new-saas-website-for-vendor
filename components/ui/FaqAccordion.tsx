"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, MessageCircle, Minus, Plus } from "lucide-react";
import { brand } from "@/lib/brand-theme";

export type Faq = {
  question: string;
  answer: string;
};

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
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
          style={{ backgroundColor: brand.mint }}
        >
          {isOpen ? (
            <MessageCircle
              className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
              style={{ color: brand.primaryDark }}
              strokeWidth={2}
            />
          ) : (
            <HelpCircle
              className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
              style={{ color: brand.primaryDark }}
              strokeWidth={2}
            />
          )}
        </span>

        <span
          className="min-w-0 flex-1 text-sm font-bold leading-snug sm:text-base"
          style={{ color: brand.navy }}
        >
          {faq.question}
        </span>

        <span className="shrink-0" style={{ color: brand.primary }}>
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
                style={{ color: brand.subtext }}
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

export default function FaqAccordion({
  faqs,
  defaultOpen = 0,
  className = "",
}: {
  faqs: Faq[];
  defaultOpen?: number;
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <FaqItem
          key={faq.question}
          faq={faq}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}
