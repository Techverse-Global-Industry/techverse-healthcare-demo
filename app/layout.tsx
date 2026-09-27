import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/language/LanguageProvider";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { ScrollToTop } from "@/components/effects/ScrollToTop";
import { CustomCursor } from "@/components/effects/CustomCursor";

export const metadata: Metadata = {
  title: "Trusted Pharmacy & Healthcare Services | Aurelia Health",
  description: "Quality medicines, professional pharmacy services and accessible healthcare support.",
  openGraph: {
    title: "Trusted Pharmacy & Healthcare Services | Aurelia Health",
    description: "Quality medicines, professional pharmacy services and accessible healthcare support.",
    type: "website",
    locale: "en_GB",
    alternateLocale: "fr_FR",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7FAF9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <LanguageProvider>
          <ScrollToTop />
          <SmoothScroll />
          <CustomCursor />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
