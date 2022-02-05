import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movie, del,handelEdit}) => {

  return <div className='box-container'>
    
      {movie.map((el,i)=>
        <MovieCard movie={el} key={(i)} del={del} handelEdit={handelEdit}/>)}
     
  </div>;
};

export default MovieList;
