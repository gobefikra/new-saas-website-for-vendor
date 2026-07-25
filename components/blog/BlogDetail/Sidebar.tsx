"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";
import Button from "@/components/ui/Button";
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
        <Button
          href="/contact"
          variant="primary"
          size="sm"
          className="mt-5 w-full"
        >
          Try Befikra CRM Free
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
        </Button>
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
