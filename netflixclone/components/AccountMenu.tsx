import React from "react";
import Image from "next/image";
import profileImg from "@/public/images/default-blue.png";
import { signOut } from "next-auth/react";

type AccountMenuProps = {
  visible: boolean;
  session: any
};

function AccountMenu({ visible, session }: AccountMenuProps) {
  if (!visible) return null;

  return(
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-md">
        <div className="flex flex-col gap-3">
            <div className="px-3 group/iten flex flex-row gap-3 items-center w-full">
                <Image className="w-5 rounded-md" src={profileImg} alt='profile logo' />
                <p className="text-white text-sm  group-hover/iten:underline capitalize">{session.data?.user?.name}</p>

            </div>
            <hr className="bg-gray-600 border-0 h-px my-4"/>
            <div className="px-3 text-center text-white text-sm hover:underline" onClick={() => signOut()}>
                Sign out of Netflix

            </div>


        </div>


    </div>
    
    )
}

export default AccountMenu;
