import React, { useState, useEffect } from "react";
import Row from "./Row";
import Row2 from "./Row2";
import requests from "./Requests";
import MovieListHeading from "./MovieListHeading";
import Search from "./Search";

import { Link } from "react-router-dom";

import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

function Subs({ fetchUrl }) {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");

  const MOVIE_API_URL = `/search/multi?api_key=d626fcf7416057dd64ed3964ae145a5d&query=`;
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(MOVIE_API_URL + query);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="write-center">
      <form className="example">
        <input
          type="text"
          placeholder="Search..."
          name="search"
          //onChange={handleSearchInputChanges}

          onChange={handleChange}
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

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />

      <div className="center">
        <img
          src={require("./carousel-3.jpg").default}
          width="300"
          height="150"
          alt="sample subscriptions"
          style={{ alignSelf: "center" }}
        />
      </div>
      <div className="left">
        <p>
          Simple means paying less than what you want to pay. Here's a sampling
          of what you might pay for every month or year:
        </p>

        <ul>
          <li>Netflix ($13.99 / mo)</li>
          <li>Spotify ($9.99 / mo)</li>
          <li>HBOMax ($14.99 / mo)</li>
          <li>Disney Plus ($12.99 / mo)</li>
          <li>Amazon Prime ($12.99 / mo)</li>
          <li>Youtube Premium ($13.99 / mo)</li>
        </ul>
      </div>
      <div className="write-center">
        <p>
          Costs add up.
          <br />
          ...
          <br />
          ...
          <br />
          ...
          <br />
          So does your patience.
          <br />
          <br />
          A friend mentions they have Netflix.
          <br />
          <br />
          An awkward moment ensues.
          <br />
          <br />
          'You did? How come you didn't tell me?'
          <br />
          <br />
          *Friend tries their best to explain*
          <br />
          <br />
          Assuming you're not a psychopath, you would like to share 'subs' with
          your friend.
          <br />
          <br />
          This is the technological solution to communicatory problems around
          subscriptions and sharing.
          <br />
          <br />
          <b>Share costs.</b>
          <br />
          <b>Manage credentials.</b>
          <br />
          <b>Keep up-to-date with shows.</b>
          <br />
          <br />
          We operate within the ToS of every major service provider :)
        </p>
      </div>
    </div>
  );
}

export default Subs;
