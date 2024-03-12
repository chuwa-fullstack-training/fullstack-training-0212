const express = require('express');
const {
    getAllEmployeesFromCompany,
    getAllCompanies,
    getOneCompany,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/companyController');
//const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/',  getAllCompanies);
router.get('/:id',  getOneCompany);
router.get('/:company/employee',  getAllEmployeesFromCompany);
router.post('/',  createCompany);
router.put('/',updateCompany)
router.delete('/:id',deleteCompany)
module.exports = router;
