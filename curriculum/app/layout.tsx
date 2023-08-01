import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Felipe calais",
  description: "Portfolio created by Felipe Calais",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Suspense fallback={<Loading />}>
        {children}
        </Suspense>
      </body>
    </html>
  );
}
