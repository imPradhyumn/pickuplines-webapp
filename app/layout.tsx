import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBtns from "@/components/Nav";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pickup Lines Hub - Funny, Cute, Cheesy, Dirty & more",
    template: "%s | Pickup Lines",
  },
  description:
    "Discover the best pickup lines - funny, cute, cheesy, clever, science, chemistry, maths, dirty, smooth and 18+ lines. Perfect for texting, dating apps, make him/her blush and breaking the ice.",
  keywords: [
    "pickup lines",
    "funny pickup lines",
    "best pickup lines",
    "top 10 pickup lines",
    "corny pickup lines",
    "cute pickup lines",
    "dirty pickup lines",
    "smooth pickup lines",
    "cheesy pickup lines",
    "clever pickup lines",
    "science pickup lines",
    "chemistry pickup lines",
    "math pickup lines",
    "dating lines",
    "flirty lines",
  ],
  other: {
    "google-site-verification": "DCGuj6zDRtC9iwboP6PxwPYuT0w2Z656qQTabssOHOU",
  },
  authors: [{ name: "Pickup Lines App" }],
  creator: "Pickup Lines App",
  metadataBase: new URL("https://pickuplineshub.vercel.app"), // change after deploy
  openGraph: {
    title: "Pickup Lines - Funny, Cute, Cheesy, Clever Corny, Dirty and more",
    description:
      "Browse the best pickup lines for every mood: funny, cute, dirty, science, maths & more.",
    url: "https://pickuplineshub.vercel.app",
    siteName: "Best Pickup Lines",
    images: [
      {
        url: "/og-image.png", // add this image to /public
        width: 983,
        height: 358,
        alt: "Pickup Lines Hub Webapp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className="w-[90%] mx-auto md:w-3/4">
          <NavigationBtns />
          <Search />
          {children}
        </main>
      </body>
    </html>
  );
}
