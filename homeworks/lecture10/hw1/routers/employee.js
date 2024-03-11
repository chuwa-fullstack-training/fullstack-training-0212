const express = require('express');
const router = express.Router();
const {
    getAllEmployees,
    getEmployeeById,
    getEmployeesByCompany,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee');

router.get('/employees', getAllEmployees);

router.get('/employees/:id', getEmployeeById);

router.get('/employees/company/:companyId', getEmployeesByCompany);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;