"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Minus, Plus } from "lucide-react";
import { fadeInUp } from "@/components/motion";

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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden bg-white py-20 md:py-28 px-4"
    >
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-extrabold text-center text-near-black"
        >
          Common Questions. Clear Answers.
        </motion.h2>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-gray-200 rounded-2xl px-6 py-5 cursor-pointer hover:border-gray-300 transition-colors"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenIndex(isOpen ? -1 : index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-bold text-near-black text-left">
                    {faq.question}
                  </h3>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-emerald-500 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-emerald-500 shrink-0" />
                  )}
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-subtext text-sm mt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
