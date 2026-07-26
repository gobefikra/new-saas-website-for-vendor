import type { Metadata } from "next";
import BlogsPage from "@/components/BlogsPage";

const title = "Blogs";
const description =
  "Practical guides and insights on AI, automation, and CRM for trekking and travel businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: `${title} - Befikra Partner`,
    description,
    url: "/blogs",
  },
  twitter: { title: `${title} - Befikra Partner`, description },
};

export default function Blogs() {
  return <BlogsPage />;
}
