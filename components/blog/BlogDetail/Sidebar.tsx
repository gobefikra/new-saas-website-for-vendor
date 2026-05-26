"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";
import { popularArticles } from "@/lib/blog-data";
import type { blogPost } from "@/lib/blog-data";

type Post = typeof blogPost;

export default function Sidebar({
  post,
  sticky = true,
}: {
  post: Post;
  sticky?: boolean;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={`space-y-6 ${sticky ? "sticky top-24" : ""}`}
    >
      <motion.div
        variants={fadeInUp}
        className="bg-white border border-gray-200 rounded-2xl p-5"
      >
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
          About the Author
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0" />
          <div>
            <p className="font-semibold text-gray-900 text-sm">
              {post.author.name}
            </p>
            <p className="text-gray-400 text-xs">{post.author.role}</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          {post.author.bio}
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="bg-gray-900 rounded-2xl p-6 text-white"
      >
        <div className="bg-[#1A3A25] rounded-xl p-2 w-10 h-10 flex items-center justify-center mb-4">
          <TrendingUp className="text-emerald-400 w-5 h-5" />
        </div>
        <h3 className="font-bold text-white text-lg leading-snug">
          Ready to scale your trekking agency?
        </h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">
          Stop wrestling with spreadsheets. Let Befikra handle the bookings,
          waivers, and payments so you can focus on the climb.
        </p>
        <Link
          href="/contact"
          className="mt-5 w-full flex items-center justify-center gap-2 bg-emerald-500 text-white rounded-full py-3 font-semibold text-sm hover:bg-emerald-600 transition-colors"
        >
          Try Befikra CRM Free ›
        </Link>
        <p className="text-gray-500 text-xs text-center mt-2">
          No credit card required. 14-day trial.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="bg-white border border-gray-200 rounded-2xl p-5"
      >
        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-4">
          Popular Articles
        </p>
        <div className="space-y-4">
          {popularArticles.map((article) => (
            <div key={article.title} className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-100 shrink-0" />
              <div>
                <p className="font-semibold text-gray-800 text-sm leading-snug">
                  {article.title}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{article.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
