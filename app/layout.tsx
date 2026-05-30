import type { Metadata } from "next";
import { Archivo_Black, Inter, IBM_Plex_Mono } from "next/font/google";
import { siteConfig } from "@/content/site-config";
import EditorBridge from "@/components/__kodagen/EditorBridge";
import "./globals.css";

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s — ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.company.name,
    images: siteConfig.seo.ogImage ? [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }] : [],
    locale: siteConfig.seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : [],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.seo.htmlLang} className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        {children}
        <EditorBridge />
      </body>
    </html>
  );
}
