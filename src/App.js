import { useEffect } from "react";
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
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=title`);
    const data = await response.json();
    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input type="text" placeholder="Search for movies" value="Superman" alt="search" />
        <img src={SearchIcon} alt="search" />
      </div>
      <div className="container">
        <MovieCard movie={movie1} />
      </div>
    </div>
  );
};

export default App;
