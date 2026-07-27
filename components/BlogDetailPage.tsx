"use client";

import Footer from "@/components/Footer";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import HeroBlock from "@/components/blog/BlogDetail/HeroBlock";
import ArticleBody from "@/components/blog/BlogDetail/ArticleBody";
import Sidebar from "@/components/blog/BlogDetail/Sidebar";
import MoreBlogs from "@/components/blog/BlogDetail/MoreBlogs";
import DetailCTA from "@/components/blog/BlogDetail/DetailCTA";
import type { BlogPost } from "@/lib/blog-data";

export default function BlogDetailPage({ post }: { post: BlogPost }) {
  return (
    <main className="min-h-screen bg-white">
      <ReadingProgressBar />
      <HeroBlock post={post} />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-12 md:px-10 lg:grid-cols-[1fr_340px]">
        <div>
          <ArticleBody post={post} />
          <MoreBlogs currentSlug={post.slug} />
        </div>
        <aside className="hidden lg:block">
          <Sidebar post={post} />
        </aside>
      </div>
      <div className="mx-auto max-w-6xl px-6 pb-12 md:px-10 lg:hidden">
        <Sidebar post={post} sticky={false} />
      </div>
      <DetailCTA />
      <Footer />
    </main>
  );
}
