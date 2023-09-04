"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, A11y } from "swiper/modules";
import ServicesCard from "./ServicesCard";
import { FiTerminal } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import { MdFitScreen } from "react-icons/md";
import { TfiPencilAlt } from "react-icons/tfi";

import "./Accordeon.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
  {
    title: "Landing Pages",
    description: {
      descriptionBR:
        "Belas landing Pages focadas em conversão de venda e com designs incriveis e chamativos.",
      descriptionEN:
        "Beautiful landing pages focused on sales conversion and with incredible and eye-catching designs.",
    },
    icon: SlScreenDesktop,
  },
  {
    title: "Development",
    description: {
      descriptionBR:
        "Desenvolvimento de aplicações web, ferramentas, sites de vendas, portais e todas as funcionalidades das técnologias mais atuais.",
      descriptionEN:
        "Development of web applications, tools, sales sites, portals and all the features of the most current technologies.",
    },
    icon: BsCodeSlash,
  },
  {
    title: "Responive design",
    description: {
      descriptionBR:
        "Páginas web e aplicações 100% responsivas em qualquer tela, seja desktop, mobile ou tablet.",
      descriptionEN:
        "100% responsive web pages and applications on any screen, be it desktop, mobile or tablet.",
    },
    icon: MdFitScreen,
  },
  {
    title: "Code",
    description: {
      descriptionBR:
        "Códigos, scripts, soluções para automação e otimização do seu negócio.",
      descriptionEN:
        "Codes, scripts, solutions for automation and optimization of your business.",
    },
    icon: FiTerminal,
  },
  {
    title: "Design",
    description: {
      descriptionBR:
        "Designs incriveis que focam em encantar e converter em vendas. UX/UI design para que o usuario tenha a melhor experiência.",
      descriptionEN:
        "Incredible designs that focus on delighting and converting into sales. UX/UI design for the user to have the best experience.",
    },
    icon: TfiPencilAlt,
  },
];

type SliderServicesProps = {
  state: string;
  dispatch: React.Dispatch<any>;
};

const SliderServices = ({language}: {language:SliderServicesProps}) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={false}
        slidesPerView={2}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        grid={{
          rows: 1,
        }}
        modules={[Grid, Pagination, Navigation, A11y]}
        className="mySwiper sm:h-[250px] h-[240px] max-w-[380px] p-2"
      >
        {services.map((service) => (
          <SwiperSlide key={service.title}>
            <ServicesCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              language={language.state}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderServices;
