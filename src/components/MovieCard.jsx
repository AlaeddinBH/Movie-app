import React from "react";
import StarRating from "./StarRating";

const MovieCard = ({ movie, del}) => {
  return (
    <div className='box'>
      
        <img src={movie.image} alt="...." />
        <StarRating rating={movie.rating} />
        <h3>{movie.name}</h3>
        <p>{movie.date}</p>
        <button className="btn" onClick={()=>del(movie.id)}>Delete</button>
        
    </div>
  );
};

export default MovieCard;
