import type { Metadata } from "next";
import MyLinkrPage from "@/components/MyLinkrPage";

const title = "MyLinkr";
const description =
  "Create your booking-ready mini website with MyLinkr. Templates, analytics, social hub, and event booking - all in one place.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/mylinkr" },
  openGraph: {
    title: `${title} - Befikra Partner`,
    description,
    url: "/mylinkr",
  },
  twitter: { title: `${title} - Befikra Partner`, description },
};

export default function MyLinkr() {
  return <MyLinkrPage />;
}
