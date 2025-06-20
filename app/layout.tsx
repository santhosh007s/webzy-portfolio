import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webzy | Best Web Development & Digital Services Agency",
  description:
    "Webzy Studios builds fast, beautiful, and conversion-focused websites for modern Indian businesses, personal brands, and startups. Get your online presence in just 7 days.",
  keywords: [
    "Webzy Studios",
    "web development India",
    "website design",
    "portfolio websites",
    "business website India",
    "freelance web developer",
    "affordable website design",
  ],
  authors: [{ name: "Santhosh Perumal", url: "https://webzystudios.com" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Webzy Studios – Best Website Development Company in India",
    description:
      "We craft SEO-ready, mobile-friendly websites for startups and personal brands in India. Let's build your digital identity.",
    url: "https://webzystudios.com",
    siteName: "Webzy Studios",
    images: [
      {
        url: "https://webzystudios.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webzy Studios Website Preview",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webzy Studios – Best Website Development Company in India",
    description:
      "Professional websites built with speed, design, and growth in mind — trusted by Indian brands.",
    images: ["https://webzystudios.com/og-image.jpg"],
  },
  icons: {
    icon: "/webzylogo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
