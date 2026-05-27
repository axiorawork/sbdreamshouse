import HeroSection from "@/components/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import AboutPreview from "@/components/sections/AboutPreview";
import RoomsPreview from "@/components/sections/RoomsPreview";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import LocationSection from "@/components/sections/LocationSection";
import CTASection from "@/components/sections/CTASection";
import { generatePageMetadata } from "@/app/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Luxury Homestay in Munnar Kerala",
  description: "S&B Dreams House — a unique cave-inspired homestay in Munnar. Cozy rooms, nature walks, local cuisine, and unforgettable Kerala hospitality.",
  path: "/",
  keywords: ["munnar homestay booking", "cave resort kerala", "best homestay munnar"],
});


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ExperiencesSection />
      <AboutPreview />
      <RoomsPreview />
      <FacilitiesSection />
      <TestimonialsSection />
      <GalleryPreview />
      <LocationSection />
      <CTASection />
    </>
  );
}
