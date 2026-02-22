import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import StarRating from "../components/StarRating";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const API_KEY = "86224f1e";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p className="text-center mt-20 text-white">Loading...</p>;

  return (
    <div className="min-h-screen relative text-white">

      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm brightness-50"
        style={{ backgroundImage: `url(${movie.Poster})` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 px-6 py-12">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 bg-white/20 backdrop-blur-md px-5 py-2 rounded-xl hover:bg-white/30 transition"
        >
          ← Back
        </button>

        <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:flex gap-10">

          {/* Poster */}
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="w-full md:w-1/3 rounded-2xl shadow-lg object-contain"
          />

          {/* Movie Info */}
          <div className="flex-1 mt-8 md:mt-0">

            <h1 className="text-4xl font-extrabold mb-4">
              {movie.Title}
            </h1>

            <p className="text-lg text-gray-200 mb-2">
              📅 <span className="font-semibold">Year:</span> {movie.Year}
            </p>

            <p className="text-lg text-gray-200 mb-2">
              🎬 <span className="font-semibold">Genre:</span> {movie.Genre}
            </p>

            <p className="text-lg text-gray-200 mb-2">
              🎭 <span className="font-semibold">Actors:</span> {movie.Actors}
            </p>

            <p className="text-gray-300 mt-4 leading-relaxed">
              {movie.Plot}
            </p>

            <div className="mt-6 text-yellow-400 text-xl font-semibold">
              ⭐ IMDb Rating: {movie.imdbRating}
            </div>

            <div className="mt-6">
              <StarRating movieId={movie.imdbID} />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;