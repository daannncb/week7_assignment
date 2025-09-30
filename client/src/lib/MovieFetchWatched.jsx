import { useState, useEffect } from "react";
//! {user} may be crucial here, passed to the function
//{ user }
export default function MovieFetchWatched() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getWatchedMovies() {
      const res = await fetch(
        "https://week7-assignment-sdy4.onrender.com/get-watched"
      );
      const movies = await res.json();
      console.log({ movies });
      setMovies(movies);
    }
    getWatchedMovies();
  }, []);

  return movies;
}
