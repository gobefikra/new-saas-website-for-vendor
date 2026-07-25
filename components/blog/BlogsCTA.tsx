"use client";

import CtaBand from "@/components/ui/CtaBand";

export default function BlogsCTA() {
  return (
    <CtaBand
      title={
        <>
          Stay Ahead with Smarter
          <br />
          Trek Operations
        </>
      }
      subtitle="Get the latest insights on automation, AI tools, and growth strategies for trekking businesses."
      primary={{ label: "Start for Free", href: "/contact" }}
      secondary={{ label: "Learn More", href: "/contact" }}
    />
  );
}
