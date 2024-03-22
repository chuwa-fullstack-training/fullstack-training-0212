const mongoose = require('./connect');
const { Employee } = require('./schema');

const ID = new mongoose.Types.ObjectId('');
Employee.findByIdAndUpdate(ID, {
    firstName: 'New Jane',
    lastName: 'New Smith'
})
    .then(() => {
        console.log('Employee updated');
    })
    .catch(err => {
        console.log('Error finding employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });