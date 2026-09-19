import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
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
    default: "Layzox â€” Technology That Moves Business Forward",
    template: "%s | Layzox",
  },
  description:
    "Layzox is an India-born technology company building products, intelligent systems and digital infrastructure designed around real-world outcomes.",
  keywords: [
    "Layzox",
    "India Technology Company",
    "Layzox Growth",
    "Layzox Study",
    "Layzox Accounts",
    "Product Engineering",
    "AI Systems",
    "Business Systems",
    "Digital Infrastructure",
    "Software Products India",
  ],
  authors: [{ name: "Layzox India Pvt Ltd" }],
  creator: "Layzox India Pvt Ltd",
  publisher: "Layzox India Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://layzox.com",
    siteName: "Layzox",
    title: "Layzox â€” Technology That Moves Business Forward",
    description:
      "An India-born technology company building products, intelligent systems and digital infrastructure designed around real-world outcomes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Layzox â€” Technology That Moves Business Forward",
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
    <html data-scroll-behavior="smooth" suppressHydrationWarning
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('layzox-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}})()` }} />
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
        <Navigation />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

