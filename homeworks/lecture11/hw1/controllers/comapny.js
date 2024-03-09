const Employee = require("../models/employee");
const Company = require("../models/company");

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status.json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const listCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateCompany = async (req, res) => {
  try {
    await Company.findByIdAndUpdate(req.params.id, req.body);
    const company = await Company.findById(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const listCompanyEmployees = async (req, res) => {
  if (!req.employee) {
    return res.status(401).json({ message: "Unauthorized" });
  } else {
    try {
      const company = await Company.findById(req.params.id).populate(
        "employees",
      );
      const employee = await Employee.findById(req.employee.id);

      if (!company || !employee) {
        return res.status(400).json({ message: "Company not found" });
      } else {
        if (employee.company.toString() !== company._id.toString()) {
          return res.status(401).json({ message: "Unauthorized" });
        } else {
          res.status(200).json(company.employees);
        }
      }
    } catch (err) {
      res.status(500).json({ message: "Server Error" });
    }
  }
};

module.exports = {
  createCompany,
  listCompanies,
  getOneCompany,
  updateCompany,
  deleteCompany,
  listCompanyEmployees,
};
