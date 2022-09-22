import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?apikey=a7092097";

const App = () => {
  const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BYWM0MDI1ZmItZTYzNi00ZWVlLTg5MTctNzllNjY2ZTI3NDhhXkEyXkFqcGdeQXVyNDk5MjA2MQ@@._V1_SX300.jpg",
    Title: "Reign of Judges: Title of Liberty - Concept Short",
    Type: "movie",
    Year: "2018",
    imdbID: "tt4275958",
  };

  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("superman");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies(movieName);
  }, []);
  console.log(movies[0]);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input type="text" placeholder="Search for movies" value={movieName} alt="search" onChange={(e) => setMovieName(e.target.value)} />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(movieName)} />
      </div>
      {/* {movies[0] && <MovieCard movie={movies[0]} />}; */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.imdbID} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
