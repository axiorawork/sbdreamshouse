"use client";

import { useState } from "react";
import { GALLERY_IMAGES } from "@/app/lib/constants";
import GalleryGrid from "@/components/ui/GalleryGrid";
import Image from "next/image";

const CATEGORIES = ["All", "Rooms", "Garden", "Experiences", "Views", "Food", "Property"];

const catMap: Record<string, string> = {
  All: "all", Rooms: "rooms", Garden: "garden", Experiences: "experiences",
  Views: "views", Food: "food", Property: "property",
};

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((i) => i.category === catMap[cat]);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "50vh", minHeight: "340px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/hero_slides/Slide4.webp" alt="Gallery — S&B Dreams House" fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "2rem", paddingTop: "160px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>Visual Journey</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Our Gallery</h1>
        </div>
      </section>

      {/* Filters */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "1.5rem 2rem", display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            aria-pressed={cat === c}
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              backgroundColor: cat === c ? "#C89B4A" : "#fff",
              color: cat === c ? "#fff" : "#6B7280",
              boxShadow: cat === c ? "0 4px 14px rgba(200,155,74,0.3)" : "0 2px 8px rgba(0,0,0,0.06)",
              transition: "all 0.2s",
            }}
          >
            {c}
          </button>
        ))}
      </section>

      {/* Gallery */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {filtered.length > 0 ? (
            <GalleryGrid images={filtered} />
          ) : (
            <p style={{ textAlign: "center", color: "#9CA3AF", padding: "4rem 0" }}>No images in this category yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
