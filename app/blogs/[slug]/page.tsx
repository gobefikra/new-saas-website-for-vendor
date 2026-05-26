import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/BlogDetailPage";
import { blogPost, getBlogPostBySlug, blogSlugs } from "@/lib/blog-data";

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Blog — Befikra Partner" };
  return {
    title: `${post.title} — Befikra Partner`,
    description: post.excerpt.slice(0, 160),
  };
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();
  return <BlogDetailPage />;
}
