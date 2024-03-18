const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');
const Company = require('../models/Company');


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.userId = decodedToken.userId;
    next();
  });
};


// Create a new employee
router.post('/', async (req, res) => {
  try {
    const company = await Company.findById(req.body.company);
    if (!company) {
      throw new Error("Company doesn't exist");
    }

    const employee = new Employee(req.body);
    company.employees.push(employee);
    await employee.save();
    await company.save();
    res.status(200).json({ message: "Employee created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on creating new employee." });
  }
});

// Get all employees
router.get('/',verifyToken, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get an employee by id
router.get('/:id',verifyToken, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an employee by id
router.put('/:id',verifyToken, async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an employee by id
router.delete('/:id',verifyToken, async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }
    res.json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all employees of a company
router.get('/company/:companyId',verifyToken, async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params.companyId });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
