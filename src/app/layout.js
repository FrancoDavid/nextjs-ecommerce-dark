import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Header />
      <body>
        {children}
      </body>
      <Footer />
    </html>
  );
}
