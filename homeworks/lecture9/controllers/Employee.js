const Employeeschema = require("../models/Employee");
const Companyschema = require("../models/Company");

const createEmployee = async (info) => {
  try {
    // find employee company
    const company = await Companyschema.findById(info.company);
    if (!company) {
      throw new Error("Company not found");
    }

    // create employee & add uemployee to the company
    const employee = new Employeeschema(info);
    company.employees.push(employee.id);

    // save
    await employee.save();
    await company.save();
    console.log("Employee saved:", employee);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteEmployee = async (id) => {
  try {
    const employee = await Employeeschema.findByIdAndDelete(id);

    // find all employees whose  manager is that employee and remove the manager
    const subordinates = await Employeeschema.find({ manager: id });
    subordinates.forEach(async subordinate => {
      subordinate.manager = undefined;
      await subordinate.save();
    });
    
    // remove employee from company
    const company = await Companyschema.findById(employee.company);
    company.employees.remove(employee.id);
    await company.save();
    

    if (employee) {
      console.log(`employee deleted: ${employee}`);
    } else {
      console.log(`employee with ID ${id} not found.`);
    }
  } catch (error) {
    console.log("Delete failed");
  }
};

const findEmployee = async (id) => {
  try {
    const employee = await Employeeschema.findById(id);
    console.log(
      `Found employee with name: ${employee.firstName} ${employee.lastName} `
    );
  } catch (err) {
    console.log("employee not found");
  }
};

const updateEmployee = async (id, info) => {
  try {
    const employee = await Employeeschema.findById(id);
    // update company
    if (info.company) {
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
    employee.manager = info.manager ?? employee.manager;

    const employeeUpdate = await Employeeschema.findByIdAndUpdate(id, info, {
      new: true,
    });

    await employee.save();
    console.log("Employee updated", employeeUpdate);
  } catch (err) {
    console.log(err);
    console.log("Update failed");
  }
};

const getAllEmployees = async () => {
  try {
    const employees = await Employeeschema.find();
    console.log(employees);
  } catch (err) {
    console.error(err.message);
  }
};

const getAllEmployeesByCompany = async (companyId) => {
  try {
    const employees = await Employeeschema.find({ company: companyId });
    const company = await Companyschema.findById(companyId);
    console.log(`employees from company ${company.name}, ${employees}`);
  } catch (err) {
    console.error(err.message);
  }
};

const getAllEmployeesByManager = async (ManagerId) => {
  try {
    const manager = await Employeeschema.findById(ManagerId);
    const employees = await Employeeschema.find({ manager: ManagerId });
    const Names = employees.map(employee => employee.firstName+' '+ employee.lastName);
    
    console.log(`employees under manager ${manager.firstName}, ${Names}`);
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  createEmployee,
  deleteEmployee,
  findEmployee,
  updateEmployee,
  getAllEmployees,
  getAllEmployeesByCompany,
  getAllEmployeesByManager,
};
