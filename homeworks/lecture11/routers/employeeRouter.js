const express = require('express');
const auth = require('../middlewares/auth');
const {
    getAllEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employeeController');

const router = express.Router();

router.get('/', auth, getAllEmployees);
router.get('/:id',  getOneEmployee);
router.post('/',  createEmployee);
router.delete('/:id',  deleteEmployee);
router.put('/',updateEmployee)
module.exports = router;
