import React, { useState, useEffect } from "react";
import axios from "./axios";
import Row2 from "./Row2";
import {
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import fakeApiData from "./data/subs.json";

import requests from "./Requests";

const base_url = "https://image.tmdb.org/t/p/original/";

function ActionMovies({ title, fetchUrl }) {
  const lookupUrl = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=28`;

  const subscriptprices = fakeApiData.data.subprices.nodes;

  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(lookupUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  //console.log(movies);

  const callSearchFunction = (e) => {
    console.log(e.target.value);
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
        <h1>Action Movies</h1>
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
          .map((nodes, index) => (
            <div key={index}>
              <p>{nodes.title}</p>

              <img
                className="glow__poster"
                src={`${base_url}${nodes.poster_path}`}
                alt={nodes.title}
              />
              <p></p>
              <Link
                className="gbar2"
                to={{
                  pathname: "https://google.com/search?q=" + nodes.title,
                }}
                target="_blank"
              >
                Google Search
              </Link>
              <p>
                <br></br>
              </p>
            </div>
          ))}
      </div>
      {/*       <div>
        <Row2 title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      </div> */}
    </div>
  );
}

export default ActionMovies;
