"use client"
import React, {useState, useEffect} from 'react'
import { BsMessenger } from "react-icons/bs";
import InputForm from "@/components/InputForm";
import { AiOutlineGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {useForm} from 'react-hook-form'

function AuthForm() {
    const [newUserForm, setNewUserForm] = useState(false)
    const form = useForm()

    const {register, handleSubmit } = form

    const onSubmit = (data: any) =>{
      console.log('Form submited', data)
    }


  return (
    <div className="flex flex-col items-center justify-center border drop-shadow-xl p-4">
        <div className="text-[#007bff] text-4xl lg:text-6xl mb-2">
          <BsMessenger />
        </div>
        <p className="font-bold text-2xl lg:text-4xl tracking-tight text-gray-900">
         { newUserForm ? 'Create an account' : 'Sign in to your account' }
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6 flex flex-col gap-3">
          {newUserForm ? <InputForm type="text" label="Username" regis={{...register("username")}}/> : null }
          <InputForm type="email" label="Email address" regis={{...register("email")}}/>
          <InputForm type="password" label="Password" regis={{...register("password")}}/>
        </div>
        <button type='submit' className="bg-[#007bff] w-full text-white p-1 rounded-md mt-4 hover:bg-opacity-60">
         {newUserForm ? 'Sign Up' : 'Sign In'}
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
            {newUserForm ? 'Already had an account?' : 'New to Messenger?'}
            <span className="hover:underline cursor-pointer" onClick={() => setNewUserForm(!newUserForm)}>
              {" "}
              {newUserForm ? 'Log in' :  'Create an account'}
            </span>
          </p>
        </div>
      </div>
  )
}

export default AuthForm