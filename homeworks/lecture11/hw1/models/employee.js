const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    required: true,
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

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
