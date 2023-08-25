"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, A11y } from "swiper/modules";
import AccordeonCard from "./AccordeonCard";
import { projectsFirstRow } from "@/data/projects";

import "./Accordeon.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AccordeonPortfolio = ({ language }: { language: string }) => {
  return (
    <>
      <Swiper

        spaceBetween={10}
        centeredSlides={true}
        slidesPerView={2}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
       grid={{
        rows: 1
        
       }}
       
        modules={[Grid,Pagination, Navigation, A11y]}
        className="mySwiper sm:h-0 sm:w-0 w-full h-60 sm:invisible visible my-10"
      >
        {projectsFirstRow.map((project) => (
          <SwiperSlide key={project.title}>
            <AccordeonCard project={project} language={language} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default AccordeonPortfolio;
