import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Abdullah Al Musaddiq Rafi | Portfolio",
  description: "Software Engineer | Full-Stack Development | AI/ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <body className="antialiased" style={{ fontFamily: "var(--font-poppins)" }}>
        <ThemeProvider>
          <div className="grain" />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
