"use client";
import React, { useState, useEffect, useCallback } from "react";
import { BsMessenger } from "react-icons/bs";
import InputForm from "@/components/InputForm";
import { AiOutlineGithub, AiOutlineLoading } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

function AuthForm() {
  const session = useSession();
  const router = useRouter()
  const [newUserForm, setNewUserForm] = useState("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("authenticated");
      router.push('/users')
    }
  }, [session?.status, router]);

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
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Success loggin");
            router.push('/users')
          }
        })
        .finally(() => setIsLoading(false));
    }

    if (newUserForm === "REGISTER") {
      // AXIOS REGISTER
      axios
        .post("/api/register", data)
        .then((response) => {
          if (response.data.message === "Email already used") {
            toast(response.data.message);
          } else {
            toast.success("Account Created");
            signIn('credentials', data)
            
          }
        })
        .catch(() => toast.error("Something went wrong"))
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);
    // nextAuth social sign In
    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid Credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Success loggin");
          router.push('/users')
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center border drop-shadow-xl p-4">
      <div className="text-[#007bff] text-4xl lg:text-6xl mb-2">
        <BsMessenger />
      </div>
      <p className="font-bold text-2xl lg:text-4xl tracking-tight text-gray-900">
        {newUserForm === "REGISTER"
          ? "Create an account"
          : "Sign in to your account"}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-col gap-3">
          {newUserForm === "REGISTER" && (
            <InputForm
              errors={errors}
              id="name"
              placeholder="Insert you name here"
              type="text"
              label="Name"
              regis={{
                ...register("name", {
                  required: "Name is required",
                }),
              }}
            />
          )}

          <InputForm
            errors={errors}
            id="email"
            type="email"
            label="Email address"
            placeholder="Insert you email here"
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
          <InputForm
            errors={errors}
            id="password"
            type="password"
            label="Password"
            placeholder="Insert you password here"
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
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className="bg-[#007bff] w-full text-white p-1 rounded-md mt-4 hover:bg-opacity-60 flex flex-row gap-3 justify-center items-center"
        >
          {newUserForm === "REGISTER" ? "Sign Up" : "Sign In"}
          {isLoading && <AiOutlineLoading className="animate-spin" />}
        </button>
      </form>
      <p className="mt-3 text-xs md:text-sm text-gray-500">or continue with</p>
      <div className="flex flex-row gap-2 w-full mt-2 ">
        <button
          className="p-2 w-full text-2xl md:text-3xl  border drop-shadow-md flex justify-center"
          onClick={() => socialAction("github")}
        >
          <AiOutlineGithub />
        </button>
        <button
          className="p-2 w-full text-2xl md:text-3xl border drop-shadow-md flex justify-center"
          onClick={() => socialAction("google")}
        >
          <FcGoogle />
        </button>
      </div>
      <div className="flex justify-center items-center w-full text-xs lg:text-sm mt-1">
        <p className="text-gray-500">
          {newUserForm === "REGISTER"
            ? "Already had an account? "
            : "New to Messenger? "}
          <span className="hover:underline cursor-pointer" onClick={toggleForm}>
            {newUserForm === "REGISTER" ? "Log in" : "Create an account"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;
