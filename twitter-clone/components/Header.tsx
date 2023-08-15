"use client";
import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { BiArrowBack } from "react-icons/bi";

type HeaderProps = {
  label?: string;
  showBackError?: boolean;
};

const Header = ({ label, showBackError }: HeaderProps) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[5px] border-neutral-800 p-5 ">
      <div className="flex flex-row items-center gap-2">
        {showBackError && <BiArrowBack size={20} color='white' onClick={handleBack} className='cursor-pointer hover:opacity-70 transition' /> }
        <h1 className="text-white text-xl font-semibold">{label}</h1>
      </div>
    </div>
  );
};

export default Header;
