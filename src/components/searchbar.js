import react, { useState } from "react";
import "../index.css";
import Movie from "./movies";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=16f5d470f7694afe7d8be47ca98ae51d&query=";

function Searchbar(props) {
  const [smovies, setSMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [enteredSearchTerm, setEnteredSearchTerm] = useState([]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEnteredSearchTerm("Search Results for : " + searchTerm);

      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setSMovies(data.results);
          console.log(data.results);
        });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  return (
    <div className="aMovies">
            <header className="search">
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            placeholder="Enter Movie Name"
            value={searchTerm}
            onChange={handleOnChange}
          ></input>
        </form>
      </header>
      <div className="searchResults">
        <h1>{enteredSearchTerm}</h1>
        <div className="movie-container">
          {smovies?.length > 0 &&
            smovies.map((movie) => <Movie {...movie} />)}            
        </div>
      </div>
    </div>
  );
}
export default Searchbar;