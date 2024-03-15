const express = require('express');
const router = express.Router();
const Company = require('../models/Company');
const Employee = require('../models/Employee');

// Create a new company
router.post('/', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a company by id
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a company by id
router.put('/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a company by id
router.delete('/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    res.json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all employees of a company
router.get('/:id/employees', async (req, res) => {
  try {
    const employees = await Company.findById(req.params?.id).then((company) => {
      return Promise.all(
        company.employees?.map((id) => {
          return Employee.findById(id);
        })
      );
    });
    res.status(200).json(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error on getting employees" });
  }
});

module.exports = router;
