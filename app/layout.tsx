import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pawbowl.ma"),
  title: "PawBowl | Repas frais pour chiens à Marrakech",
  description:
    "Des repas frais, naturels et faits avec amour pour votre chien. Préparés et livrés à Marrakech.",
  keywords: [
    "repas frais chien",
    "PawBowl",
    "Marrakech",
    "livraison nourriture chien",
    "repas naturels chien",
  ],
  openGraph: {
    title: "PawBowl — De vrais repas pour chiens heureux",
    description:
      "Repas frais et naturels pour chiens, préparés avec amour à Marrakech.",
    locale: "fr_MA",
    type: "website",
    images: [
      {
        url: "/images/hero-marrakech.png",
        width: 941,
        height: 760,
        alt: "PawBowl à Marrakech",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fff8ed",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
