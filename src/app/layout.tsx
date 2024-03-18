import type { Metadata } from "next";
import { Inter,Noto_Sans } from "next/font/google";
import "./globals.css";
import { Html, Head, Main, NextScript } from 'next/document'

const inter = Noto_Sans({ subsets: ["latin"] });

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
        <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300&family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:wght@700&display=swap" rel="stylesheet"/>
        </head>
      <body className={inter.className}>
        {children}</body>
    </html>
  );
}
