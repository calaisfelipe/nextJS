"use client";
import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession({
    required: false,
  });

  return (
    <nav className="p-2 flex flex-row gap-7 w-full justify-center items-center bg-black">
      <p className="text-white border p-2 rounded-md">
        Welcome, {session ? session.user?.name : "guest"}
      </p>
      <Link
        className="text-gray-400 hover:text-white text-2xl font-bold"
        href="/"
      >
        Home
      </Link>
      <Link
        className="text-gray-400 hover:text-white text-2xl font-bold"
        href="/server"
      >
        Server
      </Link>
      <Link
        className="text-gray-400 hover:text-white text-2xl font-bold"
        href="/client"
      >
        Client
      </Link>

      {session ? (
        <button
          className="bg-red-700 text-white p-2 rounded-md"
          onClick={() => signOut()}
        >
          Logout
        </button>
      ) : (
        <Link
          className="
            bg-blue-600
           text-white rounded-md p-2 hover:bg-opacity-80"
          href="/api/auth/signin"
        >
          Login
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
