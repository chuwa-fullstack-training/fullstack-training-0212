const express = require('express');
const {
  findEmployee,
  getAllEmployeesByCompany,
} = require('../controllers/Employee');
const auth = require('../middlewares/auth')

const router = express.Router();

router.get('/users/company/employees/:id', auth, getAllEmployeesByCompany);

router.get('/users/employees/:id', auth, findEmployee);


module.exports = router;