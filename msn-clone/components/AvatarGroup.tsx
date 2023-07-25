"use client";
import React, { useState } from "react";
import { User } from "@prisma/client";
import Image from "next/image";
import PlaceHolderImg from '@/public/images/placeholder-user.png'

type AvatarGroupTypes = {
  users?: User[];
};

function AvatarGroup({ users = [] }: AvatarGroupTypes) {
  const slicedUsers = users?.slice(0, 3);

  const positionMap = {
    0: "top-0 left-[12px] ",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  return (
    <div className="relative h-11 w-11 mr-1">
      {slicedUsers.map((user, index) => 
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${positionMap[index as keyof typeof positionMap]}`}
        > 
        <Image src={user?.image || PlaceHolderImg} fill alt='group user' />
        </div>
      )}
    </div>
  );
}

export default AvatarGroup;
