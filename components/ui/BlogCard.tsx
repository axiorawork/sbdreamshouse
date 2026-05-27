"use client";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  alt: string;
}

export default function BlogCard({ slug, title, excerpt, category, readTime, date, image, alt }: BlogCardProps) {
  return (
    <article
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        border: "1px solid rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s",
      }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.14)"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)"; }}
    >
      {/* Image */}
      <Link href={`/blog/${slug}`} style={{ display: "block", position: "relative", height: "200px", overflow: "hidden" }}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          style={{ transition: "transform 0.4s" }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: "#C89B4A",
            color: "#fff",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "9999px",
          }}
        >
          {category}
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <div style={{ display: "flex", gap: "1rem", fontSize: "12px", color: "#9CA3AF" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Calendar size={12} /> {date}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Clock size={12} /> {readTime}
          </span>
        </div>
        <Link href={`/blog/${slug}`} style={{ textDecoration: "none" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1A1A1A",
              lineHeight: 1.3,
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C89B4A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
          >
            {title}
          </h3>
        </Link>
        <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6, flex: 1 }}>
          {excerpt}
        </p>
        <Link
          href={`/blog/${slug}`}
          style={{
            color: "#C89B4A",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "4px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.gap = "8px")}
          onMouseLeave={(e) => (e.currentTarget.style.gap = "4px")}
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
