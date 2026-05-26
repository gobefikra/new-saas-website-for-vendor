"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard, { type BlogCardProps } from "@/components/blog/BlogCard";
import FilterTabs from "@/components/blog/FilterTabs";
import { fadeInUp } from "@/components/motion";

interface BlogSectionProps {
  label: string;
  heading: string;
  cards: BlogCardProps[];
  tabs?: string[];
  defaultTab?: string;
  showArrows?: boolean;
}

function ArrowButtons() {
  return (
    <div className="flex gap-2 shrink-0">
      <button
        type="button"
        aria-label="Previous"
        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>
      <button
        type="button"
        aria-label="Next"
        className="w-10 h-10 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition cursor-pointer"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>
    </div>
  );
}

export default function BlogSection({
  label,
  heading,
  cards,
  tabs,
  defaultTab,
  showArrows = true,
}: BlogSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs?.[0] ?? "");

  const filteredCards = tabs
    ? cards.filter((card) => card.category === activeTab)
    : cards;

  return (
    <section ref={ref} className="bg-white py-16 px-6 md:px-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-6">
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{label}</p>
          <h2 className="text-4xl font-extrabold text-gray-900">{heading}</h2>
        </div>
        {showArrows && <ArrowButtons />}
      </div>

      {tabs && tabs.length > 0 && (
        <FilterTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      )}

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={tabs ? activeTab : "static"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCards.map((card, i) => (
              <motion.div key={`${card.title}-${i}`} variants={fadeInUp}>
                <BlogCard {...card} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
