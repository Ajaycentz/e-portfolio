import "./globals.css";
import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

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

export const metadata: Metadata = {
  title: "Alden Jay Centino | Graphic Designer",
  description:
    "Graphic design portfolio for Alden Jay Centino featuring brand visuals, social creatives, and print design.",
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
      </body>
    </html>
  );
}
