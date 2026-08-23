import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plumbing Solutions Wellington | 24/7 Local Plumbers",
  description:
    "Trusted local plumbers in Wellington. 24/7 emergency plumbing, fast response, fair pricing. 5-star rated with 30+ happy customers.",
  keywords: [
    "plumber Wellington",
    "emergency plumber Wellington",
    "blocked drains Wellington",
    "hot water Wellington",
  ],
  openGraph: {
    title: "Plumbing Solutions Wellington | 24/7 Local Plumbers",
    description:
      "Trusted local plumbers in Wellington. 24/7 emergency plumbing, fast response, fair pricing.",
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
