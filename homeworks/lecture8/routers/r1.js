const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;
    fileFilter(dir, ext).then(filteredFiles => {
        res.send(filteredFiles);
    });
});


function fileFilter(dir, ext) {
    return new Promise((resolve, reject) => {
        const dirPath = './' + dir;
        const filterExt = '.' + ext;
        let res = [];
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                reject(err);
            } else {
                files.forEach(file => {
                    if (path.extname(file) == filterExt) {
                        res.push(file);
                        console.log(file);
                    }
                });
            }
            console.log(res);
            resolve(res);
        });
    });
}

module.exports = router;