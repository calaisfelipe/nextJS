import React from "react";
import { navItems } from "./Navbar";
//import { AiOutlineMenu } from "react-icons/ai";

type MobileMenuProps ={
    visible: boolean
}

function MobileMenu({visible}: MobileMenuProps) {
  
    if(!visible)
    return null

  
    return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-100">
      <div className="flex flex-col gap-4">

        {navItems.map((item) => <div className="px-3 text-center text-white hover:underline">{item}</div> )}
           
      </div>
    </div>
  );
}

export default MobileMenu;
