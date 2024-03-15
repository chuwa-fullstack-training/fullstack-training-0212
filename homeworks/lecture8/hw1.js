/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const fileRouter = require("./routers/files");
const timeRouter = require("./routers/time");

app.use("/files", fileRouter);
app.use("/time", timeRouter);

app.get("/", (req, res) => {
  // console.log(__dirname)
  res.send("home page for hw1");
});

app.get("*", (req, res) => {
  res.status(404).end("Oops, something wrong, 404!");
});

app.listen(port, () => console.log(`hw1 app listening on port ${port}!`));
