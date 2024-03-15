const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
    manager: { type: Schema.Types.ObjectId, ref: 'Employee', default: null },
});

const companySchema = new Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
});

const Employee = mongoose.model('Employee', employeeSchema);
const Company = mongoose.model('Company', companySchema);

module.exports = { Employee, Company };
