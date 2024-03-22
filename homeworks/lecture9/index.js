const express = require('express');
const connectDB = require('./mongo/connect');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');

app.use(bodyParser.json());

app.use('/api', companyRouter);
app.use('/api', employeeRouter);

connectDB();

app.listen(port, () => console.log(`Server is listening on port ${port}!`));