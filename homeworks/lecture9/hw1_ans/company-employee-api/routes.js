const express = require('express');
const { Employee, Company } = require('./models');

module.exports = function(app) {

    // Create a new company
    app.post('/companies', async (req, res) => {
        try {
            const company = new Company(req.body);
            await company.save();
            res.status(201).json(company);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    // Create a new employee
    app.post('/employees', async (req, res) => {
        try {
            const employee = new Employee(req.body);
            await employee.save();
            res.status(201).json(employee);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    // Get a company by id
    app.get('/companies/:id', async (req, res) => {
        try {
            const company = await Company.findById(req.params.id).populate('employees');
            if (!company) return res.status(404).json({ message: 'Company not found' });
            res.json(company);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Get an employee by id
    app.get('/employees/:id', async (req, res) => {
        try {
            const employee = await Employee.findById(req.params.id).populate('company').populate('manager');
            if (!employee) return res.status(404).json({ message: 'Employee not found' });
            res.json(employee);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Update a company by id
    app.put('/companies/:id', async (req, res) => {
        try {
            const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!company) return res.status(404).json({ message: 'Company not found' });
            res.json(company);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    // Update an employee by id
    app.put('/employees/:id', async (req, res) => {
        try {
            const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!employee) return res.status(404).json({ message: 'Employee not found' });
            res.json(employee);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });

    // Delete a company by id
    app.delete('/companies/:id', async (req, res) => {
        try {
            const company = await Company.findByIdAndDelete(req.params.id);
            if (!company) return res.status(404).json({ message: 'Company not found' });
            res.json({ message: 'Company deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Delete an employee by id
    app.delete('/employees/:id', async (req, res) => {
        try {
            const employee = await Employee.findByIdAndDelete(req.params.id);
            if (!employee) return res.status(404).json({ message: 'Employee not found' });
            res.json({ message: 'Employee deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Get all companies
    app.get('/companies', async (req, res) => {
        try {
            const companies = await Company.find().populate('employees');
            res.json(companies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Get all employees
    app.get('/employees', async (req, res) => {
        try {
            const employees = await Employee.find().populate('company').populate('manager');
            res.json(employees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });

    // Get all employees of a company
    app.get('/companies/:id/employees', async (req, res) => {
        try {
            const employees = await Employee.find({ company: req.params.id }).populate('company').populate('manager');
            res.json(employees);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
};
