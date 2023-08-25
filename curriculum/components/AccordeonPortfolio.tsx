"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, A11y } from "swiper/modules";
import AccordeonCard from "./AccordeonCard";
import { firstRow, secondRow } from "@/data/projects";

import "./Accordeon.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AccordeonPortfolio = ({ language }: { language: string }) => {
  return (
    <>
      <Swiper

        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        grabCursor={true}
        
        pagination={{
          clickable: true,
        }}
        navigation={false}
       grid={{
        rows: 1

        
       }}
       
        modules={[Grid,Pagination, Navigation, A11y]}
        className="mySwiper sm:h-0 sm:w-0 w-full h-full sm:invisible visible my-10 p-4"
      >
        
          <SwiperSlide >
            <AccordeonCard project={firstRow} language={language} />
          </SwiperSlide>
       

     
          <SwiperSlide >
           <AccordeonCard project={secondRow} language={language} />
          </SwiperSlide>
      



      </Swiper>
    </>
  );
};

export default AccordeonPortfolio;
