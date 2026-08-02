import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";
import { Chatbot } from "@/components/chatbot/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = "https://subhasish-mishra.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Subhasish Mishra | Frontend Engineer",
    template: "%s | Subhasish Mishra",
  },
  description:
    "Frontend Engineer specializing in React, Next.js, TypeScript, and modern web applications. Explore production projects, frontend architecture, JavaScript deep dives, and interactive engineering playgrounds.",
  applicationName: "Subhasish Portfolio",
  authors: [{ name: "Subhasish Mishra" }],
  creator: "Subhasish Mishra",
  publisher: "Subhasish Mishra",
  keywords: [
    "Frontend Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Web Performance",
    "Frontend Architecture",
    "Software Engineer",
    "UI Engineer",
    "Portfolio",
    "Bengaluru",
    "India",
  ],
  category: "technology",
  classification: "Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Subhasish Mishra | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, TypeScript, and modern web applications. Explore production projects, frontend architecture, JavaScript deep dives, and interactive engineering playgrounds.",
    siteName: "Subhasish Mishra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Subhasish Mishra - Frontend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhasish Mishra | Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, TypeScript, and modern web applications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      {
        url: "/apple-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Subhasish Mishra",
    url: baseUrl,
    jobTitle: "Senior Frontend Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Recro",
    },
    sameAs: [
      "https://github.com/smishra11",
      "https://linkedin.com/in/subhasish-mishra17",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Architecture",
      "Web Performance",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Chatbot />
          <Toaster position="bottom-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
