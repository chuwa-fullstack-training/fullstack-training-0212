const express = require('express');
const router = express.Router();


router.get('/api/parsetime', (req, res) => {
    const date = new Date(req.query.iso);
    const result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    }
    res.json(result);
})

router.get('/api/unixtime', (req, res) => {
    const date = new Date(req.query.iso);
    const result = {
        unixtime: date.getTime(),
    };
    res.json(result);
})

module.exports = router;