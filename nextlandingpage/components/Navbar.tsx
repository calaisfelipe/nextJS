"use client";
import React from "react";
import Link from "next/link";
import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const session = useSession();

  const user = session.data?.user;

  return (
    <>
      <nav className="flex flex-row bg-gray-900 text-gray-300 p-2 justify-between items-center">
        <div>
          <Popover>
            <PopoverTrigger>
              <Avatar>
                <AvatarFallback className="uppercase">
                  {user?.name ? user?.name.slice(0, 2) : "GE"}
                </AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="flex flex-col">
              {user ? (
                <div>
                  <p>Hello,{user?.name}</p>
                  <p>Email: {user?.email}</p>
                </div>
              ) : (
                "Hello Guest"
              )}

              {!user ? (
                <Link href="/login">Login</Link>
              ) : (
                <Button variant={"ghost"} onClick={() => signOut()}>
                  Log out
                </Button>
              )}
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Link href="/server" className="hover:scale-110 hover:opacity-40">
            Server
          </Link>
          <Link href="/protected" className="hover:scale-110 hover:opacity-40">
            Protected
          </Link>
          <Link
            href="/#"
            className="hover:scale-125 hover:opacity-40"
            target="_blank"
          >
            <BsGithub />
          </Link>
          <Link
            href="/#"
            className="hover:scale-125 hover:opacity-40"
            target="_blank"
          >
            <BsInstagram />
          </Link>
          <Link
            href="https://wa.me/5531995196573"
            className="hover:scale-125 hover:opacity-40"
            target="_blank"
          >
            <BsWhatsapp />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
