const express = require('express');
const {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById
} = require('../controllers/companyController');

const router = express.Router();

router.post('/', createCompany);
router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompanyById);
router.delete('/:id', deleteCompanyById);

module.exports = router;
