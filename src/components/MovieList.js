import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({movie, del,handelEdit}) => {

  return <div className='box-container'>
       
        {React.Children.toArray(movie.map(el =>
        <MovieCard movie={el}  del={del} handelEdit={handelEdit}/>))}
      
     
  </div>;
};

export default MovieList;
