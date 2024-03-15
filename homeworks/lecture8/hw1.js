/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.npm install express --save
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const router1 = express.Router();
const router2 = express.Router();

app.use("/hw1", router1);
app.use("/hw2", router2);

router1.get("/:dir/:ext", (req, res) => {
  const dir = req.params.dir;
  const ext = req.params.ext;

  const dirPath = path.join(__dirname, dir);
  console.log(__dirname);

  fs.readdir(
    (dirPath,
    (err, files) => {
      if (err) {
        throw err;
      }
      const filteredFiles = files.filter(
        (file) => path.extname(file) === `.${ext}`
      );
      filteredFiles.forEach((file) => {
        console.log(file);
      });
    })
  );
});

router2.get("/parsetime", (req, res) => {
  const isoTime = req.query.iso;
  const date = new Date(isoTime);
  res.json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  });
});

hw2Router.get("/unixtime", (req, res) => {
  const isoTime = req.query.iso;
  const date = new Date(isoTime);
  res.json({
    unixtime: date.getTime(),
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
