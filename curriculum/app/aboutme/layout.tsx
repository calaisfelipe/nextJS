import React from "react";
import AsideBar from "@/components/AsideBar";
import SideBar from "@/components/SideBar";
import { motion } from "framer-motion";


type aboutMeLayoutType = {
  children: React.ReactNode;
};

export const metadata = {
  title: "About me",
};

const AboutMeLayout = ({ children }: aboutMeLayoutType) => {
  return (
    <>
      
        <div
          className="flex bg-gray-200 dark:bg-gray-700"
        >
          <AsideBar meta={metadata.title} />
          <SideBar meta={metadata.title} bottom />
          {children}
        </div>
      
    </>
  );
};

export default AboutMeLayout;
