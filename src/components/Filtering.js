import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";
import Row2 from "./Row2";
import requests from "./Requests";
import Create from "./Create";

import {
  Button,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";

import { Link } from "react-router-dom";


const base_url = "https://image.tmdb.org/t/p/original/";

//state property says id of thing and then says flip

function ActionMovies({ title, fetchUrl, video, flashcard }) {
  const lookupUrl = `/movie/top_rated?api_key=d626fcf7416057dd64ed3964ae145a5d&language=en-US`;
  const lookupUrl2 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=99`;
  const lookupUrl3 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=35`;
  const [query, setQuery] = useState("");
  const [flip, setFlip] = useState("", []);
  const [movies, setMovies] = useState([]);
  const [description, setDescription] = useState("");
  const [film, setFilm] = useState("");

  const frontEl = useRef();
  const backEl = useRef();

  const count = useRef(0);

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

  function handleClick(e) {
    //let potion = id.target.value;

    //console.log(e.target.value);
    console.log("hello");
    //console.log(id[movies.overview]);

    //console.log(movies);

    //console.log();

    //console.log(backEl.current.firstChild.innerHTML);

    //console.log(frontEl.current.innerHTML);
    console.log(e.currentTarget.id);

    let num = e.currentTarget.id;

    let menu = document.getElementById(num);

    let menu2 = menu.getElementsByTagName("p")[0];

    let tag = menu.getElementsByTagName("img")[0].alt;

    console.log(menu2.innerHTML);
    setFilm(tag);
    setDescription(menu2.innerHTML);
  }
  //let pattern = /^(?<![^\r\n]\r?\n)[A-Z][^.]*\.\s*/;

  //const frontEl = useRef();

  //let pattern = /^(?<![^\r\n]\r?\n)[A-Z][^.]*\.\s*/;

  return (
    <div>
      <form className="searchbar">
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
      <div className="center2">
        <h1>Movies</h1>
      </div>
      <div className="center3">{film}</div>
      <div className="descbar">{description}</div>
      <div className="row__posters2">
        {movies
          .filter((movie, idx) => {
            if (query === "") {
              return movie;
            } else if (
              movie.title.toLowerCase().includes(query.toLowerCase())
            ) {
              return movie;
            }
          })

          .map((nodes, idx) => {
            const id = `b${idx}`;

            return (
              <div key={idx}>
                <p className="movietitle">{nodes.title}</p>

                <div
                  ref={frontEl}
                  className="card"
                  id={id}
                  value={nodes.overview}
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  <img
                    className="card"
                    src={`${base_url}${nodes.poster_path}`}
                    alt={nodes.title}
                  />

                  <div className="back" ref={backEl}>
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
            );
          })}
      </div>
      {/* 
      <div>
        <Row2 title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row2 title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row2 title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      </div> */}

      <Create />
    </div>
  );
}

export default ActionMovies;
