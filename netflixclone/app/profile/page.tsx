'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function profilePage() {
  const options = ["blue", "green", "red", "slate"];
  const sorted = Math.floor(Math.random() * 4);
  const choosed = options[sorted];

const router = useRouter()

  return (
    <>
      <section className="flex justify-center flex-col items-center h-full ">
        <p className="text-white text-4xl mb-5">Who is watching?</p>

        <div className="group" onClick={() => router.push('/')}>
        <div className=" w-44 h-44 flex items-center justify-center border-2 border-transparent 
        rounded-md hover:border-white hover:cursor-pointer">
          <Image
            src={`/../public/images/default-${choosed}.png`}
            alt="profile"
            width={170}
            height={110}
          />
        </div>
        <div className="text-gray-400 mt-4 text-2xl text-center group-hover:text-white">
           <Link href='/'>User Name</Link>
        </div>
        </div>
      </section>
    </>
  );
}
