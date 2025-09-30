import express from "express";
import cors from "cors";
import { db } from "./dbConnection.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});

app.get("/", (_, res) => {
  res.send("Root");
});

//? DB connection is working:
//TODO: GET unwatched, GET watched
//TODO: POST new movie(s)
//TODO: POST new users
app.get("/get-unwatched", async (req, res) => {
  try {
    const data = await db.query(`
      SELECT m.movie_title
FROM user_movies AS um
JOIN users AS u ON u.user_id = um.user_id
JOIN movies AS m ON m.movie_id = um.movie_id
WHERE u.username = "$1" AND um.watched_status = FALSE `);
    res.json(data.rows);
  } catch (error) {
    console.error("Error in the get-unwatched route", error);
    res.status(500).json({ success: false });
  }
});

app.get("/get-watched", async (req, res) => {
  try {
    const data = await db.query(`SELECT m.movie_title, u.user_id, m.movie_id
FROM user_movies AS um
JOIN users AS u ON u.user_id = um.user_id
JOIN movies AS m ON m.movie_id = um.movie_id
WHERE u.username = 'Dan' AND um.watched_status = TRUE`); //! $1 for dan
    //!replace "dan" with $1 from formdata; user------Remember passing state into the import of the fetch!
    res.json(data.rows);
  } catch (error) {
    console.error("Error in the get-watched route", error);
    res.status(500).json({ success: false });
  }
});
//! not tested
app.post("/add-movies", async (req, res) => {
  try {
    const { movieTitle, userName } = req.body;
    //do a query to get user id where username = userName, store this value, use this value in "userquery"
    const userRes = await db.query(
      `SELECT user_id from users WHERE username = $1`,
      [userName]
    );
    const userId = userRes.rows[0].user_id;
    console.log("userId:", userId);
    const moviequery = await db.query(
      `INSERT INTO movies (movie_title) VALUES ($1) RETURNING movie_id;`,
      [movieTitle]
    );
    const movieId = moviequery.rows[0].movie_id;
    console.log("movieId:", movieId);

    const userquery = await db.query(
      `INSERT INTO user_movies (user_id, movie_id, watched_status) VALUES ($1, $2, FALSE)`,
      [userId, movieId]
    );
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("error in add-movies route", error);
    res.status(500).json({ success: false });
  }
});

//? add-user route working. This worked but see below
// app.post("/add-user", (req, res) => {
//   const { userName } = req.body;
//   try {
//     const query = db.query(`INSERT INTO users (username) VALUES ($1)`, [
//       userName,
//     ]);
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error("error in add-user route", error);
//     res.status(500).json({ success: false });
//   }
// });

// had problem with user adding erroring if data already exists; revised post method first checks "if" query result has a line (more than 0 lines actually but near enough)
//? add-user route working
app.post("/add-user", async (req, res) => {
  const { userName } = req.body;

  try {
    const existingUser = await db.query(
      `SELECT username FROM users WHERE username = ($1)`,
      [userName]
    );

    if (existingUser.rows.length > 0) {
      //return to stop function on checking if user exists
      console.log("user exists, stopping");
      return res.json();
    }
    const addedUser = await db.query(
      `INSERT INTO users (username) VALUES ($1)`,
      [userName]
    );
    res.json();
  } catch (error) {
    console.error("error in add-user route", error);
    res.status(500).json({ success: false });
  }
});
