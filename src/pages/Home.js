import { useState, useEffect } from "react";
import "../index.css";
import Movie from "../components/movies";
import Searchbar from "../components/searchbar";

const P_API =
  "https://api.themoviedb.org/3/discover/movie?api_key=16f5d470f7694afe7d8be47ca98ae51d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
const TREND_API =
  "https://api.themoviedb.org/3/trending/all/day?api_key=16f5d470f7694afe7d8be47ca98ae51d";
const TV_API = "https://api.themoviedb.org/3/discover/tv?api_key=16f5d470f7694afe7d8be47ca98ae51d&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false";

function Home() {
  const [movies, setMovies] = useState([]);
  const [tmovies, setTMovies] = useState([]);
  const [series, setSeries] = useState([]);

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

  useEffect(() => {
    fetch(TV_API)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
      });
  }, []);

  return (
    <>
    <Searchbar />
    <div className="aMovies">
      
      <h1>Trending Movies</h1>
      <div className="movie-container">
        {tmovies.length > 0 && tmovies.map((movie) => <Movie {...movie} />)}
      </div>

      <h1>Popular Movies</h1>
      <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => <Movie {...movie} />)}
      </div>
      <h1>Popular Series</h1>
      <div className="movie-container">
        {series.length > 0 && series.map((movie) => <Movie {...movie} />)}
      </div>
    </div>
    </>
  );
}
export default Home;
