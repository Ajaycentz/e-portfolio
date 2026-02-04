import "./globals.css";
import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Analytics } from "@/components/layout/Analytics";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jaycentz.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alden Jay Centino | Graphic Designer",
  description:
    "Graphic design portfolio for Alden Jay Centino featuring brand visuals, social creatives, and print design.",
  openGraph: {
    title: "Alden Jay Centino | Graphic Designer",
    description:
      "Graphic design portfolio for Alden Jay Centino featuring brand visuals, social creatives, and print design.",
    url: siteUrl,
    siteName: "Alden Jay Centino Portfolio",
    type: "website",
    images: ["/prof.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alden Jay Centino | Graphic Designer",
    description:
      "Graphic design portfolio for Alden Jay Centino featuring brand visuals, social creatives, and print design.",
    images: ["/prof.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Providers>
          <CustomCursor />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
