import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader";
import { CustomCursor } from "@/components/ui/custom-cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://musaddiq-rafi.vercel.app"),
  title: {
    default: "Abdullah Al Musaddiq Rafi | Portfolio",
    template: "%s | Abdullah Al Musaddiq Rafi",
  },
  description: "Abdullah Al Musaddiq Rafi - Full Stack Developer, Web Developer, and Software Engineer. View projects, skills, and experience.",
  keywords: [
    "Abdullah Al Musaddiq Rafi",
    "Musaddiq Rafi",
    "portfolio",
    "full stack developer",
    "web developer",
    "software engineer",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Abdullah Al Musaddiq Rafi" }],
  creator: "Abdullah Al Musaddiq Rafi",
  publisher: "Abdullah Al Musaddiq Rafi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://musaddiq-rafi.vercel.app",
    siteName: "Abdullah Al Musaddiq Rafi Portfolio",
    title: "Abdullah Al Musaddiq Rafi | Portfolio",
    description: "Full Stack Developer - View projects, skills, and experience.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdullah Al Musaddiq Rafi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Al Musaddiq Rafi | Portfolio",
    description: "Full Stack Developer - View projects, skills, and experience.",
    creator: "@musaddiqrafi",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://musaddiq-rafi.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="A2NDC1m0SPu8kHfjdvbddsmLsLNU5tTptUknwxII8Kw" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdullah Al Musaddiq Rafi",
              url: "https://musaddiq-rafi.vercel.app",
              jobTitle: "Full Stack Developer",
              description: "Full Stack Developer, Web Developer, and Software Engineer",
              sameAs: [
                "https://github.com/musaddiqrafi",
                "https://linkedin.com/in/musaddiqrafi",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased cursor-none`}
      >
        <CustomCursor />
        <Loader />
        {children}
      </body>
    </html>
  );
}
