const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true
  },
  companyDescription: String,
  headquarter: {
    type: String,
    required: true
  },
  industry: String,
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ]
},{ collection : 'COMPANY' });

const Company = mongoose.model('COMPANY', companySchema);

module.exports = Company;