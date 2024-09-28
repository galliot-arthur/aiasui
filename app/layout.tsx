import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { i18n } from "@/libs/commons/ui";

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
  title: i18n.title.full,
  description: i18n.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 flex flex-row items-center justify-between border-b-1 border-gray-300 shadow-2xl shadow-green-100">
          <h1 className="text-2xl">
            <span className="text-gray-400">{i18n.title.sliced.ai}</span>
            <span className="text-green-400">{i18n.title.sliced.as}</span>
            <span className="text-gray-400">{i18n.title.sliced.ui}</span>
          </h1>
          <p className="text-xs text-gray-500">{i18n.description}</p>
        </header>
        {children}
      </body>
    </html>
  );
}
