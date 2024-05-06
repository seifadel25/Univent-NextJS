import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import NavbarComp from "./components/navbar";
export const metadata: Metadata = {
  title: "Univent",
  description:
    "Delivering customized HVAC solutions for homes and businesses that need efficiency, reliability, and exceptional support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>
          <NavbarComp />
          {children} <Analytics />
        </NextUIProvider>
      </body>
    </html>
  );
}
