import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { bodyStyle } from "./styleComponents/commonStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Final Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={bodyStyle}>
        {children}
      </body>
    </html>
  );
}
