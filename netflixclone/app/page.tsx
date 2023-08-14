"use client";
import React from "react";
import { useSession} from "next-auth/react";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MoviesList from "@/components/MoviesList";
import { movies } from "@/data/movies";
import { redirect } from "next/navigation";


export default function Home() {
  
  const myfavorites = [movies[1]]

  const session = useSession({
    required: true,
    onUnauthenticated(){
      redirect('/auth')
    }});

    
  return (
    <main>
      <Navbar session={session} />
      <Billboard />
      <div className="pb-40">
        <MoviesList title="Trending Now" movies={movies} />
        <MoviesList title="My List" movies={myfavorites} />
      </div>
    </main>
  );
}
