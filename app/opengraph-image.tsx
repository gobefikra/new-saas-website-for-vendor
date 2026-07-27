import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const runtime = "edge";
export const alt = `${SITE_NAME} — India's Intelligent CRM for Travel Brands`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 18% 12%, #0d3d2e 0%, #071b14 45%, #04110d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#2D6A4F",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2D6A4F",
            }}
          />
          {SITE_NAME}
        </div>

        <div
          style={{
            marginTop: 34,
            fontSize: 76,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 900,
          }}
        >
          India&apos;s Intelligent CRM for Travel Brands
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.68)",
            maxWidth: 820,
          }}
        >
          {SITE_DESCRIPTION}
        </div>

        <div
          style={{
            marginTop: 46,
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {["Automation", "Bookings", "AI Insights"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "10px 24px",
                borderRadius: 999,
                border: "1px solid rgba(52,211,153,0.35)",
                background: "rgba(45,106,79,0.12)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
