"use client";

import React, { useState, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState(false);
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    setVariant(!variant);
  }, [variant]);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/profile",
      });
      //PRECISA DE VALIDAÇÃO
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post(
        "api/register",
        JSON.stringify({
          email,
          name,
          password,
        })
      );

      login();
    } catch (error) {}
  }, [email, name, password, login]);

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
              <button
                className="bg-red-600 py-3 text-white w-full mt-6 rounded-md hover:bg-red-700 transition"
                onClick={!variant ? login : register}
              >
                {!variant ? "Log in" : "Sign Up"}
              </button>
              <div className="flex flex-row w-full gap-5 justify-center items-center h-10 pt-10">
                <button className="text-white text-4xl hover:opacity-60 transition" onClick={() => signIn('github', {callbackUrl:'/'}) }>
                  <FaGithub />
                </button>
                <button className="text-4xl hover:opacity-60 transition" onClick={() => signIn('google', {callbackUrl:'/'}) } >
                  <FcGoogle />
                </button>
              </div>
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
