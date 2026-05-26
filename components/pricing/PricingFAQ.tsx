"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { fadeInUp } from "@/components/motion";
import { PRICING_FAQS } from "@/lib/pricing-data";

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16 px-6">
      <motion.h2
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="text-4xl font-extrabold text-gray-900 max-w-3xl mx-auto text-center leading-tight"
      >
        Pricing <span className="text-lime-400">questions,</span> answered.
      </motion.h2>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ delay: 0.1 }}
        className="max-w-3xl mx-auto mt-12"
      >
        {PRICING_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-2xl px-6 py-5 mb-4 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenIndex(isOpen ? null : index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
            >
              <div className="flex justify-between items-center gap-4">
                <span className="font-medium text-gray-900 text-[15px]">
                  {faq.question}
                </span>
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
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[14.5px] text-gray-600 leading-relaxed pt-4">
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
