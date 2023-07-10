import React from 'react'
import MovieCard from './MovieCard'

type movieType ={
  title: string
    videoUrl: string
    description: string
    duration: string
    thumbnailUrl: string
    genre: string
}

type movieListType = {
 movies: movieType[]
 title: string

}

function MoviesList({movies, title}: movieListType) {
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold' >{title}</p>
      <div className='grid grid-cols-4 gap-3'>
       { movies.map((movie) => <MovieCard key={movie.title} movie={movie}/>)}
      </div>
    </div>
  )
}

export default MoviesList