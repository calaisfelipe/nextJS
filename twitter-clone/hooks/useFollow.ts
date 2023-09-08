"use client";
import React, { useMemo, useCallback } from "react";
import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLogginModel";
import useUser from "./useUser";
import { toast } from "react-hot-toast";
import axios from "axios";

const useFollow = (userId: string) => {
  const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
  console.log(currentUser)
  const { mutate: mutateFetchedUser } = useUser( {userId}  );
  const loginModal = useLoginModal();

  const isFollowing:boolean = useMemo(() => {
    const list = currentUser?.followingIds || [];

    return list.includes(userId)
  }, [userId, currentUser?.followingIds]);

  const toggleFollowing = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (isFollowing) {
        request = () => axios.delete("/api/follow", { data: { userId } });
      } else {
        request = () => axios.post("/api/follow", { userId });
      }

      await request();

      mutateCurrentUser();
      mutateFetchedUser();

      toast.success("Success");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }, [
    loginModal,
    currentUser,
    isFollowing,
    userId,
    mutateCurrentUser,
    mutateFetchedUser,
  ]);

  return {
    isFollowing, 
    toggleFollowing
  }

};

export default useFollow;
