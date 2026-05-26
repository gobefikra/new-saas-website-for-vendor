import type { Metadata } from "next";
import OurStoryPage from "@/components/OurStoryPage";

export const metadata: Metadata = {
  title: "Our Story — Befikra Partner",
  description:
    "How Befikra was built with travel founders — from missed leads and spreadsheet chaos to one intelligent CRM for experience-based businesses.",
};

export default function OurStory() {
  return <OurStoryPage />;
}
