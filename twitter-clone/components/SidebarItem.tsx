'use client'
import React from "react";
import { IconType } from "react-icons";

type SidebarItemProps = {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
};

const SidebarItem = ({
  label,
  href,
  icon: Icon,
  onClick,
}: SidebarItemProps) => {
  return (
    <div className="flex flex-row items-center" onClick={onClick}>
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">

          <Icon size={28} color="white" />

      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
          <Icon size={28} color="white" />
          <p className="text-white hidden lg:block text-xl">{label}</p>
        
      </div>
    </div>
  );
};

export default SidebarItem;
