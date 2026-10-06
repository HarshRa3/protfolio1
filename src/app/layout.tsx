
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harsh Rastogi | Full Stack Developer",
  description: "Portfolio of Harsh Rastogi - Full Stack Developer specializing in React, Next.js, Node.js, and Mobile Apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
      data-new-gr-c-s-check-loaded="14.1334.0"
        className={`${geistSans.variable} ${geistMono.variable} bg-[#090d16] text-slate-100 antialiased flex flex-col min-h-screen relative selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        {/* Subtle Ambient Background Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

