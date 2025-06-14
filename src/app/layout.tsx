import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WarrantyAI - Smart Warranty & Asset Management",
  description: "Never miss a warranty again. AI-powered warranty tracking, 3D asset visualization, and smart reminders for all your belongings.",
  keywords: "warranty, AI, asset management, 3D visualization, receipt scanner, QR code, smart reminders",
  authors: [{ name: "WarrantyAI Team" }],
  creator: "WarrantyAI",
  publisher: "WarrantyAI",
  robots: "index, follow",
  openGraph: {
    title: "WarrantyAI - Smart Warranty & Asset Management",
    description: "Never miss a warranty again. AI-powered warranty tracking with 3D visualization.",
    type: "website",
    locale: "en_US",
    siteName: "WarrantyAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "WarrantyAI - Smart Warranty & Asset Management",
    description: "Never miss a warranty again. AI-powered warranty tracking with 3D visualization.",
  },
  icons: {
    icon: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    shortcut: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
    apple: "https://raw.githubusercontent.com/HunterHo07/Portfolio_1/refs/heads/main/images/logo.webp",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#00d4ff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
