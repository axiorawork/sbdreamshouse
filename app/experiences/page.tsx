import { generatePageMetadata } from "@/app/lib/metadata";
import { EXPERIENCES } from "@/app/lib/constants";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = generatePageMetadata(
  "Experiences | S&B Dreams House",
  "Explore nature walks, tea estate tours, kayaking, sunrise viewing, and more curated experiences in Munnar with S&B Dreams House.",
  "/experiences"
);

export default function ExperiencesPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section style={{ position: "relative", height: "60vh", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/hero_slides/Slide1.webp" alt="Experiences in Munnar" fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "2rem" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>Curated For You</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Our Experiences</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", marginTop: "1rem", maxWidth: "600px", margin: "1rem auto 0" }}>Every experience is a window into the real Munnar.</p>
        </div>
      </section>

      {/* Experiences List */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "6rem" }}>
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.id}
              id={exp.id}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "3rem",
                alignItems: "center",
              }}
            >
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}>
                  <Image src={exp.image} alt={exp.alt} width={600} height={420} className="object-cover w-full" style={{ display: "block" }} />
                </div>
              </div>
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{ fontSize: "40px", marginBottom: "1rem" }}>{exp.icon}</div>
                <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A" }}>Experience</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, color: "#1A1A1A", margin: "0.5rem 0 1rem" }}>{exp.title}</h2>
                <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "16px", marginBottom: "1.5rem" }}>{exp.description}</p>
                <p style={{ color: "#6B7280", lineHeight: 1.8, fontSize: "16px" }}>
                  Our knowledgeable local guides ensure you discover hidden corners of Munnar that most tourists never see. All experiences can be arranged during your stay — just let us know your preferences at check-in.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
