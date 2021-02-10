import react, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import ViewDetails from "./viewdetails";

const IMG_API = "https://image.tmdb.org/t/p/original/";

const Movie = ({id, poster_path}) => (
  
  <div className="movies">
    <div className="movie">
      <div className="movie_poster">
        <img src={IMG_API + poster_path} alt="No Preview Available"></img>
        <div className="overlay">
          <Link to={`/movies/${id}`}>
          <ViewDetails/>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Movie;