const express = require('express');
const router = express.Router();
const hwOneController = require('../hwOneController.js');
router.get('/:dir/:ext', hwOneController.filterFiles);

module.exports = router;