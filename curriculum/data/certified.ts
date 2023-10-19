import { SiApollographql } from "react-icons/si";
import { IconType } from "react-icons";


export type licensesType = {
    name:string
    date: string
    icon: IconType
    code: string
    link: string
    description:string
    image: string
}

export const licensesAndCertifieds:licensesType[] = [
  {
    name: "Graph Developer - associate",
    icon: SiApollographql,
    date: "10-19-2023",
    code: "2be4c24d-a5b9-4b6f-9f39-18d4e1090bdd",
    link: "https://www.apollographql.com/tutorials/certifications/2be4c24d-a5b9-4b6f-9f39-18d4e1090bdd",
    description:
      "Curso maravilhoso disponibilizado pela apollo em seu site oficial para todos que querem aprender a utilizar essa maravilhosa linguagem de consulta por grafos e construir API's robustas. O curso possui quatro módulos com um total de 3 a 4 horas e diversos exercícios de fixação de conteúdo. Convido a todos a conhecer essa incrível plataforma: https://www.apollographql.com/",
    image: "https://i.imgur.com/OJYsXzI.png",
  },
  
];
