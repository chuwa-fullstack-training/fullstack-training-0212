const mongoose = require('./connect');
const { Company } = require('./schema');

const ID = new mongoose.Types.ObjectId('');
Company.findByIdAndUpdate(ID, {
    name: 'Updated company',
    description: 'This company info is updated'
})
    .then(() => {
        console.log('Company updated');
    })
    .catch(err => {
        console.log('Error finding company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });