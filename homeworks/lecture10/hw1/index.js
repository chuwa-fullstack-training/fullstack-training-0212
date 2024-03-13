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
            console.log(req.body)
            const company = await createCom(req.body);
            res.status(201).json(company);
            console.log("created the tables!")
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
    
    //app.patch 通常用于部分更新资源, app.put更新全部，如果输入的不是全部信息，原信息遗失
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
    
    // 当收到 /employees/:id 路径的 DELETE 请求时，Express 将调用指定的回调函数
    // callback是主体
    app.delete("/companies/:id", async (req, res) => {
        try {
            const id = req.params.id;
            await deleteCom(id);
            res.status(204).json({ message: 'Company deleted' });
            //res.json() method is specifically designed for sending JSON responses. 
            //It automatically sets the Content-Type header to application/json.
            //If you are sending non-JSON responses or plain text, you can use res.end()
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
    
    const company1 = "65e40cb760cce4c27c7e5a5b";
    const company2 = "65e3ac3ce9336a12df66177c";
    const company3 = "65e4086185cb147a9c76b836";

    async function test() {
        mongoose;
      
        //  Company functions test
      
        await createCom({
    
            name: "Word Best",
            description:
                "The second test",
                headquarters: 'San Jose, CA',
                industry: 'Everything'
        });
        
        // findComById(company1)

        //mongoose.connection.close();
        console.log("new!")
    }
    
    test()
    app.listen(3000, () => console.log("listening on 3000"));

//如果应用程序较小或简单，可以直接在应用程序实例 (app) 中定义所有中间件和路由。
//如果应用程序较大或需要更好的模块化，可以使用路由器 (router) 将代码拆分为多个模块，每个模块处理特定路径的请求。
