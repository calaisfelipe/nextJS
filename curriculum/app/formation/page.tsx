import React from "react";
import Tittle from "@/components/Tittle";
import FormationBox from "@/components/FormationBox";

const formationPage = () => {
  return (
    <div className="md:h-screen flex justify-center  bg-gray-200 w-full">
      <div className="flex flex-col gap-2 mt-10 items-center xl:w-[70%] md:w-[80%] sm:w-[75%] w-full ">
        <Tittle text="Formação" />

        <div className="flex flex-col w-full">
          <div>
            <h4 className="uppercase font-bold text-md">Escolaridade</h4>
            <div className="flex sm:flex-row flex-col gap-4">
              <FormationBox
                title="Cotemig - Belo horizonte/MG"
                subtitle="Técnico em informática"
                description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
              />
              <FormationBox
                title="Cotemig - Belo horizonte/MG"
                subtitle="Técnico em informática"
                description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
              />
              <FormationBox
                title="Idiomas"
                subtitle="Inglês Fluente"
                description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
              />
            </div>
          </div>

          <div className="mt-4">
          <h4 className="uppercase font-bold text-md">Experiências</h4>
          <div className="flex sm:flex-row flex-col  gap-4">
            <FormationBox
              title="Realteq - Automação comercial"
              subtitle="Técnico em informática"
              description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
            />
            <FormationBox
              title="Provarejo"
              subtitle="Supervisor Técnico"
              description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
            />
            <FormationBox
              title="Transição de carreira"
              subtitle="Desenvolvedor web/ Front end"
              description="lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la lorem ipsulum dolor sei la"
            />
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default formationPage;
