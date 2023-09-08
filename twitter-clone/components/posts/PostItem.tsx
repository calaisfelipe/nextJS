"use client";
import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/hooks/useLogginModel";
import useCurrentUser from "@/hooks/useCurrentUser";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from "react-icons/ai";
import useLike from "@/hooks/useLike";

type PostFeedProps = {
  userId?: string;
  data: Record<string, any>;
  postPage?:boolean
}; 

const PostItem = ({ userId, data ,postPage }: PostFeedProps) => {
  const { data: currentUser } = useCurrentUser();

  const router = useRouter();
  const LoginModal = useLoginModal();
  const {hasLiked, toggleLike} = useLike({postId: data.id, userId})

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`/users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = useCallback(() => {
    if(postPage){
      return
    }else{
      router.push(`/posts/${data.id}`)
    }
    ;
  }, [router, data.id, postPage]);

  const onLIke = useCallback(
    (event: any) => {
      event.stopPropagation();

      if(!currentUser){
       return LoginModal.onOpen();
      }

      toggleLike()
     

    },
    [LoginModal, currentUser, toggleLike]
  );

  const createdAt = useMemo(() => {
    if (!data.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data?.createdAt]);




  return (
    <div
      className="border-b-[1px] border-neutral-800 p-5 cursor-pointer hover:bg-neutral-900 transition"
      onClick={goToPost}
    >
      <div className="flex flex-row items-start gap-3">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              className="text-white font-semibold cursor-pointer hover:underline"
              onClick={goToUser}
            >
              {data.user.name}
            </p>
            <span
              className="text-neutral-500 cursor-pointer hover:underline hidden md:block"
              onClick={goToUser}
            >
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm">
              {createdAt}
            </span>
          </div>
          <div className="text-white mt-1">
            {data.body}
          </div>
          <div className="flex flex-row items-center mt-3 gap-5">
              <div className="flex flex-row items-center text-neutral-500 gap-2 cursor-pointer transition hover:text-sky-500">
                <AiOutlineMessage size={20}/>
                <p>{data.comments?.length || 0}</p>
              </div>

              <div className={`flex flex-row items-center  gap-2 cursor-pointer transition hover:text-red-500 ${hasLiked ? 'text-red-500' : 'text-neutral-500'}`} onClick={onLIke}>
                {hasLiked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20}/>}
                <p>{data.likedIds?.length}</p>
              </div>
              

          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
