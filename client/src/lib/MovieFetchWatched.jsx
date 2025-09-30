import { useState, useEffect } from "react";
//! {user} may be crucial here, passed to the function
//{ user }
export default function MovieFetchWatched() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getWatchedMovies() {
      const res = await fetch("http://localhost:8080/get-watched"); //! CHANGE TO RENDER URL
      const movies = await res.json();
      console.log({ movies });
      setMovies(movies);
    }
    getWatchedMovies();
  }, []);

  return movies;
}
