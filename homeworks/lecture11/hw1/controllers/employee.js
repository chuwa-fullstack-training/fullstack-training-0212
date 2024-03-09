const Employee = require("../models/employee");
const Company = require("../models/company");

const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    if (!employee.firstName || !employee.lastName || !employee.company) {
      return res.status(400).json({ message: "Please provide all fields" });
    }
    await employee.save();
    const company = await Company.findById(employee.company);
    if (!company) {
      return res.status(400).json({ message: "Company not found" });
    }
    company.employees.push(employee);
    await company.save();
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate("company")
      .populate("manager");
    if (req.employee) {
      res.status(200).json(employees);
    } else {
      res.status(200).json(
        employees.map((e) => ({
          firstName: e.firstName,
          lastName: e.lastName,
        })),
      );
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id)
      .populate("company")
      .populate("manager");
    if (!employee) {
      return res.status(400).json({ message: "Employee not found" });
    }
    if (req.employee) {
      res.status(200).json(employee);
    } else {
      res.status(200).json({
        firstName: employee.firstName,
        lastName: employee.lastName,
      });
    }
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const preEmployee = await Employee.findByIdAndUpdate(
      req.params?.id,
      req.body,
    );
    if (!preEmployee) {
      return res.status(400).json({ message: "Employee not found" });
    }
    const employee = await Employee.findById(req.params.id)
      .populate("company")
      .populate("manager");
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: "Employee deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
};
