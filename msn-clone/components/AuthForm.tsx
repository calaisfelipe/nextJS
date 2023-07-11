"use client";
import React, { useState, useEffect, useCallback } from "react";
import { BsMessenger } from "react-icons/bs";
import InputForm from "@/components/InputForm";
import { AiOutlineGithub, AiOutlineLoading } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

function AuthForm() {
  const [newUserForm, setNewUserForm] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const toggleForm = useCallback(() => {
    if (newUserForm === "LOGIN") {
      setNewUserForm("REGISTER");
    } else {
      setNewUserForm("LOGIN");
    }
  }, [newUserForm]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: any) => {
    setIsLoading(true);
    console.log("Form submited", data);

    if (newUserForm === "LOGIN") {
      //NEXT AUTH
    }

    if (newUserForm === "REGISTER") {
      // AXIOS REGISTER
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // nextAuth social sign In
  };

  return (
    <div className="flex flex-col items-center justify-center border drop-shadow-xl p-4">
      <div className="text-[#007bff] text-4xl lg:text-6xl mb-2">
        <BsMessenger />
      </div>
      <p className="font-bold text-2xl lg:text-4xl tracking-tight text-gray-900">
        {newUserForm ? "Create an account" : "Sign in to your account"}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-col gap-3">
          {newUserForm === "REGISTER" && (
            <InputForm
              id="username"
              type="text"
              label="Username"
              regis={{
                ...register("username", {
                  required: "Username is required",
                }),
              }}
            />
          )}
          {newUserForm === "REGISTER" && (
            <p className="text-xs text-red-600">{errors.username?.message}</p>
          )}

          <InputForm
            id="email"
            type="email"
            label="Email address"
            regis={{
              ...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Insert a valid email",
                },
              }),
            }}
          />
          <p className="text-xs text-red-600">{errors.email?.message}</p>
          <InputForm
            id="password"
            type="password"
            label="Password"
            regis={{
              ...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characteres",
                },
              }),
            }}
          />
          <p className="text-xs text-red-600">{errors.password?.message}</p>
        </div>
        <button
          type="submit"
          className="bg-[#007bff] w-full text-white p-1 rounded-md mt-4 hover:bg-opacity-60 flex flex-row gap-3 justify-center items-center"
        >
          {newUserForm === "REGISTER" ? "Sign Up" : "Sign In"}
          {isLoading && <AiOutlineLoading className="animate-spin" />}
        </button>
      </form>
      <p className="mt-2 text-xs md:text-sm">or continue with</p>
      <div className="flex flex-row gap-2 w-full mt-2 ">
        <button className="p-2 w-full text-2xl md:text-3xl  border drop-shadow-md flex justify-center">
          <AiOutlineGithub />
        </button>
        <button className="p-2 w-full text-2xl md:text-3xl border drop-shadow-md flex justify-center">
          <FcGoogle />
        </button>
      </div>
      <div className="flex justify-center items-center w-full text-xs lg:text-sm mt-1">
        <p>
          {newUserForm === "REGISTER"
            ? "Already had an account?"
            : "New to Messenger?"}
          <span className="hover:underline cursor-pointer" onClick={toggleForm}>
            {newUserForm ? "Log in" : "Create an account"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
