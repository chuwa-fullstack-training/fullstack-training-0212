const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const JWT_SECRET = process.env.JWT_SECRET || 'HelloWorld';

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("Error connecting to MongoDB", err);
});

const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

CompanySchema.pre('findOne', function(next) {
  this.populate('employees');
  next();
});

const Employee = mongoose.model('Employee', EmployeeSchema);
const Company = mongoose.model('Company', CompanySchema);

app.use(express.json());

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.post('/api/login', async (req, res) => {
  const { firstName, lastName } = req.body;
  try {
    const user = await Employee.findOne({ firstName, lastName });
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    const token = jwt.sign({ userId: user._id, company: user.company }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Protected route example: Get all employees
app.get('/employees', authenticateToken, async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single employee, with reduced info for unauthorized requests
app.get('/employees/:employeeId', async (req, res) => {
  const { employeeId } = req.params;
  try {
    if (!req.user) {
      const employee = await Employee.findById(employeeId, 'firstName lastName');
      return res.json(employee);
    } else {
      const employee = await Employee.findById(employeeId).populate('manager');
      return res.json(employee);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Other CRUD operations for Employee and Company models...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
