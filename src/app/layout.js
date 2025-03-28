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
          <Header />
          <body class="min-h-screen flex flex-col">
            <Toaster richColors position="top-right" />
            <main class="flex-1">
              {children}
            </main>
          </body>
          <Footer />
        </BannerProvider>
      </ScrollProvider>
    </html>
  );
}
