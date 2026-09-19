import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ThemeInitializer } from "@/components/ui/ThemeToggle";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/metadata";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://layzox.com"),
  title: {
    default: "LAYZOX — Technology That Moves Business Forward",
    template: "%s | LAYZOX",
  },
  description:
    "LAYZOX builds software products, intelligent systems and digital infrastructure around the way businesses work.",
  keywords: [
    "Layzox",
    "Layzox Growth",
    "Layzox Revenue",
    "Layzox Accounts",
    "Product Engineering",
    "AI Systems",
    "Business Systems",
    "Digital Infrastructure",
    "Software Products",
  ],
  authors: [{ name: "LAYZOX" }],
  creator: "LAYZOX",
  publisher: "LAYZOX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://layzox.com",
    siteName: "LAYZOX",
    title: "LAYZOX — Technology That Moves Business Forward",
    description:
      "Software products, intelligent systems and digital infrastructure built around the way businesses work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAYZOX — Technology That Moves Business Forward",
    description:
      "Building products, intelligent systems and digital infrastructure around real-world problems.",
    creator: "@layzoxtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://layzox.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html data-scroll-behavior="smooth" data-theme="light" suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t;try{t=localStorage.getItem('layzox-theme')}catch(e){}if(t!=='light'&&t!=='dark')t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t})()` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        >
        <ThemeInitializer />
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navigation />
        <main id="main-content" tabIndex={-1} className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


