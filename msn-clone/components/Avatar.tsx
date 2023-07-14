"use client";
import React from "react";
import { User } from "@prisma/client";
import placeholderUser from "@/public/images/placeholder-user.png";
import Image from "next/image";

type AvatarType = {
  user?: User;
};

const Avatar = ({ user }: AvatarType) => {
  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:2-11">
        <Image 
        src={user?.image ? user?.image : placeholderUser }
        alt="avatar"
        fill
        />
      </div>
      <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3"/>
    </div>
  );
};

export default Avatar;
