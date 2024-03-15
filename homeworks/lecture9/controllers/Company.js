const Companyschema = require("../models/Company");

const createCompany = async (info) => {
  try {
    const company = new Companyschema(info);
    await company.save();
    console.log(
      "New company created with name:",
      company.name,
      "and ID:",
      company._id
    );
  } catch (err) {
    console.error(err);
  }
};

const findCompany = async (id) => {
  try {
    const company = await Companyschema.findById(id);
    console.log(`Found company with name: ${company.name} `);
  } catch (err) {
    console.log("company not found");
  }
};

const updateCompany = async (id, info) => {
  try {
    const company = await Companyschema.findByIdAndUpdate(id, info, {
      new: true,
    });

    await company.save();
    console.log("Company updated", company);
  } catch (err) {
    console.log("Update failed");
  }
};

const deleteCompany = async (id) => {
  try {
    const company = await Companyschema.findByIdAndDelete(id);

    if (company) {
      console.log(`Company deleted: ${company}`);
    } else {
      console.log(`Company with ID ${id} not found.`);
    }
  } catch (error) {
    console.log("Delete failed");
  }
};

const getAllCompany = async () =>{
    try{
        const companies = await Companyschema.find()

        console.log('All companies found', companies)
    }catch(err){
        console.log('can not find all companies')
    }
}

module.exports = {
  createCompany,
  findCompany,
  updateCompany,
  deleteCompany,
  getAllCompany,
};
