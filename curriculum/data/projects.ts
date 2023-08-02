import ts from "@/public/images/typescript.png";
import html5 from "@/public/images/html-5.png";
import reactLogo from "@/public/images/science.png";
import tailwind from "@/public/images/Tailwind.png";
import nextlogo from "@/public/images/next-js-logo.png";
import css from "@/public/images/css-3.png";

export const projectsFirstRow = [
  {
    title: "Projeto 1",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/Portfolio2calais.png",
    isInBuild: false,
    tecnologies: [ts, html5, reactLogo, tailwind, nextlogo, css],
  },
  { title: "Projeto 2", isInBuild: true },
  { title: "Projeto 3", isInBuild: true },
  { title: "Projeto 4", isInBuild: true },
];

export const projectsSecondRow = [
  {
    title: "Projeto 5",
    isInBuild: true,
  },
  { title: "Projeto 6", isInBuild: true },
  { title: "Projeto 7", isInBuild: true },
  { title: "Projeto 8", isInBuild: true },
];
