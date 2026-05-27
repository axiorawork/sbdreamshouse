import { generatePageMetadata } from "@/app/lib/metadata";
import Image from "next/image";
import { Check } from "lucide-react";

export const metadata = generatePageMetadata(
  "Our Story | S&B Dreams House",
  "The story of S&B Dreams House — a family-run gem in Munnar, Kerala, built with love, heritage, and deep respect for nature since 2016.",
  "/our-story"
);

const timeline = [
  { year: "2016", title: "The Dream Begins", desc: "S&B Dreams House opens its doors as a small family homestay with just 3 rooms, driven by a passion for hospitality and love of Munnar." },
  { year: "2018", title: "Cave Suite Launch", desc: "The iconic cave-themed suite is built by hand — instantly capturing the imagination of travellers and setting us apart from every other property in Munnar." },
  { year: "2020", title: "Diamond Classification", desc: "Awarded the Kerala Tourism Diamond House Classification — recognition of our commitment to quality, authenticity, and exceptional guest experiences." },
  { year: "2022", title: "2000 Guests Milestone", desc: "We welcome our 2,000th guest — a milestone celebrated with family, staff, and the incredible community that has supported us from the beginning." },
  { year: "2024", title: "Expanding Our Story", desc: "New rooms, new experiences, and a renewed commitment to sustainable tourism. The best chapters of S&B Dreams House are still being written." },
];

const values = [
  { icon: "🌿", title: "Rooted in Nature", desc: "Every decision we make honours the landscape that makes Munnar extraordinary. We build with it, not against it." },
  { icon: "🏠", title: "Genuinely Homely", desc: "We're not a hotel. We're a family that loves having guests. That's the difference you'll feel from the moment you arrive." },
  { icon: "🌍", title: "Responsible Tourism", desc: "We prioritise local produce, employ local staff, and actively participate in Munnar's conservation efforts." },
  { icon: "❤️", title: "Personal Care", desc: "We remember your name, your preferences, and why you came. You're never just a booking reference to us." },
];

export default function OurStoryPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "65vh", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/hero_slides/Slide2.webp" alt="S&B Dreams House garden" fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "2rem" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>Since 2016</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Our Story</h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", marginTop: "1rem", maxWidth: "600px", margin: "1rem auto 0" }}>A family's love for Munnar, turned into a home for the world.</p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A" }}>The Beginning</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, color: "#1A1A1A", margin: "0.75rem 0 1.5rem" }}>A Home Away From Home</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "#6B7280", lineHeight: 1.8, fontSize: "16px" }}>
            <p>S&B Dreams House began with a simple idea: that the best way to experience a place is through the eyes and heart of someone who truly belongs there. For us, that place is Munnar.</p>
            <p>Our family has called these misty hills home for generations. When we decided to open our doors to travellers in 2016, we made a promise to ourselves — we would never let it feel like a business. Every guest would be treated as a friend arriving for the first time, and we would share our Munnar as if showing it to someone we loved.</p>
            <p>The cave suite came later — a wild idea that took months of hand-crafting to bring to life. When the first guests stayed in it and said they had never experienced anything like it, we knew we had created something truly special.</p>
            <p>Today, over 2,000 families have stayed with us. Each one has left a mark on us — their stories, their gratitude, their children's laughter in our garden. This is what drives us every single day.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "#F5F0E8" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#1A1A1A", marginBottom: "3rem", textAlign: "center" }}>Our Journey</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((item, i) => (
              <div key={item.year} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                {/* Year + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "80px" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#C89B4A", textAlign: "center" }}>{item.year}</div>
                  {i < timeline.length - 1 && <div style={{ width: "2px", height: "80px", backgroundColor: "rgba(200,155,74,0.3)", margin: "8px 0" }} />}
                </div>
                {/* Content */}
                <div style={{ paddingBottom: i < timeline.length - 1 ? "2rem" : 0 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.5rem" }}>{item.title}</h3>
                  <p style={{ color: "#6B7280", lineHeight: 1.7, fontSize: "15px" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#0F1912" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, color: "#fff", marginBottom: "3rem", textAlign: "center" }}>What We Believe In</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {values.map((v) => (
              <div key={v.title} style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "2rem" }}>
                <div style={{ fontSize: "36px", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
