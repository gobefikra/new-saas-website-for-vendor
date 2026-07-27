"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { fadeInUp, staggerContainer } from "@/components/motion";
import { getRelatedPosts } from "@/lib/blog-data";

export default function MoreBlogs({ currentSlug }: { currentSlug: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const cards = getRelatedPosts(currentSlug, 3);

  return (
    <section ref={ref} className="mt-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-navy">More from the blog</h2>
        <Link
          href="/blogs"
          className="text-sm font-semibold text-brand-green hover:text-brand-green-dark"
        >
          View All ›
        </Link>
      </div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 gap-5 sm:grid-cols-3"
      >
        {cards.map((card) => (
          <motion.div key={card.slug} variants={fadeInUp}>
            <BlogCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
