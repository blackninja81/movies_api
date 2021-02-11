import { Link } from "react-router-dom";
import "../index.css";
import Movie from "../components/movies";

const IMG_API = "https://image.tmdb.org/t/p/original/";

const MovieInfo = ({ movie }) => (
  <div className="movie_details">
    <div className="backpage">
      <Link to={`/`}>
        <h3>back</h3>
      </Link>
    </div>
    <div className="movie_image">
      <img src={IMG_API + movie.backdrop_path} alt="No Preview Available"></img>
    </div>
    <div className="title">
      <h3>
        {movie.title} ({movie.original_title})<h3>{movie.tagline}</h3>
      </h3>
    </div>
    <div>
      <div className="movie_poster">
        <img src={IMG_API + movie.poster_path} alt="No Preview Available"></img>
      </div>
      <div className="overview">
        <h2>Overview</h2>
        <h3>{movie.overview}</h3>
      </div>
      <div className="details">
        <div className = "info">
        <h2>Vote Average</h2>
        <h3>{movie.vote_average}</h3>
        </div>
        <div className = "info">
        <h2>Budget</h2>
        <h3>{movie.budget} $</h3>
        </div>
        <div className = "info">
        <h2>{movie.status}</h2>
        <h3>{movie.release_date}</h3>
        </div>
        <div className = "info">
        <h2>Popularity</h2>
        <h3>{movie.popularity}</h3>
        </div>
        <div className = "info">
        <h2>Runtime:</h2>
        <h3>{movie.runtime} min</h3>
        </div>
        <div className = "info">
        <h2>Language</h2>
        <h3>{movie.original_language}</h3>
        </div>
      </div>
    </div>
  </div>
);

export default MovieInfo;
