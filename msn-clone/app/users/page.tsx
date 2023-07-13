"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";

const Users = () => {
  const session = useSession();

  return (
    <div className="flex flex-col gap-2">
      Hello {session?.data?.user?.name}
      <button
        className="p-2 bg-slate-800 text-white rounded-md hover:bg-opacity-60 w-20"
        onClick={() => signOut()}
      >
        Log Out
      </button>
    </div>
  );
};

export default Users;
