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
