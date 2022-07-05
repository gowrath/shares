import React, { useState, useEffect } from "react";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row2({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="item1">
      <h2>{title}</h2>

      <div>
        {movies.map(movie => (
          <div>{movie.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Row2;
