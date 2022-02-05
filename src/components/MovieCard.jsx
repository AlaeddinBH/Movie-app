import React from "react";
import Edit from "./Edit";
import StarRating from "./StarRating";

const MovieCard = ({ movie, del,handelEdit}) => {
  return (
    <div className='box'>
      
        <img src={movie.image} alt="...." />
        <StarRating rating={movie.rating} />
        <h3>{movie.name}</h3>
        <p>{movie.date}</p>
        <button className="btn" onClick={()=>del(movie.id)}>Delete</button>
        <Edit  movie={movie} handelEdit={handelEdit}/>
        
    </div>
  );
};

export default MovieCard;
