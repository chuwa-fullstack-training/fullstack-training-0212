const Company = require('../models/company');
const Employee = require('../models/employee');

// - Create a new employee
// - Get an employee by id
// - Update an employee by id
// - Delete an employee by id
// - Get all employees
// - Get all employees of a company

const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        const company = await Company.findById(employee.company);

        await Company.findByIdAndUpdate(
            savedEmployee.company,
            { $push: { _employees: savedEmployee._id } },
            { new: true }
        );

        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company');
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateEmployeeById = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.json(updatedEmployee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteEmployeeById = async (req, res) => {
    try {
        const employeeToDelete = await Employee.findById(req.params.id);
        if (!employeeToDelete) {
            return res.status(404).json({ message: "Employee not found" });
        }

        await Employee.findByIdAndDelete(req.params.id);

        await Company.findByIdAndUpdate(employeeToDelete.company, {
            $pull: { _employees: req.params.id }
        });

        res.json({ message: "Employee successfully deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('company');
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getEmployeesByCompany = async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params.companyId }).populate('company');
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
    getEmployeesByCompany
};

