import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

// Add DM Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "700"],
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
      <body className={`${dmSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
