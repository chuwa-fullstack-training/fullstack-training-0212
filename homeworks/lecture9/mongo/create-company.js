const mongoose = require('./connect');
const { Company } = require('./schema');

const company = new Company({
    name: 'Test'
});

company
    .save()
    .then(() => console.log('Company saved'))
    .catch(err => {
        console.log('Error saving company', err);
    })
    .finally(() => {
        mongoose.connection.close();
    });