const express = require("express");
const {
  createEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee");
const auth = require("../middleware/auth");

const router = express.Router();

router.put("/", createEmployee);
router.get("/", auth, getEmployees);
router.get("/:id", auth, getEmployee);
router.post("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;
