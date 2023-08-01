import React from "react";
import Tittle from "@/components/Tittle";

const ContactPage = () => {
  return (
    <div className="md:h-screen flex justify-center  bg-gray-200 w-full">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text="Contato" />
      </div>
    </div>
  );
};

export default ContactPage;
