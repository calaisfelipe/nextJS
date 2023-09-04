"use client";
import Image from "next/image";
import React from "react";
import Avatar from "../Avatar";
import useUser from "@/hooks/useUser";

const UserHero = ({ userId }: { userId: string }) => {
  const { data: user } = useUser({ userId });
  console.log(user);

  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {user?.coverImage ? (
          <Image
            src={user.coverImage}
            style={{ objectFit: "cover" }}
            fill
            alt="user cover image"
          />
        ) : null}
        <div className="absolute -bottom-16 left-4"> 
        <Avatar userId={userId} isLarge hasBoader />
      </div>
      </div>
      
    </div>
  );
};

export default UserHero;
