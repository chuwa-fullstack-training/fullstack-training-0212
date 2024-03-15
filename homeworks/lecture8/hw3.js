/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  console.log("this is home page");
});

app.get("/about", (req, res) => {
  console.log("this is about page");
});

app.get("/home", (req, res) => {
  res.render("home");
});

app.post("create-post", (req, res) => {
  res.render("home", { title: req.body.title, content: req.body.content });
});

app.listen(port, () => console.log(`Example app listening on port ${PORT}!`));
