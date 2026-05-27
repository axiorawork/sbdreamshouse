import type { Metadata } from "next";

const siteUrl = "https://www.sbdreamshouse.com";

export const siteConfig = {
  name: "S&B Dreams House",
  description:
    "Experience a unique cave-inspired luxury homestay in the heart of Munnar, Kerala. Cozy rooms, nature experiences, and warm hospitality await.",
  url: siteUrl,
  ogImage: "/hero_slides/Slide1.webp",
  keywords: [
    "homestay munnar",
    "kerala homestay",
    "munnar resort",
    "cave homestay kerala",
    "S&B Dreams House",
    "luxury homestay munnar",
    "best homestay munnar",
    "munnar accommodation",
    "kerala tourism stay",
    "family homestay kerala",
    "nature resort munnar",
  ],
};

export const defaultMetadata: Metadata = {
  title: {
    default: "S&B Dreams House | Luxury Homestay in Munnar, Kerala",
    template: "%s | S&B Dreams House",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "S&B Dreams House" }],
  creator: "S&B Dreams House",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "S&B Dreams House — Luxury Homestay in Munnar Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: siteUrl },
};

export function generatePageMetadata(page: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const fullTitle = `${page.title} | S&B Dreams House Munnar`;
  return {
    title: fullTitle,
    description: page.description,
    keywords: [...siteConfig.keywords, ...(page.keywords || [])],
    authors: [{ name: "S&B Dreams House" }],
    creator: "S&B Dreams House",
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `${siteUrl}${page.path}`,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: `${siteUrl}${page.path}`,
      siteName: siteConfig.name,
      title: fullTitle,
      description: page.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "S&B Dreams House — Luxury Homestay in Munnar Kerala",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: page.description,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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
  email: "info@sbdreamshouse.com",
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
  priceRange: "₹₹",
  image: `${siteUrl}/hero_slides/Slide1.webp`,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/sbdreamshouse",
    "https://www.facebook.com/sbdreamshouse",
  ],
};
