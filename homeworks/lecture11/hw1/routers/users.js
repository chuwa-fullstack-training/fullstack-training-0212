const express = require('express');
const {
  findEmployee,
  getAllEmployeesByCompany,
} = require('../controllers/Employee');

const router = express.Router();

router.get('/users/:login/employees', getAllEmployeesByCompany);

router.get('/users/:login/employees/:id', findEmployee);


module.exports = router;