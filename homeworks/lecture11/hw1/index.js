const express = require('express');
const connectDB = require('./db/connect');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');
const authRouter = require('./routers/auth');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', authRouter);
app.use('/api', companyRouter);
app.use('/api', employeeRouter);

connectDB();

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
  });
  
app.use(errorHandlerMiddleware);

app.listen(port, () => console.log(`Server is listening on port ${port}!`));