import React, { useState, useEffect } from "react";
import axios from "./axios";

import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

//state property says id of thing and then says flip

function FilteringSub({ title, fetchUrl, video, id }) {
  const lookupUrl = `/movie/top_rated?api_key=d626fcf7416057dd64ed3964ae145a5d&language=en-US`;
  const lookupUrl2 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=99`;
  const lookupUrl3 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=35`;
  const [query, setQuery] = useState("");
  const [flip, setFlip] = useState("", []);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(lookupUrl);

      const request2 = await axios.get(lookupUrl2);

      const request3 = await axios.get(lookupUrl3);

      const combined = [
        ...request.data.results,
        ...request2.data.results,
        ...request3.data.results,
      ];
      setMovies(combined);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="center">
      <div>
        {movies
          .filter((nodes, idx) => {
            if (query === "") {
              return nodes;
            } else if (
              nodes.title.toLowerCase().includes(query.toLowerCase())
            ) {
              return nodes;
            }
          })

          .map((nodes, idx) => (
            <div key={idx} id={`b${idx}`} onClick={(e) => handleClick(id)}>
              <p>{nodes.title}</p>

              <div className={`card ${flip ? "flip" : ""}`}>
                <img
                  className="front"
                  src={`${base_url}${nodes.poster_path}`}
                  alt={nodes.title}
                />

                <div className="back">
                  <p>{nodes.overview}</p>
                </div>
              </div>

              <p>
                <br></br>
                <Link
                  className="gbar2"
                  to={{
                    pathname: "https://google.com/search?q=" + nodes.title,
                  }}
                  target="_blank"
                >
                  Google Search
                </Link>
              </p>
            </div>
          ))}
      </div>

      {/*       <div>
        <Row2 title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      </div> */}
      {/* 
      <div>
        <Row2 title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row2 title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row2 title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      </div> */}
    </div>
  );
}

export default FilteringSub;
