const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Company = require("./schema").Company;
const Employee = require("./schema").Employee;

mongoose
  .connect(process.env.URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

app = express();
app.use(express.json());

const companyRouter = express.Router();
const employeeRouter = express.Router();

app.use("/company", companyRouter);
app.use("/employee", employeeRouter);

companyRouter.post("/create", async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.json(company);
});

companyRouter.get("/list", async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
});

companyRouter.get("/get/:id", async (req, res) => {
  const company = await Company.findById(req.params.id);
  res.json(company);
});

companyRouter.post("/update/:id", async (req, res) => {
  await Company.findByIdAndUpdate(req.params.id, req.body);
  const company = await Company.findById(req.params.id);
  res.json(company);
});

companyRouter.get("/delete/:id", async (req, res) => {
  const company = await Company.findByIdAndDelete(req.params.id);
  res.json(company);
});

companyRouter.get("/employees/:id", async (req, res) => {
  const company = await Company.findById(req.params.id).populate("employees");
  res.json(company.employees);
});

employeeRouter.post("/create", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  const company = await Company.findById(employee.company);
  company.employees.push(employee);
  await company.save();
  res.json(employee);
});

employeeRouter.get("/list", async (req, res) => {
  const employees = await Employee.find()
    .populate("company")
    .populate("manager");
  res.json(employees);
});

employeeRouter.get("/get/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id)
    .populate("company")
    .populate("manager");
  res.json(employee);
});

employeeRouter.post("/update/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  const employee = await Employee.findById(req.params.id)
    .populate("company")
    .populate("manager");
  res.json(employee);
});

employeeRouter.get("/delete/:id", async (req, res) => {
  const employee = await Employee.findByIdAndDelete(req.params.id);
  res.json(employee);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
