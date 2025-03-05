import React, { useState } from "react";

const genres = [
  "Drama",
  "Crime",
  "Action",
  "Fantasy",
  "Western",
  "Science Fiction",
  "Thriller",
  "War",
  "Animation",
];

const GenreFilter = () => {

    const [activeButton,setActiveButton] = useState(null)

    const handleClick = (button)=>{
        setActiveButton(button)
        console.log(button)
    }

  return (
    <div className="filter-container">
      <h2 className="font-bold">Filter by Genre</h2>
      <div className="flex flex-wrap justify-start">
        {genres.map((genre) => (
          <button key={genre} className={`btn font-semibold my-2 mx-1  ${activeButton === genre ? "active" : ""}`} onClick={()=>handleClick(genre)}>{genre}</button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;
