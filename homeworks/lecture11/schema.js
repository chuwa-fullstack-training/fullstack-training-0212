const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'default content'
  },
  headquarters: String,
  industry: String,
  employees: [{  
    type: Schema.Types.ObjectId,  
    ref: 'Employee'  
  }]
});

const EmployeeSchema = new Schema({   //schema = model
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'company'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: {
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }
});

const Company = mongoose.model('Company', CompanySchema);   //生成schema
const Employee = mongoose.model('Employee', EmployeeSchema);
//const LB = mongoose.model('LB', CompanySchema, 'lb'); 

module.exports = {
    Company,
    Employee,
};