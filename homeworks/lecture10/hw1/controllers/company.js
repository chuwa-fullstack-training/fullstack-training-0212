const { Company } = require('../models/Company');

getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

getCompanyById = async(req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company);
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
};

createCompany = async(req, res) => {
    try {
        const company = new Company(req.body);
        if(!company.name) {
            return res.status(400).json({message: 'Please provide all fields'});
        }
        await company.save();
        res.status(201).json(company);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

updateCompany = async(req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params?.id, req.body);
        res.status(200).json(company);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

deleteCompany = async(req, res) => {
    try{
        await Company.findByIdAndDelete(req.params?.id);
        res.status(200).json({message: 'Company deleted'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
}