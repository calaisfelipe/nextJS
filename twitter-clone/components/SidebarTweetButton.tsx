"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaFeather } from "react-icons/fa";

const SidebarTweetButton = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-90 transition cursor-pointer">
        <FaFeather size={24} color="white" />
      </div>
      <div className="hidden lg:block mt-6 bg-sky-500 hover:bg-opacity-90 transition cursor-pointer py-2 px-4 rounded-full">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Tweet
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
