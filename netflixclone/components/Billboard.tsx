import React, { useEffect, useState } from "react";
import { movies } from "@/data/movies";
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Billboard() {
  const [currentMovie, setCurrentMovie] = useState({
    title: "",
    videoUrl: "",
    description: "",
    duration: "",
    thumbnailUrl: "",
    genre: "",
  });

  useEffect(() => {
    let aleatory = Math.floor(Math.random() * 4);
    setCurrentMovie(movies[aleatory]);
  }, []);

  return (
    <div className="relative h-[56.25vw]">
      <video
        autoPlay
        loop
        muted
        className="brightness-[60%] w-full h-[56.25vw] object-cover"
        poster={currentMovie.thumbnailUrl}
        src={currentMovie.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-4xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl">
          {currentMovie.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[50%] md:w-[50%] lg:w-[50%] drop-shadow-xl">
          {currentMovie.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3 ">
          <button className="text-white bg-white bg-opacity-30 rounded-md p-1 md:p-2 text-xs md:text-lg lg:text-2xl mt-2  py-1 md:py-2 px-2 md:px-4 w-auto font-semibold flex flex-row items-center hover:bg-opacity-20 transition gap-1">
          <AiOutlineInfoCircle /> More info 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
