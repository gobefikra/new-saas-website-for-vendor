"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type BlogCardVariant = "standard" | "overlay" | "compact";

export interface BlogCardProps {
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  category: string;
  imageSrc?: string;
  slug?: string;
  variant?: BlogCardVariant;
  featured?: boolean;
}

const categoryGradients: Record<string, string> = {
  "Automation & CRM": "from-emerald-600 to-[#0A1510]",
  "CRM Automation": "from-emerald-600 to-[#0A1510]",
  "Booking Systems": "from-emerald-500 to-emerald-800",
  "Booking Workflow": "from-emerald-500 to-emerald-800",
  "Operations Management": "from-emerald-500 to-[#0D1F14]",
  "AI & Insights": "from-emerald-400 to-emerald-700",
  "Growth Strategies": "from-emerald-500 to-emerald-700",
  "Lead Management": "from-emerald-500 to-[#0A1510]",
  "Customer Experience": "from-emerald-400 to-emerald-600",
  "Quick Insights": "from-emerald-400 to-emerald-700",
};

function MountainSilhouette() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="absolute bottom-0 left-0 w-full opacity-25"
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

function Media({
  imageSrc,
  title,
  gradient,
  className = "",
}: {
  imageSrc?: string;
  title: string;
  gradient: string;
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const showImage = imageSrc && !imgError;

  return (
    <div className={`relative overflow-hidden bg-[#0A1510] ${className}`}>
      {showImage ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
          <MountainSilhouette />
        </div>
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"
      />
    </div>
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
  variant = "standard",
  featured = false,
}: BlogCardProps) {
  const gradient = categoryGradients[category] ?? "from-emerald-600 to-[#0A1510]";

  let card: ReactNode;

  if (variant === "overlay") {
    card = (
      <motion.article
        layout
        className={`group relative flex h-full min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-[1.35rem] ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-1 hover:ring-emerald-500/30 ${
          featured ? "md:min-h-[340px]" : "md:min-h-[300px]"
        }`}
      >
        <Media
          imageSrc={imageSrc}
          title={title}
          gradient={gradient}
          className="absolute inset-0"
        />
        <div className="relative z-10 mt-auto flex flex-1 flex-col justify-end bg-gradient-to-t from-black/85 via-black/45 to-transparent p-5 md:p-6">
          <span className="mb-3 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
            {category}
          </span>
          <p className="text-[11px] text-white/65">
            {date} · {readTime}
          </p>
          <h3
            className={`mt-2 font-semibold leading-snug tracking-[-0.02em] text-white ${
              featured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-white/70">
            {excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-[12px] font-semibold text-emerald-300">
              Read article
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-emerald-500">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
            </span>
          </div>
        </div>
      </motion.article>
    );
  } else if (variant === "compact") {
    card = (
      <motion.article
        layout
        className="group flex h-full cursor-pointer gap-4 overflow-hidden rounded-[1.25rem] bg-white p-3 ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5 hover:ring-emerald-500/30 sm:flex-col sm:gap-0 sm:p-0"
      >
        <Media
          imageSrc={imageSrc}
          title={title}
          gradient={gradient}
          className="h-24 w-28 shrink-0 rounded-xl sm:aspect-[16/10] sm:h-auto sm:w-full sm:rounded-none"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center px-1 py-1 sm:px-5 sm:pb-5 sm:pt-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-emerald-600">
            {category}
          </p>
          <h3 className="mt-1.5 text-[0.95rem] font-semibold leading-snug text-gray-900 transition-colors group-hover:text-emerald-700 sm:mt-2 sm:text-base">
            {title}
          </h3>
          <p className="mt-1 hidden text-[12px] text-gray-400 sm:mt-2 sm:line-clamp-2 sm:block sm:text-[13px] sm:text-gray-500">
            {excerpt}
          </p>
          <p className="mt-2 text-[11px] text-gray-400">
            {date} · {readTime}
          </p>
        </div>
      </motion.article>
    );
  } else {
    card = (
      <motion.article
        layout
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.35rem] bg-white ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-1 hover:ring-emerald-500/30 hover:shadow-[0_24px_50px_-28px_rgba(16,185,129,0.35)]"
      >
        <div className="relative">
          <Media
            imageSrc={imageSrc}
            title={title}
            gradient={gradient}
            className="aspect-[16/10] w-full"
          />
          <div className="absolute left-4 top-4">
            <span className="inline-flex rounded-full border border-white/20 bg-black/35 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
              {category}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col px-5 pb-5 pt-5 md:px-6 md:pb-6">
          <p className="flex items-center gap-2 text-[11px] text-gray-400">
            <span>{date}</span>
            <span className="h-1 w-1 rounded-full bg-emerald-400/70" aria-hidden />
            <span>{readTime}</span>
          </p>
          <h3 className="mt-3 text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-gray-900 transition-colors duration-300 group-hover:text-emerald-700 md:text-lg">
            {title}
          </h3>
          <p className="font-dm-sans mt-2.5 line-clamp-2 text-[13px] leading-relaxed text-gray-500 md:text-sm">
            {excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="text-[12px] font-semibold text-emerald-600">
              Read article
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition duration-300 group-hover:bg-emerald-500 group-hover:text-white">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} aria-hidden />
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  if (slug) {
    return (
      <Link href={`/blogs/${slug}`} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
