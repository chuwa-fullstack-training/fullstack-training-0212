const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    company: {
        type: Schema.Types.ObjectId,
        res: 'Company'
    },
    startData: {
        type: Date
    },
    jobTitle: {
        type: String
    },
    resigned: {
        type: Boolean
    },
    salary: {
        type: Number
    },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Employee
};