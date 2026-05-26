"use client";

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
  "Automation & CRM": "from-slate-400 to-slate-600",
  "CRM Automation": "from-slate-400 to-slate-600",
  "Booking Systems": "from-blue-300 to-blue-500",
  "Booking Workflow": "from-blue-300 to-blue-500",
  "Operations Management": "from-teal-300 to-teal-500",
  "AI & Insights": "from-purple-300 to-purple-500",
  "Growth Strategies": "from-emerald-300 to-emerald-500",
  "Lead Management": "from-indigo-300 to-indigo-500",
  "Customer Experience": "from-rose-300 to-rose-500",
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
  const gradient =
    categoryGradients[category] ?? "from-gray-300 to-gray-500";

  const card = (
    <motion.article
      layout
      className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition hover:-translate-y-1 cursor-pointer h-full"
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-3xl bg-gray-200">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
          >
            <MountainSilhouette />
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs text-gray-400 mb-2">
          {date} | {readTime}
        </p>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
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
