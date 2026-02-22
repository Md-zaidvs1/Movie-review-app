import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const poster =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div className="bg-gray-800 text-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
        <div className="h-80 overflow-hidden">
          <img
            src={poster}
            alt={movie.Title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold truncate">
            {movie.Title}
          </h2>
          <p className="text-gray-500 text-sm">{movie.Year}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;