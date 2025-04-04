import { Toaster } from "sonner";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import { ScrollProvider } from "@/contexts/ScrollView";
import { BannerProvider } from "@/contexts/Banner";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ScrollProvider>
        <BannerProvider>
          <body className="min-h-screen flex flex-col">
            <Header />
            <Toaster richColors position="top-right" />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </body>
        </BannerProvider>
      </ScrollProvider>
    </html>
  );
}
