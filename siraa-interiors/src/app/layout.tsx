import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SIRAA Interiors | Custom Woodworks & Furniture",
  description: "SIRAA Interiors brings elegance indoors. Seasoned carpentry and woodworks with 20+ years experience based in Sathyavedu, Andhra Pradesh, servicing Tamil Nadu, Andhra Pradesh, Karnataka, Telangana, and Kerala.",
  keywords: "Siraa Interiors, carpentry, woodworks, cupboard rates, main doors, custom furniture, wardrobes, cots, cots and beds, custom dining table, study desk, coffee tables, Tamil Nadu, Andhra Pradesh, Sathyavedu, Kerala, Karnataka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-stone-950 font-sans text-cream">
        {children}
      </body>
    </html>
  );
}
