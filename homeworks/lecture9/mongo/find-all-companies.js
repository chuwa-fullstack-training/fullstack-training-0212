const mongoose = require('./connect');
const { Company } = require('./schema');

Company.find()
    .then(companies => {
        console.log(companies);
    })
    .catch(err => {
        console.log('Error finding companies', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });