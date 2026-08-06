import localFont from "next/font/local";
import Footer from "@/website/components/common/Footer";
import Navbar from "@/website/components/common/Navbar";
import SmoothScroll from "@/website/components/common/SmoothScroll";

const branley = localFont({
  src: "../../../public/fonts/Branley.ttf",
  variable: "--font-branley",
  display: "swap",
});

const raleway = localFont({
  src: "../../../public/fonts/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway",
  display: "swap",
});

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${branley.variable} ${raleway.variable}`}>
      <SmoothScroll>
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <Footer />
      </SmoothScroll>
    </div>
  );
}