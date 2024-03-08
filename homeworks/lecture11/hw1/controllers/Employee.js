const Employeeschema = require("../models/Employee");
const Companyschema = require("../models/Company");

const createEmployee = async (req,res) => {
  try {
    // find employee company
    const company = await Companyschema.findById(req.id);
    if (!company) {return res.status(404).json({ message: 'Company not found' });
    }

    // create employee & add uemployee to the company
    const employee = new Employeeschema(info);
    company.employees.push(employee.id);

    // save
    await employee.save();
    await company.save();
    res.status(201).json({ message: 'Employee created' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employeeschema.findByIdAndDelete(req.params?.id);
    if(!employee){
      res.status(404).json({message:'Employee not found'})
    }

    // find all employees whose  manager is that employee and remove the manager
    const subordinates = await Employeeschema.find({ manager: req.params?.id });
    subordinates.forEach(async subordinate => {
      subordinate.manager = undefined;
      await subordinate.save();
    });
    
    // remove employee from company
    const company = await Companyschema.findById(employee.company);
    company.employees.remove(employee.id);
    await company.save();
    res.status(204).json({ message: 'Employee deleted' });
    

    
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const findEmployee = async (req, res) => {
  try {
    const employee = await Employeeschema.findById(req.params?.id);
    reportErrores.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const findEmployeeName = async (req, res) => {
  try {
    const employee = await Employeeschema.findById(req.params?.id);
    res.status(200).json({
      firstName: employee.firstName,
      lastName: employee.lastName
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};


const updateEmployee = async (req, res) => {
  try {
    const employee = await Employeeschema.findById(req.params?.id);
    // update company
    if (req.body.company) {
      const companyPrev = await Companyschema.findById(employee.company);
      companyPrev.employees.remove(id);
      await companyPrev.save();
      employee.company = info.company;
      const companyCurr = await Companyschema.findById(employee.company);
      companyCurr.employees.push(id);
      await companyCurr.save();
      employee.manager = undefined;
    }

    // update manager
    employee.manager = req.body.manager ?? employee.manager;

    const employeeUpdate = await Employeeschema.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });

    await employee.save();
    res.status(201).json({ message: 'Employee updated' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllEmployees = async (req,res) => {
  try {
    const employees = await Employeeschema.find();
    res.status(200).json(employees)
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllEmployeesByCompany = async (req,res) => {
  try {
    const user = await Employeeschema.findById(req.params?.id);
    const employees = await Employeeschema.find({ company: user.company });
    
    res.status(200).json(employees)
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllEmployeesByManager = async (req,res) => {
  try {
    const manager = await Employeeschema.findById(req.params?.id);
    const employees = await Employeeschema.find({ manager: req.params?.id });
    
    
    res.status(200).json({manager:manager, employees:employees})
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createEmployee,
  deleteEmployee,
  findEmployee,
  findEmployeeName,
  updateEmployee,
  getAllEmployees,
  getAllEmployeesByCompany,
  getAllEmployeesByManager,
};
