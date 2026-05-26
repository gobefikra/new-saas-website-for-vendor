"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { fadeInUp } from "@/components/motion";

const accordionItems = [
  {
    title: "Unified Lead-to-Booking Pipeline",
    content:
      "Every inquiry automatically enters the CRM, where you can track progress, assign leads, convert bookings, and manage payments without switching tools.",
  },
  {
    title: "Integrated Booking & Batch Management",
    content:
      "Create events, manage batches, slots, pricing, and bookings effortlessly.",
  },
  {
    title: "Website Visibility & Direct Booking",
    content:
      "Show your events on Befikra and allow customers to book instantly.",
  },
  {
    title: "Payment Collection & Invoicing",
    content:
      "Collect payments via secure links, send automated invoices, and reconcile transactions in one place.",
  },
  {
    title: "Analytics & Revenue Insights",
    content:
      "Track revenue trends, conversion rates, and team performance with real-time dashboards and AI-powered insights.",
  },
];

export default function PowerfulToolsSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="w-full overflow-hidden bg-forest-dark py-20 md:py-28 px-4 md:px-8 relative"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 20% 30%, rgba(16, 185, 129, 0.15), transparent 65%)",
        }}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start relative z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Powerful Tools to Run and
            <br />
            <span className="bg-gradient-to-r from-lime-400 via-[#84CC16] to-teal-400 bg-clip-text text-transparent">
              Grow Your Travel Business
            </span>
          </h2>
          <p className="text-white/90 mt-6 max-w-md leading-relaxed">
            Manage leads, bookings, payments, customers, and operations in one
            unified platform built for modern experience businesses.
          </p>

          <div className="mt-10 space-y-6">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.title} className="relative">
                  {isOpen && (
                    <motion.div
                      layoutId="accordion-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className={`w-full text-left pl-4 transition-colors ${
                      isOpen ? "border-l-4 border-emerald-400" : "border-l-4 border-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-white font-semibold text-base md:text-lg pr-2">
                        {item.title}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-white shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white shrink-0" />
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
                          <p className="text-gray-400 text-sm mt-3 pr-8">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {!isOpen && (
                      <p className="text-gray-500 text-sm mt-2 line-clamp-1 md:hidden">
                        {item.content}
                      </p>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="rounded-3xl bg-[#1A3A2A] w-full h-80 md:h-96 flex items-center justify-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at top left, rgba(16, 185, 129, 0.4), transparent 60%)",
            }}
          />
          {/* Dashboard image will be added later */}
          <p className="text-gray-500 text-center px-6 relative z-10">
            Dashboard Preview Coming Soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
