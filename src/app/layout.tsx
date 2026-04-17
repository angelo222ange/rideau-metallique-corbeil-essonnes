import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "DRM Corbeil-Essonnes - Depannage Rideau Metallique 24h/24",
    template: "%s | DRM Corbeil-Essonnes",
  },
  description:
    "Depannage rideau metallique a Corbeil-Essonnes (91100) 24h/24 7j/7. Intervention en 30 min. Devis gratuit. 25+ ans d'experience. Tel : 01 84 18 04 99.",
  keywords: [
    "depannage rideau metallique Corbeil-Essonnes",
    "reparation rideau metallique Essonne",
    "rideau metallique 91100",
    "urgence rideau metallique Corbeil",
  ],
  authors: [{ name: "DRM Corbeil-Essonnes" }],
  creator: "DRM Corbeil-Essonnes",
  publisher: "DRM Corbeil-Essonnes",
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteConfig.url,
    siteName: "DRM Corbeil-Essonnes",
    title: "DRM Corbeil-Essonnes - Depannage Rideau Metallique 24h/24",
    description:
      "Depannage rideau metallique a Corbeil-Essonnes 24h/24 7j/7. Intervention en 30 min. Tel : 01 84 18 04 99.",
    images: [
      {
        url: "/images/gallery/depannage-rideau-metallique-drm-reparation.webp",
        width: 1200,
        height: 630,
        alt: "DRM Corbeil-Essonnes - Depannage rideau metallique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRM Corbeil-Essonnes - Depannage Rideau Metallique 24h/24",
    description: "Intervention 24h/24 a Corbeil-Essonnes. Tel : 01 84 18 04 99.",
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
