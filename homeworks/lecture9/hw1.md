Create a set of APIs to manage employees and companies. The data should be stored in MongoDB. The API should support the following operations:

- Create a new company
- Create a new employee
- Get a company by id
- Get an employee by id
- Update a company by id
- Update an employee by id
- Delete a company by id
- Delete an employee by id
- Get all companies
- Get all employees
- Get all employees of a company
const express = require('express');
const router = express.Router();
const Company = require('./companys');
const Employee = require('./employee');




// Create a new company
router.post('/companies', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new employee
router.post('/employees', async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a company by id
router.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get an employee by id
router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a company by id
router.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(company);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an employee by id
router.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a company by id
router.delete('/companies/:id', async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: 'Company deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an employee by id
router.delete('/employees/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
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








The Company schema should have the following fields:

- name: String
- description: String
- headquarters: String
- industry: String
- _employees: [EmployeeSchema]_

// models/company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

module.exports = mongoose.model('Company', companySchema);






The Employee schema should have the following fields:

- firstName: String
- lastName: String
- company: CompanySchema
- startDate: Date
- jobTitle: String
- resigned: Boolean
- salary: Number
- _manager: EmployeeSchema_ (optional)

const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

module.exports = mongoose.model('Employee', employeeSchema);









// app.js
const express = require('express');
const mongoose = require('mongoose');
const companyRouter = require('./api');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', companyRouter);

mongoose.connect('mongodb+srv://hangyuan:15993654923@cluster0.lf4jy3a.mongodb.net/your_database', 
{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));


