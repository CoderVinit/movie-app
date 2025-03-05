import React from "react";

const MovieList = ({movies}) => {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Genre</th>
            <th className="border border-gray-300 px-4 py-2">Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index} className="text-left">
              <td className="border border-gray-300 px-4 py-2">
                {movie.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {movie.genre}
              </td>
              <td className="border border-gray-300 px-4 py-2">{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
