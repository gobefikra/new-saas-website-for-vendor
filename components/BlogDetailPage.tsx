"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import HeroBlock from "@/components/blog/BlogDetail/HeroBlock";
import ArticleBody from "@/components/blog/BlogDetail/ArticleBody";
import Sidebar from "@/components/blog/BlogDetail/Sidebar";
import MoreBlogs from "@/components/blog/BlogDetail/MoreBlogs";
import DetailCTA from "@/components/blog/BlogDetail/DetailCTA";
import { blogPost } from "@/lib/blog-data";

export default function BlogDetailPage() {
  return (
    <main className="min-h-screen bg-white pt-16 md:pt-[4.5rem]">
      <Navbar />
      <ReadingProgressBar />
      <HeroBlock post={blogPost} />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 max-w-6xl mx-auto px-6 md:px-10 py-12">
        <div>
          <ArticleBody />
          <MoreBlogs />
        </div>
        <aside className="hidden lg:block">
          <Sidebar post={blogPost} />
        </aside>
      </div>
      <div className="lg:hidden max-w-6xl mx-auto px-6 md:px-10 pb-12">
        <Sidebar post={blogPost} sticky={false} />
      </div>
      <DetailCTA />
      <Footer />
    </main>
  );
}
