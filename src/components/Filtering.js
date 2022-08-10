import React, { useState, useEffect, useRef } from "react";
import axios from "./axios";

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

  const frontEl = useRef();
  const backEl = useRef();

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

  const handleClick = (e) => {
    setFlip(!flip);

    // setFlip(pvalue) == true ? setFlip(pvalue) : setFlip(pvalue);
  };

  let pattern = /^(?<![^\r\n]\r?\n)[A-Z][^.]*\.\s*/;

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
      <div className="item1">
        <h1>Movies</h1>
      </div>
      <div className="card-grid">
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
          .map((film, idx) => (
            <div key={film} ref={frontEl} id={film}>
              <p className="movietitle">{film.title}</p>

              <div
                id={film}
                className={`card ${flip ? "flip" : ""}`}
                value={film}
                onClick={(e) => handleClick(e.target.id)}
                ref={frontEl}
              >
                <img
                  className="front"
                  src={`${base_url}${film.poster_path}`}
                  alt={film.title}
                />

                <div
                  className="back"
                  ref={backEl}
                  onClick={(id) => handleClick(id)}
                >
                  <p>{film.overview.match(pattern)}</p>
                </div>
              </div>

              <p>
                <br></br>
                <Link
                  className="gbar2"
                  to={{
                    pathname: "https://google.com/search?q=" + film.title,
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
