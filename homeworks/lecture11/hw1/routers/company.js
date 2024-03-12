const express = require('express');
const router = express.Router();
const {
    getAllCompanies,
    getCompanyById,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company');

const auth = require('../middlewares/auth')

router.get('/companies', auth, getAllCompanies);

router.get('/companies/:id', getCompanyById);

router.post('/createCompany', createCompany);

router.put('/updateCompany/:id', updateCompany);

router.delete('/deleteCompany/:id', deleteCompany);

module.exports = router;