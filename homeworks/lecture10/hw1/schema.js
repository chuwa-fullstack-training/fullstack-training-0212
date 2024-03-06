const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  headquarters: {
    type: String,
  },
  industry: {
    type: String,
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Employee",
    },
  ],
});

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  jobTitle: {
    type: String,
  },
  resigned: {
    type: Boolean,
    default: false,
  },
  salary: {
    type: Number,
  },
  manager: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
});

const Company = mongoose.model("Company", companySchema);
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {
  Company,
  Employee,
};
