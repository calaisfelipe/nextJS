import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthContext from "@/context/AuthContext";
import Sidebar from "@/components/Sidebar";
import FollowBar from "@/components/FollowBar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "Created by Calais Felipe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <AuthContext>
          <div className="h-screen bg-black">
            <div className="container h-full mx-auto xl:px-30 max-w-6xl">
              <div className="grid grid-cols-4 h-full">
                <Sidebar />
                <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-600">
                  {children}
                </div>
                <FollowBar />
              </div>
            </div>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
