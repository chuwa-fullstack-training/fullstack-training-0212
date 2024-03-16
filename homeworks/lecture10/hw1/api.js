const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Company, Employee } = require('./models');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/yourDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/companies', async (req, res) => {
    const company = new Company(req.body);
    try {
        await company.save();
        res.status(201).send(company);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.post('/employees', async (req, res) => {
    const employee = new Employee(req.body);
    try {
        await employee.save();
        res.status(201).send(employee);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/companies/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send(company);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company');
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send(employee);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.patch('/companies/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!company) {
            return res.status(404).send();
        }
        res.send(company);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.patch('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.delete('/companies/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) {
            return res.status(404).send();
        }
        res.send(company);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.delete('/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send();
        }
        res.send(employee);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.send(companies);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.send(employees);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/companies/:id/employees', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send(company.employees);
    } catch (e) {
        res.status(500).send(e);
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
