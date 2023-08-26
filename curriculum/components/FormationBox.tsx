"use client";
import React from "react";

type FormationBoxType = {
  duration?: string;
  title: string;
  subtitle: string;
  description: string;
};

const FormationBox = ({
  title,
  subtitle,
  description,
  duration,
}: FormationBoxType) => {
  return (
    <div className="flex flex-col lg:w-96 md:w-48   w-full p-2 mt-2 gap-1 bg-black justify-center ">
      
      <h3 className="text-yellow-500 dark:text-blue-400 text-md font-bold">{duration}</h3>
      
      
      <div className="text-white font-extrabold text-lg">{subtitle}</div>
      <h5 className="font-bold text-xs text-gray-400 uppercase tracking-wider">
        {title}
      </h5>
      <p className="text-sm text-gray-500 tracking-tighter grow">
        {description}
      </p>
    </div>
  );
};

export default FormationBox;
