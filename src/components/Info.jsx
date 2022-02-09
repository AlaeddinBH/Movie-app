import React from "react";
import Starrating from "./StarRating";
import { Link ,useParams} from "react-router-dom";


const Info = ({ movie }) => {
  const {id} = useParams();
  

  const infoMovie = movie.find((el) => el.id == id);
  console.log(movie)
  return (
    <div className='box'>
      <img src={infoMovie.image} alt="...." />
      <Starrating rating={infoMovie.rating} />
      <h3>{infoMovie.name}</h3>
      <p>{infoMovie.date}</p>
      <Link to={"/"}><button className="btn">Home</button></Link> 
    </div>
  );
};

export default Info;
