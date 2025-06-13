import type { Metadata } from &quot;next&quot;;
import { Inter } from &quot;next/font/google&quot;;
import &quot;./globals.css&quot;;
import Navbar from &quot;../components/Navbar&quot;;
import Footer from &quot;../components/Footer&quot;;
import ClientBottomNavigation from &quot;../components/ClientBottomNavigation&quot;;

const inter = Inter({
  subsets: [&quot;latin&quot;],
  display: &quot;swap&quot;,
});

export const metadata: Metadata = {
  title: &quot;Lancaster Trip Hub 2025&quot;,
  description: &quot;A hub for the Lancaster, PA trip organized by Kingdom Life Community Church and Living Word International Church&quot;,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang=&quot;en&quot; className=&quot;scroll-smooth&quot;>
      <body className={inter.className}>
        <Navbar />
        <main className=&quot;min-h-screen pt-16 pb-16 md:pb-0&quot;>{children}</main>
        <ClientBottomNavigation />
        <Footer />
      </body>
    </html>
  );
}
