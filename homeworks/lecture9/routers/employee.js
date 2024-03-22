const express = require('express');
const router = express.Router();
/**
 * get
 * /api/getAllCompanies
 * /api/getCompanyById/:id
 * 
 * /api/getAllEmployees 
 * /api/getEmployeeById/:id
 * /api/getEmployeesByCompany
 * 
 * 
 * post
 * /api/createCompany
 * /api/createEmployee
 * 
 * put
 * /api/updateCompany/:id
 * /api/updateEmployee/:id
 * 
 * delete
 * /api/deleteCompany/:id
 * /api/deleteEmployee/:id
 */
const { Employee, Company } = require('../mongo/schema')

router.get('/getAllEmployees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/getEmployeeById/:id', async(req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
});

router.get('/getEmployeesByCompany/:id', async(req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        const employees = company._employees;
        res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/createEmployee', async(req, res) => {
    try {
        console.log(req);
        const employee = new Employee(req.body);
        if(!employee.name) {
            return res.status(400).json({message: 'Please provide all fields'});
        }
        await employee.save();
        res.status(201).json(employee);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.put('/updateEmployee/:id', async(req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params?.id, req.body);
        res.status(200).json(employee);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.delete('/deleteEmployee/:id', async(req, res) => {
    try{
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(200).json({message: 'Employee deleted'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;