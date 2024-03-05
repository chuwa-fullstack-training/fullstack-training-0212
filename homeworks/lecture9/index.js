const mongoose = require("mongoose");
const connect = require('./connect');
require('dotenv').config();

const Company = require('./schema').Company;
const Employee = require('./schema').Employee;

const {createEmp,
    findEmpById,
    findEmps,
    deleteEmp,
    updateEmp,
    EmpByManager} = require('./Emp-controller')

const {
    createCom,
    findComs,
    findComById,
    deleteCom,
    updateCom} = require('./Com-controller')
    
    const express = require("express");
    const app = express();
    
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    app.post("/employees", async (req, res) => {
        try {
            const employee = await createEmp(req.body);
            res.status(201).json(employee);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.post("/companies", async (req, res) => {
        try {
            const company = await createCom(req.body);
            res.status(201).json(company);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.get("/employees", async (_, res) => {
        try {
            const employees = await findEmps();
            res.json(employees);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.get("/companies", async (_, res) => {
        try {
            const companies = await findComs();
            res.json(companies);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.put("/employees/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const employee = await updateEmp(id, req.body);
            res.json(employee);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    //app.patch部分更新资源
    app.patch("/companies/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const company = await updateCom(id, req.body);
            res.json(company);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.get("/employees/company/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const employees = await findEmpById(id);
            res.json(employees);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.get("/employees/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const employee = await EmpByManager(id);
            res.json(employee);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.get("/companies/:id", async (req, res) => {
        try {
            const id = req.params.id;
            const company = await findComById(id);
            res.json(company);
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.delete("/companies/:id", async (req, res) => {
        try {
            const id = req.params.id;
            await deleteCom(id);
            res.status(204).json({ message: 'Company deleted' });
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.delete("/employees/:id", async (req, res) => {
        try {
            const id = req.params.id;
            await deleteEmp(id);
            res.status(204).json({ message: 'Employee deleted' });
        } catch (e) {
            res.status(500).send(e.message);
        }
    });
    
    app.all("*", (_, res) => {
        res.status(404).send('this is the 404 page');
    });
    
    app.listen(3000, () => console.log("listening on 3000"));
