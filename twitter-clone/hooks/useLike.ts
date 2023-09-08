import React, { useMemo, useCallback } from "react";
import axios from "axios";
import useCurrentUser from "./useCurrentUser";
import usePost from "./usePost";
import usePosts from "./usePosts";
import useLoginModal from "./useLogginModel";
import { toast } from "react-hot-toast";

const useLike = ({ postId, userId }: { postId: string; userId?: string }) => {
  const { data: currentUser } = useCurrentUser();
  const { data: fetchedPost, mutate: mutateFetchedPost } = usePost(postId);
  const { mutate: mutateFetchedPosts } = usePosts(userId);
  const loginModal = useLoginModal();

  const hasLiked = useMemo(() => {
    const list = fetchedPost?.likedIds || [];

    return list.includes(currentUser?.id);
  }, [fetchedPost?.likedIds, currentUser?.id]);

  const toggleLike = useCallback(async () => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      let request;

      if (hasLiked) {
        request = () => axios.delete("/api/like", { data: {postId} });
      } else {
        request = () => axios.post("/api/like", {postId});
      }

      await request();

      mutateFetchedPost();
      mutateFetchedPosts();

      hasLiked ? toast.success("Unliked") : toast.success("Liked");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  }, [
    currentUser,
    loginModal,
    hasLiked,
    mutateFetchedPost,
    mutateFetchedPosts,
    postId,
  ]);

  return {
    hasLiked,
    toggleLike,
  };
};

export default useLike;
