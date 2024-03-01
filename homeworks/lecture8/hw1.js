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
const fs = require("fs");

const hw1Router = express.Router();
const hw2Router = express.Router();

const app = express();

app.use("/hw1", hw1Router);
app.use("/hw2", hw2Router);

let baseDir = path.dirname(path.dirname(__dirname));

hw1Router.get("/:dir/:ext", (req, res) => {
  const directory = path.join(baseDir, req.params.dir);
  const extension = req.params.ext;

  fs.readdir(directory, (err, files) => {
    if (err) {
      throw err;
    }
    let result = files.filter((file) => file.endsWith(`.${extension}`));
    res.send(result);
  });
});

hw2Router.get("/parsetime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  });
});

hw2Router.get("/unixtime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  res.json({
    unixtime: date.getTime(),
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
