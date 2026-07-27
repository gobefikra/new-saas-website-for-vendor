"use client";

import CtaBand from "@/components/ui/CtaBand";

export default function DetailCTA() {
  return (
    <CtaBand
      title={
        <>
          Ready to experience
          <br />
          the difference?
        </>
      }
      subtitle="Join thousands of teams building better products faster with Befikra's real-time infrastructure."
      primary={{ label: "Start for Free", href: "/contact" }}
      secondary={{ label: "Learn More", href: "/contact" }}
    />
  );
}
