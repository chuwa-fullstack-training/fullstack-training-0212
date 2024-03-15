const express = require("express");
const router = express();

router.get("/parsetime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);

  res.status(200).json({
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  });
});

router.get("/unixtime", (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);

  res.status(200).json({
    unixtime: date.getTime(),
  });
});

router.get("*", (req, res) => {
  res.status(404).end("This is the 404 page");
});

module.exports = router;
