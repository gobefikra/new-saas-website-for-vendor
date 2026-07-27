"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/motion";
import Button from "@/components/ui/Button";
import { popularArticles, type BlogPost } from "@/lib/blog-data";

export default function Sidebar({
  post,
  sticky = true,
}: {
  post: BlogPost;
  sticky?: boolean;
}) {
  return (
    <motion.div
      key={post.slug}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className={`space-y-6 ${sticky ? "sticky top-24" : ""}`}
    >
      <motion.div
        variants={fadeInUp}
        className="card-brand-static p-5"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-subtext">
          About the Author
        </p>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green-light text-sm font-bold text-brand-green-dark">
            {post.author.name
              .split(" ")
              .map((n) => n[0])
              .slice(0, 2)
              .join("")}
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">
              {post.author.name}
            </p>
            <p className="text-xs text-gray-400">{post.author.role}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-subtext">
          {post.author.bio}
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="card-brand-dark p-6 text-white"
      >
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A3A25] p-2">
          <TrendingUp className="h-5 w-5 text-brand-green" />
        </div>
        <h3 className="text-lg font-bold leading-snug text-white">
          Ready to scale your trekking agency?
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-400">
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
        <p className="mt-2 text-center text-xs text-subtext">
          No credit card required. 14-day trial.
        </p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        className="card-brand-static p-5"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-subtext">
          Popular Articles
        </p>
        <div className="space-y-4">
          {popularArticles.map((article) => {
            const inner = (
              <>
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-100" />
                <div>
                  <p className="text-sm font-semibold leading-snug text-gray-800">
                    {article.title}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">{article.meta}</p>
                </div>
              </>
            );
            return article.slug ? (
              <Link
                key={article.title}
                href={`/blogs/${article.slug}`}
                className="flex items-start gap-3 transition hover:opacity-80"
              >
                {inner}
              </Link>
            ) : (
              <div key={article.title} className="flex items-start gap-3">
                {inner}
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}
