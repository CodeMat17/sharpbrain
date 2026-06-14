import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollProgress from "@/components/ScrollProgress";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  preload: true,
});

const BASE_URL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://sharpbrainventures.com.ng"
);

export const metadata: Metadata = {
  metadataBase: BASE_URL,
  title: {
    default: "Sharpbrain Business Ventures | Premium Furniture & Electronics, Abuja",
    template: "%s | Sharpbrain Business Ventures",
  },
  description:
    "Premium furniture and electronics delivered to your door in Abuja, Nigeria. Payment on delivery. Free installation. Visit us at Wuse Zone 3.",
  keywords: [
    "furniture Abuja",
    "electronics Abuja",
    "office furniture Nigeria",
    "home furniture Abuja",
    "Sharpbrain Business Ventures",
    "furniture delivery Abuja",
    "Wuse Zone 3 furniture",
  ],
  authors: [{ name: "Sharpbrain Business Ventures" }],
  creator: "Sharpbrain Business Ventures",
  publisher: "Sharpbrain Business Ventures",
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
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: BASE_URL,
    siteName: "Sharpbrain Business Ventures",
    title: "Sharpbrain Business Ventures | Premium Furniture & Electronics, Abuja",
    description:
      "Premium furniture and electronics delivered to your door in Abuja, Nigeria. Payment on delivery. Free installation.",
    images: [
      {
        url: "/logo.webp",
        width: 800,
        height: 600,
        alt: "Sharpbrain Business Ventures Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharpbrain Business Ventures | Premium Furniture & Electronics, Abuja",
    description:
      "Premium furniture and electronics delivered to your door in Abuja, Nigeria. Payment on delivery. Free installation.",
    images: ["/logo.webp"],
  },
  icons: {
    icon: "/logo.webp",
    apple: "/logo.webp",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Sharpbrain Business Ventures",
  url: BASE_URL.href,
  logo: `${BASE_URL.href}logo.webp`,
  image: `${BASE_URL.href}logo.webp`,
  description:
    "Premium furniture and electronics in Abuja, Nigeria. Payment on delivery. Free installation.",
  telephone: "+2349069372377",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Conakry Street, Wuse Zone 3",
    addressLocality: "Abuja",
    addressCountry: "NG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.0579,
    longitude: 7.4951,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  sameAs: [],
  priceRange: "₦₦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} antialiased`}
      suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}>
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
