
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Header/NavBar";
import bgImg from "../assests/bgimg/bgimage.jpg";
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
  title: "Harsh Rastogi",
  description: "A Portfolio With my better designing Skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <link rel="icon" href={`${Icon}`} />
      </head> */}
      <body
        cz-shortcut-listen="true"
 data-new-gr-c-s-check-loaded="14.1222.0"
        data-gr-ext-installed=""
        className={`${geistSans.variable} ${geistMono.variable} bg-cover bg-fixed antialiased flex flex-col  w-[100%] overflow-x-hidden overflow-y-auto `}
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0, 0, 0, 0.5), 
              rgba(0, 0, 0, 0.5)
            ), 
            url(${bgImg.src})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // display:'flex',
          // flexDirection:'column',
          // justifyContent:"space-between",
          minHeight:"100vh",
          overflow:'auto'
        }}
      >
        <NavBar />
          {children}
        
        <Footer />
      </body>
    </html>
  );
}
