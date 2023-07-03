"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import logo from "../public/images/logo.png";
import Input from "@/components/Input";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState(false);

  const toggleVariant = useCallback(() => {
    setVariant(!variant);
  }, [variant]);

  return (
    <>
      <main className="loginBG relative h-full">
        <div className="bg-black w-full h-full sm:bg-opacity-50">
          <nav className="px-12 py-5">
            <Image className="w-16 " src={logo} alt="netflix logo" />
          </nav>

          <div className="flex justify-center">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md ">
              <h2 className="text-white text-4xl mb-8 font-semibold">
                {!variant ? "Sign in" : "Create an account"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant && (
                  <Input
                    idName="username"
                    label="Username"
                    type="text"
                    value={name}
                    action={(e: any) => setName(e.target.value)}
                  />
                )}

                <Input
                  idName="email"
                  label="Insert your e-mail"
                  type="email"
                  value={email}
                  action={(e: any) => setEmail(e.target.value)}
                />
                <Input
                  idName="password"
                  label="Password"
                  type="password"
                  value={password}
                  action={(e: any) => setPassword(e.target.value)}
                />
              </div>
              <button className="bg-red-600 py-3 text-white w-full mt-6 rounded-md hover:bg-red-700 transition">
                {!variant ? "Log in" : "Sign Up"}
              </button>
              <p className="text-neutral-500 mt-12 text-sm ">
                {!variant
                  ? " First time using Netflix?"
                  : "Already have an account?"}
                <span
                  className="text-white hover:underline hover: cursor-pointer text-sm"
                  onClick={toggleVariant}
                >
                  {!variant ? " Create an account" : "Log in"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
