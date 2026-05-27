"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  "Registered Kerala Homestay",
  "Diamond House Classification",
  "Family Run Since 2016",
  "Eco-Friendly Practices",
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      aria-label="About S&B Dreams House"
      className="py-16 md:py-24 px-4 md:px-8"
      style={{ backgroundColor: "#fff" }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ position: "relative" }}
        >
          {/* Main image */}
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              border: "4px solid #C89B4A",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            }}
          >
            <Image
              src="/hero_slides/Slide2.webp"
              alt="Lush garden at S&B Dreams House Munnar"
              width={580}
              height={420}
              className="object-cover w-full"
              style={{ display: "block" }}
            />
          </div>
          {/* Overlapping smaller image */}
          <div
            style={{
              position: "absolute",
              bottom: "-28px",
              right: "-28px",
              width: "200px",
              height: "160px",
              borderRadius: "12px",
              overflow: "hidden",
              border: "4px solid #fff",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
          >
            <Image
              src="/hero_slides/Slide3.webp"
              alt="Cozy room interior at S&B Dreams House"
              width={200}
              height={160}
              className="object-cover w-full h-full"
              style={{ display: "block" }}
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          style={{ paddingBottom: "2rem" }}
        >
          <SectionHeading
            label="Our Story"
            title="A Home Away From Home in the Heart of Munnar"
            align="left"
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.75rem" }}>
            <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "16px" }}>
              Nestled in the verdant hills of Munnar, S&B Dreams House was born from a family's deep love for their land and a desire to share its beauty with the world. What began as a humble family home in 2016 has grown into one of Munnar's most beloved homestays.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "16px" }}>
              Our cave-inspired architecture isn't just a design choice — it's a reflection of our philosophy: to let nature lead. Every stone, every plant, every meal is chosen to bring you closer to the extraordinary place we call home.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "16px" }}>
              When you stay with us, you become family. We'll share our favourite trails, cook our most treasured recipes, and go out of our way to make sure you leave with memories that last a lifetime.
            </p>
          </div>

          {/* Feature list */}
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "2rem" }}>
            {features.map((f) => (
              <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "15px", color: "#374151", fontWeight: 500 }}>
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "9999px",
                    backgroundColor: "#C89B4A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={13} color="#fff" strokeWidth={3} />
                </div>
                {f}
              </li>
            ))}
          </ul>

          <Link
            href="/our-story"
            style={{
              display: "inline-block",
              backgroundColor: "#C89B4A",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              padding: "13px 32px",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "background-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b08a3e")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C89B4A")}
          >
            Read Our Full Story →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
