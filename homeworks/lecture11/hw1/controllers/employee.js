const { Employee } = require('../models/Employee');
const { Company } = require('../models/Company');

getAllEmployees = async (req, res) => {
    try {
        let employees;
        if(req.restrictFields) {
            employees = await Employee.find({}, req.restrictFields.join(' '));         
        } else {
            employees = await Employee.find();
        }
        res.json(employees);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

getEmployeeById = async(req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
};

getEmployeesByCompany = async(req, res) => {
    try {
        if(req.user) {
            const user = await Employee.findById(req.user?.id);
            console.log(user.company._id);
            if(user.company._id == req.params.companyId) {
                const company = await Company.findById(req.params?.companyId);
                const employees = company._employees;
                res.status(200).json(employees);
            } else {
                res.status(500).json({ message: 'User Can Only Access Its Own Company' })
            }
        } else {
            res.status(500).json({ message: 'Anonymous User, No authorization'})
        }
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
};

createEmployee = async(req, res) => {
    try {
        console.log(req);
        const employee = new Employee(req.body);
        if(!employee.name) {
            return res.status(400).json({message: 'Please provide all fields'});
        }
        await employee.save();
        res.status(201).json(employee);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

updateEmployee = async(req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params?.id, req.body);
        res.status(200).json(employee);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

deleteEmployee = async(req, res) => {
    try{
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(200).json({message: 'Employee deleted'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    getEmployeesByCompany,
    createEmployee,
    updateEmployee,
    deleteEmployee
}