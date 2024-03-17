const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
  const isoTime = req.query.iso;
  const date = new Date(isoTime);

  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  res.json(result);
});

router.get('/unixtime', (req, res) => {
  const isoTime = req.query.iso;
  const date = new Date(isoTime);

  const result = {
    unixtime: date.getTime(),
  };

  res.json(result);
});

module.exports = router;
