/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.end("this is the home page");
});

app.get("/about", (req, res) => {
  res.end("this is the about page");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.post("/create-post", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  res.render("home", { title: title, content: content });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));

