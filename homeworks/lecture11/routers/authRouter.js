const express = require('express');
const {
 doLogin
} = require('../controllers/authController');
const router = express.Router();


router.post('/login', doLogin);
module.exports = router;
  