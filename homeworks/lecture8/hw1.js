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

//main.js

const express = require('express');
// const hw1Router = require('./hw1');

const hw2Router = require('./hw2');

const app = express();
const port = 3000;

// app.use('/hw1', hw1Router);
app.use('/api', hw2Router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//hw1.js

const express = require('express');
const path = require('path');
const fs = require('fs'); 
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const currentDir = path.join(__dirname, dir);

  if (dir.includes('/') || ext.includes('/')) {
    res.status(400).send('Invalid request. Only one level down is supported.');
    return;
  }

  fs.readdir(currentDir, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      res.status(500).send('Internal Server Error');
      return;
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);

    if (filteredFiles.length === 0) {
      res.send(`No files with the extension '${ext}' found in the directory.`);
    } else {
      res.send(`Files with the extension '${ext}' in the directory: ${filteredFiles.join(', ')}`);
    }
  });
});

module.exports = router;


// hw2.js
const express = require('express');
const router = express.Router();
const url = require('url');

router.get('/:type', (req, res) => {
  // const iso = req.query.iso;
  
  const type = req.params.type;
  const iso = req.query.iso;
  const dateObject = new Date(iso);

  if (isNaN(dateObject.getTime())) {
    res.status(400).json({ error: 'Invalid ISO format' });
    return;
  }

  // const type = req.query.type;


  if (type === 'parsetime') {
    const formattedTime = {
      hour: dateObject.getUTCHours(),
      minute: dateObject.getUTCMinutes(),
      second: dateObject.getUTCSeconds(),
    };
    // console.log(formattedTime);
    res.json(formattedTime);
  } else if (type === 'unixtime') {
    const unixTimestamp = dateObject.getTime();
    const unixTimeObj = { unixtime: unixTimestamp };
    res.json(unixTimeObj);
  } else {
    res.status(400).json({ error: 'Invalid type parameter' });
  }
});

module.exports = router;




