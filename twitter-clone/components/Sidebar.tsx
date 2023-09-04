'use client'
import React from "react";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import {BiLogOut} from 'react-icons/bi'
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";
import {signOut} from 'next-auth/react'
import {useSession} from 'next-auth/react'
import useCurrentUser from "@/hooks/useCurrentUser";


const Sidebar =  () => {
  const session = useSession()
  const {data:currentUser} = useCurrentUser()

  console.log(currentUser)


  const items = [
    { label: "Home", href: "/", icon: BsHouseFill },
    {
      label: "notifications",
      href: "/notifications",
      auth: true,
      icon: BsBellFill,
    },
    {
      label: "profile",
      href: currentUser ? `/users/${currentUser.id}` : '#',
      icon: FaUser,
      auth: true,
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
              auth={item.auth}
            />
          ))}
          {session?.data?.user && <SidebarItem onClick={signOut} icon={BiLogOut} label="LogOut" />}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
