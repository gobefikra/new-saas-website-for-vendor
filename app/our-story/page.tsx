import type { Metadata } from "next";
import OurStoryPage from "@/components/OurStoryPage";

const title = "Our Story";
const description =
  "How Befikra was built with travel founders - from missed leads and spreadsheet chaos to one intelligent CRM for experience-based businesses.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/our-story" },
  openGraph: {
    title: `${title} - Befikra Partner`,
    description,
    url: "/our-story",
  },
  twitter: { title: `${title} - Befikra Partner`, description },
};

export default function OurStory() {
  return <OurStoryPage />;
}
