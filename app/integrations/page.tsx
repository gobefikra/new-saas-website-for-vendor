import type { Metadata } from "next";
import IntegrationsPage from "@/components/IntegrationsPage";

const title = "Integrations";
const description =
  "Connect WhatsApp, Instagram, and your website to Befikra CRM. Capture leads, automate replies, and manage bookings in one dashboard.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: `${title} - Befikra Partner`,
    description,
    url: "/integrations",
  },
  twitter: { title: `${title} - Befikra Partner`, description },
};

export default function Integrations() {
  return <IntegrationsPage />;
}
