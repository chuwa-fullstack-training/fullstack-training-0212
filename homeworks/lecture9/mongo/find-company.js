const mongoose = require('./connect');
const { Company } = require('./schema');

const ID = new mongoose.Types.ObjectId('');
Company.findById(ID)
    .then(company => {
        console.log(company);
    })
    .catch(err => {
        console.log('Error finding company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });