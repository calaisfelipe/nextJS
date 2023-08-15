"use client";
import { useRouter } from "next/navigation";
import { BsTwitter } from "react-icons/bs";
import React from "react";

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-100 hover:bg-opacity-10 cursor-pointer transition"
      onClick={() => router.push("/")}
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
