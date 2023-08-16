"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Tittle from "@/components/Tittle";
import { CiDesktop } from "react-icons/ci";
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

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data: any) => {
    console.log(data);
  };

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

  return (
    <div className="sm:h-screen flex justify-center  bg-gray-200 dark:bg-gray-700 dark:text-white w-full">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full sm:p-0 p-4">
        <Tittle text={language.state === "EN" ? "Contact" : "Contato"} />

        <div className="flex md:flex-row flex-col gap-16 mt-8 w-full justify-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col w-full mt-3 px-2">
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
            <div className="flex flex-row justify-center items-center">
              <div>
                <CiDesktop size={128} />
              </div>
              <div>
                <p>felipe_calais@hotmail.com</p>
                <div className="flex flex-row gap-2 mt-2">
                  <Link
                    href="https://github.com/calaisfelipe"
                    className="hover:opacity-60"
                    target="_blank"
                  >
                    <BsGithub size={18} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/calaisfelipe/"
                    className="hover:opacity-60"
                    target="_blank"
                  >
                    <BsInstagram size={18} />
                  </Link>
                  <Link
                    href="https://twitter.com/CalaisFelipe_br"
                    className="hover:opacity-60"
                    target="_blank"
                  >
                    <BsTwitter size={18} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center">
              <div>
                <BsTelephone size={108} />
              </div>
              <div>
                <div className="flex flex-row gap-2 mt-2 justify-center items-center">
                  <Link href="https://wa.me/5531995196573" target="_blank">
                    +55 (31) 9 9519-6573
                  </Link>
                  <Link
                    href="https://wa.me/5531995196573"
                    className="hover:opacity-60"
                    target="_blank"
                  >
                    <BsWhatsapp size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <form
            className="w-full bg-yellow-500 dark:bg-gray-700 p-1 flex flex-col gap-2 items-center rounded-md"
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
                id="email"
                {...register("email")}
                className="w-80 rounded-full px-3 outline-none hover:outline-none text-sm py-1"
                placeholder={
                  language.state === "EN" ? "Your email..." : "Seu email..."
                }
              />
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
                {...register("assunto")}
                className="w-80 rounded-full px-3 outline-none hover:outline-none text-sm py-1"
                placeholder={
                  language.state === "EN" ? "Subject..." : "Assunto... "
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-sm text-gray-600 dark:text-white font-semibold"
              >
                {language.state === "EN" ? "Message:" : "Mensagem:"}
              </label>
              <textarea
                cols={8}
                rows={3}
                id="message"
                {...register("message")}
                className="w-80  px-3 outline-none hover:outline-none text-sm py-1 rounded-lg"
                placeholder={
                  language.state === "EN"
                    ? "Tell me your next idea..."
                    : "Me conte sua próxima ideia... "
                }
              />
            </div>

            <HomeButton
              text={language.state === "EN" ? "Send" : "Enviar"}
              type="submit"
              secondary
            />
          </form>
        </div>

        <div className="text-4xl font-bold w-full text-center mt-8 mb-8 uppercase">
          {language.state === "EN"
            ? "Thanks for the visit"
            : "Obrigado pela visita"}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
