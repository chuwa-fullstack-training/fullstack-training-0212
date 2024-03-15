const express = require('express');
const companyRouter = require('./routers/companies');
const employeeRouter = require('./routers/employees');
const connectDB = require('./connect/connectDB');
require("dotenv").config();
const app = express();
const port = process.env.PORT;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', companyRouter);
app.use('/api', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});