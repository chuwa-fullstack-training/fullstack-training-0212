const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

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

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find({}).populate('company');
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all employees of a company
router.get('/company/:companyId', async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId }).populate('company');
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
