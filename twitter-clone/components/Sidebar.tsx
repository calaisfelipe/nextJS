'use client'
import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import {BiLogOut} from 'react-icons/bi'
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";


const Sidebar = () => {
  const items = [
    { label: "Home", href: "/", icon: BsHouseFill },
    {
      label: "notifications",
      href: "/notifications",
      icon: BsBellFill,
    },
    {
      label: "profile",
      href: "/users/123",
      icon: FaUser,
    },
  ];

   

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6 ">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[220px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              href={item.href}
              key={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={BiLogOut} label="LogOut" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
