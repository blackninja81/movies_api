import react, { useState, useEffect } from "react";
import "../index.css";
import movieInfo from "../components/movieInfo";

const D_API = "https://api.themoviedb.org/3/movie/";
const API = "?api_key=16f5d470f7694afe7d8be47ca98ae51d";

function Movie(props) {
  const { id } = props.match.params;
  const [dmovies, setDMovies] = useState([]);

  fetch(D_API + id + API)
    .then((res) => res.json())
    .then((data) => {
      setDMovies(data.results);
      console.log(data);
    });

  return (
    <>
    <div className="movie-container">
      {dmovies?.length > 0 && dmovies.map((movie) => <movieInfo {...movie}/>)}
    </div>
    </>
  );
}

export default Movie;
