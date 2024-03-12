const express = require('express');
const {
    getAllEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');
//const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/',  getAllEmployees);
router.get('/:id',  getOneEmployee);
router.post('/',  createEmployee);
router.delete('/:id',  deleteEmployee);
module.exports = router;
