import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legacy Realty | Private Properties Singapore",
  description: "Crafting long-term wealth through refined real estate strategy. Elevating lifestyles & building legacies. Over $600M in private properties transacted.",
  keywords: "Singapore real estate, luxury properties, private properties, property investment, Legacy Realty",
  authors: [{ name: "Legacy Realty" }],
  openGraph: {
    title: "Legacy Realty | Private Properties Singapore",
    description: "Crafting long-term wealth through refined real estate strategy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
