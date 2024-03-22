const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
    const { iso } = req.query;
    const date = new Date(iso);
    t = {
        "hour": date.getUTCHours(),
        "minute": date.getUTCMinutes(),
        "second": date.getUTCSeconds()
    };
    res.send(JSON.stringify(t));
});

router.get('/unixtime', (req, res) => {
    const { iso } = req.query;
    const date = new Date(iso);
    t = {
        "unixtime": Math.floor(date),
    };
    res.send(JSON.stringify(t));
});

module.exports = router;