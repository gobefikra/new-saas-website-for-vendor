"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import BlogCard, {
  type BlogCardProps,
  type BlogCardVariant,
} from "@/components/blog/BlogCard";
import FilterTabs from "@/components/blog/FilterTabs";

interface BlogSectionProps {
  id?: string;
  label: string;
  heading: string;
  cards: BlogCardProps[];
  tabs?: string[];
  defaultTab?: string;
}

const TAB_LAYOUTS: Record<string, BlogCardVariant> = {
  "Automation & CRM": "standard",
  "Booking Systems": "overlay",
  "Operations Management": "standard",
  "AI & Insights": "compact",
  "Growth Strategies": "overlay",
  "CRM Automation": "standard",
  "Lead Management": "overlay",
  "Booking Workflow": "compact",
  "Customer Experience": "overlay",
};

export default function BlogSection({
  id,
  label,
  heading,
  cards,
  tabs,
  defaultTab,
}: BlogSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs?.[0] ?? "");

  const filteredCards = tabs
    ? cards.filter((card) => card.category === activeTab)
    : cards;

  const variant: BlogCardVariant =
    (tabs && TAB_LAYOUTS[activeTab]) || "standard";

  return (
    <section id={id} ref={ref} className="scroll-mt-24 bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-6">
          <p className="section-eyebrow mb-2">{label}</p>
          <h2 className="section-title">{heading}</h2>
        </div>

        {tabs && tabs.length > 0 && (
          <FilterTabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={tabs ? activeTab : "static"}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={
              variant === "compact"
                ? "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                : "grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
            }
          >
            {filteredCards.length === 0 ? (
              <p className="col-span-full py-10 text-center text-sm text-subtext">
                No articles in this category yet.
              </p>
            ) : (
              filteredCards.map((card, i) => (
                <motion.div
                  key={card.slug ?? `${card.title}-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.04 * i,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={
                    variant === "overlay" && i === 0
                      ? "sm:col-span-2 lg:col-span-2"
                      : undefined
                  }
                >
                  <BlogCard
                    {...card}
                    variant={variant}
                    featured={variant === "overlay" && i === 0}
                  />
                </motion.div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
