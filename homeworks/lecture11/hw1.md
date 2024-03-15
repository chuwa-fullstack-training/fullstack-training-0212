Based on hw1 in lecture 9, you are required to implement authentication and authorization for the APIs.

1. Create a new API for login

   - `/api/login`, returning JWT token for authentication and authorization
   - you can use `firstName` as username and `lastName` as password or any other combination that make sense to you

2. Modify existing APIs to accomodate authentication and authorization as following:
   - only logged-in user can have access to get all information from employees, e.g.: logged-in user can retrieve all the fields of employees, while the anonymous can only get `firstName` and `lastName`
   - only logged-in user can have access to get all employees of it's own company, e.g.: employees with company A have access to get employees of company A, ONLY

//api.js


const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Company = require('./companys');
const Employee = require('./employee');

const JWT_SECRET = 'your_secret_key';

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Failed to authenticate token' });
    }

    req.user = decoded;
    next();
  });
}

// Login route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'firstName' && password === 'lastName') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

router.get('/employees', verifyToken, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/companies/:companyId/employees', verifyToken, async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId });
    res.json(employees);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

function restrictAccess(req, res, next) {
  // Check if user is logged in
  if (!req.user) {
    return res.status(403).json({ message: 'Access forbidden. Please log in.' });
  }
  next();
}

router.get('/employees', restrictAccess, async (req, res) => {
  try {
    const employees = await Employee.find().select('firstName lastName');
    res.json(employees);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
