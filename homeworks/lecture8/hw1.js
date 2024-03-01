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
const express = require('express');
const fs = require('fs');
const path = require('path');
const url = require('url');
const app = express();
const port = 3000;

app.get('/hw1/:dir/:ext', (req, res) => {
  const dir = req.params.dir;
  const ext = req.params.ext;

  // Validate and sanitize inputs
  if (dir.includes('..') || ext.includes('..')) {
    return res.status(400).send('Invalid input');
  }

  const dirPath = path.join(__dirname, dir);

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).send('Error reading directory');
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);

    res.send(filteredFiles.join('\n'));
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

app.get('/api/parsetime', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const isoDate = parsedUrl.query.iso;

  if (!isoDate) {
    return res.status(400).json({ error: 'ISO date is required in query parameters' });
  }

  const date = new Date(isoDate);
  const responseObj = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };

  res.json(responseObj);
});

app.get('/api/unixtime', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const isoDate = parsedUrl.query.iso;

  if (!isoDate) {
    return res.status(400).json({ error: 'ISO date is required in query parameters' });
  }

  const date = new Date(isoDate);
  const responseObj = {
    unixtime: date.getTime()
  };

  res.json(responseObj);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});