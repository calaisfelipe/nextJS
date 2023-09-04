"use client";
import React, { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/hooks/useLogginModel";
import useCurrentUser from "@/hooks/useCurrentUser";
import { formatDistanceToNowStrict } from "date-fns";
import Avatar from "../Avatar";

type PostFeedProps = {
  userId?: string;
  data: Record<string, any>;
};

const PostItem = ({ userId, data }: PostFeedProps) => {
  const { data: currentUser } = useCurrentUser();
  const router = useRouter();
  const LoginModal = useLoginModal();

  const goToUser = useCallback(
    (event: any) => {
      event.stopPropagation();
      router.push(`users/${data.user.id}`);
    },
    [router, data.user.id]
  );

  const goToPost = useCallback(() => {
    router.push(`users/${data.id}`);
  }, [router, data.id]);

  const onLIke = useCallback(
    (event: any) => {
      event.stopPropagation();

      LoginModal.onOpen();
    },
    [LoginModal]
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
