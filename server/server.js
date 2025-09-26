//
//TODO
//?asd
//!
//*

import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8080;

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});

app.get("/", (_, res) => {
  res.send("Root");
});
