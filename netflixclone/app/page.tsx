"use client";
import React from "react";
import { getSession, signOut } from "next-auth/react";
import { NextPageContext } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import MoviesList from "@/components/MoviesList";
import { movies } from "@/data/movies";


export async function getServerSideProps(context: NextPageContext) {
  
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: user } = useCurrentUser();
  const myfavorites = [movies[1]]

  return (
    <main>
      <Navbar />
      <Billboard />
      <div className="pb-40">
        <MoviesList title="Trending Now" movies={movies} />
        <MoviesList title="My List" movies={myfavorites} />
      </div>
    </main>
  );
}
