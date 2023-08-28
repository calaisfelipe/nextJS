"use client";
import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import Tittle from "@/components/Tittle";
import { CiDesktop } from "react-icons/ci";
import { AiOutlineLoading } from "react-icons/ai";
import {
  BsTelephone,
  BsInstagram,
  BsGithub,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import Link from "next/link";
import useContextLanguage from "@/hooks/useContextLanguage";
import HomeButton from "@/components/HomeButton";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SocialMediaBar from "@/components/SocialMediaBar";
import {motion} from 'framer-motion'
import { type } from "os";

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      assunto: "",
      message: "",
    },
  });

  const language = useContextLanguage();

  useEffect(() => {
    const getLanguage = localStorage.getItem("language");

    if (getLanguage === "EN") {
      language.dispatch({ type: "CHANGE_LANG" });
    }

    if (!getLanguage) {
      language.dispatch({ type: "RESET" });
    }
  }, [language]);

  const submitForm = (data: any) => {
    setIsLoading(true);

    try {
      const { email, assunto, message } = data;

      const templateParams = {
        to_name: "Felipe Calais",
        from_assunto: assunto,
        from_name: email,
        message,
      };

      emailjs
        .send(
          "service_uytliem",
          "template_56boddk",
          templateParams,
          "tto_Qt7ibeDuXxBH1"
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success(
              `${language.state === "EN" ? "Email sended" : "Email Enviado"}`
            );
          } else {
            toast.error(
              `${
                language.state === "EN"
                  ? "Something went wrong"
                  : "Algo deu errado - tente novamente mais tarde"
              }`
            );
          }
        })
        .finally(() => {
          reset();
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    } finally {
      () => setIsLoading(false);
    }

    console.log(data);
  };
 
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{delay:0.2, duration:1 }}
    className="sm:h-screen h-[95vh] flex justify-center  bg-gray-200 dark:bg-gray-700 dark:text-white w-screen overflow-hidden">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full sm:p-0 p-4">
        <Tittle text={language.state === "EN" ? "Contact" : "Contato"} />
        <SocialMediaBar contact/>

        <div className="flex md:flex-row flex-col md:gap-16 md:mt-8 w-full justify-center items-center">
          <div className="sm:flex hidden flex-col gap-2">
            <div className="flex flex-col w-full md:mt-3 md:px-2 md:mb-0 mb-4">
              <div className="text-md  font-semibold">
                {language.state === "EN"
                  ? "Feel free to get in touch!"
                  : `Sinta-se livre para entrar em contato!`}
              </div>
              <p className="lg:text-sm text-xs  text-gray-500 dark:text-gray-300">
                {language.state === "EN"
                  ? "Hope we can work together on your next project."
                  : "Espero que possamos trabalhar juntos no seu próximo projeto."}
              </p>
            </div>
            <div className="md:flex flex-row justify-center items-center hidden">
              <div>
                <CiDesktop size={128} />
              </div>
              <div>
                <p>felipe_calais@hotmail.com</p>
                
              </div>
            </div>

            <div className="md:flex flex-row justify-center items-center hidden">
              <div>
                <BsTelephone size={108} />
              </div>
              <div>
                <div className="flex flex-row gap-2 mt-2 justify-center items-center">
                  <Link href="https://wa.me/5531995196573" target="_blank">
                    +55 (31) 9 9519-6573
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>

          <form
            className="w-fit bg-yellow-500 dark:bg-gray-700 p-4 flex flex-col gap-2 items-center rounded-md "
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="my-2">
              <h3 className="font-bold text-lg ">
                {language.state === "EN"
                  ? "Send me an email:"
                  : "Me mande um email:"}{" "}
              </h3>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm text-gray-600 dark:text-white  font-semibold"
              >
                E-mail:
              </label>
              <input
                type="email"
                disabled={isLoading}
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
                    message: "Invalid email format",
                  },
                })}
                className="w-80 rounded-full px-3 outline-none hover:outline-none dark:text-black text-sm py-1"
                placeholder={
                  language.state === "EN" ? "Your email..." : "Seu email..."
                }
              />
              <div className="text-xs font-semibold text-red-500 mt-1">
                {errors.email?.message}
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="assunto"
                className="text-sm text-gray-600 dark:text-white  font-semibold"
              >
                {language.state === "EN" ? "Subject:" : "Assunto: "}
              </label>
              <input
                type="assunto"
                id="assunto"
                disabled={isLoading}
                {...register("assunto", { required: "subject is required" })}
                className="w-80 rounded-full px-3 dark:text-black outline-none hover:outline-none text-sm py-1"
                placeholder={
                  language.state === "EN" ? "Subject..." : "Assunto... "
                }
              />
              <div className="text-xs font-semibold text-red-500 mt-1">
                {errors.assunto?.message}
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm text-gray-600 dark:text-white font-semibold"
              >
                {language.state === "EN" ? "Message:" : "Mensagem:"}
              </label>
              <textarea
                disabled={isLoading}
                cols={8}
                rows={3}
                id="message"
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "Minimum 10 caracteres" },
                })}
                className="w-80  px-3 outline-none hover:outline-none text-sm py-1 rounded-lg dark:text-black"
                placeholder={
                  language.state === "EN"
                    ? "Tell me your next idea..."
                    : "Me conte sua próxima ideia... "
                }
              />
              <div className="text-xs font-semibold text-red-500 mt-1">
                {errors.message?.message}
              </div>
            </div>

            <HomeButton disabled={isLoading} type="submit" secondary>
              {language.state === "EN" ? `Send` : "Enviar"}
              {isLoading && <AiOutlineLoading className="animate-spin" />}
            </HomeButton>
          </form>
        </div>

        <div className="text-4xl font-bold w-full text-center sm:my-4 my-4 uppercase">
          {language.state === "EN"
            ? "Thanks for the visit"
            : "Obrigado pela visita"}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
