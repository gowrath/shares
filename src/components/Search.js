import React, { useState, useEffect } from "react";
import axios from "./axios";
import Row2 from "./Row2";
import {
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import requests from "./Requests";

const fetchUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=28";

function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  //const [movies, setMovies] = useState([]);

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    fetchUrl.search(searchValue);
    resetInputField();
  };

  /* useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }
  , [fetchUrl]); */

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

export default Search;
