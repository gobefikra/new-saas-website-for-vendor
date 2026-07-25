"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, fadeInRight } from "@/components/motion";
import DashboardMockup from "@/components/blog/BlogDetail/DashboardMockup";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import type { blogPost } from "@/lib/blog-data";

type Post = typeof blogPost;

export default function HeroBlock({ post }: { post: Post }) {
  return (
    <section className="bg-white pt-8 pb-0 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="mb-4">
            <Eyebrow uppercase={false}>{post.category}</Eyebrow>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mt-2">
            {post.title}
          </h1>
          <p className="text-gray-500 text-base mt-4 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="md">
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0" />
            <div>
              <p className="font-semibold text-gray-900 text-sm">
                {post.author.name}
              </p>
              <p className="text-gray-400 text-xs">{post.author.role}</p>
            </div>
            <div className="w-px h-8 bg-gray-200 mx-2 hidden sm:block" />
            <p className="text-gray-400 text-sm">
              {post.date} | {post.readTime}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInRight}
          transition={{ delay: 0.15 }}
        >
          <DashboardMockup className="w-full h-56 md:h-72" />
        </motion.div>
      </div>
    </section>
  );
}
