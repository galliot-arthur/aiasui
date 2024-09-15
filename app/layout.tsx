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
  title: i18n.title,
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
        <header className="p-4 flex flex-row items-center justify-between border-b-1 border-gray-300">
          <h1 className="text-2xl">{i18n.title}</h1>
          <p>{i18n.description}</p>
        </header>
        {children}
      </body>
    </html>
  );
}
