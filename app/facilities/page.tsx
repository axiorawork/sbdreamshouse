import { generatePageMetadata } from "@/app/lib/metadata";
import Image from "next/image";
import { Wifi, Car, UtensilsCrossed, Bell, Map, PlaneLanding, WashingMachine, Droplets, Trees } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = generatePageMetadata(
  "Facilities | S&B Dreams House",
  "Discover all the facilities and amenities at S&B Dreams House — free WiFi, home-cooked meals, guided tours, airport pickup, nature garden, and more.",
  "/facilities"
);

const ICON_MAP: Record<string, LucideIcon> = { Wifi, Car, UtensilsCrossed, Bell, Map, PlaneLanding, WashingMachine, Droplets, Trees };

const facilities = [
  { icon: "Wifi", title: "Free WiFi", description: "High-speed wireless internet is available throughout the property — in every room, the garden, and common areas. Stay connected without compromise.", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { icon: "Car", title: "Free Parking", description: "Dedicated, secure parking space for every guest vehicle. Drive down the Western Ghats with complete peace of mind.", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { icon: "UtensilsCrossed", title: "Home-cooked Meals", description: "Every meal is prepared fresh using local ingredients — many grown in our own garden. Breakfast, lunch, and dinner available on request.", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80" },
  { icon: "Bell", title: "Room Service", description: "In-room dining is available throughout the day. Whether it's a late-night chai or a full Kerala breakfast in bed, we'll bring it to you.", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" },
  { icon: "Map", title: "Guided Tours", description: "Our expert local guides lead you to the best of Munnar — tea estates, waterfalls, wildlife sanctuaries, and secret viewpoints most tourists never find.", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80" },
  { icon: "PlaneLanding", title: "Airport Pickup", description: "Complimentary transfer from Cochin International Airport. Start your Munnar experience the moment you land — relaxed and well-cared for.", img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=600&q=80" },
  { icon: "WashingMachine", title: "Laundry Service", description: "Same-day laundry is available for all guests. Pack lighter and trust us to keep everything fresh and crisp throughout your stay.", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80" },
  { icon: "Droplets", title: "24-Hour Hot Water", description: "All rooms are fitted with reliable hot water systems. Mountain mornings can be cool — your shower never will be.", img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80" },
  { icon: "Trees", title: "Nature Garden", description: "Our sprawling private garden is filled with tropical plants, fruit trees, and birdsong. The perfect place for morning meditation, evening tea, or an afternoon nap.", img: "/hero_slides/Slide2.webp" },
];

const policies = [
  { label: "Check-In", value: "12:00 PM onwards" },
  { label: "Check-Out", value: "11:00 AM" },
  { label: "Meals", value: "Breakfast included; others on request" },
  { label: "Pets", value: "Not allowed" },
  { label: "Smoking", value: "Designated outdoor areas only" },
  { label: "Visitors", value: "Prior notice required" },
];

export default function FacilitiesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", height: "55vh", minHeight: "360px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/hero_slides/Slide2.webp" alt="S&B Dreams House garden facilities" fill className="object-cover" priority />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.55)" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "2rem" }}>
          <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C89B4A", display: "block", marginBottom: "1rem" }}>Everything You Need</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>Facilities & Amenities</h1>
        </div>
      </section>

      {/* Facilities Grid */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
          {facilities.map((f) => {
            const Icon = ICON_MAP[f.icon];
            return (
              <div key={f.title} style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ position: "relative", height: "180px" }}>
                  <Image src={f.img} alt={f.title} fill className="object-cover" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                  <div style={{ position: "absolute", bottom: "12px", left: "16px", width: "40px", height: "40px", borderRadius: "10px", backgroundColor: "#C89B4A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon size={20} color="#fff" />
                  </div>
                </div>
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.5rem" }}>{f.title}</h2>
                  <p style={{ color: "#6B7280", fontSize: "14px", lineHeight: 1.7 }}>{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Policies */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "#F5F0E8" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, color: "#1A1A1A", marginBottom: "2rem", textAlign: "center" }}>House Policies</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {policies.map((p) => (
              <div key={p.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#fff", padding: "1rem 1.5rem", borderRadius: "12px", border: "1px solid rgba(0,0,0,0.07)" }}>
                <span style={{ fontWeight: 600, color: "#374151", fontSize: "14px" }}>{p.label}</span>
                <span style={{ color: "#6B7280", fontSize: "14px" }}>{p.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
