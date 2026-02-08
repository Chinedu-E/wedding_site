import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})


const SITE_URL = "https://enoandijay.com";
const OG_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDIOcUNoATVPubMdvnaasDAplt0Pgjt8dMAHrxl0u11qSdlWR6DQerqyKGJjSiO44Ht_Rz0mCJeIoaZ3g8EJzyliIN-LNk-jxggLZP-OcHIFipj_GSxuXGCbTM6QNjR-ASfC21ueF0FHKWaDjvXZczoA6h2pGeD4Yhbn30x7rOLTgnHOf6CWpPhGw9SxYjba5R8p4edheUMjJeSsOrGVkPv4CztCdRutBjEU5GKHHLvYUymwv8jyK3sUmKJekgtVmXx4G88p6dFjx0";

export const metadata: Metadata = {
  title: "Eno & Ijay · Wedding",
  description:
    "We're getting married in Manchester, UK on April 16, 2026. Join us for our celebration—details, our story, gallery, and registry all in one place.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Eno & Ijay",
    title: "Eno & Ijay · Wedding",
    description:
      "We're getting married in Manchester, UK on April 16, 2026. Join us for our celebration—details, our story, gallery, and registry all in one place.",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Eno & Ijay wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eno & Ijay · Wedding",
    description:
      "We're getting married in Manchester, UK on April 16, 2026. Join us for our celebration.",
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
