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
      <div className="flex flex-row bg-gray-200 dark:bg-gray-700">
        <div
          className="flex bg-gray-200"
        >
          <AsideBar meta={metadata.title} />
          <SideBar meta={metadata.title} />
          {children}
        </div>
      </div>
    </>
  );
};

export default AboutMeLayout;
