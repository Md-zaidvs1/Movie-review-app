import { useState, useEffect } from "react";

function StarRating({ movieId }) {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${movieId}`);
    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, [movieId]);

  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${movieId}`, value);
  };

  return (
    <div className="flex gap-2 text-3xl cursor-pointer">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleRating(star)}
          className={star <= rating ? "text-yellow-400" : "text-gray-400"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default StarRating;