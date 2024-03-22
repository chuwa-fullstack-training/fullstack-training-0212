const mongoose = require('./connect');
const { Company } = require('./schema');

const ID = new mongoose.Types.ObjectId('');
Company.findByIdAndDelete(ID)
    .then(res => {
        console.log('Company deleted', res);
    })
    .catch(err => {
        console.log('Error deleting company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    })