import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="p-2 bg-cyan-700 ">
      <ul className="flex justify-center items-center gap-10 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/api/auth/signin">Sign In</Link>
        </li>
        <li>
          <Link href="/api/auth/signout">Sign Out</Link>
        </li>
        <li>
          <Link href="/server">Server</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/extra">Extra</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
