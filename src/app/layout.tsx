import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import type { Viewport } from "next";
import Head from "next/head";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// Add font
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "700", "300", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aathif Zahir's Portfolio",
  description: "A developer student's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
