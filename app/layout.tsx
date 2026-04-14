import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { siteBrand } from "@/lib/site-content";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteBrand.name} | ${siteBrand.tagline}`,
    template: `%s | ${siteBrand.name}`,
  },
  description:
    "Bespoke AI and SaaS solutions, simplified. We learn the complex technology so you don't have to—then customize it for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${sourceSans.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
