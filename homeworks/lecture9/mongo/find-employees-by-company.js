const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

const ID = new mongoose.Types.ObjectId('');
Employee.find({ company: ID })
    .then(employees => {
        console.log(employees);
    })
    .catch(err => {
        console.log('Error finding employees', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });