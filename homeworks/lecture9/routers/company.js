const express = require('express');
const router = express.Router();
/**
 * get
 * /api/getAllCompanies
 * /api/getCompanyById/:id
 * 
 * /api/getAllEmployees 
 * /api/getEmployeeById/:id
 * /api/getEmployeesByCompany
 * 
 * 
 * post
 * /api/createCompany
 * /api/createEmployee
 * 
 * put
 * /api/updateCompany/:id
 * /api/updateEmployee/:id
 * 
 * delete
 * /api/deleteCompany/:id
 * /api/deleteEmployee/:id
 */
const { Company } = require('../mongo/schema')
router.get('/getAllCompanies', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.get('/getCompanyById/:id', async(req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company);
    } catch(err) {
        res.status(500).json({ message: err.message});
    }
});

router.post('/createCompany', async(req, res) => {
    try {
        console.log(req);
        const company = new Company(req.body);
        if(!company.name) {
            return res.status(400).json({message: 'Please provide all fields'});
        }
        await company.save();
        res.status(201).json(company);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.put('/updateCompany/:id', async(req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params?.id, req.body);
        res.status(200).json(company);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

router.delete('/deleteCompany/:id', async(req, res) => {
    try{
        await Company.findByIdAndDelete(req.params?.id);
        res.status(200).json({message: 'Company deleted'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;