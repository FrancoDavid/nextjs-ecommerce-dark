import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import "./globals.css";

import { ScrollProvider } from "@/contexts/ScrollView";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ScrollProvider>
        <Header />
        <body class="min-h-screen flex flex-col">
          <main class="flex-1">
            {children}
          </main>
        </body>
        <Footer />
      </ScrollProvider>
    </html>
  );
}
