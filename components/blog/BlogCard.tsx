"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export interface BlogCardProps {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  category: string;
  imageSrc?: string;
  slug?: string;
}

const categoryGradients: Record<string, string> = {
  "Automation & CRM": "from-slate-500 to-slate-700",
  "CRM Automation": "from-slate-500 to-slate-700",
  "Booking Systems": "from-emerald-400 to-teal-600",
  "Booking Workflow": "from-emerald-400 to-teal-600",
  "Operations Management": "from-teal-400 to-cyan-600",
  "AI & Insights": "from-violet-400 to-purple-600",
  "Growth Strategies": "from-green-400 to-emerald-600",
  "Lead Management": "from-indigo-400 to-blue-600",
  "Customer Experience": "from-rose-400 to-pink-600",
  "Quick Insights": "from-gray-400 to-gray-600",
};

function MountainSilhouette() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="absolute bottom-0 left-0 w-full opacity-30"
      aria-hidden
    >
      <polygon
        points="0,200 100,80 180,140 260,60 340,120 400,90 400,200"
        fill="white"
      />
      <polygon
        points="0,200 60,120 130,160 200,100 270,140 330,110 400,130 400,200"
        fill="white"
        opacity="0.5"
      />
    </svg>
  );
}

export default function BlogCard({
  date,
  readTime,
  title,
  excerpt,
  category,
  imageSrc,
  slug,
}: BlogCardProps) {
  const [imgError, setImgError] = useState(false);
  const gradient = categoryGradients[category] ?? "from-gray-400 to-gray-600";
  const showImage = imageSrc && !imgError;

  const card = (
    <motion.article
      layout
      className="h-full cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {showImage ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
            <MountainSilhouette />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-gray-700 backdrop-blur-sm">
          {category}
        </span>
      </div>
      <div className="p-5">
        <p className="mb-2 text-xs text-gray-400">
          {date} · {readTime}
        </p>
        <h3 className="mb-2 text-base font-bold leading-snug text-gray-900">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-gray-500">
          {excerpt}
        </p>
      </div>
    </motion.article>
  );

  if (slug) {
    return (
      <Link href={`/blogs/${slug}`} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
