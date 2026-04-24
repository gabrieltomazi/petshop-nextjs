import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from 'next/font/google';
import { AosInit } from "./_components/aos-init";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "PetDev",
  description: "PetShop for everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AosInit />
      </body>
    </html>
  );
}
