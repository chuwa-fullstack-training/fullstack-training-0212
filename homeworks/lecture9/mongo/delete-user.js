const mongoose = require('./connect');
const { User } = require('./schema');

const ID = new mongoose.Types.ObjectId('');
User.findByIdAndDelete(ID)
    .then(res => {
        console.log('User deleted', res);
    })
    .catch(err => {
        console.log('Error deleting user', err);
    })
    .finally(() => {
        mongoose.disconnect();
    })