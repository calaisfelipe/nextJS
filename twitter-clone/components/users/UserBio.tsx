"use client";
import React, { useMemo } from "react";
import { useSession } from "next-auth/react";
import useUser from "@/hooks/useUser";
import Button from "../Button";
import { format } from "date-fns";
import { BsCalendarEvent } from "react-icons/bs";
import useEditModal from "@/hooks/useEditModal";


const UserBio = ({ userId }: { userId: string }) => {
  const { data: user } = useUser({ userId });
  const currentUser = useSession();
  const editModal = useEditModal()

  const createdDate = useMemo(() => {
    if (!user?.createdAt) {
      return null;
    }

    return format(new Date(user.createdAt), "MMMM yyyy");
  }, [user.createdAt]);

  return (
    
    <div className="border-b-[1px] border-neutral-800 pb-4 flex flex-col p-4">
      <div className="self-end h-20">
        {currentUser.data?.user?.email === user.email ? (
          <Button label="Edit" onClick={editModal.onOpen} secondary />
        ) : (
          <Button label="Follow" onClick={() => {}} secondary />
        )}
      </div>

      <div className="text-white font-semibold text-3xl">{user?.name}</div>
      <div className="text-neutral-500">@{user.username}</div>
      <div className="flex flex-col mt-4">
        <p className="text-white">{user?.bio ? user?.bio : 'Welcome to my profile'}</p>
        </div>      

      <div className="text-neutral-500 mt-2 flex flex-row gap-2 items-center">
        <BsCalendarEvent size={20} /> Joined at {createdDate}
      </div>
      <div className="mt-4 flex flex-row items-center gap-6">
        <div className="text-neutral-500">
          <span className="text-white text-lg font-semibold">
            {user?.followingIds?.length}{" "}
          </span>
          Following
        </div>
        <div className="text-neutral-500">
          <span className="text-white text-lg font-semibold">{user?.followersCount || 0} </span>{" "}
          Followers
        </div>
      </div>
    </div>
  );
};

export default UserBio;
