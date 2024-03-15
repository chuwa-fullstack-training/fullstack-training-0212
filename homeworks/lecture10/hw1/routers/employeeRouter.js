const express = require("express");
const router = express.Router();

const {
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployee,
} = require("../controllers/employeeController");

router.get("/", getAllEmployees);
router.get("/:id", getOneEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.post("/", createEmployee);

module.exports = router;
