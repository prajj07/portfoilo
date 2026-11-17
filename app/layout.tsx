import type { Metadata, Viewport } from "next";
import { Sora, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
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
  title: "Prajwal M — Software Engineer | Products → Systems → Production",
  description:
    "Software Engineer building products from idea to production across web, mobile, backend, cloud, and LLM-powered features.",
  authors: [{ name: "Prajwal M" }],
  creator: "Prajwal M",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Prajwal M — Software Engineer",
    description:
      "Products → Systems → Production. Full-stack and forward-deployed engineering across mobile, web, backend, cloud, and LLM application integration.",
    siteName: "Prajwal M",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prajwal M — Software Engineer",
    description:
      "Products → Systems → Production. Engineering across mobile, web, backend, cloud, and LLM application integration.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: experiences[0].role,
  worksFor: {
    "@type": "Organization",
    name: experiences[0].company,
  },
  url: siteUrl,
  email: `mailto:${profile.email}`,
  sameAs: [profile.github, profile.linkedin],
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Zero-style first paint: matching field before hydration (no white flash). */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body { background-color: #12110f; }
              #pre-loader-shell {
                position: fixed; inset: 0; z-index: 80; pointer-events: none;
                background:
                  radial-gradient(ellipse 120% 90% at 50% 120%,
                    oklch(0.28 0.04 178) 0%,
                    oklch(0.16 0.02 80) 42%,
                    oklch(0.115 0.008 80) 100%);
              }
              #pre-loader-shell .n {
                position: absolute; left: 2.2vw; bottom: 3.8svh;
                font: 600 14svh/1 ui-monospace, SFMono-Regular, Menlo, monospace;
                color: oklch(0.94 0.012 88); letter-spacing: -0.04em;
              }
              @media (max-width: 767px) {
                #pre-loader-shell .n { left: 4vw; font-size: 11svh; }
              }
              html.intro-handoff #pre-loader-shell,
              html.intro-done #pre-loader-shell {
                display: none !important;
              }
            `,
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <div id="pre-loader-shell" aria-hidden="true" suppressHydrationWarning>
          <span className="n" suppressHydrationWarning>
            99
          </span>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {/* Hide shell only — do not mutate <html className> before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(sessionStorage.getItem('pm-intro-seen')==='1'||window.matchMedia('(prefers-reduced-motion: reduce)').matches){var e=document.getElementById('pre-loader-shell');if(e)e.style.display='none';}}catch(e){}})();`,
          }}
        />
      </body>
    </html>
  );
}
