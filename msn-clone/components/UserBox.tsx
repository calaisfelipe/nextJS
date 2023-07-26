"use client";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import axios from "axios";
import Avatar from "./Avatar";
import LoadingModal from "./LoadingModal";

type UserBoxType = {
  data: User;
};

const UserBox = ({ data }: UserBoxType) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversation/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
    {isLoading && <LoadingModal onClose={() => setIsLoading(false)}/>} 
    <div
      onClick={handleClick}
      className="w-full relative flex items-center sparce-x-3 bg-white p-3 hover:bg-neutral-100 rounderd-lg transition cursor-pointer "
    >
      <Avatar user={data} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-medium text-gray-900 ml-2">
              {data.name}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default UserBox;
