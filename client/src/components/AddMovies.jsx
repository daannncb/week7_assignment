import AddMoviesForm from "./AddMoviesForm";

export default function AddMovies({ user }) {
  return (
    <div>
      <h1>add movies page</h1>
      <AddMoviesForm user={user} />
    </div>
  );
}

//! add movies form goes in here, this page is accessed from "Home/addmovies"
