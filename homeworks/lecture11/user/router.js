const express = require("express");
const auth = require('../middleware/auth-midd')

const {createEmp,
    findEmpById,
    findEmps,
    deleteEmp,
    updateEmp,
    EmpByManager} = require('./controller/Emp-controller')

const {
    createCom,
    findComs,
    findComById,
    deleteCom,
    updateCom} = require('./controller/Com-controller');
const { findEmpByCom } = require("../controller/Emp-controller");
    
const router = express.Router()

router.post('/employees', createEmp);
router.get('/employees', auth, findEmps);
router.put('/employees/:id', updateEmp);
router.get('/employees/:company', auth, findEmpByCom);
router.get('/employees/:id', findEmpById);
router.delete('/employees/:id', deleteEmp);
router.get('/employees/:manager', EmpByManager);

router.post('/companies', createCom);
router.put('/companies/:id', updateCom);
router.get('/companies/:id', findComById);
router.get('/companies', findComs);
router.delete('/companies/:id', deleteCom);

module.exports = router;
