const express = require('express');
const {

  createCompany,
  findCompany,
  updateCompany,
  getAllCompany,
  deleteCompany

} = require('../controllers/Company');
const router = express.Router();

router.post('/companies', createCompany);
router.get('/companies/:id', findCompany);
router.put('companies/:id', updateCompany);
router.get('/companies', getAllCompany);
router.delete('companies/:id', deleteCompany)


module.exports = router;