const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const directoryPath = path.join(__dirname, dir);
  const extension = '.' + ext;

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.status(500).send('Error reading directory');
      return;
    }

    const filteredFiles = files.filter(file => path.extname(file) === extension);
    res.send(filteredFiles.join('\n'));
  });
});

module.exports = router;
