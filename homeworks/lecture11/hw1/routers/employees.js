const express = require("express");
const {
  // getAllEmployees,
  // getAllEmployeesByCompany,
  getAllEmployeesByManager,
  createEmployee,
  // findEmployee,
  findEmployeeName,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/Employee");
const auth = require('../middlewares/auth');
const CustomAPIError = require('../errors');
const router = express.Router();



router.get('/employees',auth);
// router.get('/companies/:id/employees', getAllEmployeesByCompany)
router.get('/managers/:id/employees', getAllEmployeesByManager)
router.post('/employees', createEmployee);
router.get('/employees/:id', findEmployeeName);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee)

module.exports = router;
