import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider"; // <--- Import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sathish M | Certified Penetration Tester",
  description: "Portfolio of Sathish M - Ethical Hacker & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} relative bg-background text-foreground antialiased selection:bg-blue-500/30`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Background Blobs (Adaptive) */}
            <div className="fixed top-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="fixed bottom-0 right-0 -z-10 w-[500px] h-[500px] bg-violet-400/20 dark:bg-violet-600/20 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <Navbar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}