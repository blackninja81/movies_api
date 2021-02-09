import react, { useState, useEffect } from "react";
import "../index.css";
import Searchbar from "./searchbar";

const IMG_API = "https://image.tmdb.org/t/p/original/";

const Movie_details = ({ title, overview, poster_path, release_date }) => (
  <div className="movies_details" container-fluid>
      <Searchbar/>
    <div className="movie_details">
      <div className="movie_poster_details">
        <img src={IMG_API + poster_path}></img>
      </div>
      <div className="movie-details">
        <h1>{title}</h1>
        <h2>Overview:</h2>
        <h3>{overview}</h3>
        <h2>Released:</h2>
        <h3>{release_date}</h3>
      </div>
    </div>
  </div>
);

export default Movie_details;