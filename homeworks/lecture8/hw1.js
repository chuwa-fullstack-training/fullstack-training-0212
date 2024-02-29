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
const router = express.Router();
// hw1
router.get('/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;
    const directoryPath = path.join(__dirname, dir);

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading directory');
        }

        const filteredFiles = files.filter(file => path.extname(file).slice(1) === ext);
        res.send(filteredFiles);
    });
});

// hw2
router.get('/api/parsetime', (req, res) => {
    const time = req.query.iso;
    const date = new Date(time);

    const newTime = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    res.json(newTime);
});

router.get('/api/unixtime', (req, res) => {
    const time = req.query.iso;
    const date = new Date(time);

    const unixTime = {
        unixtime: date.getTime()
    };

    res.json(unixTime);
});

module.exports = router;


