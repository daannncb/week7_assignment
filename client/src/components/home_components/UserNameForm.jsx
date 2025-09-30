//display a form to enter user

//once user is selected, let them go into add movies or view movie list

// import { useState } from "react";
// import AddMoviesHome from "./AddMoviesHome";
// import ViewMoviesHome from "./ViewMoviesHome";

export default function UserNameForm({ handleSubmit }) {
  async function userSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userName = formData.get("userName");
    console.log("userName:", userName);

    try {
      await fetch("https://week7-assignment-sdy4.onrender.com/add-user", {
        //!change to render url
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName }),
      });

      handleSubmit(userName);
      sessionStorage.setItem("user", userName);
      console.log("session storage user", sessionStorage.getItem("user"));
      console.log("User created:", userName);
    } catch (error) {
      console.error("error adding user", error);
    }
  }

  return (
    <form onSubmit={userSubmit}>
      Please enter your username:
      <input name="userName" />
      <button type="submit">Submit</button>
    </form>
  );
}
