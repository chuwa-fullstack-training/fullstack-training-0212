const express = require("express");
const app = express();
const router = express.Router();
app.use("/company", router);

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
