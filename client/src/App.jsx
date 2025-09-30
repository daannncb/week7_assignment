import { Routes, Route } from "react-router";
import Home from "./components/Home";
import AddMovies from "./components/AddMovies";
import ViewMovies from "./components/ViewMovies";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-movies" element={<AddMovies />} />
        <Route path="/view-movies" element={<ViewMovies />} />
      </Routes>
    </>
  );
}
