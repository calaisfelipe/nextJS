import React from "react";

function Billboard() {
  const movie = {
    title: "Big Buck Bunny",
    description:
      "Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
    videoUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnailUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
    genre: "Comedy",
    duration: "10 minutes",
  };

  return (
    <div className="relative h-[56.25vw]">
      <video
        autoPlay
        loop
        muted
        className="brightness-[60%] w-full h-[56.25vw] object-cover"
        poster={movie.thumbnailUrl}
        src={movie.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-4xl lg:text-6xl h-full w-[50%] font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white text-[8px] sm:text-lg mt-3 md:mt-8 w-[90%] sm:w-[80%] ">{movie.description}</p>
      </div>
    </div>
  );
}

export default Billboard;
