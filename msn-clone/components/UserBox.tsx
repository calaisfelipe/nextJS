"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useState } from "react";
import axios from "axios";

type UserBoxType = {
  data: User;
};

const UserBox = ({ data }: UserBoxType) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClieck = useCallback(() => {
    setIsLoading(true);

    axios
      .post("/api/conversations", {
        userId: data.id,
      })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default UserBox;
