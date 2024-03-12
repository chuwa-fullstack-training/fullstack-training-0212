const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  company:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'COMPANY'
  },
  startDate: Date,
  jobTitle: {
    type: String,
    required: true
  },
  resigned: Boolean,
  salary: Number,

  _manager:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  },

},{ collection : 'EMPLOYEE' });

const Employee = mongoose.model('EMPLOYEE', employeeSchema);

module.exports = Employee;