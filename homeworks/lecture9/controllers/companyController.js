const Company = require("../schema").Company;
const Employee = require("../schema").Employee;

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on creating new company" });
  }
};

const findCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on finding the company" });
  }
};

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body);
    res.status(200).json(company);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on updating the company" });
  }
};

const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: "Company deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on deleting the company" });
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on getting companies" });
  }
};

const getAllEmployeesFromCompany = async (req, res) => {
  try {
    const employees = await Company.findById(req.params?.id).then((company) => {
      return Promise.all(
        company.employees?.map((id) => {
          return Employee.findById(id);
        })
      );
    });
    res.status(200).json(employees);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error on getting employees" });
  }
};
