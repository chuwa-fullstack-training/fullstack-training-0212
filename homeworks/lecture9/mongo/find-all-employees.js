const mongoose = require('./connect');
const { Employee } = require('./schema');

Employee.find()
    .then(employees => {
        console.log(employees);
    })
    .catch(err => {
        console.log('Error finding employees', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });