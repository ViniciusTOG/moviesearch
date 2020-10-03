import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  async function searchMovie(e) {
    e.preventDefault();
    setMovies([]);
    console.log("submitting");

    const url = `https://api.themoviedb.org/3/search/movie?api_key=14e0f1fc7ac7bb6ac21bbe2bb8317e65&language=pt-BR&query=${query}`;
    if (query.length > 0) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
        console.log(data.results);
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    <Context.Provider
      value={{ searchMovie, query, setQuery, movies, setMovies }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
