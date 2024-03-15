const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
    getEmployeesByCompany
} = require('../controllers/employeeController');

router.post('/', createEmployee);
router.get('/', auth, getAllEmployees);
router.get('/:id', auth, getEmployeeById);
router.put('/:id', updateEmployeeById);
router.delete('/:id', deleteEmployeeById);
router.get('/company/:companyId', auth, getEmployeesByCompany);

module.exports = router;
