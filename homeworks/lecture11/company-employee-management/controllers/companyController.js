const Company = require('../models/company');

// - Create a new company
// - Get all companies
// - Get a company by id
// - Update a company by id
// - Delete a company by id


const createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        const savedCompany = await company.save();
        res.status(201).json(savedCompany);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find().populate('_employees');
        res.status(200).json(companies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('_employees');
        if (!company) {
            return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json(company);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateCompanyById = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) {
            return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json(updatedCompany);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteCompanyById = async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json({ message: "Company successfully deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById
};