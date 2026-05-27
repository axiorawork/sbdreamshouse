import type { Metadata } from "next";
import NavController from "@/components/layout/NavController";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";
import { defaultMetadata, lodgingJsonLd } from "@/app/lib/metadata";
import "./globals.css";

export const metadata: Metadata = defaultMetadata;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#142818",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
        />
      </head>
      <body>
        <NavController />
        <main id="main-content">
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
