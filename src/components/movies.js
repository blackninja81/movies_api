import { Link } from "react-router-dom";
import "../index.css";
import ViewDetails from "./viewDetails";

const IMG_API = "https://image.tmdb.org/t/p/original/";

const Movie = ({id, poster_path}) => (
  
  <div className="movies">
    <Link to={`/movies/${id}`}>
    <div className="movie">
      <div className="movie_poster">
        <img src={IMG_API + poster_path} alt="No Preview Available"></img>
        <div className="overlay">
          <ViewDetails/>
        </div>
      </div>
    </div>
    </Link>
  </div>
);

export default Movie;