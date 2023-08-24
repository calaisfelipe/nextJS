import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import Navbar from "@/components/Navbar";
import LanguageProvider from "@/context/LanguageProvider";
import { Toaster } from "react-hot-toast";

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
        <Toaster position="bottom-right" reverseOrder={false} />
        <LanguageProvider>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
