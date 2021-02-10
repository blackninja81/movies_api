import react, { useState, useEffect } from "react";
import "../index.css";

const IMG_API = "https://image.tmdb.org/t/p/original/";

const movieInfo = ({ poster_path }) => (
  <div className="movie_details">
    <div className="movie_image">
      <img src={IMG_API + poster_path} alt="No Preview Available"></img>
    </div>
  </div>
);

export default movieInfo;
