import ts from "@/public/images/typescript.png";
import html5 from "@/public/images/html-5.png";
import reactLogo from "@/public/images/science.png";
import tailwind from "@/public/images/Tailwind.png";
import nextlogo from "@/public/images/next-js-logo.png";
import css from "@/public/images/css-3.png";
import js from "@/public/images/js.png";

export const projectsFirstRow = [
  {
    title: "Portfólio",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Portfolio2calais.png",
    isInBuild: false,
    tecnologies: [ts, html5, reactLogo, tailwind, nextlogo, css],
    link: '#'
  },
  {
    title: "Rocket LandPage",
    isInBuild: false,
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/5/5f/Rocketlandpage.png",
    tecnologies: [html5, css, js, reactLogo, tailwind],
    link: 'https://projetos-web-rockets.vercel.app/'
  },
  { title: "Projeto 3", isInBuild: true, link: '#' },
  { title: "Projeto 4", isInBuild: true, link: '#' },
  {
    title: "Projeto 5",
    isInBuild: true,
    link:'#'
  },
  { title: "Projeto 6", isInBuild: true, link: '#' },
  { title: "Projeto 7", isInBuild: true, link: '#' },
  { title: "Projeto 8", isInBuild: true, link: '#' },
];
