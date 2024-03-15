const express = require('express');

const {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
    getEmployeesByCompany
} = require('../controllers/employeeController');

const router = express.Router();

router.post('/', createEmployee);
router.get('/', getAllEmployees);
router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployeeById);
router.delete('/:id', deleteEmployeeById);
router.get('/company/:companyId', getEmployeesByCompany);

module.exports = router;
