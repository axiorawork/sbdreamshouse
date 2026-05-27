import type { Metadata } from "next";

const siteUrl = "https://www.sbdreamshouse.com";

export const defaultMetadata: Metadata = {
  title: {
    default: "S&B Dreams House | Luxury Homestay in Munnar, Kerala",
    template: "%s | S&B Dreams House",
  },
  description:
    "Experience a unique cave-inspired stay in the heart of Munnar. S&B Dreams House offers cozy rooms, nature experiences, and warm hospitality in Kerala.",
  keywords: [
    "homestay munnar",
    "kerala homestay",
    "munnar resort",
    "cave homestay kerala",
    "S&B Dreams House",
    "munnar accommodation",
    "luxury homestay kerala",
    "nature resort munnar",
  ],
  authors: [{ name: "S&B Dreams House" }],
  creator: "S&B Dreams House",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "S&B Dreams House",
    images: [{ url: "/hero_slides/Slide1.webp", width: 1200, height: 630, alt: "S&B Dreams House - Luxury Homestay in Munnar" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "S&B Dreams House",
      locale: "en_IN",
      type: "website",
      images: [{ url: "/hero_slides/Slide1.webp", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description },
    alternates: { canonical: `${siteUrl}${path}` },
  };
}

export const lodgingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "S&B Dreams House",
  description:
    "A premium, cave-inspired homestay in the heart of Munnar, Kerala, offering warm hospitality and nature experiences.",
  url: siteUrl,
  telephone: "+919876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Munnar",
    addressLocality: "Munnar",
    addressRegion: "Kerala",
    postalCode: "685612",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.0889,
    longitude: 77.0595,
  },
  starRating: { "@type": "Rating", ratingValue: "4.9" },
  priceRange: "₹₹₹",
  image: `${siteUrl}/hero_slides/Slide1.webp`,
  sameAs: [
    "https://www.instagram.com/sbdreamshouse",
    "https://www.facebook.com/sbdreamshouse",
  ],
};
