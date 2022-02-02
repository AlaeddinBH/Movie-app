import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

const Starrating = ({ rating, handelRating }) => {
  function stars(rating) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        star.push(
          <span
            onClick={()=>handelRating(i)}
            style={{ color: "gold", fontSize: "2.5rem", cursor: "pointer" }}
          >
            {" "}
            <BsStarFill />{" "}
          </span>
        );
      } else
        star.push(
          <span 
          onClick={()=>handelRating(i)}
          style={{ fontSize: "2.5rem", cursor: "pointer" }}>
            {" "}
            <BsStar />{" "}
          </span>
        );
    }
    return star;
  }
  return <div>{stars(rating)}</div>;
};

Starrating.defaultProps = {
  handelRating : () => {}
};

export default Starrating;
