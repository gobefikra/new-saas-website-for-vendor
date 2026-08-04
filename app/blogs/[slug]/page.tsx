import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/BlogDetailPage";
import JsonLd from "@/components/JsonLd";
import { getBlogPostBySlug, blogSlugs } from "@/lib/blog-data";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { toIsoDate } from "@/lib/site";

export async function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  // Next 15+ : route params are async.
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Blog" };

  const description = post.excerpt.slice(0, 160);
  const url = `/blogs/${post.slug}`;

  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url,
      publishedTime: toIsoDate(post.date),
      authors: [post.author.name],
      section: post.category,
      images: [{ url: post.imageSrc, width: 1200, height: 720, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [post.imageSrc],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
          { name: post.title, path: `/blogs/${post.slug}` },
        ])}
      />
      <BlogDetailPage post={post} />
    </>
  );
}
