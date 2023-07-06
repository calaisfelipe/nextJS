import React from "react";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "@/components/UserCard";


export default async function Home() {
  const session = await getServerSession(options);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session ? (
        <UserCard user={session?.user} pageType={"Home"} />
      ) : (
        <h1 className="text-4xl font-bold text-slate-600">
          Next Auth Tutorial
        </h1>
      )}
    </main>
  );
}
