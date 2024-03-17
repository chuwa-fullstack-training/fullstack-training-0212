const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const router = express.Router();

// Secret key for JWT signing (keep it secure)
const SECRET_KEY = 'yanzi';

router.post('/api/login', async (req, res) => {
  const { firstName, lastName } = req.body;
  
  try {
    // For simplicity, using firstName as username and lastName as password
    const employee = await Employee.findOne({ firstName: firstName });
    if (!employee || employee.lastName !== lastName) {
      return res.status(401).send({ error: 'Login failed! Check authentication credentials' });
    }

    // Generate a token
    const token = jwt.sign({ userId: employee._id }, SECRET_KEY, { expiresIn: '2h' });
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
