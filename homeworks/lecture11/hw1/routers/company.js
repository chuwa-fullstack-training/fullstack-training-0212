const express = require("express");
const {
  createCompany,
  listCompanies,
  getOneCompany,
  updateCompany,
  deleteCompany,
  listCompanyEmployees,
} = require("../controllers/company");
const auth = require("../middleware/auth");

const router = express.Router();

router.put("/", createCompany);
router.get("/", listCompanies);
router.get("/:id", getOneCompany);
router.post("/:id", updateCompany);
router.delete("/:id", deleteCompany);
router.get("/:id/employees", auth, listCompanyEmployees);

module.exports = router;
