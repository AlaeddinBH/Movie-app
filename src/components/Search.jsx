import React from "react";
import StarRating from "./StarRating";

const Search = ({ text, handelText, rating, handelRating }) => {
  return (
    <div className="header">
      <h1 className="heading">
        Our <span>Movie App</span>{" "}
      </h1>

      <form className="serch-form">
        <input
          type="search"
          id="search-box"
          placeholder="search here..."
          value={text}
          onChange={handelText}
        />
        <p>
          <StarRating rating={rating} handelRating={handelRating}/>
        </p>
      </form>
    </div>
  );
};

export default Search;
