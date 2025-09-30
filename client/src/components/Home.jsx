//display a form to enter user

//once user is selected, let them go into add movies or view movie list

//conditional rendering is going to be useful here

import { useState, useEffect } from "react";
import HomeDesc from "./home_components/HomeDesc";

import UserAddViewParent from "./home_components/UserAddViewParent";

export default function Home() {
  const [user, setUser] = useState("");
  const handleSubmit = (userName) => {
    setUser(userName);
  };

  //confirm state is changing
  useEffect(() => {
    if (user) {
      console.log("username updated state:", user);
    }
  }, [user]);

  return (
    <>
      <HomeDesc />
      <UserAddViewParent user={user} handleSubmit={handleSubmit} />
    </>
  );
}
//TODO: title, flavour

//? AddMoviesHome & ViewMoviesHome to render when user has entered their username.
//? AddMoviesHome has link to AddMovies > react router link
//? ViewMoviesHome has link to ViewMovies > react router link

//
//TODO
//?asd
//!
//*
