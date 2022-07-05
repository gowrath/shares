import React, { useState, useEffect } from "react";
import Row from "./Row";
import Row2 from "./Row2";
import requests from "./Requests";
import MovieListHeading from "./MovieListHeading";
import Search from "./Search";

import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const MOVIE_API_URL =
  "https://image.tmdb.org/t/p/original/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=28";

function Subs({ fetchUrl }) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="write-center">
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
