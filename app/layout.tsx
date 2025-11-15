import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PWAInstaller from "./components/PWAInstaller";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Argentina",
  description: "Mi Argentina - Progressive Web Application",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Mi Argentina",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Favicon App Icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/Favicon App Icon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/Favicon App Icon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/Favicon App Icon/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/Favicon App Icon/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PWAInstaller />
        {children}
      </body>
    </html>
  );
}
