import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

const title = "Contact Us";
const description =
  "Talk to the Befikra team. Book a demo, get support, and learn how to grow your travel business faster.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} - Befikra Partner`,
    description,
    url: "/contact",
  },
  twitter: { title: `${title} - Befikra Partner`, description },
};

export default function Contact() {
  return <ContactPage />;
}
