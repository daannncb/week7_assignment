export default function AddMoviesForm() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const movieTitle = formData.get("movieTitle");
    const userName = sessionStorage.getItem("user");
    console.log(userName);
    console.log("movieTitle:", movieTitle);
    try {
      const res = await fetch(
        "https://week7-assignment-sdy4.onrender.com/add-movies",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ movieTitle, userName }),
        }
      );
      const data = await res.json();

      console.log("movie created:", data);
    } catch (error) {
      console.error("error adding user", error);
    }
    //! there's an issue where user state is cleared on loading the page this exists on
    //! bertie suggested solution: use local storage; load page, setUser = localstorage.user, then we can pass this to the fetch method post
  }
  return (
    <form onSubmit={handleSubmit}>
      Please enter the movie title:
      <input name="movieTitle" />
      <button type="submit">Add movie</button>
    </form>
  );
}
