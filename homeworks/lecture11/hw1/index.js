const express = require('express');
const mongoose = require('mongoose');
const { Company, Employee } = require('./model');

require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

const router = express.Router();
const app = express();
const auth = require('./auth');

// Log in Auth
router.post('/login', async (req, res, next) => {
    try {
      const { username, password } = req.body;
  
      let user = await User.findOne({ username });
  
      if (!user) {
        throw new CustomAPIError('Invalid Credentials', 400);
      }
  
      if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }
  
      const payload = {
        user: {
          id: user._id
        }
      };
  
      const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '30d'
      });
      
      res.json({ token });
    } catch (err) {
      next(err);
    }
  });

// Create a new company
router.post('/company', auth, async (req, res) => {
    try {
        const { name, description, headquarters, industry, employees } = req.body;
        const company = new Company({ name, description, headquarters, industry, employees });
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        console.error('Error creating company:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Create a new employee
router.post('/employee', auth, async (req, res) => {
    try {
        const { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager } = req.body;
        const employee = new Employee({ firstName, lastName, company, startDate, jobTitle, resigned, salary, manager });
        await evalmployee.save();
        res.status(201).json(employee);
    } catch (error) {
        console.error('Error creating employee:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get a company by id
router.get('/company/:id', auth, async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        console.error('Error fetching company by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get an employee by id
router.get('/employee/:id', auth, async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await Employee.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error('Error fetching employee by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a company by id
router.put('/company/:id', auth, async (req, res) => {
    try {
        const companyId = req.params.id;
        const { name, description, headquarters, industry, employees } = req.body;
        const company = await Company.findByIdAndUpdate(
            companyId,
            { name, description, headquarters, industry, employees },
        );

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        console.error('Error updating company by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update an employee by id
router.put('/employee/:id', auth, async (req, res) => {
    try {
        const employeeId = req.params.id;
        const { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager } = req.body;
        const employee = await Employee.findByIdAndUpdate(
            employeeId,
            { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager },
        );

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        console.error('Error updating employee by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a company by id
router.delete('/company/:id', auth, async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findByIdAndDelete(companyId);

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        console.error('Error deleting company by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete an employee by id
router.delete('/employee/:id', auth, async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await Company.findByIdAndDelete(employeeId);

        if (!employee) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Get all companies
router.get("/company", auth, async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        console.error('Error fetching all companies:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all employees
router.get("/employee", auth, async (req, res) => {
    try {
        const employees = await Company.find();
        res.json(employees);
    } catch (error) {
        console.error('Error fetching all employees:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Get all employees of a company
router.get("/company/:id/employees", auth, async (req, res) => {
    try {
        const companyID = req.params.id;
        const company = await Company.findById(companyID);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company.employees);
    } catch (error) {
        console.log("Error finding all employees of the company", err);
        res.status(500).json("Error found all employees of the company");
    }
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});