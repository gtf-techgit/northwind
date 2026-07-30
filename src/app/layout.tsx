import type { Metadata } from "next";
import localFont from "next/font/local";
import SmoothScroll from "@/website/components/common/SmoothScroll";
import "./globals.css";

const branley = localFont({
  src: "../../public/fonts/Branley.ttf",
  variable: "--font-branley",
  display: "swap",
});

const raleway = localFont({
  src: "../../public/fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Northwind",
  description: "Northwind Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${branley.variable} ${raleway.variable}`}
    >
      <body className="font-sans antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}