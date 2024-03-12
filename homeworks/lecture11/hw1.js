const express = require('express');

const companyRouter = require('./routers/companyRouter');
const employeeRouter = require('./routers/employeeRouter');
const authRouter = require('./routers/authRouter');
const app = express();
const connectDB = require('./db');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/company', companyRouter);
app.use('/employee', employeeRouter);
app.use('/auth', authRouter);


app.use(errorHandlerMiddleware);

connectDB();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/\n` +
  'Server api:\n' +
  '\t(get) employee/: get All employees\n' +
  '\t(post) employee/: create new employee\n' +
  '\t(get) employee/{the employee id} : get the employee by id\n'+
  '\t(delete) employee/{the employee id}: delete the employee by id\n' +
  '\t(put) employee/{the employee id}: update the employee by id\n\n' +
  '\t(get) company/: get All companies\n' +
  '\t(post) company/: create new company\n' +
  '\t(get) company/{the company id} : get the  company by id\n'+
  '\t(delete) company/{the company id}: delete the  company by id\n' +
  '\t(put) company/{the company id}: update the  company by id\n' +
  '\t(get) company/{the company name}/employee: get all employees from the company\n'+
  '\t(get) auth/login: do the login\n')
});