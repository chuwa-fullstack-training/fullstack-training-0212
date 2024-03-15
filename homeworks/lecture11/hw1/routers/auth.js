const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const CustomAPIError = require('../errors');
const router = express.Router();

// /auth/login
router.post('/login', async (req, res, next) => {
  try {
    const {  username: firstName, password: lastName } = req.body;

    let user = await Employee.findOne({ firstName });

    
    if (!user) {
      // utilized self-defined error handler, can also use like this in other controllers.
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (user.lastName !== lastName) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user._id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });
    
    res.json({ token });
  } catch (err) {
    next(err);
    // res.locals.err = err
  }
});

module.exports = router;
