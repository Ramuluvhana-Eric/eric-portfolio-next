import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eric Mpho Ramuluvhana — SIEM Engineer",
  description:
    "Eric Mpho Ramuluvhana — SIEM Engineer and SC-100 Cybersecurity Architect Expert based in Johannesburg, South Africa. Microsoft Sentinel, Defender XDR, Entra ID and KQL specialist with 12 active certifications.",
  openGraph: {
    title: "Eric Mpho Ramuluvhana — SIEM Engineer",
    description:
      "SC-100 Cybersecurity Architect Expert · Microsoft Sentinel · Defender XDR · Entra ID · Johannesburg, South Africa.",
    type: "profile",
  },
  icons: {
    icon:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230A0E13'/%3E%3Ctext x='16' y='22' font-family='monospace' font-size='15' font-weight='700' fill='%234FD8CB' text-anchor='middle'%3EER%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body text-ink">{children}</body>
    </html>
  );
}
