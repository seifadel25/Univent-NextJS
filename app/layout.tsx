import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import NavbarComp from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "Univent",
  description:
    "Delivering customized HVAC solutions for homes and businesses that need efficiency, reliability, and exceptional support",
  icons: [],
};
function setInitialTheme() {
  return `
    (function() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    })();
  `;
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme() }} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="android-chrome-192x192"
          href="/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="android-chrome-512x512"
          href="/android-chrome-512x512.png"
          sizes="512x512"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <div className="bg-white dark:bg-black">
          <NextUIProvider>
            <NavbarComp />
            {children} <Analytics />
            <Footer />
          </NextUIProvider>
        </div>
      </body>
    </html>
  );
}
