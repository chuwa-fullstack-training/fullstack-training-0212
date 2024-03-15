const express = require("express");
const router = express.Router();

const {
  createCompany,
  findCompany,
  updateCompany,
  deleteCompany,
  getAllCompanies,
  getAllEmployeesFromCompany,
} = require("../controllers/companyController");

router.get("/", getAllCompanies);
router.delete("/:id", deleteCompany);
router.put("/:id", updateCompany);
router.get("/:id", findCompany);
router.post("/", createCompany);
router.get("/", getAllEmployeesFromCompany);

module.exports = router;
