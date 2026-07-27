"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, fadeInRight } from "@/components/motion";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import type { BlogPost } from "@/lib/blog-data";

export default function HeroBlock({ post }: { post: BlogPost }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      key={post.slug}
      className="mx-auto max-w-6xl bg-white px-6 pb-0 pt-8 md:px-10"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <div className="mb-4">
            <Eyebrow uppercase={false}>{post.category}</Eyebrow>
          </div>
          <h1 className="mt-2 text-3xl font-display font-semibold tracking-[-0.02em] leading-tight text-navy md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-subtext">
            {post.excerpt}
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="md">
              Book a Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border-default pt-6">
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
            <div className="mx-2 hidden h-8 w-px bg-gray-200 sm:block" />
            <p className="text-sm text-gray-400">
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
          <div className="relative h-56 overflow-hidden rounded-2xl bg-gray-100 md:h-72">
            {!imgError ? (
              <Image
                src={post.imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-[#06140F]" />
            )}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
