const Companyschema = require("../models/Company");

const createCompany = async (req,res) => {
  try {
    const company = new Companyschema(req.body);
    if(!company.name){
      res.status(400)({message:'Company name required'})
    }
    await company.save();
    console.log(company)
    res.status(201).json({ message: 'Company created' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' })
  }
};

const findCompany = async (req,res) => {
  try {
    const company = await Companyschema.findById(req.params?.id);
    res.status(200).json({messgae:"conpamy found", body:company});
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateCompany = async (req,res) => {
  try {
    const company = await Companyschema.findByIdAndUpdate(req.params?.id, req.body, {
      new: true,
    });

    if(!company){
      res.status(404).json({ message: "Company not found!" });
      return;
  }
  res.status(202).json(company);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteCompany = async (req,res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if(!company){
        res.status(404).json({ message: "Company not found!" });
        return;
    }
    res.status(200).json(company);
  } catch (error) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllCompany = async (req,res) =>{
    try{
        const companies = await Companyschema.find()

        res.status(200).json(companies);
    }catch(err){
      console.log(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
  createCompany,
  findCompany,
  updateCompany,
  deleteCompany,
  getAllCompany,
};
