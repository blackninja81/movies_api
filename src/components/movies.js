import react, { useState, useEffect } from "react";
import "../index.css";

const IMG_API = "https://image.tmdb.org/t/p/original/";

const Movie = ({title, overview, poster_path, release_date }) => (
  <div className="movies" container-fluid>
    <div className="movie">
      <div className="movie_poster">
        <img src={IMG_API + poster_path} alt="No Preview Available"></img>
      </div>
    </div>
    <div className="moviename">
      <h3>{title}</h3>
       </div>
  </div>
);
      {/* <div className="movie-overview">
        <h1>{title}</h1>
        <h2>Overview:</h2>
        <h3>{overview}</h3>
        <h2>Released:</h2>
        <h3>{release_date}</h3>
      </div> */}
export default Movie;