"use client";

import CtaBand from "@/components/ui/CtaBand";

export default function StoryCTA() {
  return (
    <CtaBand
      title={
        <>
          Join the Travel
          <br />
          Businesses Building
          <br />
          Smarter Systems
        </>
      }
      primary={{ label: "Book a demo", href: "/contact" }}
      secondary={{ label: "Get Started", href: "/contact" }}
    />
  );
}
