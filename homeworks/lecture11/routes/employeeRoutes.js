const express = require('express');
const Employee = require('../models/Employee');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

const filterEmployeeData = (req, res, next) => {
  if (!req.user) {
    req.projection = 'firstName lastName'; // Specify fields to return for anonymous users
  } else {
    req.projection = ''; // Return all fields for authenticated users
  }
  next();
};

// Get all employees with conditional access
router.get('/', [authenticate, filterEmployeeData], async (req, res) => {
  try {
    const employees = await Employee.find({}, req.projection); // Use projection to filter fields
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all employees of the user's own company
router.get('/company', authenticate, async (req, res) => {
  try {
    // Ensure the user can only access employees of their own company
    const employees = await Employee.find({ company: req.user.company }, 'firstName lastName company startDate jobTitle resigned salary');
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get an employee by id
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id).populate('company');
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an employee by id
router.patch('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an employee by id
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
