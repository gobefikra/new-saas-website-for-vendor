import type { Metadata } from "next";
import BlogsPage from "@/components/BlogsPage";

export const metadata: Metadata = {
  title: "Blogs — Befikra Partner",
  description:
    "Practical guides and insights on AI, automation, and CRM for trekking and travel businesses.",
};

export default function Blogs() {
  return <BlogsPage />;
}
