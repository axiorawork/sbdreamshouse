"use client";

import { useState } from "react";
import { ROOMS } from "@/app/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

// Note: Can't export metadata from 'use client' — use a separate metadata file or remove 'use client' and handle state differently.
// For simplicity, metadata is set at the module level here without 'use client'.
// The filter interaction requires client state.

const FILTERS = ["All", "Budget", "Premium", "Suite"];

export default function RoomsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? ROOMS : ROOMS.filter((r) => r.category === filter.toLowerCase());

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "380px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/hero_slides/Slide3.webp" alt="S&B Dreams House rooms" fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "2rem", paddingTop: "160px" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>Where You&apos;ll Stay</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Our Rooms</h1>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ backgroundColor: "#F5F0E8", padding: "1.5rem 2rem", display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            style={{
              padding: "8px 22px",
              borderRadius: "9999px",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
              backgroundColor: filter === f ? "#C89B4A" : "#fff",
              color: filter === f ? "#fff" : "#6B7280",
              boxShadow: filter === f ? "0 4px 14px rgba(200,155,74,0.3)" : "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {f}
          </button>
        ))}
      </section>

      {/* Rooms */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {filtered.map((room, i) => (
            <div
              key={room.id}
              id={room.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "start",
              }}
            >
              <div style={{ order: i % 2 === 0 ? 0 : 1, borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
                <Image src={room.image} alt={room.alt} width={600} height={440} className="object-cover w-full" style={{ display: "block" }} />
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                {room.highlight && (
                  <span style={{ display: "inline-block", backgroundColor: "#C89B4A", color: "#fff", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 14px", borderRadius: "9999px", marginBottom: "0.75rem" }}>{room.highlight}</span>
                )}
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.75rem" }}>{room.name}</h2>
                <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "16px", marginBottom: "1.5rem" }}>{room.description}</p>

                {/* Amenities */}
                <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#374151", marginBottom: "0.75rem" }}>Amenities</h3>
                <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "2rem" }}>
                  {room.amenities.map((a) => {
                    return (
                      <li key={a} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "14px", color: "#374151" }}>
                        <Check size={14} color="#C89B4A" /> {a}
                      </li>
                    );
                  })}
                </ul>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "11px", color: "#9CA3AF" }}>Starting from</div>
                    <div style={{ fontSize: "28px", fontWeight: 700, color: "#C89B4A" }}>₹{room.priceFrom.toLocaleString()}<span style={{ fontSize: "14px", fontWeight: 400, color: "#9CA3AF" }}>/night</span></div>
                  </div>
                  <Link href="/contact" style={{ display: "inline-block", backgroundColor: "#C89B4A", color: "#fff", fontSize: "14px", fontWeight: 700, padding: "13px 32px", borderRadius: "9999px", textDecoration: "none", transition: "background-color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b08a3e")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
                  >
                    Book This Room
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import type React from "react";
