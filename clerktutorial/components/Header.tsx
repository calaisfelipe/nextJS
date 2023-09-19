import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs/app-beta";

const Header = () => {

  return (
    <div className="p-2 w-full flex flex-row gap-3  ">
      <div>
        <UserButton />
       
      </div>

      <Link href="/">Home</Link>
      <Link href="/protected">protected</Link>
      <Link href="/free">free</Link>
    </div>
  );
};

export default Header;
