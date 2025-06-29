import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://open-designers.org"),
  title: {
    default: "Open Designers",
    template: "%s | Open Designers",
  },
  description:
    "Open Designers is an open-source design and dev community shaping the future of digital products. We are an open-source design movement driven by the belief that good design should be accessible.",
  keywords: ["Open Designers", "design", "UI", "UX", "screenshots"],
  creator: "Open Designers",
  publisher: "Open Designers",
  openGraph: {
    title: "Open Designers",
    description:
      "Open Designers is an open-source design and dev community shaping the future of digital products. We are an open-source design movement driven by the belief that good design should be accessible.",
    type: "website",
    siteName: "Open Designers",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Open Designers Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Designers",
    description:
      "Open Designers is an open-source design and dev community shaping the future of digital products. We are an open-source design movement driven by the belief that good design should be accessible.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Open Designers Logo",
      },
    ],
  },
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  robots: {
    index: true,
    follow: true,
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
        <link
          rel="preload"
          href="/hero-bg.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
