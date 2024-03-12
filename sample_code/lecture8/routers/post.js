const express = require('express');
const router = express.Router();

router.get('/hw1', (req, res) => {
    res.send('Get all posts');
});

module.exports = router;