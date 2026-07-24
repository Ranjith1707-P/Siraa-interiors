import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SIRAA Interiors | Premium Woodwork & Custom Furniture",
  description: "Bringing elegance indoors. SIRAA Interiors provides custom carpentry, wardrobe cupboards, solid-wood main doors, beds, sofas, and dining tables across Andhra Pradesh, Tamil Nadu, Kerala, Karnataka, and Telangana.",
  keywords: ["SIRAA Interiors", "carpentry", "woodwork", "cupboards", "wardrobes", "main doors", "custom furniture", "dining table", "bed cot", "wood polish", "Sathyavedu", "Andhra Pradesh", "Tamil Nadu", "Kerala", "Karnataka", "Telangana"],
  openGraph: {
    title: "SIRAA Interiors | Premium Woodwork & Custom Furniture",
    description: "Bringing elegance indoors. Over 20 years of craftsmanship experience in wardrobes, designer doors, and custom wood furniture.",
    type: "website",
    locale: "en_IN",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

