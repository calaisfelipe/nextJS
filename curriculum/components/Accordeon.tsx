"use client";
import React from "react";
import FormationBox from "./FormationBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation, A11y } from "swiper/modules";

import "./Accordeon.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Accordeon = ({language}:{language:string}) => {

  
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        grid={{
          rows: 1,
        }}
        modules={[Grid, Pagination, Navigation, A11y]}
        className="mySwiper w-[400px] h-full "
      >
        <SwiperSlide>
          <div className="flex flex-col gap-1">
          <FormationBox
                duration="2009-2011"
                title="Cotemig - Belo horizonte/MG"
                subtitle={language === 'EN' ? 'Computer Technician': "Técnico em informática"}
                description={language === 'EN' ? "High school together with a technical and vocational course in computer science. Here I had my first contact with programming." :"Ensino médio juntamente com o curso técnico e profissionalizante em informática. Aqui tive meu primeiro contato com programação."}
              />

              <FormationBox
                duration="2014-"
                title={language === "EN" ? "Languages " :"Idiomas"}
                subtitle={language === 'EN' ? "Fluent English" :"Inglês Fluente"}
                description={language === 'EN' ? "Advanced English and fluency in conversation." :"Inglês avançado e fluência em conversação."}
              />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col gap-1">
          <FormationBox
                duration="2011-2013"
                title="Realteq - Automação comercial"
                subtitle={language === 'EN' ? 'Computer Technician': "Técnico em informática"}
                description={language === 'EN' ? "Technician responsible for the maintenance, installation and support of electronic and computer equipment." :"Técnico responsável pela manutenção, instalação e suporte de equipamentos eletrônicos e de informática."}
              />
            <FormationBox
                duration="2013-2014"
                title="Provarejo - Automação LTDA"
                subtitle={language === 'EN' ?"Electronics Technician":"Técnico em Eletrônica"}
                description={language === 'EN' ?"Responsible for the laboratory of electronic scales. Maintenance, support and installation.":"Responsável pelo laboratório de balanças eletrônicas. Manutenção, suporte e instalação."}
              />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
          <FormationBox
                duration="2014-2016"
                title="Provarejo - Automação LTDA"
                subtitle={language === 'EN' ? "Technical supervisor" :"Supervisor Técnico"}
                description={language === 'EN' ? "Responsible for supervising and coordinating a team of technicians to serve several customers in different states." :"Responsável por supervisionar e coordenar uma equipe de técnicos para atendimento a diversos clientes em diferentes estados."}
              />
              <FormationBox
                duration="2022-2023"
                title={language === 'EN' ? "Career transition": "Transição de carreira"}
                subtitle={language === 'EN' ? "Web Developer/ Front end": "Desenvolvedor web/ Front end"}
                description={language === 'EN' ? "Period dedicated to intense study in Front-End programming. Immersion in technologies such as HTML, CSS, JavaScript/TypeScript, react, NextJs and others.": "Periodo dedicado ao estudo intenso em programação Front-End. Imersão em tecnologias como HTML, CSS, JavaScript/TypeScript, react, NextJs e outras."}
              />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Accordeon;
