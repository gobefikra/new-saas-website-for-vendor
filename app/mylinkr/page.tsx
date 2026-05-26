import type { Metadata } from "next";
import MyLinkrPage from "@/components/MyLinkrPage";

export const metadata: Metadata = {
  title: "MyLinkr — Befikra Partner",
  description:
    "Create your booking-ready mini website with MyLinkr. Templates, analytics, social hub, and event booking — all in one place.",
};

export default function MyLinkr() {
  return <MyLinkrPage />;
}
