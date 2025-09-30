//! this page is accessed from "Home/view-movies"
import MovieFetchWatched from "../lib/MovieFetchWatched";
// import { useState } from "react";
// { user }
export default function ViewMovies() {
  const movies = MovieFetchWatched();
  // const userName = sessionStorage.getItem("user");

  return (
    <div>
      <h1>view movies page</h1>
      {movies.map((movie) => (
        <li key={movie.movie_id}>{movie.movie_title}</li>
      ))}
    </div>
  );
}
