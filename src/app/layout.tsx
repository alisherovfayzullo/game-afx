import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Variable } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Game-zone-afx",
  description: "Game-zone-width-afx",
  icons: "afx-favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz">
      <body className={`${inter.className} antialiased w-full h-screen`}>
        {children}
      </body>
    </html>
  );
}
