const Employee = require('../models/employeeModel');
const Company = require('../models/companyModel');

const getAllCompanies = async (req, res) => {
  
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};
const getAllEmployeesFromCompany = async  (req, res,next) => {
 
  try
  {
    const employees = await Company.findOne({companyName : req.params?.company}).then(company => {
      if(req.companyId !== company._id.toString())
      {
        res.status(401).json({ message: 'Unauthorized' });
        return next()
      }
      return Promise.all(company.employees?.map(id =>{
        return Employee.findById(id);
      }))
    })
    res.status(200).json(employees)
  } 
  catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }

}

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    
    res.status(500).json({ message: 'Server Error' });
  }
};



const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);

    if (!company.companyName || !company.headquarter || !company.industry) {
      console.log("companyName:"+ company.companyName +" headquarter:" + company.headquarter + "industry:" + company.industry)
      return res.status(400).json({ message: 'Bad Request' });
    }
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: 'Company deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllEmployeesFromCompany,
  getAllCompanies,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany
};
