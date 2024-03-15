const express = require("express");
const {
  getAllEmployees,
  getAllEmployeesByCompany,
  getAllEmployeesByManager,
  createEmployee,
  findEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/Employee");
const router = express.Router();

router.get('/employees', getAllEmployees);
router.get('/companies/:id/employees', getAllEmployeesByCompany)
router.get('/managers/:id/employees', getAllEmployeesByManager)
router.post('/employees', createEmployee);
router.get('/employees/:id', findEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee)

module.exports = router;
