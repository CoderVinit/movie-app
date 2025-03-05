import React from 'react'
import GenreFilter from './components/GenreFilter'
import MovieList from './components/MovieList'

const App = () => {
  return (
    <div className='flex flex-col text-center justify-center px-24'>
      <h1 className='text-3xl font-bold text-center my-5 font-sans '>Top 15 movies of All Time</h1>
      <GenreFilter />
      <MovieList />
    </div>
  )
}

export default App