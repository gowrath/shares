import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";

import { Link } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

//state property says id of thing and then says flip

function Flashcard({
  title,
  flashcard,
  fetchUrl,
  video,
  overview,
  overviewOnClick,
}) {
  const lookupUrl = `/movie/top_rated?api_key=d626fcf7416057dd64ed3964ae145a5d&language=en-US`;
  const lookupUrl2 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=99`;
  const lookupUrl3 = `/discover/movie?api_key=d626fcf7416057dd64ed3964ae145a5d&with_genres=35`;
  const [query, setQuery] = useState("");
  const [flip, setFlip] = useState("", []);
  const [movies, setMovies] = useState([]);
  const [height, setHeight] = useState("initial");
  const [description, setDescription] = useState("");

  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

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

  const handleClick = (id) => {
    let num = id;
    let menu = document.getElementById("b3");
    console.log(menu.innerHTML);

    //frontEl.current.focus();

    //setFlip(!flip);
  };
  //let pattern = /^(?<![^\r\n]\r?\n)[A-Z][^.]*\.\s*/;

  //const frontEl = useRef();

  //let pattern = /^(?<![^\r\n]\r?\n)[A-Z][^.]*\.\s*/;

  return (
    <div>
      <div className="item1">
        <h1>Movies</h1>
      </div>

      <div className="front" ref={frontEl}>
        {movies.map((nodes, idx) => {
          const id = `b${idx}`;
          return (
            <div id={idx} value={nodes.overview} onClick={handleClick}>
              {nodes.title}
            </div>
          );
        })}
      </div>

      <div className="back" ref={backEl}>
        {setDescription}
      </div>
    </div>
  );
}

export default Flashcard;
