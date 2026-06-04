import { envs } from "@/config/envs";
import { JsonLd } from "@/lib/jsonLd";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const isStaging = envs.IS_STAGING;
const isProd = !isStaging;
const DOMAIN = envs.DOMAIN;
const TITLE = "CAYR.D | Centro de Actividad y Rendimiento Deportivo";
const DESCRIPTION =
  "Fútbol amateur, fútbol mayores, +30, hockey femenino y entrenamiento personalizado en Rosario. Sumate a la comunidad deportiva de CAYR.D en el complejo deportivo El Ovalo, en el Hipódromo de Rosario.";
const OG_IMAGE = `${DOMAIN}/images/og_image.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: TITLE,
    template: "%s | CAYR.D",
  },
  description: DESCRIPTION,
  keywords: [
    "CAYR.D",
    "fútbol rosario",
    "fútbol mayores",
    "más 30",
    "mas 30",
    "hockey femenino",
    "entrenamiento personalizado",
    "deporte amateur",
    "hipódromo rosario",
    "el ovalo",
    "ovalo",
    "rosario",
    "comunidad deportiva",
    "entrenamiento deportivo",
    "actividad física",
  ],
  robots: isProd
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
        nosnippet: true,
      },
  alternates: isProd
    ? {
        canonical: DOMAIN,
      }
    : undefined,
  authors: [{ name: "CAYR.D", url: DOMAIN }],
  creator: "CAYR.D",
  publisher: "CAYR.D",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: DOMAIN,
    siteName: "CAYR.D",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "CAYR.D - Fútbol mayores, más 30 y hockey femenino en el complejo deportivo El Ovalo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff6a00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${dmSans.variable} bg-background scroll-smooth`}
    >
      <head>
        <JsonLd domain={DOMAIN} />
      </head>
      <body className="font-sans antialiased">
        {children}
        {isProd && <Analytics />}
      </body>
    </html>
  );
}
