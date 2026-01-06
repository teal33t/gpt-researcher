import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { GoogleAnalytics } from '@next/third-parties/google'
import { ResearchHistoryProvider } from "@/hooks/ResearchHistoryContext";
import "./globals.css";
import Script from 'next/script';

const inter = Lexend({ subsets: ["latin"] });

// Load Vazir font for Persian text
const vazirFont = {
  fontFamily: 'Vazir',
  src: [
    {
      path: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/Vazir-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
};

let title = "ADR System";
let description =
  "Advanced Deep Researcher - AI agent that conducts web and local research on any topic and creates detailed reports with citations.";
let url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
let ogimage = "/favicon.ico";
let sitename = "ADR System";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  manifest: '/manifest.json',
  icons: {
    icon: "/img/gptr-black-logo.png",
    apple: '/img/gptr-black-logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: title,
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: url,
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#111827',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className="gptr-root" lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <PlausibleProvider domain="localhost:3000" />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" href="/img/gptr-black-logo.png" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css"
        />
      </head>
      <body
        className={`app-container light-theme flex min-h-screen flex-col justify-between`}
        style={{ fontFamily: 'Vazir, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
        suppressHydrationWarning
      >
        <ResearchHistoryProvider>
          {children}
        </ResearchHistoryProvider>
      </body>
    </html>
  );
}
