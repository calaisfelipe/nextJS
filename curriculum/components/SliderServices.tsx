"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, A11y } from "swiper/modules";
import ServicesCard from "./ServicesCard";
import {FiTerminal} from 'react-icons/fi'
import {BsCodeSlash} from 'react-icons/bs'
import {SlScreenDesktop} from 'react-icons/sl'
import {MdFitScreen} from 'react-icons/md'
import {TfiPencilAlt} from 'react-icons/tfi'


import "./Accordeon.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const services = [
    {title:'Code',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facilis odio excepturi velit nobis mollitia ab illum magnam.',
    icon:FiTerminal},
    {title:'Landing Page',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facilis odio excepturi velit nobis mollitia ab illum magnam.',
    icon:SlScreenDesktop},
    {title:'Development',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facilis odio excepturi velit nobis mollitia ab illum magnam.',
    icon:BsCodeSlash},
    {title:'Responive design',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facilis odio excepturi velit nobis mollitia ab illum magnam.',
    icon:MdFitScreen},
    {title:'Design',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, facilis odio excepturi velit nobis mollitia ab illum magnam.',
    icon:TfiPencilAlt},
]


const SliderServices = () => {
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
        
            {services.map((service) => 
            <SwiperSlide key={service.title}>
            <ServicesCard  title={service.title} description={service.description} icon={service.icon}/>
            </SwiperSlide>
            )}
        
      </Swiper>
    </>
  );
};

export default SliderServices;
