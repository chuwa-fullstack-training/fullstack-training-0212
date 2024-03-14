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
const app = express();

// hw1

const fs = require("fs");
const path = require("path");
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
    const dir = path.join(__dirname, req.params.dir);
    fs.readdir(dir, (err, files) => {
        if (err) { throw new Error(err); }
        for (let file of files) {
            if (path.extname(file) === "." + req.params.ext) {
                console.log(file);
            }
        }
    });
});

app.use('/hw1', router);


// hw2

const url = require('url');
const router2 = express.Router();

router2.get('/parsetime', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const time = new Date(parsedUrl.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const response = {
        hour: time.getUTCHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
    res.end(JSON.stringify(response));
});

router2.get('/unixtime', (req, res) => {
    const parsedUrl = url.parse(req.url);
    const time = new Date(parsedUrl.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const response = {
        unixtime: time.getTime()
    };
    res.end(JSON.stringify(response));
});

app.use('/api', router2);

app.listen(3000, () => { console.log('Server listening on 3000'); });
