import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Palette*",
  description: "This is Happiness Meta's the final project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://cdn.iamport.kr/v1/iamport.js" />
      </body>
    </html>
  );
}
