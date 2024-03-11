const express = require('express');
const router = express.Router();
const {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company');

router.get('/companies', getAllCompanies);

router.get('/companies/:id', getCompanyById);

router.post('/createCompany', createCompany);

router.put('/updateCompany/:id', updateCompany);

router.delete('/deleteCompany/:id', deleteCompany);

module.exports = router;