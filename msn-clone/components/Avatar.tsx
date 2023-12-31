"use client";
import React from "react";
import { User } from "@prisma/client";
import placeholderUser from "@/public/images/placeholder-user.png";
import Image from "next/image";
import useActiveList from "@/app/hooks/useActiveList";

type AvatarType = {
  user?: User;
};

const Avatar = ({ user }: AvatarType) => {

  const {members} = useActiveList()
  const isActive = members.indexOf(user?.email!) !== -1


  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:2-11">
        <Image 
        src={user?.image ? user?.image : placeholderUser }
        alt="avatar"
        fill
        />
      </div>
      {isActive && <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3"/>}
    </div>
  );
};

export default Avatar;
