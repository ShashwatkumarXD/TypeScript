import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="w-screen h-10 bg-black border-b-2">
          <div className="flex flex-row justify-between items-center px-10 pt-2">
            <div className="text-white">
              <a className=" cursor-pointer ">LOGO</a>
            </div>
            <div className="text-white flex items-center gap-5 ">
              <a className=" cursor-pointer">HOME</a>
              <a className=" cursor-pointer">PROJECTS</a>
              <a className=" cursor-pointer">ABOUT US</a>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}