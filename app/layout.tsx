import type { Metadata, Viewport } from "next"; // Import Viewport type
import { Toaster } from "react-hot-toast";
import { Providers } from "@/lib/Providers";
import SessionSync from "@/components/auth/SessionSync";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";

import { inter } from "@/lib/fonts";
import { appName, appURL } from "@/lib/app-config";

const appDescription = "A Next.js starter kit with auth and subscriptions powered by Reflow, built for modern web applications.";

// Define your comprehensive metadata for SEO
export const metadata: Metadata = {
  // Basic SEO
  title: {
    template: "%s | " + appName,
    default: appName,
  },
  description: appDescription,
  keywords: [
    "Next.js",
    "SAAS",
    "Starter Kit",
    "Authentication",
    "Subscriptions",
    "Reflow",
    "Stripe",
    "Paddle",
    "Prisma",
    "Tailwind CSS",
    "React",
    "TypeScript",
    "Web Development",
    "Modern Web App",
    "Glassmorphism UI"
  ],
  metadataBase: new URL(appURL),

  // Open Graph (for social media sharing)
  openGraph: {
    title: {
      template: "%s | " + appName,
      default: appName,
    },
    description: appDescription,
    url: appURL,
    siteName: appName,
    images: [
      {
        url: `${appURL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${appName} Open Graph Image`,
      },
    ],
    type: "website",
    // Removed viewport from here
  },

  // Twitter Card (for Twitter sharing)
  twitter: {
    card: "summary_large_image",
    title: {
      template: "%s | " + appName,
      default: appName,
    },
    description: appDescription,
    images: [`${appURL}/twitter-image.jpg`],
    creator: "@yourtwitterhandle",
  },

  // Favicons and App Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },

  // Robots meta tag for crawler instructions
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  // Canonical URL (optional, if you have multiple URLs for the same content)
  // canonical: appURL,
};

// === CORRECTED: Export viewport as a separate top-level export ===
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
// ================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SessionSync />
        <Providers>
          <Navbar />
          <main className="pt-[64px] min-h-[calc(100vh-64px)]">
            {children}
          </main>
          <Toaster position="top-center" />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
