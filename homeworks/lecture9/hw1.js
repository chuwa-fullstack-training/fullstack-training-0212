const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const companyRoutes = require('./routes/companyRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://yanzi14714:yanzi@aideny.0mz7t3y.mongodb.net/?retryWrites=true&w=majority&appName=AidenY', 
                { useNewUrlParser: true, useUnifiedTopology: true })
                .then(() => {
                    console.log('Connected to MongoDB');
                })
                .catch(err => {
                    console.log('Error connecting to MongoDB', err);
                });

app.use(bodyParser.json());

app.use('/companies', companyRoutes);
app.use('/employees', employeeRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
