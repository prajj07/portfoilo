import type { Metadata, Viewport } from "next";
import { Sora, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Prajwal M — Software Engineer | Full-Stack & AI",
  description:
    "Software Engineer building production web and mobile applications, backend services, cloud infrastructure, and LLM-powered product features.",
  authors: [{ name: "Prajwal M" }],
  creator: "Prajwal M",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Prajwal M — Software Engineer | Full-Stack & AI",
    description:
      "Software Engineer focused on production systems across web, mobile, backend, cloud, and LLM-powered product features.",
    siteName: "Prajwal M",
    images: [
      {
        url: "/profile.png",
        width: 682,
        height: 1024,
        alt: "Prajwal M",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal M — Software Engineer | Full-Stack & AI",
    description:
      "Software Engineer focused on production systems across web, mobile, backend, cloud, and LLM-powered product features.",
    images: ["/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#12110f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${sora.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
