import React from 'react'
const Movie = (props) => {

    const {Title, Year, imdbID, Type, Poster} = props
  return (
    <div className='card-movie' key={imdbID}>
        <div className="card-movie_image">
           <img src={Poster} alt={Title} />
        </div>
        <div className="card-movie_info">
            <h4>{Title}</h4>
            <div>
                <span>{Year}</span>
                <span>{Type}</span>
            </div>
        </div>
    </div>
  )
}

export default Movie