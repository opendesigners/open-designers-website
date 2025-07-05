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
    default: "Open Designers | Open-Source Design Community & Projects.",
    template: "%s | Open Designers",
  },
  description:
    "Open Designers is an open-source design and dev community shaping the future of digital products. We believe good design should be accessible to everyone.",
  keywords: ["Open Designers", "design", "UI", "UX", "screenshots"],
  creator: "Open Designers",
  publisher: "Open Designers",
  alternates: {
    canonical: "https://open-designers.org",
  },
  authors: [
    {
      name: "Open Designers",
      url: "https://open-designers.org",
    },
  ],
  openGraph: {
    title: "Open Designers | Open-Source Design Community & Projects.",
    description:
      "Open Designers is an open-source design and dev community shaping the future of digital products. We believe good design should be accessible to everyone.",
    type: "website",
    siteName: "Open Designers",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Open Designers Logo",
        type: "image/png",
      },
    ],
    url: "https://open-designers.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Open Designers",
    description:
      "Open Designers is an open-source design and dev community shaping the future of digital products. We believe good design should be accessible to everyone.",
    images: [
      {
        url: "/og-image.png",
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
        <meta
          property="og:image"
          content="https://open-designers.org/og-image.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
