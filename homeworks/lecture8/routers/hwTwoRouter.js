const express = require('express');
const router = express.Router();
const hwTwoController = require('../hwTwoController.js');
router.get('/api/parsetime', hwTwoController.getParseTime);
router.get('/api/unixtime', hwTwoController.getUnixTime);

module.exports = router;