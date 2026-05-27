"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { EXPERIENCES } from "@/app/lib/constants";
import Link from "next/link";

export default function ExperiencesSection() {
  return (
    <section
      id="experiences"
      aria-label="Our experiences"
      style={{ padding: "60px 1rem", backgroundColor: "#F5F0E8" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionHeading
          label="Curated for You"
          title="Our Experiences"
          subtitle="From misty mountain trails to vibrant local culture, every experience at S&B Dreams House is thoughtfully crafted to connect you with the heart of Munnar."
        />
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ alignItems: "stretch" }}
        >
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              icon={exp.icon}
              title={exp.title}
              description={exp.description}
              image={exp.image}
              alt={exp.alt}
              delay={i * 0.1}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "60px" }}>
          <Link
            href="/experiences"
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
            View All Experiences →
          </Link>
        </div>
      </div>
    </section>
  );
}
