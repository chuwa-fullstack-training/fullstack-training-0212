const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/:dir?/:ext", (req, res) => {
  // support current level and one level down
  const dir = req.params.dir ? __dirname + "/" + req.params.dir : __dirname;

  // some test to search below upper level directory, just for curious
  // const dir = req.params.dir ? path.join(__dirname, '../../', req.params.dir) : __dirname;
  // console.log(dir)
  const ext = "." + req.params.ext;

  // read files from dir
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(400).send(err.message);
    } else {
      files.forEach((file) => {
        if (path.extname(file) === ext) {
          res.write(file + "\n");
        }
      });
    }
    res.end();
  });
});

router.get("*", (req, res) => {
  res.status(404).end("This is the 404 page");
});

module.exports = router;
