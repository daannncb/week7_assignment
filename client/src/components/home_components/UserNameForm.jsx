//display a form to enter user

//once user is selected, let them go into add movies or view movie list

//conditional rendering is going to be useful here

// import { useState } from "react";
import AddMoviesHome from "./AddMoviesHome";
import ViewMoviesHome from "./ViewMoviesHome";

export default function UserNameForm({ handleSubmit }) {
  function userSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userName = formData.get("userName");
    handleSubmit(userName);
  }

  return (
    <form onSubmit={userSubmit}>
      Please enter your username:
      <input name="userName" />
      <button type="submit">Submit</button>
    </form>
  );
}

// return (
//     <div id="user-name-input">
//       {user ? (
//         <****add and view options**** />
//       ) : (
//         <div>Enter your username:</div> with a form
//       )}
//     </div>
//   );

//! AddMoviesHome & ViewMoviesHome to render when user has entered their username.
//? AddMoviesHome has link to AddMovies > react router link
//? ViewMoviesHome has link to ViewMovies > react router link

//
//TODO
//?asd
//!
//*
