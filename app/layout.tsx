import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Excelsis — A new era of dental growth",
    template: "%s | Excelsis",
  },
  description:
    "AI-powered marketing for ambitious dental practices. Patient acquisition, intelligent follow-up, and brands built to stand apart.",
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
