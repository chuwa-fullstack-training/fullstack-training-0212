const express = require("express");
const app = express();
const router = express.Router();
app.use("/employee", router);

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
