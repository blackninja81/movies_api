import { useState, useEffect } from "react";
import "../index.css";
import Movie from "../components/movies";
import MovieInfo from "../components/movieInfo";

const D_API = "https://api.themoviedb.org/3/movie/";
const API = "?api_key=16f5d470f7694afe7d8be47ca98ae51d";
const SI_API = "https://api.themoviedb.org/3/movie/";
const S_API = "/similar?api_key=16f5d470f7694afe7d8be47ca98ae51d";

function SMovie(props) {
  const { id } = props.match.params;
  const [movie, setMovie] = useState([]);
  const [smovie, setSMovie] = useState([]);

  useEffect(() => {
    fetch(D_API + id + API)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
    return () => {};
  });
  useEffect(() => {
    fetch(SI_API + id + S_API)
      .then((res) => res.json())
      .then((data) => {
        setSMovie(data);
      });
    return () => {};
  });

  return (
    <div>
      <div className="movie-container">
        {movie && <MovieInfo movie={movie} />}
      </div>
      <h1>Related</h1>
      <div className="movie-container">
        {smovie.length > 0 && smovie.map((movie) => <Movie {...movie} />)}
      </div>
    </div>
  );
}
export default SMovie;
