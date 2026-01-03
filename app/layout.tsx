import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavigationBtns from "@/components/Nav";
import Search from "@/components/Search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pickup Lines",
  description: "Best pickuplines that could help you land your next date",
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
