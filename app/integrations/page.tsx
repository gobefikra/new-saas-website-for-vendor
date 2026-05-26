import type { Metadata } from "next";
import IntegrationsPage from "@/components/IntegrationsPage";

export const metadata: Metadata = {
  title: "Integrations — Befikra Partner",
  description:
    "Connect WhatsApp, Instagram, and your website to Befikra CRM. Capture leads, automate replies, and manage bookings in one dashboard.",
};

export default function Integrations() {
  return <IntegrationsPage />;
}
