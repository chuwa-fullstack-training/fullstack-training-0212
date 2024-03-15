const Employee = require("../schema").Employee;
const Company = require("../schema").Company;

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on getting all employees" });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on getting employee" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params?.id, req.body);
    res.status(200).json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on updating employee" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on deleting employee" });
  }
};

const createEmployee = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.company);
    if (!company) {
      throw new Error("Company doesn't exist");
    }

    const employee = new Employee(req.body);
    company.employees.push(employee);
    await employee.save();
    await company.save();
    res.status(200).json({ message: "Employee created successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error on creating new employee." });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployee,
};
