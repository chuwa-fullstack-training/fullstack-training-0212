Apply RESTful principles to the hw1 in lecture9



//apis

const express = require('express');
const router = express.Router();
const Company = require('./companys');
const Employee = require('./employee');

// Create a new company
router.post('/companies', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company); // 201 Created status
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new employee
router.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee); // 201 Created status
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a company by id
router.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get an employee by id
router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a company by id
router.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an employee by id
router.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a company by id
router.delete('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an employee by id
router.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all companies
router.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all employees
router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all employees of a company
router.get('/companies/:companyId/employees', async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId });
    res.json(employees);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
