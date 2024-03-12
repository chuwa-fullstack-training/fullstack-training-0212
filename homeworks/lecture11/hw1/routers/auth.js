const express = require('express');
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors');
const { Employee } = require('../models/Employee');
const router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    let employee = await Employee.findOne({ firstName, lastName });

    if (!employee) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (employee.lastName !== lastName) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: employee._id
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });
    
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
