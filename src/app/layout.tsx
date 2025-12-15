import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ChatBot } from "@/components/ui/ChatBot";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "Sathish M | Certified Penetration Tester", description: "Portfolio of Sathish M" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} relative bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <ChatBot />
        </ThemeProvider>
      </body>
    </html>
  );
}