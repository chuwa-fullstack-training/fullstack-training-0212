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


//lec7, hw1
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 8000;

app.use('/hw1/:dir/:ext', (req, res, next) => {
  const { dir } = req.params;
  if (dir.includes('/') || dir.includes('..')) {
    return res.status(400).send('Invalid directory. Only one level down is supported.');
  }
  next();
});

app.get('/hw1/:dir/:ext', (req, res) => {
  const directory = path.join(__dirname, req.params.dir);
  const extensionFilter = '.' + req.params.ext;

  fs.readdir(directory, (err, files) => {
    if (err) {
      return res.status(500).send(`An error occurred: ${err}`);
    }

    const filteredFiles = files.filter(file => path.extname(file) === extensionFilter);
    res.json(filteredFiles);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


//lec7 hw2 is made seperately in file hw1_lec7hw2.js
