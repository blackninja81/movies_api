import { Link } from "react-router-dom";
import "../index.css";
const IMG_API = "https://image.tmdb.org/t/p/original/";

const MovieInfo = ({ movie }) => (
  <div className="movie_details">
    <Link to={`/`}>
      <div className="backpage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <h3>back</h3>
      </div>
    </Link>
    <img
      className="movie_image container-fluid"
      src={IMG_API + movie.backdrop_path}
      alt="No Preview Available"
    />
    <h3 className="title">
      {movie.title} ({movie.original_title})<h3>{movie.tagline}</h3>
    </h3>
    <div className="card_1 row container-fluid">
      <div className="col">
        <div className="movie_poster">
          <img src={IMG_API + movie.poster_path} alt="No Preview Available" />
        </div>
      </div>
      <div className="overview col">
        <h2>Overview</h2>
        <h3>{movie.overview}</h3>
      </div>
    </div>
    <row>
      <div className="details">
        <div className="row">
          <div className="col">
            <div className="info">
              <h2>Vote Average</h2>
              <h3>{movie.vote_average}</h3>
            </div>
          </div>
          <div className="col">
            <div className="info">
              <h2>{movie.status}</h2>
              <h3>{movie.release_date}</h3>
            </div>
          </div>
          <div className="col">
            <div className="info">
              <h2>Popularity</h2>
              <h3>{movie.popularity}</h3>
            </div>
          </div>
          <div className="col">
            <div className="info">
              <h2>Runtime</h2>
              <h3>{movie.runtime} min</h3>
            </div>
          </div>
          <div className="col">
            <div className="info">
              <h2>Genres</h2>
              <h3>
                {movie.genres?.map((genre) => (
                  <p key={genre.id}>{genre.name} </p>
                ))}
              </h3>
            </div>
          </div>
          <div className="col">
            <a
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              target="blank" alt="s"
            >
              <img
                className="info"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2017%2F02%2Fimdb-logo-discussion-boards.jpg&f=1&nofb=1"
                alt=""
              ></img>
            </a>
          </div>
        </div>
      </div>
    </row>
  </div>
);

export default MovieInfo;
