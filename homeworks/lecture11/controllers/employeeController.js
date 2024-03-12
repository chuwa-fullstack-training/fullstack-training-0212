const Employee = require('../models/employeeModel');
const Company = require('../models/companyModel');


const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    
    if(!req.companyId)
    {
      const result = employees.map( employee =>{
        return {
          "firstName" : employee.firstName,
          "lastName" : employee.lastName
        }
      })
      res.status(200).json(result);
    }
    else
    {
      res.status(200).json(employees);
    }
    
  } 
  catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createEmployee = async (req, res) => {
 
    let employee;
    let company; 

    await Company.findOne({companyName: req.body.company}).exec().then(result =>{
      company = result;
      req.body.company = company._id;
      employee = new Employee(req.body);
      if (!employee.firstName || !employee.lastName || !employee.jobTitle || !employee.company) {
        res.status(400).json({ message: 'Bad Request' });
      }
      return employee.save();
    }).then((employee)=>{
        company.employees.push(employee)
        console.log(company)
        return Company.findByIdAndUpdate(company.id, company);
       
    }).then(result=>
    {
      console.log(result)
      res.status(201).json(employee); 
    })
    .catch(err => {
      console.log(err.message);
      res.status(500).json({ message: 'Server Error' });
    })


    

};

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params?.id, req.body);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params?.id);
    if(!employee)
    {
      throw new CustomAPIError('Invalid Credentials(User does not exist)', 400);
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
