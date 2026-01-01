import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ThreatZero",
    template: "%s | ThreatZero",
  },
  description: "Cybersecurity website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" data-theme="dark">
      <body>
        <Header />
        <main style={{ minHeight: "70vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
