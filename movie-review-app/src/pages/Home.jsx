import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");

  const API_KEY = "86224f1e";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, [search]);

  return (
  <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black px-6 py-8">
    <h1 className="text-4xl font-bold text-white tracking-wide">
  🎬 Movie Review App
</h1>

    <SearchBar setSearch={setSearch} />

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  </div>
);
}

export default Home;