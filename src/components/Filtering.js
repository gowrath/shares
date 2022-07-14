import React, { useState, useEffect } from "react";
import axios from "./axios";

import Row from "./Row";
import Row2 from "./Row2";
import { Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

function ActionMovies({ title, fetchUrl }) {
  const lookupUrl = `/movie/top_rated?api_key=d626fcf7416057dd64ed3964ae145a5d&language=en-US`;
  const lookupUrl2 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=99`;
  const lookupUrl3 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=35`;
  const [query, setQuery] = useState("");
  const [flip, setFlip] = useState(false);
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

  //console.log(movies);

  const callSearchFunction = (e) => {
    console.log(e.target.value);
  };

  const handleClick = (id) => {
    setFlip(!flip);
  };

  return (
    <div className="center">
      <form className="example">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          //onChange={handleSearchInputChanges}

          onChange={(event) => setQuery(event.target.value)}
        ></input>
        {/*         <Button onClick={(e) => callSearchFunction(e.target.value)}>
          Submit
        </Button> */}
      </form>
      <div className="item1">
        <h1>Movies</h1>
      </div>
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
            <div key={idx}>
              <p>{nodes.title}</p>

              <div className={`card ${flip ? "flip" : ""}`}>
                <img
                  className="front"
                  onClick={setFlip}
                  src={`${base_url}${nodes.poster_path}`}
                  alt={nodes.title}
                />

                <div className="back" onClick={setFlip}>
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

export default ActionMovies;
