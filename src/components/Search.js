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
  "https://webhooks.mongodb-realm.com/api/client/v2.0/app/data-rvgpo/service/get/incoming_webhook/read";

function Search({ fetchUrl }) {
  const [searchValue, setSearchValue] = useState("");
  const [students, setStudents] = useState([]);

  /*   const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    fetchUrl.search(searchValue);
    resetInputField();
  }; */

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setStudents(requests.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <form className="search">
      <input value={searchValue} type="text" />
      <input type="submit" value="SEARCH" />
    </form>

    /*     <div className="center">
      <Row2
        key={student.id}
        id={student.id}
        name={student.name}
        email={student.email}
      />
    </div> */
  );
}
export default Search;
