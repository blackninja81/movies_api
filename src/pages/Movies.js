import { useState, useEffect} from "react";
import "../index.css";
import MovieInfo from "../components/movieInfo";

const D_API = "https://api.themoviedb.org/3/movie/";
const API = "?api_key=16f5d470f7694afe7d8be47ca98ae51d";

function Movie(props) {
  const { id } = props.match.params;
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(D_API + id + API)
    .then((res) => res.json())
    .then((data) => {
      setMovie(data);
      console.log(data);
    });
    return () => {
      
    }
  }, [])

  return (
    <div>
      <div className="movie-container">
        <MovieInfo movie = {movie}/>
      </div>
    </div>
  );
  
}export default Movie;
