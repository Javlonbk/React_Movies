import React from 'react'
import Movie from './Movie'
import Nofound from './Nofound'

const Movies = (props) => {
    const {movies = []} = props
  return (
    <div className='movies'>
    {
      movies.length ?  movies.map(movie => (
        <Movie key={movie.imdbID} {...movie} />
        ))  
        : ( <Nofound /> )
    }  
    </div>
  )
}

export default Movies