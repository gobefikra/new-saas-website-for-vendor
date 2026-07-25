"use client";

import CtaBand from "@/components/ui/CtaBand";

export default function MyLinkrCTA() {
  return (
    <CtaBand
      title={
        <>
          Connect Your
          <br />
          Customer Channels
        </>
      }
      subtitle="Capture leads, reply instantly, and manage bookings from WhatsApp, Instagram, and Befikra - all in one powerful CRM."
      primary={{ label: "Book a demo", href: "/contact" }}
      secondary={{ label: "Learn More", href: "/contact" }}
    />
  );
}
