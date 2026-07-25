"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { Minus, Plus } from "lucide-react";
import { fadeInUp } from "@/components/motion";

const faqs = [
  {
    question: "Which platforms can I connect with Befikra CRM?",
    answer:
      "You can connect WhatsApp, Instagram, and Befikra event and MyLinkr pages. All inquiries, bookings, and customer conversations from these platforms are automatically captured and managed inside one unified dashboard.",
  },
  {
    question: "Will all my WhatsApp and Instagram messages appear inside the CRM?",
    answer:
      "Yes. Once connected, every message from WhatsApp and Instagram is synced into your CRM in real time, so you never miss a conversation.",
  },
  {
    question: "Can customers book directly from Befikra event pages or MyLinkr?",
    answer:
      "Absolutely. Your MyLinkr page and Befikra event listings allow customers to view event details and complete bookings instantly.",
  },
  {
    question: "Do I need technical knowledge to connect integrations?",
    answer:
      "No technical knowledge required. Integrations are connected in a few clicks from your Befikra dashboard.",
  },
  {
    question: "Will the CRM track which platform my leads come from?",
    answer:
      "Yes. Every lead is tagged with its source - WhatsApp, Instagram, or website - so you always know what's working.",
  },
];

export default function IntegrationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="w-full bg-white py-20 px-4">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          Common{" "}
          <span className="text-lime-400">Questions</span>
          <br />
          About Integrations
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
        className="max-w-2xl mx-auto mt-12 space-y-4"
      >
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-2xl px-6 py-5 cursor-pointer"
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
                <h3 className="font-bold text-gray-900 text-left text-base">
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
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
