const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

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

router.get('/:dir/:ext', (req, res) => {
    const directory = path.join(__dirname, req.params.dir);
    const extension = '.' + req.params.ext;

    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading the directory:', err);
            res.status(500).send('Server error: Could not read directory');
            return;
        }
        const matchedFiles = files.filter(file => path.extname(file) === extension);
        res.send(matchedFiles.join('\n'));
    })
})

module.exports = router;
