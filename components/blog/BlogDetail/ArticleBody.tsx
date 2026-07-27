"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/components/motion";
import DashboardMockup from "@/components/blog/BlogDetail/DashboardMockup";
import type { BlogPost } from "@/lib/blog-data";

function AnimatedH2({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="mt-10 mb-4 text-2xl font-bold text-navy"
    >
      {children}
    </motion.h2>
  );
}

function AnimatedImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [imgError, setImgError] = useState(false);

  return (
    <motion.figure
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8"
    >
      {!imgError ? (
        <div className="relative h-64 w-full overflow-hidden rounded-2xl">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="800px"
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 p-6">
          <div className="w-full max-w-md">
            <DashboardMockup />
          </div>
        </div>
      )}
      {caption && (
        <figcaption className="mb-6 mt-2 text-center text-sm text-gray-400">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

function CalloutBox({ title, text }: { title: string; text: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
      className="my-8 rounded-2xl border border-brand-green/30 border-l-4 border-l-emerald-500 bg-brand-green-light p-5"
    >
      <p className="mb-2 text-sm font-semibold text-brand-green-dark">{title}</p>
      <p className="text-sm leading-relaxed text-subtext">{text}</p>
    </motion.div>
  );
}

export default function ArticleBody({ post }: { post: BlogPost }) {
  return (
    <article key={post.slug} className="text-base leading-relaxed text-subtext">
      {post.body.map((block, i) => {
        const key = `${post.slug}-${block.type}-${i}`;
        switch (block.type) {
          case "p":
            return (
              <p key={key} className="mb-5">
                {block.text}
              </p>
            );
          case "h2":
            return <AnimatedH2 key={key}>{block.text}</AnimatedH2>;
          case "image":
            return (
              <AnimatedImage
                key={key}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
              />
            );
          case "callout":
            return (
              <CalloutBox key={key} title={block.title} text={block.text} />
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
