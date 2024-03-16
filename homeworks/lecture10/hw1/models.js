const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: 'Employee' }
});

const CompanySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});

const Company = mongoose.model('Company', CompanySchema);
const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = { Company, Employee };
