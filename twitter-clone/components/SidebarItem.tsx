"use client";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import useLoginModal from "@/hooks/useLogginModel";
import { BsDot } from "react-icons/bs";

type SidebarItemProps = {
  label: string;
  href?: string;
  icon: IconType;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
};

const SidebarItem = ({
  label,
  href,
  icon: Icon,
  onClick,
  auth,
  alert,
}: SidebarItemProps) => {
  const router = useRouter();
  const session = useSession();
  const loginModal = useLoginModal();

  const handleClick = useCallback(() => {
    

    if (onClick) {
      return onClick();
    }

    if (auth && session.status === "unauthenticated") {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }

    return null;
  }, [onClick, router, href, session.status, auth, loginModal]);

  return (
    <div
      className="flex flex-row items-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">
        {alert && (
          <BsDot className="absolute -top-4 left-0 text-sky-500" size={70} />
        )}
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={28} color="white" />
        {alert && (
          <BsDot className="absolute -top-4 left-0 text-sky-500" size={70} />
        )}
        <p className="text-white hidden lg:block text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
