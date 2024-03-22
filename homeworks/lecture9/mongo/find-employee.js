const mongoose = require('./connect');
const { Employee } = require('./schema');

const ID = new mongoose.Types.ObjectId('');
Employee.findById(ID)
    .then(employee => {
        console.log(employee);
    })
    .catch(err => {
        console.log('Error finding employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });