import react, { useState, useEffect } from "react";
import "../index.css";
import Movie from "../components/movies";
import Searchbar from "../components/searchbar";

const P_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=16f5d470f7694afe7d8be47ca98ae51d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=16f5d470f7694afe7d8be47ca98ae51d&query=";
const IMG_API = "https://image.tmdb.org/t/p/original/";
const TREND_API =
  "https://api.themoviedb.org/3/trending/all/day?api_key=16f5d470f7694afe7d8be47ca98ae51d";

function Home() {
  const [movies, setMovies] = useState([]);
  const [tmovies, setTMovies] = useState([]);

  useEffect(() => {
    fetch(P_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(TREND_API)
      .then((res) => res.json())
      .then((data) => {
        setTMovies(data.results);
      });
  }, []);

  return (
    <div className="aMovies">
      <Searchbar />

      <h1>Trending Movies</h1>
      <div className="movie-container">
        {tmovies.length > 0 && tmovies.map((movie) => <Movie {...movie} />)}
      </div>

      <h1>Popular Movies</h1>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie {...movie} />)}
      </div>
    </div>
  );
}
export default Home;
