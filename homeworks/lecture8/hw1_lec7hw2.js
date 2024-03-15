const express = require('express');
const app = express();
const port = 8000;

// Router for /api/parsetime
app.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso;

  if (!iso) {
    return res.status(400).json({ error: "Missing 'iso' query parameter" });
  }

  const date = new Date(iso);
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };

  res.json(result);
});

// Router for /api/unixtime
app.get('/api/unixtime', (req, res) => {
  const iso = req.query.iso;

  if (!iso) {
    return res.status(400).json({ error: "Missing 'iso' query parameter" });
  }

  const date = new Date(iso);
  const result = {
    unixtime: date.getTime(),
  };

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
