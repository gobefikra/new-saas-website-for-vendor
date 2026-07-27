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
  "Automation & CRM": "from-emerald-600 to-[#06140F]",
  "CRM Automation": "from-emerald-600 to-[#06140F]",
  "Booking Systems": "from-brand-green to-emerald-800",
  "Booking Workflow": "from-brand-green to-emerald-800",
  "Operations Management": "from-brand-green to-[#1F4D38]",
  "AI & Insights": "from-brand-green to-emerald-700",
  "Growth Strategies": "from-brand-green to-emerald-700",
  "Lead Management": "from-brand-green to-[#06140F]",
  "Customer Experience": "from-brand-green to-brand-green-dark",
  "Quick Insights": "from-brand-green to-emerald-700",
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
    <div className={`relative overflow-hidden bg-dark ${className}`}>
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
  const gradient = categoryGradients[category] ?? "from-emerald-600 to-[#06140F]";

  let card: ReactNode;

  if (variant === "overlay") {
    card = (
      <motion.article
        layout
        className={`group relative flex h-full min-h-[280px] cursor-pointer flex-col overflow-hidden rounded-2xl border border-border-default bg-white shadow-card transition-all duration-200 ease-brand hover:-translate-y-1.5 hover:border-brand-green hover:shadow-card-hover ${
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
            <span className="text-[12px] font-semibold text-brand-green">
              Read article
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-brand-green">
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
        className="group flex h-full cursor-pointer gap-4 overflow-hidden rounded-2xl border border-border-default bg-white p-3 shadow-card transition-all duration-200 ease-brand hover:-translate-y-1.5 hover:border-brand-green hover:shadow-card-hover sm:flex-col sm:gap-0 sm:p-0"
      >
        <Media
          imageSrc={imageSrc}
          title={title}
          gradient={gradient}
          className="h-24 w-28 shrink-0 rounded-xl sm:aspect-[16/10] sm:h-auto sm:w-full sm:rounded-none"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center px-1 py-1 sm:px-5 sm:pb-5 sm:pt-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-brand-green-dark">
            {category}
          </p>
          <h3 className="mt-1.5 text-[0.95rem] font-semibold leading-snug text-navy transition-colors group-hover:text-brand-green-dark sm:mt-2 sm:text-base">
            {title}
          </h3>
          <p className="mt-1 hidden text-[12px] text-gray-400 sm:mt-2 sm:line-clamp-2 sm:block sm:text-[13px] sm:text-subtext">
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
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border-default bg-white shadow-card transition-all duration-200 ease-brand hover:-translate-y-1.5 hover:border-brand-green hover:shadow-card-hover"
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
            <span className="h-1 w-1 rounded-full bg-brand-green/70" aria-hidden />
            <span>{readTime}</span>
          </p>
          <h3 className="mt-3 text-[1.05rem] font-semibold leading-snug tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-brand-green-dark md:text-lg">
            {title}
          </h3>
          <p className="font-sans mt-2.5 line-clamp-2 text-[13px] leading-relaxed text-subtext md:text-sm">
            {excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-5">
            <span className="text-[12px] font-semibold text-brand-green-dark">
              Read article
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green-light text-brand-green-dark transition duration-300 group-hover:bg-brand-green group-hover:text-white">
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
