import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us - Befikra Partner",
  description:
    "Talk to the Befikra team. Book a demo, get support, and learn how to grow your travel business faster.",
};

export default function Contact() {
  return <ContactPage />;
}
