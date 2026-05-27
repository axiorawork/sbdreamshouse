"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/ui/GalleryGrid";
import { GALLERY_IMAGES } from "@/app/lib/constants";

export default function GalleryPreview() {
  const preview = GALLERY_IMAGES.slice(0, 9);

  return (
    <section
      id="gallery"
      aria-label="Photo gallery"
      className="py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor: "#fff" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          label="Visual Journey"
          title="A Glimpse Into Our World"
          subtitle="Every corner of S&B Dreams House tells a story. Take a visual tour before you arrive."
        />
        <GalleryGrid images={preview} />
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link
            href="/gallery"
            style={{
              display: "inline-block",
              backgroundColor: "#0F1912",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "14px 36px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0F1912")}
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
