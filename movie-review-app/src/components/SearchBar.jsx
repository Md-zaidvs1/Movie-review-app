import { useState } from "react";

function SearchBar({ setSearch }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    setSearch(input);
  };

  return (
    <div className="flex justify-center gap-3 mb-8">
      <input
        type="text"
        placeholder="Search movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;