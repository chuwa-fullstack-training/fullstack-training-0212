const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }]
});

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

const Company = mongoose.model("Company", companySchema);
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { 
    Company, 
    Employee 
};