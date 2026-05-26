"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import { fadeInUp, staggerContainer } from "@/components/motion";
import { moreFromBlog } from "@/lib/blog-data";

export default function MoreBlogs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-gray-900 text-2xl">More from the blog</h2>
        <Link
          href="/blogs"
          className="text-emerald-500 font-semibold text-sm hover:text-emerald-600"
        >
          View All ›
        </Link>
      </div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5"
      >
        {moreFromBlog.map((card, i) => (
          <motion.div key={`${card.title}-${i}`} variants={fadeInUp}>
            <BlogCard {...card} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
