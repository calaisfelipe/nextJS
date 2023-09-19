"use client";
import React from "react";
import { useUser, useAuth, SignOutButton } from "@clerk/nextjs";
import Link from 'next/link'


export default function Home() {
  const { user } = useUser();
  const { isSignedIn} = useAuth()
  return (
    <>
    <div className="p-2">
      {isSignedIn ? <SignOutButton /> : <Link href='/signIn'>Log In</Link>  }
    </div>
    <main className="flex min-h-screen flex-col items-center justify-center p-3">
      <h2>Hello, { user?.username ? user?.username : 'Guest'}</h2>
      <h3>Home Page</h3>
    </main>
    </>
  );
}
