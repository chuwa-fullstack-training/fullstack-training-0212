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

const auth = require('../middlewares/auth');
const accessControl = require('../middlewares/accessControl');

router.get('/employees', auth, accessControl, getAllEmployees);

router.get('/employees/:id', getEmployeeById);

router.get('/employees/company/:companyId', auth, getEmployeesByCompany);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;