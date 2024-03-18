const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EmployeeSchema = require('./Employee').schema;

const CompanySchema = new Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  _employees: [EmployeeSchema]
});

module.exports = mongoose.model('Company', CompanySchema);
